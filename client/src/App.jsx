import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/Listing";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Booking from "./components/Contact";

const App = () => {
    return (  
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navbar />}>
            <Route index element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/services" element={<Services />}/>
            <Route path="/booking" element={<Booking />}/>

            </Route>
        </Routes>
        </BrowserRouter>
    );
}
 
export default App;