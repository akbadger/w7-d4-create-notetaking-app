import React from 'react'
import Nav from './Nav'

class AddNote extends React.Component {
    render() {
        // console.log(this);
        
        return <div>
                    <Nav />
                    <div className="columns">
                        <div className="column is-8 is-offset-2">
                            <div className="card has-text-centered">
                                <div className="card-content">
                                    <div className="content">
                                         <input type="text-area"/>
                                    

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    }
 }

 export default AddNote