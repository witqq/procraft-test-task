import React = require('react');

import Component = React.Component;

export class App extends Component<{},{}> {
    render() {
        const e = 1;
        if (e) {
            throw new Error("asdasdasd");
        }
        return <div>
            Hello world!
        </div>
    }
}