import financeGeneral from "../images/portfolio/finance/general.jpg"
import financeProfile from "../images/portfolio/finance/profile.png"

import keyboardGeneral from "../images/portfolio/keyboard/keyboard.png"

const portfolioList = [
    {
        id: "1",
        name: "Finance Counter",
        description: "This website will help you calculate your income and expenses correctly",
        skills: ["React", "NodeJS", "MongoDB"],
        generalImage: financeGeneral,
        otherImage: [financeProfile]
    },
    {
        id: "2",
        name: "Keyboard landing page",
        description: "This is a website presenting a gaming keyboard",
        skills: ["HTML", "CSS", "JavaScript"],
        generalImage: keyboardGeneral,
        otherImage: []
    }
]

export default portfolioList