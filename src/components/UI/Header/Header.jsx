import { useEffect, useState } from "react";

import MyButton from "../MyButton/MyButton";

import classes from "./Header.module.css"

const Header = ({ logo }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={
            isScrolled
                ? [classes.default, classes.scrolled].join(" ")
                : classes.default
        }>
            <img src={logo} alt="logo" className={classes.logo} />

            <nav className={classes.nav}>
                <ul className={classes.ul}>
                    <li className={classes.li}><button className={classes.list_item}>About</button></li>
                    <li className={classes.li}><button className={classes.list_item}>Skills</button></li>
                    <li className={classes.li}><button className={classes.list_item}>Portfolio</button></li>
                    <li className={classes.li}><button className={classes.list_item}>Contacts</button></li>
                </ul>
            </nav>

            <MyButton
                text="Go to GitHub"
                backgroundSetting="transparent"
                onClickFunction={() => window.open('https://github.com/nakle1ka', '_blank')}
            />
        </header>
    );
}

export default Header;