import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Greeting from './components/Greeting';

const Home = () => <div>Home Page</div>;

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact element={<Greeting/>} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
