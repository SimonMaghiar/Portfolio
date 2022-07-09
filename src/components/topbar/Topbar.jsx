import "./topbar.scss"
import {Person, Mail} from "@mui/icons-material"

function Topbar( {menuOpen, setMenuOpen} ) {
    return (
        <div className= {"topbar " + (menuOpen && "active")}>

            <div className="wrapper">

                <div className="left">
                    <a href="#intro" className="logo">genius.</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+40 771 70 4641</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>simonmaghiar@yahoo.com</span>
                    </div>
                </div>

                <div className="right">
                        <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
                            <span className="line1"></span>
                            <span className="line2"></span>
                            <span className="line3"></span>
                        </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default Topbar
