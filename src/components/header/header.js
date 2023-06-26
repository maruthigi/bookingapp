import { useState } from "react"
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import "./header.css"
//import { DateRange } from "react-date-range"
import { DateRange } from 'react-date-range';
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
export const Header=({type})=>{
    const[opendate,setopendate]=useState(false)
    const [date, setdate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
      const[destination,setdestination]=useState("")
      const[openoption,setopenoption]=useState(false)
      const[option,setoption]=useState({
        adult:1,
        children:0,
        room:1,
      })
      const handleoption=(name,opreation)=>{
        setoption((pre)=>{
            return{
                ...pre,[name]:opreation ==="i"?option[name]+1:option[name]-1
            }
        })

      }
      const navigate=useNavigate()
      const handlesearch=()=>{
        navigate("/hotels", {state:{destination,date,option}})
     
      }
    return(
        <>
        <div className="header">
            <div className= {type ==="list" ?"headercontainer listmode":"headercontainer"} >
            <div className="headerlist">
                <div className="headeritemsactive">
                <span>cars</span>
                </div>
                <div className="headeritems">
                <span>cars</span>
                </div>
                <div className="headeritems">
                <span>cars</span>
                </div>
                <div className="headeritems">
                   <span>cars</span>
                </div>
            </div>
            {type !=="list" &&
              <> 
              <h1 className="headertitle">lo</h1>
            <p className="headerdis">llll</p>
            <button className="headerbutton">sign/register</button>
            <div className="headersearch">
                <div className="headersearchitems">
                    <input type="text" placeholder="enter your destination" className="headersearchinput" onChange={(e)=>setdestination(e.target.value)}></input>
                </div>
                <div className="headersearchitems">
                <span className="headertext" onClick={()=>setopendate(!opendate)}>{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")} `}</span>
                   {
                    opendate && <DateRange
                    editableDateInputs={true}
                    onChange={item => setdate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    minDate={new Date()}
                    ranges={date}
                    className="date"
                  
                  />
                   }
                </div>
                <div className="headersearchitems">
                   
                <span className="headertext" onClick={()=>setopenoption(!openoption)}>{`${option.adult}adult ${option.children} chlidren ${option.room} room`}</span>
                {
                  openoption && <div className="option">
                  <div className="optionitem">
                      <span className="optiontext">adult</span>
                 <div className="optioncounter">
                 <button className="optionbutton" disabled={option.adult <=1} onClick={()=>handleoption("adult","d")}>-</button>
                  <span className="optionnumber">{option.adult}</span>
                  <button  className="optionbutton" onClick={()=>handleoption("adult","i")}>+</button>
                 </div>
                  </div>
                  <div className="optionitem">
                      <span className="optiontext">children</span>
                      <div className="optioncounter">
                 <button className="optionbutton" disabled={option.children <=0} onClick={()=>handleoption("children","d")}>-</button>
                  <span className="optionnumber">{option.children}</span>
                  <button  className="optionbutton" onClick={()=>handleoption("children","i")}>+</button>
                 </div>
                  </div>
                  <div className="optionitem">
                      <span className="optiontext">Room</span>
                      <div className="optioncounter">
                 <button className="optionbutton" disabled={option.room <=1} onClick={()=>handleoption("room","d")}>-</button>
                  <span className="optionnumber">{option.room}</span>
                  <button  className="optionbutton" onClick={()=>handleoption("room","i")}>+</button>
                 </div>
                  </div>
                
                </div>}
                </div>
                <div className="headersearchitems">
                  <button className="headerbutton" onClick={()=>handlesearch()}>search</button>
                </div>
            </div> </>}
            </div>
        </div>
        </>
    )
}