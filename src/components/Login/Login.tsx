import React, {FC, memo} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../Profile/ProfileContainer";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {auth} from "../../redux/selectors";
import style from './Login.module.scss';


export const Login: FC = memo(() => {

    const dispatch: AppDispatch = useDispatch();

    const isAuth = useSelector(auth);

    if (isAuth.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (<div className={style.wrapper}>
        <h2>LOGIN</h2>
        <Formik
            initialValues={{
                email: '',
                password: '',
                rememberMe: false
            }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    //@ts-ignore
                    errors.email = 'Email is required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    //@ts-ignore
                    errors.email = 'Invalid email address';
                }
                return errors;
            }
            }
            onSubmit={(values,) => {

                dispatch(login(values.email, values.password, values.rememberMe))
            }}
        >
            {() => (
                <Form className={style.form}>
                    <Field className={style.email} type="email" name="email" placeholder="Email"/>
                    <ErrorMessage name="email" component="div" className={style.formError}/>
                    <Field className={style.password} type="password" name="password" placeholder="Password"/>
                    <ErrorMessage name="password" component="div"/>
                    <div className={style.checkbox}>
                        <Field type="checkbox" name="rememberMe"/> Remember me
                    </div>
                    <button className={style.button} type="submit">
                        Login
                    </button>
                </Form>
            )}
        </Formik>
    </div>)
})