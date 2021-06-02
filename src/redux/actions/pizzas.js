import axios from 'axios';

export const setLoaded = isLoaded => ({
    type: 'SET_ISLOADED',
    isLoaded
})


export const fetchPizzas = (category,sortBy) =>  dispatch => {
    const address = category === null ? `http://localhost:3001/pizzas?_sort=${sortBy}&_order=${sortBy==='rating'?'desc':'asc'}` : `http://localhost:3001/pizzas?category=${category}&_sort=${sortBy}&_order=${sortBy==='rating'?'desc':'asc'}`
    dispatch(setLoaded(false))
    axios.get(address).then(response=>
      dispatch(setPizzas(response.data)))
}

export const setPizzas = (pizzas) => ({
    type:'SET_PIZZAS',
    pizzas
})
