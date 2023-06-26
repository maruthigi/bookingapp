import "./home.css"
import { Header } from "../../components/header/header"
import { Navbar } from "../../components/navbar/navbar"
import { Porperty } from "../../components/propertylist/property"
import { Featureproperty } from "../../components/featurespropertylist/featureproperty"
import { Homepage } from "../../components/homepage/homepage"
import { Mail } from "../../components/maillist/mail"
import { Footer } from "../../components/footer/footer"
export const Home=()=>{
    return(
        <>
        <Navbar></Navbar>
        <Header></Header>
        <div className="homecontainer">
<Homepage></Homepage>
<h1 className="hometitle">browse by propert type</h1>
<Porperty></Porperty>
<h1 className="hometitle">home guest love</h1>
<Featureproperty></Featureproperty>
<Mail></Mail>
<Footer></Footer>
        </div>
        </>
    )
}