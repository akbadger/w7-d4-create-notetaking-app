import React from 'react'
import Nav from './Nav'

class AddNote extends React.Component {
    render() {
        // console.log(this);
        
        return <div>
                    <Nav />
                            <div className="container">
                                    <div className="row">
                                        <div className="col-sm-8 col-sm-offset-2">
                                       
                                            <textarea placeholder="Title" />
                                            <textarea placeholder="Take a note..." className="note-body"/>
                                            <textarea placeholder="tags" />
                                            <button type="button" className="btn btn-default btn-block">Save</button>
                                        
                                    </div>
                                </div>
                        </div>    
                </div>
                  
                            
                                    
                            
                
    }
 }

 export default AddNote