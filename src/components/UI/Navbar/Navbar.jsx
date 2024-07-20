import classes from "./Navbar.module.css"

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <ul className={classes.ul}>
                <li className={classes.li}><a href="#About" className={classes.list_item}>About</a></li>
                <li className={classes.li}><a href="#Skills" className={classes.list_item}>Skills</a></li>
                <li className={classes.li}><a href="#Portfolio" className={classes.list_item}>Portfolio</a></li>
                <li className={classes.li}><a href="#Contacts" className={classes.list_item}>Contacts</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;