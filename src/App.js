import './App.css';
import Header from './Header';
import RecommendedVideos from './RecommendedVideos';
import Sidebar from './Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SearchPage from './SearchPage';

function App() {
  return (
    // BEM class naming conventions
    <div className="app">
      <Router>
      <Header/>
        <Switch>
        <Route path="/search/:searchTerm">
            <div className="app__page">
              <Sidebar/>
              <SearchPage/>
            </div>
      
          </Route>
          <Route path="/">
            
            <div className="app__page">
              <Sidebar/>
              <RecommendedVideos/>
            </div>
      

            
          </Route>
        </Switch>
      </Router>       
        {/* 
            Think in terms of components
            1.Header making it sticky with z-index for transparency
            2.Sidebar
            3.Recommended videos
        */}
      
      {/* <Header/>
      <div className="app__page">
        <Sidebar/>
        <RecommendedVideos/>
      </div> */}
      

      
    </div>
  );
}

export default App;
