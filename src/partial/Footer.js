const Footer = () => {
    const footerCSS = {
        display: "flex",
        alignItems: "center",
        width: "100%",
        background: "#cfd8dc",
        marginBottom: "0%"
    };
    const ulCSS = {
        marginLeft: "auto",
        listStyle: "none"
    }
    return (
        <footer style={footerCSS}>
            <img alt= "" style={{"width": "5%"}} src="https://media.discordapp.net/attachments/981832774157762570/1182642390759116820/akariiinnn_logo_for_a_sofa_company_simple_style_2e741d70-b797-42bb-b7d2-09fce2dc5f4e.png?ex=6585708e&is=6572fb8e&hm=06192401ba270c875bc8a83e1bea4297df2ad8840856c16b613022dd2d4cf14f&=&format=webp&quality=lossless&width=670&height=670" />
            <p>Copyright Quentin ROBERT - Sup De Vinci</p>
            <ul style={ulCSS}>
                <a href={"."}><li>Qui sommes-nous?</li></a>
                <a href={"."}><li>Contacts professionnels</li></a>
                <a href={"."}><li>Rejoignez-nous</li></a>
                <a href={"."}><li>Mentions légales</li></a>
            </ul>
        </footer>
    )
}

export default Footer;