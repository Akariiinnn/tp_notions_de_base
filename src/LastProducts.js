import ProductCard from "./ProductCard";

const LastProducts = (sofasProp) => {

    const sofas = sofasProp.sofasProp.filter((sofa) => sofa.isPublished);
    const lastSofas = sofas.slice(-3);

    return (
        <section>
            <h1>Nos derniers canapés</h1>
            <div style={{display: "flex", flexWrap: "wrap"}}>
                {lastSofas.map((sofa) => {
                    return (
                        < ProductCard product={sofa} style={{width: "20%"}}/>
                    )
                })}
            </div>
        </section>
    )
}

export default LastProducts;