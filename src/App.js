import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/header'
import Menu from './components/menu/menu';
import Dashboard from './pages/dashboard/dashboard';
import Movies from './pages/movies/movies';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Menu /> 
      <Switch>
        <Route path='/' exact ><Dashboard /></Route>
        <Route path="/movies"><Movies /></Route> 
      </Switch>
      <Footer /> 
    </div>
  );
}

export default App;
