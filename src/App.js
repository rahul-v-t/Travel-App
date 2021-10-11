import './App.css';
import Travel from './components/screens/Travel';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Single from './components/screens/Single';
import Navbar from './components/screens/Navbar';


function App() {
  return ( 
        <Router>
          <>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Travel} />
            <Route path="/place/:id" component={Single} />
          </Switch>
          </>
        </Router>
        )
}

export default App;
