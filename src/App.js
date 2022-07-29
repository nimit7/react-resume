import React from 'react';
import Intro from './Pages/Intro';
import Header from './components/Header';
import { Route, Switch } from 'react-router-dom';
import Education from './Pages/Education';

function App() {
  return (
    <div className='app p-5'>
      <header>
        <Header />
      </header>
      <main className='pt-3'>
        <Switch>
          {/* <Route path='/' exact>
            <Redirect to='/intro' />
          </Route> */}
          <Intro />
          {/* <Route path='/intro'>
          </Route> */}
          <Route path='/education'>
            <Education />
          </Route>

          <Route></Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
