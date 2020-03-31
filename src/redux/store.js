import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: "1", message: 'Hi, how are you?!', likesCount: 120},
                {id: "2", message: 'I`s my first post', likesCount: 56},
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            dialogsData: [
                {id: "1", name: 'Dimych'},
                {id: "2", name: 'Toha'},
                {id: "3", name: 'Valera'},
                {id: "4", name: 'Sveta'},
                {id: "5", name: 'Irina'},
                {id: "6", name: 'Sasha'},
            ],
            messagesData: [
                {id: "1", message: 'Hi!'},
                {id: "2", message: 'How are you?'},
                {id: "3", message: 'Yo!'},
                {id: "4", message: 'Hello!'},
                {id: "5", message: 'Fack!'},
                {id: "6", message: 'Fooo!'},

            ],
            newMessageText: ''
        },
        sidebarPage: {},
    },
    _callSubscriber() {

    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);

        this._callSubscriber(this._state);
    }
};

export default store;


