import classes from "./TextCard.module.css";

const TextCard = ({ children, className }) => {
    return (
    <div className={`${classes.textCard} ${className}`}>
        {children}
    </div>
    )
};

export default TextCard;
