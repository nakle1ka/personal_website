import classes from "./MyButton.module.css"

const MyButton = ({ backgroundSetting, text, onClickFunction }) => {
    let currentClass = [classes.myButton]
    backgroundSetting === "transparent" ? currentClass.push(classes.transparentBg) : currentClass.push(classes.filledBg)

    return (
        <button className={currentClass.join(" ")} onClick={onClickFunction}>
            {text}
        </button>
    );
}

export default MyButton;