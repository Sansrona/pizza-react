const initialState={
    items: [],
    isLoaded:false
}


const filter =(state = initialState, action) => {
    switch (action.type) {
        case 'SET_PIZZAS':
            return {...state,
                items: action.pizzas,
                isLoaded:true
            }
        case 'SET_ISLOADED':
            return {...state,
            isLoaded: action.isLoaded}   
        default: return state;
    }
}

export default filter;