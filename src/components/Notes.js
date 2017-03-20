import React from 'react'
import Nav from './Nav'

class Notes extends React.Component {

    constructor(props) {
        super(props)

        // Initial state
        this.state = {
            notes: []
        }
    }

    componentWillMount() {
        this.getNotes()
    }

    getNotes() {
        fetch()
        .then(response => response.json())
        .then(notes => this.props.dispatch({type: 'NOTES_UPDATE', body: notes}))
    }
       
    render() {
        return  <div>
        <div className="container">
                    <Nav />
                    
                        <div className="row">
                            <div className="column col-sm-8 col-sm-offset-2">
                                <div className="card">
                                    <div className="card-block text-center">
                                         <i className="fa fa-plus fa-2x" aria-hidden="true"></i>
                                         <div className="text-muted">Take a new note.</div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
    }
}

 export default Notes