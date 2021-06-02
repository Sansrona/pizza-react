import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  Categories, SortPopup, Pizzas } from '../components';
import { setCategory, setSortBy } from '../redux/actions/filter';
import { fetchPizzas } from '../redux/actions/pizzas';
import {PizzaLoadingBlock} from '../components/index'
import { addPizzaToCart } from '../redux/actions/cart';



const categoryNames = ["Мясные","Вегетарианская",  "Гриль",  "Острые",  "Закрытые"]
const sortItems = [
              {name:"популярности",type:'rating'},
              {name:"цене",type:'price'},
              {name:"алфавиту",type:'name'}]

function Home() {
  const dispatch = useDispatch();
  const cartItems = useSelector(({cart})=>cart.items)
  const {pizzas,isLoaded} = useSelector(({pizzas})=>({pizzas:pizzas.items, isLoaded:pizzas.isLoaded}))
  const {sortBy, category} = useSelector(({filter})=>filter);
  const onSelectCategory = (catIndex) =>{
    dispatch(setCategory(catIndex));
  }
  const onSelectSortBy = (sortByType) =>{
    dispatch(setSortBy(sortByType));
  }

  const addPizza = (price,obj) => {
    dispatch(addPizzaToCart(price,obj));
  }

  React.useEffect(() => {
    dispatch(fetchPizzas(category, sortBy))
  }, [category,sortBy])
    return (
        <div className="container">
          <div className="content__top">
            <Categories onClickItem={onSelectCategory} items={categoryNames} categoryIndex={category} />
            <SortPopup items={sortItems} sortBy={sortBy} onSortBy={onSelectSortBy}/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
          {isLoaded && pizzas ? (pizzas.map(pizza=>(
             <Pizzas key={pizza.id} {...pizza} addPizzaToCart={addPizza} pizzaAmount = {cartItems[pizza.id] && cartItems[pizza.id].length} />
          ))):
            (Array(10).fill(0).map((_,index)=>(<PizzaLoadingBlock key={index} />)))
          }
            
          </div>
        </div>
    )
}

export default Home
