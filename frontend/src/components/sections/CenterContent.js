import classes from "./CenterContent.module.css";
import textCardClasses from "../elements/TextCard.module.css"
import TextCard from "../elements/TextCard";
import img0 from "../../images/Tractor.jpg";

function CenterContent() {
    return (
        <div className={classes.centercontent}>
            <div className={classes.titleDiv}>
                <h1>Landing Page Title</h1>
                <h4>Small Farm. Quality Cattle.</h4>
                <img
                    className={classes.titleImage}
                    src={img0}
                    alt="tractor"
                />
            </div>
            <div className={classes.cardSection}>
                <h2>Services Offered</h2>
                <h4>We Offer a Range of Services</h4>
                <div className={classes.cards}>
                    <TextCard className={textCardClasses.small}>
                        <p>Hello</p>
                    </TextCard>
                    <TextCard className={textCardClasses.small}>
                        <p>Hi</p>
                    </TextCard>
                    <TextCard className={textCardClasses.small}>
                        <p>Bye</p>
                    </TextCard>
                    <TextCard className={textCardClasses.small}>
                        <p>Bye</p>
                    </TextCard>
                </div>
            </div>
            <div id="carousel"></div>
        </div>
    );
}

export default CenterContent;
