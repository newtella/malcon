import './App.css';
import Layout from './containers/Layout/Layout';
import Dashboard from './containers/Dashboard/Dashboard';
import Products from './components/Products/Products';
import NotFound from './components/NotFound/NotFound'
import ProductDetail from './containers/ProductDetail/ProductDetail';
import { Route, Switch } from 'react-router-dom';
import limitedEdition from './components/LimitedEdition/LimitedEdition';



function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact component={Dashboard}/>
          <Route path="/limited" component={limitedEdition}/>
          <Route path="/products" component={Products}/>
          <Route path="/product/:productId" component={ProductDetail}/>
          <Route path="*" component ={NotFound}/>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
