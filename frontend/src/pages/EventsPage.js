import classes from "./EventsPage.module.css";

import navImg from "../assets/images/scenicImage0.jpg";
import BotNav from "../components/sections/BotNav";
import TopNav from "../components/sections/TopNav";
import EventCard from "../components/elements/EventCard";

import img0 from "../assets/images/Cats.jpg";
import img1 from "../assets/images/Sleepy.jpg";
import img2 from "../assets/images/Tractor.jpg";

const EventsPage = () => {
    return (
        <>
            <TopNav backgroundImg={navImg} isHalfHeight={true} />
            <div className={classes.mainContainer}>
                <div className={classes.header}>
                    <h2>Where We Are and What We Are Doing!</h2>
                </div>
                <div className={classes.eventListing}>
                    <EventCard
                        img={img0}
                        title={"Dublin Farmers Market"}
                        date={"June 20th, 2025"}
                        desc={
                            "Join us in Dublin to pick up honey, cucumbers, and much more!"
                        }
                    />
                    <EventCard
                        img={img1}
                        title={"Powell Arts Festival"}
                        date={"August 8th, 2025"}
                        desc={
                            "Come see local artists showcase their paintings, sculptures, and pottery."
                        }
                    />
                    <EventCard
                        img={img2}
                        title={"Columbus Jazz & Rib Fest"}
                        date={"May 14th, 2025"}
                        desc={
                            "Enjoy a weekend of live music and delicious BBQ along the Scioto Mile."
                        }
                    />
                </div>
            </div>
            <BotNav />
        </>
    );
};

export default EventsPage;
