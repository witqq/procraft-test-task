import React = require("react");
import Component = React.Component;
import ClassAttributes = React.ClassAttributes;

import "bootstrap/js/dropdown.js";
import {ClassName, joinClassNames} from "../utils/utils";
import {BootstrapDropDownItemProps} from "./BootstrapDropDownItem";
import ReactElement = React.ReactElement;

export type ItemElement = ReactElement<BootstrapDropDownItemProps>;

export interface BootstrapDropDownSelectProps extends ClassAttributes<BootstrapDropDownSelect>,ClassName {
    btnClassName?: string;
    children?: ItemElement;
}

export interface BootstrapDropDownSelectState {
    selected?: number;
}

export class BootstrapDropDownSelect extends Component<BootstrapDropDownSelectProps, BootstrapDropDownSelectState> {

    constructor(props) {
        super(props);
        this.state = {};
    }

    protected componentDidMount() {
    }

    protected componentWillUnmount() {
    }

    protected componentWillReceiveProps(props: BootstrapDropDownSelectProps) {
    }

    private getDropDownContent() {
        return React.Children.map(this.props.children,
            (item: ItemElement, index) => React.cloneElement(item, {
                key: `item_${index}`,
                onClick: () => {
                    console.log(`onClick item_${index}`);
                    this.setState({selected: index}, () => item.props.onClick && item.props.onClick());
                }
            } as BootstrapDropDownItemProps)
        );
    }

    public selectElem(index: number) {
        const newElem = React.Children.toArray(this.props.children)[index] as ItemElement;
        if (newElem) {
            this.setState({selected: index}, () => newElem.props.onClick && newElem.props.onClick());
        }
    }

    private getBtnContent() {
        const selectedItem = React.Children.toArray(this.props.children)[this.state.selected] as ItemElement;
        return selectedItem && selectedItem.props.children || "empty";
    }

    public render() {
        const btnClassName = joinClassNames("btn btn-default dropdown-toggle", this.props.btnClassName);
        return  <div className={this.props.className}>
            <button type="button" className={btnClassName}
                    data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                {this.getBtnContent()}
                <span className="caret"/>
            </button>

            <ul className="dropdown-menu">
                {this.getDropDownContent()}
            </ul>
        </div>;
    }
}