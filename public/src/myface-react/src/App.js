import { NavBar } from './components/NavBar';
import { PostsList } from './components/PostsList';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { UserDetails } from './components/UserDetails';
import { UsersList } from './components/UsersList';
import "./App.scss"

function App() {
    return (
        <Router>
            <NavBar />
            <h1>MyFace</h1>
            
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/posts" />
                    </Route>
                    <Route path="/posts">
                        <PostsList  />
                    </Route>
                        <Route path="/users/:userId">
                        <UserDetails />
                    </Route>                  
                    <Route exact path="/users">
                        <UsersList />
                    </Route>

                { /*
                <Route path="/posts/create/">
                    <CreateNewPost />
                </Route>*/}
                <Route path="">
                    <div>Sorry path not found</div>
                </Route>
            </Switch> 
        </Router>
    );
}

export default App;
