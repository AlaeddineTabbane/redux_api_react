import logo from './logo.svg';
import './App.css';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import {
  BrowserRouter as Router,
  Switch, Route, Redirect
} from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route path='/' exact component={PostList} />
        <Route path='/:id' component={PostList} />
        {/* <CreatePost /> */}
        {/* <PostList /> */}
      </Switch>
      </div>
    </Router>
  );
}

export default App;
