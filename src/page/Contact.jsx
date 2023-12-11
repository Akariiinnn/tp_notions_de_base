import Header from "../partial/Header";
import Footer from "../partial/Footer";
import ContactCards from "../partial/ContactCards";
import ContactForm from "../partial/ContactForm";

const Contact = () => {

    const contacts = [
        {
            id: 1,
            name: "Quentin ROBERT",
            email: "********@gmail.com",
            phone: "01 02 03 04 05"
        },
        {
            id: 2,
            name: "Sylvie Dupont",
            email: "********@gmail.com",
            phone: "01 02 03 04 05"
        },
        {
            id: 3,
            name: "Gerard BOUNECHAR",
            email: "********@gmail.com",
            phone: "01 02 03 04 05"
        },
        {
            id: 4,
            name: "Yassine BOUZIANE",
            email: "********@gmail.com",
            phone: "01 02 03 04 05"
        },
        {
            id: 5,
            name: "Léo PELLETIER",
            email: "********@gmail.com",
            phone: "01 02 03 04 05"
        },
        {
            id: 6,
            name: "Jean IZARD",
            email: "********@gmail.com",
            phone: "01 02 03 04 05"
        },
        {
            id: 7,
            name: "Christophe LAMBERT",
            email: "********@gmail.com",
            phone: "01 02 03 04 05"
        }
    ]

    return (
        <>
            <Header/>
            <ContactCards contacts = {contacts} />
            <ContactForm/>
            <Footer/>
        </>
    )
}

export default Contact;