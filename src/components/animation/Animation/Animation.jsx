import classes from "./Animation.module.css"

const Animation = () => {
    return (
        <div className={classes.animationContainer}>
            <div className={classes.AnimationElement} id={classes.One}></div>
            <div className={classes.AnimationElement} id={classes.Two}></div>
            <div className={classes.AnimationElement} id={classes.Three}></div>
        </div>
    );
}

export default Animation;