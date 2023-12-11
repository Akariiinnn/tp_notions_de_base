import Header from "../partial/Header";
import Footer from "../partial/Footer";
import AllProducts from "../partial/AllProducts";
import sofas from "../data/sofas";

const NosCanapes = () => {


    return(
        <>
            <Header/>
            <AllProducts sofas={sofas}/>
            <Footer />
        </>
    )
}

export default NosCanapes;