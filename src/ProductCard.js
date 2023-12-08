const ProductCard = ({product, style}) => {
    return (
        <article className={"highlighted"} style={style}>
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.price}€</p>
            <p>{product.rating}/5</p>
        </article>
    )
}

export default ProductCard;