let initialState = {
    contactList:[],
    searchWord:''
}

function reducer(state=initialState, action){
    //object destructuring
    const {type, payload} = action;
    switch(type) {
        case "ADD_CONTACT":
            return {...state, contactList:[...state.contactList, {index: payload.index, name:payload.name , phoneNumber:payload.phoneNumber }]};
        case "SEARCH_BY_NAME":
            return {...state, searchWord: payload.searchWord};
        default:
            return {...state};
    }
}

export default reducer;