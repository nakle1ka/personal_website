import PortfolioElement from "../PortfolioElement/PortfolioElement";

import portfolioList from "../../helpers/portfolioList";

import classes from "./Portfolio.module.css"

const Portfolio = () => {
    return (
        <section className={classes.portfolio} id="Portfolio">
            <h2 className={classes.title}>Portfolio</h2>
            <div className={classes.portfolioElements}>
                {portfolioList.map(element =>
                    <PortfolioElement
                        image={element.generalImage}
                        name={element.name}
                        desc={element.description}
                        skills={element.skills}
                        key={element.name}
                    />
                )}
            </div>
        </section>
    );
}

export default Portfolio;