import React from 'react'
import {  Categories, SortPopup, Pizzas } from '../components';


function Home({pizzas}) {
  

    return (
        <div className="container">
          <div className="content__top">
            <Categories items={[
              "Мясные",
              "Вегетарианская",
              "Гриль",
              "Острые",
              "Закрытые"
            ]} />
            <SortPopup items={[
              {name:"популярности",type:'popular'},
              {name:"цене",type:'price'},
              {name:"алфавиту",type:'abc'}]}/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
          {pizzas && pizzas.map(pizza=>(
            <Pizzas key={pizza.id} {...pizza}/>
          ))}
            
          </div>
        </div>
    )
}

export default Home
