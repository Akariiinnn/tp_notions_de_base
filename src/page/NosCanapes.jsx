import ProductCard from "../partial/ProductCard";
import Header from "../partial/Header";
import Footer from "../partial/Footer";

const NosCanapes = () => {

    const sofas = [
        {
            id: 1,
            title: "Canapé cuir", price: 1000,
            rating: 4.5,
            isPublished: true,
            image: "https://www.stanfield.fr/1894/canape-cuir-vintage-3-places-theodore.jpg"
        },
        {
            id: 2,
            title: "Canapé tissu",
            price: 800,
            rating: 3.5,
            isPublished: false,
            image: "https://www.oviala.com/62443-large_default/canape-en-tissu-chine.jpg?v=1689673939"
        },
        {
            id: 3, title: "Canapé velours",
            price: 1200,
            rating: 5,
            isPublished: true,
            image: "https://cdn.conforama.fr/prod/product/image/2cc7/G_CNF_D21586846_B.jpeg"
        },
        {
            id: 4,
            title: "Canapé lin",
            price: 900,
            rating: 2.5,
            isPublished: false,
            image: "https://www.decostock.fr/42394-large_default/canape-convertible-en-lin-linum.jpg"
        },
        {
            id: 5,
            title: "Canapé cotton",
            price: 900,
            rating: 2.2,
            isPublished: true,
            image: "https://www.basika.fr/photos/100031014-1/canapes-convertibles-cotton-jeans-102-jeans-104-l-212-x-h-90-x-p-97.webp"
        },
        {
            id: 6,
            title: "Canapé cuir de vache",
            price: 600,
            rating: 1.5,
            isPublished: false,
            image: "https://www.universducuir.com/ori-angelo-salon-3-2-100-cuir-buffle-ou-vachette-578_1266.jpg"
        },
        {
            id: 7,
            title: "Canapé cuir de chèvre",
            price: 700,
            rating: 2,
            isPublished: true,
            image: "https://cdn20.pamono.com/p/g/1/2/1273918_qmeaydmp8c/canape-ds46-en-cuir-de-buffle-marron-de-de-sede-set-de-8-3.jpg"
        },
    ];
    return(
        <>
            <Header/>
            <h1>Tout nos canapés</h1>
            <div style={{display: "flex", flexWrap: "wrap"}}>
                {sofas.map((sofa) => {
                    return (
                        <ProductCard product={sofa} style={{width:"200px"}} />
                    )
                }) }
            </div>
            <Footer />
        </>
    )
}

export default NosCanapes;