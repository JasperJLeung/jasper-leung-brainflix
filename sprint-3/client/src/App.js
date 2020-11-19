import './App.scss';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Upload from './pages/Upload/Upload'

const App = () => {
  return (
      <BrowserRouter>
         <Switch>
           <Route path="/" exact component={Home}/>
           <Route path="/upload" component={Upload}/>
           <Route path="/:id" component={Home}/>
        </Switch>
      </BrowserRouter>
      
  );
};


export default App;