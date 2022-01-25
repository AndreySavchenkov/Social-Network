import {addPostAC, deletePost, ProfilePageType, profileReducer} from "./profile-reducer";

let state: ProfilePageType = {
    posts: [
        {id: 1, message: "It's my first post", likesCount: 722},
        {id: 2, message: "I love eating pizza and drinking Coca Cola!!!!111", likesCount: 312},
    ],
    newPostText: 'it-camasutra.com',
    profile: {
        aboutMe: "I'm man",
        contacts: {
            facebook: "",
            website: null,
            vk: "",
            twitter: "",
            instagram: "",
            youtube: null,
            github: "",
            mainLink: null
        },
        lookingForAJob: true,
        lookingForAJobDescription: "",
        fullName: "Andrew Savchenkov",
        userId: "19640",
        photos: {
            small: "",
            large: ""
        },
    },
    status: '',
}

test('length of posts should be incremented', () => {

    //1. test data
    let action = addPostAC('test add post')

    //2.action
    let newState = profileReducer(state, action)

    //3.expectation
    expect(newState.posts.length).toBe(3)
});

test('message of new post should be correct', () => {

    //1. test data
    let action = addPostAC('test add post')

    //2.action
    let newState = profileReducer(state, action)

    //3.expectation
    expect(newState.posts[2].message).toBe('test add post')
});

test('after deleting length of messages should be decrement', () => {

    //1. test data
    let action = deletePost(1)

    //2.action
    let newState = profileReducer(state, action)

    //3.expectation
    expect(newState.posts.length).toBe(1)
});

test(`after deleting length shouldn't be decrement if id is incorrect`, () => {

    //1. test data
    let action = deletePost(1000)

    //2.action
    let newState = profileReducer(state, action)

    //3.expectation
    expect(newState.posts.length).toBe(2)
});