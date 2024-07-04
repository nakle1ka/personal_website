import { useEffect, useState } from "react";

import MyButton from "../MyButton/MyButton";

import classes from "./Header.module.css"

const Header = ({ logo, refs }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [aboutRef, skillRef, portfolioRef] = refs

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
                    <li className={classes.li}><button className={classes.list_item} onClick={() => aboutRef.current.scrollIntoView({behavior: "smooth"})}>About</button></li>
                    <li className={classes.li}><button className={classes.list_item} onClick={() => skillRef.current.scrollIntoView({behavior: "smooth"})}>Skills</button></li>
                    <li className={classes.li}><button className={classes.list_item} onClick={() => portfolioRef.current.scrollIntoView({behavior: "smooth"})}>Portfolio</button></li>
                    <li className={classes.li}><button className={classes.list_item} onClick={() => aboutRef.current.scrollIntoView({behavior: "smooth"})}>Contacts</button></li>
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