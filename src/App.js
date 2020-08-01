import React from 'react';
import Title from './Components/Title'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Empty from './Views/Empty'
import Welcome from './Views/Welcome'
import About from './Views/About'

var crton = false

function App() {

  let container
  let overlay = "hidden"
  if (crton) {
    container = "crt-container"
    overlay = "crt-overlay"
  }
  console.log(crton)

  return (
    <div className={`${container} w-screen h-screen overflow-x-hidden App flex flex-col bg-gray-900`}>
      <Router>
      <div className="App bg-gray-900 flex flex-col px-6 py-8">
      <Link className="mb-4" to="/welcome"><Title text="welcome"></Title></Link>
      <Link className="mb-4" to="/about"><Title text="about"></Title></Link>

        <Switch>

          <Route exact path="/" component={Empty}/>

          <Route path="/welcome" component={Welcome}/>

          <Route path="/about" component={About}/>

          <Route path="/expenses" />

        </Switch>
      </div>
      </Router>
      <div className={`z-50 text-green ${overlay}`}>AV1</div>
    </div>
  );
}

export default App;

//       <Link className="mb-4" to="/projects"><Title text="projects"></Title></Link>
