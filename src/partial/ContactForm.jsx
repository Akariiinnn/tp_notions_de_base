const ContactForm = () => {

    const handleContactSubmit = (event) => {
        event.preventDefault();
        const message = event.target.message.value;
        const name = event.target.email.value;
        const raison = event.target.raison.value;

        console.log(name, raison, message)
    }

    return (
        <form onSubmit={handleContactSubmit}>
            <label>
                Email:
                <input type={"text"} name={"email"} />
            </label>
            <label>
                <p>Raison</p>
                <select name={"raison"}>
                    <option value={"prod"}>Produits</option>
                    <option value={"job"}>Job</option>
                    <option value={"part"}>Partenariat professionnel</option>
                </select>
            </label>
            <label>
                <p>Message:</p>
                <textarea name={"message"}/>
            </label>
            <label>
                <br />
                <input type={"submit"}></input>
            </label>
        </form>
    )
}

export default ContactForm;