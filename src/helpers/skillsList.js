import htmlSVG from "../images/skills/html.svg"
import cssSVG from "../images/skills/css.svg"
import scssSVG from "../images/skills/scss.svg"
import jsSVG from "../images/skills/js.svg"
import reactSVG from "../images/skills/react.svg"
import nodeSVG from "../images/skills/node-js.svg"
import mongoSVG from "../images/skills/mongo.svg"
import gitSVG from "../images/skills/git.svg"

import teamSVG from "../images/skills/soft/team.svg"
import timeSVG from "../images/skills/soft/time.svg"
import wheelSVG from "../images/skills/soft/wheel.svg"
import criticismSVG from "../images/skills/soft/criticism.svg"
import skillSVG from "../images/skills/soft/skill.svg"

const skillList = {
    hard: [
        {
            id: "1",
            image: htmlSVG,
            text: "HTML5, EJS, JSX"
        },
        {
            id: "2",
            image: cssSVG,
            text: "CSS3"
        },
        {
            image: scssSVG,
            text: "SCSS(SASS)"
        },
        {
            id: "3",
            image: jsSVG,
            text: "JavaScript"
        },
        {
            id: "4",
            image: reactSVG,
            text: "ReactJS"
        },
        {
            id: "5",
            image: nodeSVG,
            text: "NodeJS, ExpressJS"
        },
        {
            id: "6",
            image:  mongoSVG,
            text: "MongoDB"
        },
        {
            id: "7",
            image: gitSVG,
            text: "Git, GitHub"
        },
    ],
    soft: [
        {
            id: "8",
            image: teamSVG,
            text: "Have experience working in a team"
        },
        {
            id: "9",
            image: timeSVG,
            text: "I am responsible about deadlines"
        },
        {
            id: "10",
            image: wheelSVG,
            text: "I am attentive to the details of the terms of reference"
        },
        {
            id: "11",
            image: criticismSVG,
            text: "I welcome constructive criticism"
        },
        {
            id: "12",
            image: skillSVG,
            text: "I am motivated to improve my skills"
        },
    ]
}

export default skillList