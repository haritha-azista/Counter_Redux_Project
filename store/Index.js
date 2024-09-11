import { createStore } from "redux";

const INITIAL_VALUE = {
    counter  : 0 
}

const counterReducer = (store = INITIAL_VALUE, action) =>{
    // console.log(action);
    if(action.type === 'INC'){
        return { counter : store.counter + 1}
    }
    else if(action.type === 'DEC'){
        return { counter : store.counter - 1}
    }
    else if(action.type === 'ADD'){
        return { counter : store.counter + Number(action.payload.num)}
    }
    else if(action.type === 'SUB'){
        return { counter : store.counter - Number(action.payload.num)}
    }
    
    return store;
}

const store = createStore(counterReducer)

export default store;