import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import classes from "./SkillElement.module.css"

const SkillElement = ({ image, text }) => {
    const [isVisible, setIsVisible] = useState(false)

    const [ref, inView] = useInView({
        threshold: 0.3
    })

    useEffect(() => {
        if(inView) {
            setIsVisible(true)
        }
    }, [inView])

    return (
        <div className={isVisible ? classes.skillElement : [classes.skillElement, classes.hidden].join(" ")} ref={ref}>
            <img src={image} alt="" className={classes.skillImage}/>
            <p className={classes.skillText}>{text}</p>
        </div>
    );
}

export default SkillElement;