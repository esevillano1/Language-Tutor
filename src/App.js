import './App.css';
import Title from './views/title';
import Language from './views/language';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <section className="App">
      <Router>
        <Link to="/" />
        <Route exact path="/" component={Title} />
        <Route exact path="/English" component={Language} />
        <Route exact path="/French" component={Language} />
        <Route exact path="/Spanish" component={Language} />
        <Route exact path="/Italian" component={Language} />
        <Route exact path="/German" component={Language} />
        <Route exact path="/Dutch" component={Language} />
      </Router>
    </section>
  );
}

export default App;
