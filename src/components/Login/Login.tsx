import React from "react";
import {Field, Form, Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../Profile/ProfileContainer";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {auth} from "../../redux/selectors";



export const Login: React.FC = React.memo(() => {

    const dispatch:AppDispatch = useDispatch();

    const isAuth = useSelector(auth);

    if(isAuth.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (<div>
        <h1>LOGIN</h1>
        <Formik
            initialValues={{email: '',password: '', rememberMe: false}}
            validate={values => {
            }}
            onSubmit={(values) => dispatch(login(values.email, values.password, values.rememberMe))}
        >
            {() => (
                <Form>
                    <Field   type="email" name="email" placeholder="Email"/>
                    <Field   type="password" name="password" placeholder="Password"/>
                    <Field   type="checkbox" name="rememberMe"/> remember me
                    <button type="submit">
                        Login
                    </button>
                </Form>
            )}
        </Formik>
    </div>)
})