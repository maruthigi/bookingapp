import { BrowserRouter,Routes,Route } from "react-router-dom"
import { Home } from "./pages/home/home"
import { List } from "./pages/list/list"
import { Hotel } from "./pages/hotel/hotel"
export const App=()=>{
    return(
        <>
       
        <Routes>
           <Route path="/" element={<Home></Home>}></Route>
           <Route path="/hotels" element={<List></List>}></Route>
        <Route path="/hotelsw" element={<Hotel></Hotel>}></Route>
        </Routes>
       

        </>
    )
}