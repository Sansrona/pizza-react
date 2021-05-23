const initialState={
    items: [],
    isLoaded:false
}


const filter =(state = initialState, action) => {
    switch (action.type) {
        case 'SET_PIZZAS':
            return {...state,
                items: action.pizzas
            }
        default: return state;
    }
}

export default filter;