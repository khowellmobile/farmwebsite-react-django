import classes from "./HomePage.module.css";

import BotNav from "../components/sections/BotNav";
import TopNav from "../components/sections/TopNav";

import farmers from "../assets/images/farmers.png";

function HomePage() {
    return (
        <div>
            <TopNav />
            <div className={classes.story}>
                <h2>
                    Moonshadow Cattle is a traditional family farm, committed to
                    naturally-raised beef and a deep respect for the land.
                </h2>
                <br></br>
                <p>
                    For generations, the gentle lowing of cattle and the whisper
                    of the wind through the Ohio fields have been the heartbeat
                    of Moonshadow Cattle. Founded by a simple dream under a
                    vast, starlit sky, our family farm has grown into a
                    testament to dedication, sustainable practices, and a deep
                    respect for the land and our animals.
                    <br></br>
                    <br></br>
                    <img
                        src={farmers}
                        alt="Loving farmers at Moonshadow Cattle"
                        style={{
                            float: "left",
                            marginRight: "1rem",
                            width: "350px",
                            height: "auto",
                        }}
                    />
                    The name "Moonshadow" isn't just poetic; it reflects the
                    rhythm of our farm. The cattle graze peacefully through
                    sun-drenched days, and as twilight descends, long shadows
                    stretch across the pastures under the watchful eye of the
                    moon. It's during these quieter moments that the true
                    essence of our farm emerges – a tranquil harmony between
                    nature and nurture. We believe in raising healthy, robust
                    cattle with ample space to roam and a diet of rich, locally
                    sourced forage. <br></br>
                    <br></br>Our commitment to low-stress handling ensures the
                    well-being of our herd, resulting in the exceptional quality
                    that defines Moonshadow Cattle. More than just a business,
                    our farm is a legacy, a connection to the land, and a
                    promise of wholesome, naturally raised beef for your table.
                    We invite you to share in the story of Moonshadow Cattle,
                    where tradition meets the gentle grace of the night.More
                    than just a business, our farm is a legacy, a connection to
                    the land, and a promise of wholesome, naturally raised beef
                    for your table.
                </p>
            </div>
            <div className={classes.pictureLinks}>
                <div className={classes.pictureLink}>
                    <div className={classes.caption}>
                        <h2>Shop Cattle</h2>
                        <p>Checkout our top tier free range cattle.</p>
                        <a>Learn More ⟶</a>
                    </div>
                </div>
                <div className={classes.pictureLink}>
                    <div className={classes.caption}>
                        <h2>Meet the Family</h2>
                        <p>Read the stories of all our furry friends!</p>
                        <a>Learn More ⟶</a>
                    </div>
                </div>
                <div className={classes.pictureLink}>
                    <div className={classes.caption}>
                        <h2>Come Visit</h2>
                        <p>Contact and Shipping Information</p>
                        <a>Learn More ⟶</a>
                    </div>
                </div>
                <div className={classes.pictureLink}>
                    <div className={classes.caption}>
                        <h2>Events</h2>
                        <p>Find out what shows we are winning this year!</p>
                        <a>Learn More ⟶</a>
                    </div>
                </div>
            </div>
            <BotNav />
        </div>
    );
}

export default HomePage;
