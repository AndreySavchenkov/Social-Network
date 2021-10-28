import React from "react";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {StoreContext} from "../../../storeContext";


export const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();

                    let addPost = () => {
                        store.dispatch(addPostAC());
                    }

                    let onPostChange = (text: string) => {
                        let action = updateNewPostTextAC(text)
                        store.dispatch(action);
                    }
                    return <MyPosts
                        updateNewPostText={onPostChange}
                        addPost={addPost}
                        posts={state.profilePage.posts}
                        newPostText={state.profilePage.newPostText}
                    />
                }
            }
        </StoreContext.Consumer>
    );
}

