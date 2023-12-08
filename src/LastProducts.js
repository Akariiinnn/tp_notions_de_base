const LastProducts = (sofasProp) => {

    const sofas = sofasProp.sofasProp;
    const lastSofas = sofas.slice(-5);

    const articleCSS = () => {
        return {
            width: "20%"
        };
    }

    return (
        <>
            <h1>Nos derniers canapés</h1>
            <section>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                {lastSofas.map((sofa) => {
                    return (
                        <article className={"highlighted"} key={sofa.id} style={articleCSS()}>
                            <img src={sofa.image} alt={sofa.title}/>
                            <h2>{sofa.title}</h2>
                            <p>{sofa.price}€</p>
                            <p>{sofa.rating}/5</p>
                        </article>
                    )
                })}
                </div>
            </section>
        </>
    )
}

export default LastProducts;