const Header = () => {
    const navCSS = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        background: "#cfd8dc",
        paddingRight: "2%"
    };
    const ulCSS = {
        display: "flex",
        listStyle: "none",
        alignItems: "center"
    };
    const liCSS = {
        paddingRight: "1rem"
    }

    const profile = {
        lastName: "Robert",
        firstName: "Quentin",
        age: 20,
        job: "Vendeur"
    }

    return (
        <header>
            <nav style={navCSS}>
                <img alt= "" style={{"width": "8%"}} src="https://media.discordapp.net/attachments/981832774157762570/1182642390759116820/akariiinnn_logo_for_a_sofa_company_simple_style_2e741d70-b797-42bb-b7d2-09fce2dc5f4e.png?ex=6585708e&is=6572fb8e&hm=06192401ba270c875bc8a83e1bea4297df2ad8840856c16b613022dd2d4cf14f&=&format=webp&quality=lossless&width=670&height=670" />
                <h1>Les canapés de génie</h1>
                <ul style={ulCSS}>
                    <a href={"/"}><li style={liCSS}>Accueil</li></a>
                    <a href={"/nos_canapes"}><li style={liCSS}>Nos canapés</li></a>
                    <a href={"/contact"}><li style={liCSS}>Contact</li></a>
                    <a href={"."}><li style={liCSS}>Se connecter</li></a>
                </ul>
                <p style={{top: "50%" }}>{profile.firstName} {profile.lastName} : {profile.job}</p>
            </nav>
        </header>
    );
}

export default Header;