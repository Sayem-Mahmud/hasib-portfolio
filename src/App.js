import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import AuthProvider from './context/AuthProvider';
import NotFound from './components/NotFound/NotFound';
import BloagRead from './components/BlogRead/BloagRead';
import PortfolioRead from './components/portfolioRead/PortfolioRead';
import Hasib from './components/Hasib/Hasib';
import UpdateBP from './components/UpdateBP/UpdateBP';
import UpdateBlog from './components/UpdateBlog/UpdateBlog';
import UpdatePortfolio from './components/UpdatePortfolio/UpdatePortfolio';
import AddBP from './components/AddBP/AddBP';
import UpdateOthers from './components/UpdateOthers/UpdateOthers';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          {/* <Header></Header> */}
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/hasibPanel">
              <Hasib></Hasib>
            </Route>
            <Route path="/addB-P">
              <AddBP></AddBP>
            </Route>
            <Route path="/updateB-p">
              <UpdateBP></UpdateBP>
            </Route>
            <Route path="/updateB/:blogId">
              <UpdateBlog></UpdateBlog>
            </Route>
            <Route path="/updateP/:portfolioId">
              <UpdatePortfolio></UpdatePortfolio>
            </Route>
            <Route path="/update-others/:otherId">
             <UpdateOthers></UpdateOthers>
            </Route>
            <Route path="/blog/:blogId">
              <BloagRead></BloagRead>
            </Route>
            <Route path="/portfolio/:portfolioId">
              <PortfolioRead></PortfolioRead>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
