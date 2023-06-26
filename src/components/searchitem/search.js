import { useNavigate } from "react-router-dom"
import "./search.css"
export const Search=()=>{
 const navi=useNavigate()
 const handclick=()=>{
    navi("/hotelsw")
 }
    return(
        <>
        <div className="searchitem">
            <img className="simg"></img>
            <div className="sides">
                <h1 className="sititle">mmmmm</h1>
           <span className="sidistance">mmam</span>
           <span className="sitaxidp">mmam</span>
           <span className="sisubtitle">mmam</span>
           <span className="sifeature">mmam</span>
           <span className="sicancell"> mmam</span>
           <span className="silockcancell">mmam</span>
            </div>
            <div className="sideatails">
            <div className="sirating">
                <span>Excellent</span>
                <button>8.9</button>
                </div>
                <div className="sidetailtext">
                    <span className="siprice">$123</span>
                <span className="sitaxes">includes tax and fees</span>
                <button className="sibutton" onClick={()=>handclick()}>see avalability</button>
                </div>
            </div>
            </div>
     
      





        </>
    )
}