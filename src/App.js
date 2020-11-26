import React, { useState, useEffect} from 'react';
import Detail from './Components/detail';
import Articles from './Components/Article';
import News from './Components/News';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddArt from './Components/Editor';

function App() {
  const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);
    const [articles, setArticles] = useState([]);  
    
    useEffect(() => {
      fetch("http://testing.cricwick.net:8080/api/news?page=20&per_page=20")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setData(result.data);
            setArticles(result.articles);
          },
          
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {

    return (
      <>
      <header class="container-fluid bg-info text-white pt-2 pb-1">
        <h1>Cricket Info</h1>
      </header>
      <Router>
        <nav class="navbar navbar-expand bg-light border-bottom navbar-dark">
              <Link class="nav-link" to="/articles">Articles</Link>
              <Link class="nav-link" to="/news">News</Link>
        </nav><br/>

            <Route path="/articles" exact render={() => <Articles result={articles}/>}>
            </Route>
            <Route path="/" exact render={() => <Articles result={articles}/>}>
            </Route>
            <Route path="/news" exact render={() => <News result={data}/>}>
            </Route>
            <Route path="/detail/news/:id" exact render={() => <Detail result={data}/>}>
            </Route>   
            <Route path="/detail/articles/:id" exact render={() => <Detail result={articles}/>}>
            </Route>
            <Route path="/editor" exact render={() => <AddArt/>}>
            </Route>
      </Router>
      </>
    );
  }
}

export default App;