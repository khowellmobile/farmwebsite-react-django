import classes from "./CenterContent.module.css";
import textCardClasses from "../elements/TextCard.module.css";
import TextCard from "../elements/TextCard";
import img0 from "../../images/Tractor.jpg";
import CardCarousel from "../elements/CardCarousel";

function CenterContent() {
    return (
        <div className={classes.centercontent}>
            <div className={classes.titleDiv}>
                <h1>Landing Page Title</h1>
                <h4>Small Farm. Quality Cattle.</h4>
                <img className={classes.titleImage} src={img0} alt="tractor" />
            </div>
            <div className={classes.cardSection}>
                <h2>Services Offered</h2>
                <h4>We Offer a Range of Services</h4>
                <div className={classes.cards}>
                    <TextCard className={textCardClasses.small}>
                        <h3>Cattle for Sale</h3>
                        <p>
                            From highlands to browns we have a great selection
                            of top tier cattle.
                        </p>
                    </TextCard>
                    <TextCard className={textCardClasses.small}>
                        <h3>Home Grown Honey</h3>
                        <p>
                            we produce a select amount of honey to support bees
                            and farmers across Ohio.
                        </p>
                    </TextCard>
                    <TextCard className={textCardClasses.small}>
                        <h3>Manure and Fertilizer</h3>
                        <p>Top tier cattle create top tier fertilizer.</p>
                    </TextCard>
                </div>
            </div>
            <div className={classes.carousel}>
                <CardCarousel />
            </div>
        </div>
    );
}

export default CenterContent;
