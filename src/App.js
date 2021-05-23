import React from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux'

import store from './redux/store';
import { Header} from './components';
import { Home,Cart} from './pages';
import {setPizzas as setPizzasAction} from './redux/actions/pizzas';


function App({pizzas,setPizzas}) {
  

  React.useEffect(()=>{
    axios.get('http://localhost:3001/pizzas').then(response=>
      setPizzas(response.data));
  },[])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" render={()=><Home pizzas={pizzas}/>}/>
        <Route exact path="/cart" component={Cart}/>
      </div>
    </div>
  );
}

const mapStateToProps = state=>({
  pizzas:state.pizzas.items
})

const mapDispatchToProps = dispatch => ({
  setPizzas:(items)=>dispatch(setPizzasAction(items))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
