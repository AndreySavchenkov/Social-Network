import React, {FC, memo} from "react";
import s from './MyPosts.module.scss';
import Post from "./Post/Post";
import {AppStateType} from "../../../redux/redux-store";
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";
import {addPostAC, ProfileActionsTypes} from "../../../redux/profile-reducer";
import {Formik, Form, Field} from 'formik';


const MyPosts: FC = memo(() => {

    const state = (state: AppStateType) => state.profilePage

    const {
        posts
    } = useSelector(state)

    const dispatch = useDispatch<Dispatch<ProfileActionsTypes>>()

    let postsElements = posts.map((p: { message: string; likesCount: number; }) => <Post message={p.message}
                                                                                         likesCount={p.likesCount}/>)
    let onAddPost = (values: string) => {
        dispatch(addPostAC(values));
    }

    return (
        <div className={s.postsBlock}>
            <div className={s.createMessageBlock}>
                <Formik
                    initialValues={{post: ''}}
                    validate={values => {
                    }}
                    onSubmit={(values) => onAddPost(values.post)}
                >
                    {() => (
                        <Form>
                            <Field className={s.textarea} type="text" name="post" placeholder="Some text"/>
                            <button type="submit">
                                Post
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
            <h3 className={s.title}>My Little Posts:</h3>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
})

export default MyPosts;