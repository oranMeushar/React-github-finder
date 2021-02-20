import React, {Suspense} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Layout from './components/Layout/Layout';

const Home = React.lazy(()=>import('./pages/Home/Home'));
const About = React.lazy(()=>import('./pages/About/About'));
const AboutUser = React.lazy(()=>import('./pages/AboutUser/AboutUser'))
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className="App">
        <Layout>
          <Suspense fallback = {<div>Loading...</div>}>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/users/:userName" component={AboutUser}/>
            </Switch>
          </Suspense>
        </Layout>
      </div>
    )
  }
  
}

export default App;
