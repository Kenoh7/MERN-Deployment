import {Route, Switch} from 'react-router-dom';
import './App.css';
import Display from './components/Display';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <Display/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
