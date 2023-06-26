import "./hotel.css"
import { Footer } from "../../components/footer/footer"
import { Mail } from "../../components/maillist/mail"
import { Navbar } from "../../components/navbar/navbar"
import { Header } from "../../components/header/header"
import { useState } from "react"
export const Hotel=()=>{
    const[sliderid,setsliderid]=useState(0)
    const[slideropen,setslideropen]=useState(false)
const sotre = [
    {
        id:1,
        name:"https://images.pexels.com/photos/2952663/pexels-photo-2952663.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id:2,
        name:"https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_1280.jpg"
    },
    {
        id:3,
        name:"https://cdn.pixabay.com/photo/2018/06/14/21/15/bedroom-3475656_1280.jpg"
    },
    {
        id:4,
        name:"https://cdn.pixabay.com/photo/2017/04/28/22/16/room-2269594_1280.jpg"
    },
    {
        id:5,
        name:"https://cdn.pixabay.com/photo/2016/10/13/09/06/travel-1737168_1280.jpg"
    },
    {
        id:6,
        name:"https://cdn.pixabay.com/photo/2017/05/31/10/23/manor-house-2359884_1280.jpg"
    }

]
const handopen=(i)=>{
    setsliderid(i)
    setslideropen(true)
}
const handelmove=(direction)=>{
    let sliderindication;
    if(direction ==="l"){
        sliderindication = sliderid===0 ?5:sliderid-1
    }
    else{
        sliderindication = sliderid===5 ?0:sliderid+1
    }
setsliderid(sliderindication)
}
    return(

       
        <>
      <Navbar></Navbar>
       <Header type="list"></Header>
       <div className="hotelcontainer">
       {
        slideropen &&  <div className="slider">
<button className="cancell" onClick={()=>setslideropen(false)}>*</button>

<div className="sliderwrapper">
<button className="open" onClick={()=>handelmove("l")}>preview</button>
    <img className="sliderim" src={sotre[sliderid].name }></img>

<button className="open" onClick={()=>handelmove("r")}>nextview</button>
        </div>
        </div>
       }
        <div className="hotelwrapper">
            <button className="booknow">reserve or book now</button>
            <h1 className="hoteltitle">Grand hotel</h1>
            <div className="hoteladdress">
                <span>eliton new york</span>
            </div>
            <span className="hoteldistance">excellent location 500 from center</span>
            <span className="hotelprice1">book a stay over at this property and get a fee airport taxi</span>
        <div className="hotelimages">
        {
       sotre.map((f,i)=><div key={f.id} className="hotelimagewrapper">
<img src={f.name} onClick={()=>handopen(i)} className="hotelimage"></img>
       </div>
       ) 
      }
        

        </div>
        <div className="hoteldetails">
            <div className="hoteldetailtext">
                <h1 className="hoteltitle">stay inthe heart</h1>
            <p className="hoteldis">
                mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
                mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
                mmmmmmmmmmmm
            </p>
            </div>
            <div className="hotelprice">
                <h1>perfect per a 9-night stay</h1>
                <span>locationnnnnnn mma maann manananna</span>
                <h2> <b>$56</b>(9-night)</h2>
                <button>reserve or book now</button>
            </div>
        </div>
        </div>
       </div>
       <Mail></Mail>
       <Footer></Footer>
       <div>
      
       
       </div>
        </>
    )
}