const Article = () => {
    const articleCSS = {
        display: "flex",
        alignItems: "flex-start",
        paddingBottom: "8rem",
        paddingTop: "3rem"
    };
    const articleContentCSS = { marginLeft: "20px" };
    return (
        <article style={articleCSS}>
            <div style={articleContentCSS}>
                <h2>Les canapés de génie</h2>
                <p>Nous sommes une entreprise de canapés basée sur Bordeaux, nos canapés sont fait main et notre savoir faire est transmis de père en fils.</p>
            </div>
        </article>
    )
}

export default Article;