const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi', likesCount: 12},
                {id: 2, message: 'How are u', likesCount: 13},
                {id: 3, message: 'Very good!', likesCount: 14},
            ],
            newPostText: 'atom'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Name1'},
                {id: 2, name: 'Name2'},
                {id: 3, name: 'Name3'},
            ],
            messages: [
                {id: 1, message: "Hi[1]"},
                {id: 2, message: "Hi[2]"},
                {id: 3, message: "Hi[3]"},
            ],
            newMessageText:'Hi'
        },
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;  // observer
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});


export default store;
window.store = store;
// store - OOP