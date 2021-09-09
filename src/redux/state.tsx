let rerenderedEntireThree = (state: RootStateType) => {
    console.log('State changed');
}


export  type RootStateType = {
    profilePage: ProfilePageType,
    dialogPage: DialogPageType,
    friendsList: Array<FriendsListType>
}
type PostType = {
    id: number,
    message: string,
    likesCount: number
}
type MessageType = {
    id: number,
    message: string
}
type DialogType = {
    id: number,
    name: string
}
export type FriendsListType = {
    id: number,
    name: string
}
type ProfilePageType = {
    posts: Array<PostType>,
    newPostText: string
}
type DialogPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
}




let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: "Hello everybody!!!)", likesCount: 12},
            {id: 2, message: "Yeah!", likesCount: 16},
            {id: 3, message: "Zzzzz...", likesCount: 2},
            {id: 4, message: "You're interesting man but I want to sleep", likesCount: 10},
            {id: 5, message: "It's my first post", likesCount: 22},
        ],
        newPostText: 'it-camasutra.com'
    },
    dialogPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'I want to work'},
            {id: 4, message: "I'm fine"},
            {id: 5, message: "It's god!"},
        ],
        dialogs: [
            {id: 1, name: 'Dimuch'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Zina'},
            {id: 4, name: 'Ira'},
            {id: 5, name: 'Marat'},
        ]
    },
    friendsList: [
        {id: 1, name: 'Andrew'},
        {id: 2, name: 'Alex'},
        {id: 3, name: 'Viktor'}

    ]


}

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderedEntireThree(state);
}

export const updateNewPostText = (newText: string) => {

    state.profilePage.newPostText = newText;
    rerenderedEntireThree(state);
}


export const subscribe = (observer: any) => {
    rerenderedEntireThree = observer //observer pattern
}

export default state;

//store - OOP