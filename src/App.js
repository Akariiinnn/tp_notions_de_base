import './Page.css';
import Home from "./page/Home";
import Contact from "./page/Contact";
import NosCanapes from "./page/NosCanapes.jsx"
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path={"/contact"} element={<Contact />} />
                <Route path={"/nos_canapes"} element={<NosCanapes />} />
            </Routes>
        </BrowserRouter>

    );
}

export default App;
