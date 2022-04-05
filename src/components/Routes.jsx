import React from 'react'

import { Route, Switch} from 'react-router-dom'
import Home from './l'





const Routes = () => {
    return (
        <Switch>
            {/* <Route path = '/agenda' component={Agenda}/> */}
            <Route path='/' exact component={Home} />
        </Switch>
    )
}

export default Routes
