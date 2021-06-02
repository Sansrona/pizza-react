const initialState = {
    items:{},
    totalCount:0,
    totalPrice:0
};

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_PIZZA':{
            return {...state, 
                items:{
                    ...state.items, 
                [action.obj.id]:!state.items[action.obj.id] ? [action.obj] : [
                        ...state.items[action.obj.id],
                        action.obj
                    ]
                },
                totalPrice:state.totalPrice + action.totalPrice, totalCount: state.totalCount + 1}
        }
        
        default: return state
    }
}

export default cartReducer;