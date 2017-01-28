import React = require('react');
import Component = React.Component;
import {RegisterForm} from "./registerForm/RegisterForm";
import "bootstrap/less/bootstrap.less"

export class App extends Component<{},{}> {
    render() {
        return <div className="container">
            <RegisterForm/>
        </div>
    }
}