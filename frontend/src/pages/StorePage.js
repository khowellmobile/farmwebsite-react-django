import TopNav from "../components/sections/TopNav";
import classes from "./StorePage.module.css";

import navImg from "../assets/images/scenicImage0.jpg";
import { useState } from "react";
import CattleCard from "../components/elements/CattleCard";

import img0 from "../assets/images/Bambi.jpg";

const StorePage = () => {
    const [cattleList, setCattleList] = useState(new Array(12).fill(null));

    const cattleTitles = [
        "Scott",
        "Daisy",
        "Bartholomew",
        "Clementine",
        "Buster",
        "Penelope",
        "Gerald",
        "Bella",
        "Max",
        "Lucy",
        "Charlie",
        "Molly",
    ];

    const cattleDescs = [
        "678 lb Highland Steer",
        "Sweet milking cow",
        "Big, strong bull",
        "Calf for adoption",
        "Friendly farm companion",
        "Prize-winning heifer",
        "Robust breeding bull",
        "Gentle dairy cow",
        "Young steer for beef",
        "Playful calf",
        "Sturdy farm asset",
        "Future show stopper",
    ];

    return (
        <div className={classes.mainContainer}>
            <TopNav backgroundImg={navImg} isHalfHeight={true} />
            <div className={classes.header}>
                <h2>Check out those Mooooos</h2>
            </div>
            <div className={classes.productListing}>
                {cattleList && cattleList.length > 0 ? (
                    cattleList.map((cattle, index) => {
                        const title = cattleTitles[index % cattleTitles.length];
                        const desc = cattleDescs[index % cattleDescs.length];
                        return (
                            <CattleCard
                                key={index}
                                img={img0}
                                title={title}
                                desc={desc}
                            />
                        );
                    })
                ) : (
                    <p>No Cattle</p>
                )}
            </div>
        </div>
    );
};

export default StorePage;
