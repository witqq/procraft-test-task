import React = require("react");
import Component = React.Component;
import ClassAttributes = React.ClassAttributes;
import {ClassName} from "../utils/utils";
import ReactNode = React.ReactNode;

export interface BootstrapDropDownItemProps extends ClassAttributes<BootstrapDropDownItem>, ClassName {
    onClick?: () => void;
    children?: ReactNode;
}

export interface BootstrapDropDownItemState {

}

export class BootstrapDropDownItem extends Component<BootstrapDropDownItemProps, BootstrapDropDownItemState> {

    constructor(props) {
        super(props);
        this.state = {};
    }

    protected componentDidMount() {
    }

    protected componentWillUnmount() {
    }

    protected componentWillReceiveProps(props: BootstrapDropDownItemProps) {
    }

    public render() {
        return  <li className={this.props.className}>
            <a onClick={this.props.onClick}>{this.props.children}</a>
        </li>;
    }
}