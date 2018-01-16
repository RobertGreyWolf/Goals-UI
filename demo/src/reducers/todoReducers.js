import * as types from '../actions/actionTypes';
export default function todoReducer(state = [], action){
    switch(action.type) {
        case types.CREATE_TODO:
            if (action.todo.title !== '' && action.todo.todoID !== '' && !isNaN(action.todo.todoID)) {
                return [...state,
                    Object.assign({}, action.todo)
                ];
            }
            else {
                alert("Invalid Input: Please make sure all fields are filled out and that a valid TODO item ID is entered");
                return state;
            }
        case types.REMOVE_TODO:
            if(!isNaN(action.todo.todoID))
            {

                    for (let i = 0; i < state.length; i++) {
                        if (state[i].todoID === action.todo.todoID) {
                            return [
                                ...state.slice(0, i),
                                ...state.slice(i + 1)
                            ];
                        }
                    }

                    alert("No TODO items were found with that ID");
                    return state;

            }
            else
            {
                alert("Please provide a valid TODO item ID");
                return state;
            }
        case types.UPDATE_TODO:
            for (let i = 0; i < state.length; i++) {
                if (state[i].todoID === action.todo.todoID) {
                    return [
                        ...state.slice(0,i),
                        Object.assign({}, action.todo),
                        ...state.slice(i + 1)
                    ];
                }
            }
            alert("No TODO items were found with that ID");
            return state;
        default:
            return state;
    }
}