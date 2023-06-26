import "./list.css"

import { Search } from "../../components/searchitem/search"
import { Header } from "../../components/header/header"
import { format } from "date-fns"
import { Navbar } from "../../components/navbar/navbar"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { useState } from "react"
import { DateRange } from "react-date-range"
export const List=()=>{
    const location=useLocation()
   
    const[destination,setdestination]=useState(location.state.destination)
   const[date,setdate]=useState(location.state.date)
   const[option,setoption]=useState(location.state.option)
    const[opendate,setopendate]=useState(false)
    
   return(
        <>
        <Navbar></Navbar>
     <Header type="list"></Header>
    
     
     <div className="listcontainer">
        <div className="listwrapper">
            <div className="listsearch">
                <h1 className="listtitle"> search</h1>
                <div className="liitem">
                    <label>destination</label>
                    <input placeholder={destination} type="text" ></input>
                </div>
                <div className="liitem">
                    <label>check-in-date</label>
                    <span onClick={()=>setopendate(!opendate)}> {`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")} `}</span>
               {opendate && <DateRange onChange={(item)=>setdate([item.selection]) } minDate={new Date()} ranges={date}></DateRange>}
 </div>
 <div className="litem">
    <label>options</label>
    <div className="litems">
    <div className="liptionitem">
        <span className="lioptiontext">min-price <small>per night</small></span>
   <input type="number"></input>
    </div>
    <div className="liptionitem">
        <span className="lioptiontext">min-price <small>per night</small></span>
   <input type="number"></input>
    </div>
    <div className="liptionitem">
        <span className="lioptiontext">Adult</span>
   <input type="number" min={1}  placeholder={option.adult}></input>
    </div>
    <div className="liptionitem">
        <span className="lioptiontext"> Children</span>
   <input type="number" min={0} placeholder={option.children}></input>
    </div>
    <div className="liptionitem">
        <span className="lioptiontext">Room </span>
   <input type="number" min={1} placeholder={option.room}></input>
    </div>
    </div>
 </div>
 
 <button>search</button>
            </div>
            <div className="listresult">
                <Search></Search>
                <Search></Search>
                <Search></Search>
                <Search></Search>
                <Search></Search>
            </div>
        </div>
        </div>
     
       
        </>
    )
}