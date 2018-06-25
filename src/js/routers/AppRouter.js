import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom' 
import { ConnectedHome } from '../components/Home'
import { ConnectedCount } from '../components/Count'
import { ConnectedPeople } from '../components/People'
import { ConnectedAnimals } from '../components/Animals'
import { NotFoundPage } from '../components/NotFoundPage'

const AppRouter = (props) => {
  return (
    <BrowserRouter>
      <div>
        <h1>React components with access to state stored through Redux!</h1>
        <h3>The state is being passed into the components below without passing them through the main AppRouter Component!</h3>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/count">Count</Link></li>
          <li><Link to="/people">People</Link></li>
          <li><Link to="/animals">Animals</Link></li>
        </ul>

        <hr/>

        <Switch>
          <Route exact path="/" component={ConnectedHome} />
          <Route exact path="/count" component={ConnectedCount} />
          <Route exact path="/people" component={ConnectedPeople} />
          <Route exact path="/animals" component={ConnectedAnimals} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const ConnectedAppRouter = connect(mapStateToProps)(AppRouter)

export { ConnectedAppRouter }