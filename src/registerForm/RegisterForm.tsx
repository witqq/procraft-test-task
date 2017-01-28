import React = require('react');
import Component = React.Component;
import "./RegisterForm.less";
import {PhoneInput, PhoneInputMaskElement} from "../phoneInput/PhoneInput";

export interface RegisterFormProps {

}

export interface RegisterFormState {

}


const MASKS: Array<PhoneInputMaskElement> = [
    {
        mask: "000 000-00-00",
        placeholder: "495 132-45-67",
        name: "ru",
        code: "7"
    },
    {
        mask: "000-000-0000",
        placeholder: "123-456-7890",
        name: "us",
        code: "1"
    },
    {
        mask: "000 00000000",
        placeholder: "123 45678910",
        name: "de",
        code: "49"
    },
    {
        mask: "00 000 0000",
        placeholder: "12 345 6789",
        name: "by",
        code: "375"
    }];

export class RegisterForm extends Component<RegisterFormProps,RegisterFormState> {
    render() {
        return <div className="register-form form-horizontal">
            <div className="register-form__title"><strong>Зарегистрируйтесь</strong>
                и начните продавать услуги через интерент сегодня
            </div>
            <div className="form-group">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <label htmlFor="inputKey" className="control-label">ИМЯ</label>
                    <input type="text" className="form-control input-lg" placeholder="Имя"/>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <label htmlFor="inputValue" className="control-label">ФАМИЛИЯ</label>
                    <input type="text" className="form-control input-lg" placeholder="Фамилия"/>
                </div>
            </div>
            <div className="form-group">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <label htmlFor="inputType" className="control-label">ПРОФЕССИЯ</label>
                    <input type="text" className="form-control input-lg" placeholder="Профессия"/>
                </div>
            </div>
            <div className="form-group">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <label htmlFor="inputType" className="control-label">ТЕЛЕФОН</label>
                    <PhoneInput elems={MASKS}/>
                </div>
            </div>
            <div className="register-form__button-container text-center">
                <button className="btn btn-primary btn-lg">Зарегистрироваться</button>
            </div>

        </div>
    }
}