import { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";

import MyButton from "../UI/MyButton/MyButton";

import classes from "./About.module.css"

import laptop from "../../images/big_img/laptop_img.png"
import contact from "../../images/big_img/contact_img.png"
import circleGraph from "../../images/big_img/circleGraph_img.png"
import picture from "../../images/big_img/picture_img.png"

const About = ({ aboutRef }) => {
    const [isShowButton, setIsShowButton] = useState(false)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsShowButton(true)
        }, 10000)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [])

    return (
        <section id={classes.about} ref={aboutRef}>
            <div id={classes.greeting}>
                <h2 className={classes.title}>
                    <ReactTyped
                        strings={[`<span class=${classes.blueSpan}>Hello!</span> My name is Artem`]}
                        typeSpeed={100}
                        startDelay={1800}
                        showCursor={false}
                    />
                </h2>
                <h5 className={classes.subtitle}>
                    <ReactTyped
                        strings={[`I am a <span class=${classes.redSpan}>frontend developer</span>`]}
                        typeSpeed={100}
                        startDelay={6000}
                        showCursor={false}
                    />
                </h5>

                {isShowButton && <MyButton text="My achievements" backgroundSetting="filled" />}
            </div>

            <div id={classes.image_container}>
                <div id={classes.image}>
                    <img src={laptop} alt="" className={classes.laptop} />
                    <img src={contact} alt="" className={classes.contact} />
                    <img src={circleGraph} alt="" className={classes.circleGraph} />
                    <img src={picture} alt="" className={classes.picture} />

                    <div className={classes.redTriangle} id={classes.one}></div>
                    <div className={classes.redTriangle} id={classes.two}></div>
                    <div className={classes.blueTriangle} id={classes.three}></div>
                </div>
            </div>
        </section>
    );
}

export default About;