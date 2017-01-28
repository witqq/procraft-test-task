import React = require("react");
import Component = React.Component;
import ClassAttributes = React.ClassAttributes;
import {ClassName} from "../utils/utils";
import ReactNode = React.ReactNode;

export interface BootstrapDropDownItemProps extends ClassName {
    onClick?: () => void;
    children?: ReactNode;
    renderSelected?: () => JSX.Element;
}

export const BootstrapDropDownItem: (props: BootstrapDropDownItemProps) => JSX.Element =
    ({className, onClick, children}) => {
        return <li className={className}>
            <a onClick={onClick}>{children}</a>
        </li>
    };