import Header from "../partial/Header";
import Products from "../partial/Products";
import Article from "../partial/Article";
import Footer from "../partial/Footer";
import sofas from "../data/sofas";

const Home = () => {

    return (
        <>
            <Header/>
            <Products sofasProp = {sofas}/>
            <Article/>
            <Footer/>
        </>
    );
}

export default Home;