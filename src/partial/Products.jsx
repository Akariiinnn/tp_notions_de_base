import LastProducts from "./LastProducts";
import BestProduct from "./BestProduct";

const Products = (sofasProp) => {
    const sofas = sofasProp.sofasProp;
    const productsCSS = {
        display: "flex",
        alignItems: "center"
    }

    return (
        <div style={productsCSS}>
            <BestProduct sofasProp = {sofas}/>
            <LastProducts sofasProp = {sofas}/>
        </div>
    )
}

export default Products;