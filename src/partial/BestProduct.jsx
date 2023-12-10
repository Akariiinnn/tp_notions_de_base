import ProductCard from "./ProductCard";

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

    const sofas = sofasProp.sofasProp;
    const bestSofa = findHighestRatingObject(sofas);

    const sectionCSS = {
        width: "150%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "5%"
    }

    return (
        <section style={sectionCSS}>
            <h1>Le meilleur de nos canapés</h1>
            <ProductCard product={bestSofa} style={{}} />
        </section>
    )
}

export default BestProduct;