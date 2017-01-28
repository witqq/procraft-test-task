import React = require("react");
import Component = React.Component;
import ClassAttributes = React.ClassAttributes;
import Autosuggest = require("react-autosuggest");
import {ClassName} from "../utils/utils";
import "./ProffInput.less";

export interface ProffInputProps extends ClassAttributes<ProffInput>, ClassName {
    placeholder?: string;
}

export interface ProffInputState {
    value?: string;
    suggestions?: Array<string>;
}

const proffesions = ["Парикммахер", "Парикммахер-Визажист", "Повар", "Водитель", "Визажист", "Юрист,", "Нотариус"].sort();

export class ProffInput extends Component<ProffInputProps, ProffInputState> {

    constructor(props: ProffInputProps) {
        super(props);
        this.state = {
            value: '',
            suggestions: []
        };
    }

    onChange = (event, {newValue}) => {
        let value = newValue || event.target.value;
        this.setState({value});
    };

    onSuggestionsFetchRequested = ({value}) => {
        this.setState({
            suggestions: this.getSuggestions(value)
        });
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    private getSuggestions = value => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
        return inputLength === 0 ? [] : proffesions.filter(proff =>
            proff.toLowerCase().slice(0, inputLength) === inputValue
        );
    };

    private renderSuggestion = (suggestion: string, {query}) => {
        const queryLength = query.length || 0;
        const first = suggestion.slice(0, queryLength);
        const rest = suggestion.slice(queryLength);
        return <div>
            <strong>{first}</strong>{rest}
        </div>
    };

    render() {
        const {value, suggestions} = this.state;
        const {className, placeholder} = this.props;
        const inputProps = {
            placeholder,
            value,
            onChange: this.onChange,
            className
        };

        return (
            <Autosuggest suggestions={suggestions}
                         onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                         onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                         getSuggestionValue={val => val}
                         renderSuggestion={this.renderSuggestion}
                         inputProps={inputProps}/>
        );
    }
}