const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export type StoreType = {
    _state: RootStateType
    _callSubscriber: (state: RootStateType) => void
    getState: () => RootStateType
    subscribe: (callback: () => void) => void
    dispatch: (action: ActionsTypes) => void
}

export let store: StoreType = {
     _state: {
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
},
    _callSubscriber(state: RootStateType) {
        console.log('State changed');
    },

    getState() {
         return this._state;
    },
    subscribe(observer: any)  {
        this._callSubscriber = observer //observer pattern
    },

    dispatch(action: any) {
         if(action.type === ADD_POST) {
             let newPost = {
                 id: 5,
                 message: this._state.profilePage.newPostText,
                 likesCount: 0
             };

             this._state.profilePage.posts.push(newPost);
             this._state.profilePage.newPostText = '';
             this._callSubscriber(this._state);
         }
         else if(action.type === UPDATE_NEW_POST_TEXT) {
             this._state.profilePage.newPostText = action.newText;
             this._callSubscriber(this._state);
         }
    },

}

export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC>;

export const addPostAC = () => ({type: ADD_POST} as const);
export const updateNewPostTextAC = (newText: string) =>  ({type: UPDATE_NEW_POST_TEXT, newText} as const);

export  type RootStateType = {
    profilePage: ProfilePageType,
    dialogPage: DialogPageType,
    friendsList: Array<FriendsListType>,
}
type PostType = {
    id: number,
    message: string,
    likesCount: number,
}
type MessageType = {
    id: number,
    message: string,
}
type DialogType = {
    id: number,
    name: string,
}
export type FriendsListType = {
    id: number,
    name: string,
}
type ProfilePageType = {
    posts: Array<PostType>,
    newPostText: string,
}
type DialogPageType = {
    messages: Array<MessageType>,
    dialogs: Array<DialogType>,
}





//store - OOP