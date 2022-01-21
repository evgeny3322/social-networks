import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi', likesCount: 12},
            {id: 2, message: 'How are u', likesCount: 13},
            {id: 3, message: 'Very good!', likesCount: 14},
        ],
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
        ]
    },
}

export let addPost = (postMessage) => {
    var newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export default state;