import { useEffect, useState } from "react";

import MyButton from "../MyButton/MyButton";
import Navbar from "../Navbar/Navbar";

import classes from "./Header.module.css"

import hamburgerImg from "./../../../images/hamburger_menu.svg"
import HiddenNav from "../HiddenNav/HiddenNav";

const Header = ({ logo }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isShowHiddenNav, setIsShowHiddenNav] = useState(false)

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

            <Navbar />

            <MyButton
                text="Go to GitHub"
                backgroundSetting="transparent"
                onClickFunction={() => window.open('https://github.com/nakle1ka', '_blank')}
            />

            <button
                className={classes.showNavBtn}
                onClick={() => setIsShowHiddenNav(prev => !prev)}
            >
                <img src={hamburgerImg} alt="" />
            </button>

            <HiddenNav isShowState={[isShowHiddenNav, setIsShowHiddenNav]} />

        </header>
    );
}

export default Header;