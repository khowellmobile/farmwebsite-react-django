import { useState } from "react";
import classes from "./EventCard.module.css";

const EventCard = ({ img, title, date,  desc }) => {
    const [isHovered, setIsHovered] = useState(false);
    //POPUP FOR EMAILING ABOUT?

    const style = {
        backgroundImage: `url(${img})`,
    };

    return (
        <div className={classes.mainContainer} style={style}>
            <div className={classes.info}>
                <div className={classes.headerInfo}>
                    <h3>{title}</h3>
                    <div className={classes.seperatorV} />
                    <p>{date}</p>
                </div>
                <p>{desc}</p>
            </div>
        </div>
    );
};

export default EventCard;