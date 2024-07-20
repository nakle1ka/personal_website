import classes from "./HiddenNav.module.css"

const HiddenNav = ({ isShowState }) => {
    const [isShow, setIsShow] = isShowState

    let currentClass = [classes.hiddenNav]

    if (isShow)
        currentClass = [classes.hiddenNav, classes.open]

    return (
        <div className={currentClass.join(" ")}>
            <nav className={classes.nav}>
                <ul className={classes.ul}>
                    <li className={classes.li} onClick={() => setIsShow(false)}><a href="#About" className={classes.list_item}>About</a></li>
                    <li className={classes.li} onClick={() => setIsShow(false)}><a href="#Skills" className={classes.list_item}>Skills</a></li>
                    <li className={classes.li} onClick={() => setIsShow(false)}><a href="#Portfolio" className={classes.list_item}>Portfolio</a></li>
                    <li className={classes.li} onClick={() => setIsShow(false)}><a href="#Contacts" className={classes.list_item}>Contacts</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default HiddenNav;