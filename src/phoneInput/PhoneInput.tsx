import React = require("react");
import Component = React.Component;
import ClassAttributes = React.ClassAttributes;
import {BootstrapDropDownSelect} from "../bootstrapDropDown/BootstrapDropDownSelect";
import {BootstrapDropDownItem} from "../bootstrapDropDown/BootstrapDropDownItem";
import "jquery-mask-plugin";
import "bootstrap/less/bootstrap.less";
import "./PhoneInput.less";
import {isNullOrUndef} from "../utils/utils";
import "flag-icon-css/less/flag-icon.less";
import FormEventHandler = React.FormEventHandler;
import FormEvent = React.FormEvent;

export interface PhoneInputMaskElement {
    placeholder?: string;
    mask?: string;
    code: string;
    countryCode: string;
    title: string;
}

export interface PhoneInputProps extends ClassAttributes<PhoneInput> {
    onChange?: (value: string) => void;
    elems?: Array<PhoneInputMaskElement>;
}

export interface PhoneInputState {
    value?: string;
    inputPadding?: number;
    selectedElem?: PhoneInputMaskElement;
}

export class PhoneInput extends Component<PhoneInputProps, PhoneInputState> {

    private input: HTMLInputElement;
    private dropDown: BootstrapDropDownSelect;
    private codeSpan: HTMLSpanElement;


    constructor(props) {
        super(props);
        this.state = {};
    }

    protected componentDidMount() {
        $(this.input).mask("+0 (000) 000-0000", {
            onChange: this.onChange
        });
        this.dropDown && this.dropDown.selectElem(0);
        this.setInputPadding();
    }


    private onChange = () => {
        this.setNewValue($(this.input).cleanVal());
    };

    private setNewValue(value: string) {
        if (value === this.state.value) {
            return;
        }
        console.log(value);
        this.setState({value}, () => this.props.onChange && this.props.onChange(value))
    }

    private setInputPadding = () => {
        const inputPadding = (this.codeSpan && $(this.codeSpan).width() + 10);
        if (!isNullOrUndef(inputPadding)) {
            this.setState({inputPadding});
        }
    };

    private onSelect(selectedElem: PhoneInputMaskElement) {
        const newMask = selectedElem && selectedElem.mask || "";
        $(this.input).mask(newMask);
        this.setState({selectedElem}, () => this.setInputPadding());
    }

    private renderSelectedElem = (elem: PhoneInputMaskElement) => {
        return <span className={`flag-icon flag-icon-${elem.countryCode}`}/>
    };

    private getDropdownItems() {
        const {elems = []} = this.props;
        return elems.map((elem: PhoneInputMaskElement, index) => {
            return <BootstrapDropDownItem key={`mask_elem_${index}`}
                                          onClick={() => this.onSelect(elem)}
                                          renderSelected={() => this.renderSelectedElem(elem)}>
                <span className={`flag-icon flag-icon-${elem.countryCode}`}/>
                {elem.title}
            </BootstrapDropDownItem>;
        })
    }

    public render() {
        const {inputPadding, selectedElem} = this.state;

        const selectedCode = selectedElem && selectedElem.code || "";
        const code = `+${selectedCode}`;
        const placeholder = selectedElem && selectedElem.placeholder;
        const inputStyle = !isNullOrUndef(inputPadding) && {paddingLeft: `${inputPadding}px`} || {};
        return (
            <div className="phone-input input-group">
                <BootstrapDropDownSelect ref={ref => this.dropDown = ref}
                                         className="input-group-btn"
                                         btnClassName="btn-lg phone-input_country_button">
                    {this.getDropdownItems()}
                </BootstrapDropDownSelect>
                <span className="phone-input__code input-lg"
                      ref={ref => this.codeSpan = ref}>
                    {code}
                </span>
                <input ref={ref => this.input = ref}
                       className="phone-input__number form-control input-lg"
                       placeholder={placeholder}
                       style={inputStyle}/>
            </div>);
    }
}