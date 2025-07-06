import { useState } from "react";
import classes from "./CattleCard.module.css";

const CattleCard = ({ img, title, desc }) => {
    const [isHovered, setIsHovered] = useState(false);
    //POPUP FOR EMAILING ABOUT?

    const style = {
        backgroundImage: `url(${img})`,
    };

    return (
        <div className={classes.mainContainer} style={style}>
            <div className={classes.info}>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
        </div>
    );
};

export default CattleCard;
