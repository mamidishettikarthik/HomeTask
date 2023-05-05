import './App.css';
import Header from './components/Header';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import { Redirect, Route, Switch } from 'react-router-dom';
// import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
// import Buynow from './components/Buynow';
import Books from './components/Books';
import MyOrders from './components/MyOrders';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <>
      <Provider store={store}>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/books" component={Books} />
        {/* <Route exact path="/products/:id" component={ProductDetail} /> */}
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        {/* <Route exact path="/buynow/:id" component={Buynow} /> */}
        <Route exact path="/myorders" component={MyOrders} />
        <Redirect to="/" />
      </Switch>
      </Provider>
 
    </>
  );
}

export default App;