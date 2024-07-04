import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import classes from "./PortfolioElement.module.css"

import htmlSVG from "../images/skills/html.svg"
import cssSVG from "../images/skills/css.svg"
import scssSVG from "../images/skills/scss.svg"
import jsSVG from "../images/skills/js.svg"
import reactSVG from "../images/skills/react.svg"
import nodeSVG from "../images/skills/node-js.svg"
import mongoSVG from "../images/skills/mongo.svg"
import gitSVG from "../images/skills/git.svg"

const PortfolioElement = ({ image, name, desc, skills }) => {
    const skillImages = {
        React: reactSVG,
        NodeJS: nodeSVG,
        MongoDB: mongoSVG,
        Git: gitSVG,
        JavaScript: jsSVG,
        SCSS: scssSVG,
        CSS: cssSVG,
        HTML: htmlSVG
    }

    const [isVisible, setIsVisible] = useState(false)

    const [ref, inView] = useInView({
        threshold: 0.3
    })

    useEffect(() => {
        if (inView) {
            setIsVisible(true)
        }
    }, [inView])

    return (
        <div
            className={isVisible
                ? classes.PortfolioElement
                : [classes.PortfolioElement, classes.hidden].join(" ")
            }
            ref={ref}
        >
            <img src={image} alt="" className={classes.image} />
            <div className={classes.info}>
                <div>
                    <h5 className={classes.name}>{name}</h5>
                    <p className={classes.desc}>{desc}</p>
                </div>
                <div className={classes.skillsContainer}>
                    {skills.map(el =>
                        <img
                            src={skillImages[el]}
                            alt=""
                            className={classes.skillImage}
                        />
                    )}
                </div>

            </div>
        </div>
    );
}

export default PortfolioElement;