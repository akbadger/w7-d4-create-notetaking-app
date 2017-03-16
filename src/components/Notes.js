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
       
    render() {
        return  <div>
                    <Nav />
                    <div className="columns">
                        <div className="column is-8 is-offset-2">
                            <div className="card has-text-centered">
                                <div className="card-content">
                                    <div className="content">
                                         <a className="button is-primary"><i className="fa fa-plus" aria-hidden="true"></i></a>
                                         <div>Take a new note.</div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    }
}

 export default Notes