const BestProduct = (sofasProp) => {

    const findHighestRatingObject = (data) => {
        // Ensure the array is not empty
        if (data.length === 0) {
            return null;
        }

        // Initialize variables to store the object with the highest rating
        let highestRatingObject = data[0];

        // Iterate through the array to find the object with the highest rating
        for (let i = 1; i < data.length; i++) {
            // Compare ratings and update highestRatingObject if necessary
            if (data[i].rating > highestRatingObject.rating) {
                highestRatingObject = data[i];
            }
        }

        return highestRatingObject;
    };

    const articleCSS = () => {
        return {
            width: "20%"
        };
    }

    const sofas = sofasProp.sofasProp;
    const bestSofa = findHighestRatingObject(sofas);

    return (
        <section>
            <h1>Le meilleur de nos canapés</h1>
            <article key={bestSofa.id} className={"highlighted"} style={articleCSS()}>
                <img src={bestSofa.image} alt={bestSofa.title}/>
                <h2>{bestSofa.title}</h2>
                <p>{bestSofa.price}€</p>
                <p>{bestSofa.rating}/5</p>
            </article>
        </section>
    )
}

export default BestProduct;