let rerenderEntireTree = () => {
    console.log('State changed');
}


let state = {
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
        ]
    },
}

window.state = state;

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;  // observer
}

export default state;