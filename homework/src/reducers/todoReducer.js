import { ADD, REMOVE, EDIT } from '../actions/actionsTodoList'
import moment from 'moment'

export const todoList = (state = { items: [{ id: 0 }] }, actions) => {
    switch (actions.type) {
        case ADD:
            return {
                ...state,
                items:
                    [...state.items,
                    {
                        id: state.items[state.items.length - 1].id + 1,
                        name: actions.payload,
                        date: moment().format('lll')
                    }]
            }
        case REMOVE:
            return {
                ...state,
                items: [...state.items.filter(elem => elem.id !== actions.payload)]
            }
        case EDIT:
            let newItems = [...state.items];
            let index = newItems.findIndex(elem => elem.id === parseInt(actions.payload.id));            
            newItems[index].name = actions.payload.data;
            return {
                ...state,
                items: newItems
            }
    }

    return state
}