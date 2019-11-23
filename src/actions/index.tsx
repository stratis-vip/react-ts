export const ADD_ONE = 'ADD_ONE'
import { AddAction } from '../interfaces/index'


export const addNumber = (num:number):AddAction => ({
    type: ADD_ONE,
    num
})