const initialState={
    sortBy:'popular', 
    category:0
}


const filter =(state = initialState, action) => {
    switch (action.type) {
        case 'SET_SORT_BY':
            return {...state,
                sortBy: action.sortBy
            }
        case 'SET_CATEGORY':
            return {...state,
                sortBy: action.catIndex
            }
        default: return state;
    }
}

export default filter;