import { combineReducers } from "redux";
import { ADD_ONE } from '../actions/index'
import { AddAction } from "../interfaces";

const alfa = (state = [], action: AddAction) => {
    switch (action.type) {
        case ADD_ONE: {
            return [...state, action.num]
        }
    }
    return []
}

const reducer = combineReducers({ alfa })
export default reducer 