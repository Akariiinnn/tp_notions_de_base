import './Page.css';
import Home from "./page/Home";
import Contact from "./page/Contact";
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path={"/contact"} element={<Contact />} />
            </Routes>
        </BrowserRouter>

    );
}

export default App;
