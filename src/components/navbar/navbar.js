import "./navbar.css"
export const Navbar=()=>{
    return(
        <>
        <div className="navbar">
            <div className="navbarcontainer">
                <span className="navbarlogo">maruthi trouisam</span>
                <div className="navitems">
                    <button className="navbutton">register</button>
                    <button className="navbutton">login</button>
                </div>
            </div>
        </div>
        </>
    )
}