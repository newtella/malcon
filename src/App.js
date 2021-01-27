import './App.css';
import Layout from './containers/Layout/Layout';
import About from './components/About/About';
import Dashboard from './components/Dashboard/Dashboard';
import Products from './components/Products/Products';
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact component={Dashboard}/>
          <Route path="/about" component={About}/>
          <Route path="/products" component={Products}/>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
