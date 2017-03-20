// Load React
import React from 'react'
// import Notes from './Notes'

// Load React Router
import { Router, Route, browserHistory } from 'react-router'

// Load React Router Redux
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import store from './Reducers'
const history = syncHistoryWithStore(browserHistory, store)

// Load page view components
// Import your Todos and Completed components here...
import Notes from './components/Notes'
import AddNote from './components/AddNote'
import NoteDisplay from './components/NoteDisplay'


// Configure routes
class Routes extends React.Component {
    render() {
        return <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={Notes} />
                <Route path="/AddNote" component={AddNote} />
                <Route path="/NoteDisplay" component={NoteDisplay} />                

            </Router>
        </Provider>
    }
}

export default Routes