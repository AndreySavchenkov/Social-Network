import {Field, Form, Formik} from "formik";
import React, {FC, memo} from "react";
import {fiterType} from "../../redux/users-reducer";
import style from './UsersSearchForm.module.scss';

type FormType = {
    term: string,
    friend: 'true' | 'false' | 'null'
}

type usersSearchFormType = {
    onFilterChanged: (filter: fiterType) => void
}

export const UsersSearchForm: FC<usersSearchFormType> = memo((props) => {
    return (
        <div>
            <Formik
                initialValues={{term: '', friend: null}}
                validate={values => {
                    const errors = {};
                    return errors;
                }}
                //@ts-ignore
                onSubmit={(values: FormType, {setSubmitting}) => {
                    const filter: fiterType = {
                        term: values.term,
                        friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false
                    }
                    props.onFilterChanged(filter)
                    setSubmitting(false)
                }}
            >
                {({isSubmitting}) => (
                    <Form className={style.container}>
                        <div className={style.inputContainer}>
                            <Field type="text" name="term"/>
                            <Field name="friend" as="select">
                                <option value="null">All</option>
                                <option value="true">Only followed</option>
                                <option value="false">Only unfollowed</option>
                            </Field>
                        </div>
                        <button type="submit" disabled={isSubmitting}>
                            Find
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
})