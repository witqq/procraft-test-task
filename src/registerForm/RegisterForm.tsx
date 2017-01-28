import React = require('react');
import Component = React.Component;
import "./RegisterForm.less";
import {PhoneInput} from "../phoneInput/PhoneInput";
import MASKS from "../phoneInput/demoMasks";
import {ProffInput} from "../proffInput/ProffInput";

export interface RegisterFormProps {

}

export interface RegisterFormState {

}


export class RegisterForm extends Component<RegisterFormProps,RegisterFormState> {
    render() {
        return <div className="register-form form-horizontal">
            <div className="register-form__title"><strong>Зарегистрируйтесь </strong>
                и начните продавать услуги через интерент сегодня
            </div>
            <div className="form-group">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <label htmlFor="inputKey" className="control-label register-form__label">ИМЯ</label>
                    <input type="text" className="form-control input-lg" placeholder="Имя"/>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <label htmlFor="inputValue" className="control-label register-form__label">ФАМИЛИЯ</label>
                    <input type="text" className="form-control input-lg" placeholder="Фамилия"/>
                </div>
            </div>
            <div className="form-group">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <label htmlFor="inputType" className="control-label register-form__label">ПРОФЕССИЯ</label>
                    <ProffInput className="form-control input-lg" placeholder="Профессия"/>
                </div>
            </div>
            <div className="form-group">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <label htmlFor="inputType" className="control-label register-form__label">ТЕЛЕФОН</label>
                    <PhoneInput elems={MASKS}/>
                </div>
            </div>
            <div className="register-form__button-container text-center">
                <button className="btn btn-primary btn-lg">Зарегистрироваться</button>
            </div>

        </div>
    }
}