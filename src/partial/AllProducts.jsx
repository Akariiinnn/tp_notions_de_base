import ProductCard from "./ProductCard";

const AllProducts = (sofasProp) => {
    const sofas = sofasProp.sofas;
    return (
        <section>
            <h1>Tout nos canapés</h1>
            <div style={{display: "flex", flexWrap: "wrap"}}>
                {sofas.map((sofa) => {
                    return (
                        <ProductCard product={sofa} style={{width:"400px"}} />
                    )
                }) }
            </div>
        </section>
    )
}

export default AllProducts;