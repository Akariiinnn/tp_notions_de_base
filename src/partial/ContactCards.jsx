import ContactCard from "./ContactCard";

const ContactCards = (contactsProp) => {
    //use the data from the props and the ContactCard component to display the contact cards

    const contacts = contactsProp.contacts;

    return (
        // make a map of the contacts array
        // for each contact in the array, return a ContactCard component
        // pass the contact data to the ContactCard component
        // use the id as the key
        // display the contact cards
        <div className="contacts">
            {contacts.map(contact => {
                return (
                    <ContactCard contact={contact}/>
                )
            })}
        </div>
    )
}

export default ContactCards;