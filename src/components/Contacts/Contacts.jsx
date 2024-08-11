import ContactElement from "../ContactElement/ContactElement";

import contactsList from "../../helpers/contactsList";

import classes from "./Contacts.module.css"

const Contacts = () => {
    return (
        <section className={classes.contacts} id="Contacts">
            <h2 className={classes.title}>Contacts</h2>
            <ul>
                {contactsList.map(el =>
                    <li key={el.text}>
                        <ContactElement
                            icon={el.icon}
                            text={el.text}
                            href={el.href}
                        />
                    </li>
                )}
            </ul>
        </section>
    );
}

export default Contacts;