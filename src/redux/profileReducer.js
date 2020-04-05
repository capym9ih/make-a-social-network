const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    postsData: [
        {id: "1", message: 'Hi, how are you?!', likesCount: 120},
        {id: "2", message: 'I`s my first post', likesCount: 56},
    ],
    newPostText: 'it-kamasutra.com',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                newPostText : '',
                postsData:[...state.postsData, {id: 5, message: state.newPostText, likesCount: 0} ]
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText :action.newText
            };
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;