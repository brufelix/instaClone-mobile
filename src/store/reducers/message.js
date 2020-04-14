import { SET_MESSAGE } from '../actionsType/actionsType'

const initialState = {
    title: '',
    text: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MESSAGE:
            return {
                ...state,
                title: action.payload.title,
                title: action.payload.text
            }
        default:
            return state 
    }
}

export default reducer