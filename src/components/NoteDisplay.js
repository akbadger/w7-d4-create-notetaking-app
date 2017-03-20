import React from 'react'
import Nav from './Nav'

class NoteDisplay extends React.Component {
    render() {
        // console.log(this);
        
        return <div>
                 <Nav />      
                            <div className="container">
                                <div className="row">
                                   <div className="col-sm-12">
                                        <span className="card">
                                            here is a note.
                                        </span>
                                        <span className="card">
                                            here is a note.
                                        </span>
                                        <span className="card">
                                            here is a note.
                                        </span>
                                        <span className="card">
                                            here is a note.
                                        </span>
                                        <span className="card">
                                            here is a note.
                                        </span>
                                   </div>
                                </div>
                            </div>
               </div>
                  
                            
                                    
                            
                
    }
 }

 export default NoteDisplay