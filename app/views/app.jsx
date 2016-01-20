import React from 'react'
import { render } from 'react-dom'
import '~/app/assets/styles/app'
import { Router, IndexRoute, Route, browserHistory } from 'react-router'

import Home from './home/home'


class App extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className='container'>
          Hello World
        { children }
      </div>
    )
  }
}

render((
    <Router history={ browserHistory }>
        <Route path="/" component={ App }>
            <IndexRoute component={ Home }/>
        </Route>
    </Router>
), document.getElementById('react'));