

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './component/navbar';
import Footer from './component/footer';
import About from './Page/about';
import Contact from './Page/contact';
import Home from './Page/home';
import Notfound from './Page/not-found';
import Mission from './Page/mission';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path='/acollege'>
              <Home />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
            <Route path='/mission'>
              <Mission />
            </Route>
            <Route path='*'>
              <Notfound />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
