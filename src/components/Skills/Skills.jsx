import skillList from "../../helpers/skillsList";
import SkillElement from "../SkillElement/SkillElement";

import classes from "./Skills.module.css"

const Skills = () => {
    return (
        <section className={classes.skills} id="Skills">
            <header id={classes.titleHeader}>
                <h2 className={classes.title}>Skills</h2>
            </header>

            <div className={classes.skillGroup}>
                <h3 className={classes.skillGroupTitle} id={classes.hardTitle}>Hard</h3>
                <div className={classes.hardElements}>
                    {skillList.hard.map(element =>
                        <SkillElement
                            image={element.image}
                            text={element.text}
                            key={element.id}
                        />)
                    }
                </div>
            </div>

            <div className={classes.skillGroup}>
                <h3 className={classes.skillGroupTitle} id={classes.softTitle}>Soft</h3>
                <div className={classes.softElements}>
                    {skillList.soft.map(element =>
                        <SkillElement
                            image={element.image}
                            text={element.text}
                            key={element.id}
                        />)
                    }
                </div>
            </div>
        </section>
    );
}

export default Skills;