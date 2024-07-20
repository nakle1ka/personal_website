import classes from "./ContactElement.module.css"

const ContactElement = ({ icon, text, href }) => {
    return (
        <div className={classes.contactElement}>
            <img src={icon} alt="" className={classes.icon}/>
            {href &&
                <a href={href} className={classes.text}>{text}</a>
            }
            {!href &&
                <p className={classes.text}>{text}</p>
            }
        </div>
    );
}

export default ContactElement;