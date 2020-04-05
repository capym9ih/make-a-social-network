const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:{
            let newMessage = {
                id: "5",
                message: state.newMessageText,
            };
            let stateCopy= {...state};
            stateCopy.messagesData=[...stateCopy.messagesData];
            stateCopy.messagesData.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_TEXT:{
            let stateCopy= {...state};
            stateCopy.newMessageText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
};

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

export default dialogsReducer;