import React from 'react'

class Nav extends React.Component {
    render() {
        // console.log(this);
        
        return <div>
                <nav className="nav has-shadow">
                    <div className="nav-left">
                        <a className="nav-item">
                            <img src="lightbulb.png" alt="Formulayt Logo"/>
                            <span className="">Formulayt</span>
                        </a>
                    </div>
                    <div className="nav-right">
                        <span className="nav-item">
                            Sign in or whatever
                        </span>
                    </div>
                </nav>
            </div>
    }
 }

 export default Nav