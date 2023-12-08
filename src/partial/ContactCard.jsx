const ContactCard = (contactProp) => {

    const contact = contactProp.contact;

    const cardCSS = {
        backgroundColor: "white",
        borderRadius: "5px",
        padding: "10px",
        margin: "10px",
        boxShadow: "0 2px 4px 0 rgba(0,0,0,0.2)",
        display: "flex",
        alignItems: "center"
    }


    const imgCSS = {
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        objectFit: "cover",
        marginRight: "10px"
    }

    return (
        <div className="contact-card" style={cardCSS}>
            <img src={`/images/${contact.id}.png`} alt="profile" style={imgCSS}/>
            <div className="user-details">
                <p>Name: <span>{contact.name}</span></p>
                <p>Email: <span>{contact.email}</span></p>
                <p>Phone: <span>{contact.phone}</span></p>
            </div>
        </div>
    )
}

export default ContactCard