import { ADD, REMOVE, EDIT } from './actionsTodoList'

export const add = (data) => ({
    type: ADD,
    payload: data
})

export const remove = (id) => ({
    type: REMOVE,
    payload: id
})

export const edit = (data, id) => ({
    type: EDIT,
    payload: { id, data }
})