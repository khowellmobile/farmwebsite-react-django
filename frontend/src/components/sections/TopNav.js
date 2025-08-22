import classes from "./TopNav.module.css";

const TopNav = ({ backgroundImg, isHalfHeight }) => {
    const backgroundStyle = {
        backgroundImage: `url(${backgroundImg})`,
        height: isHalfHeight ? "50vh" : "100vh",
    };

    return (
        <div className={classes.mainContainer} style={backgroundStyle}>
            <div className={classes.navBar}>
                <div className={classes.logo}></div>
                <div className={classes.links}>
                    <a href="/">HOME</a>
                    <a href="/store">STORE</a>
                    <a href="/events">EVENTS</a>
                    <a>HOURS</a>
                    <a>CONTACT US</a>
                </div>
            </div>
            <div className={classes.centerText}>
                <h1>
                    WELCOME TO <br />
                    MOONSHADOW CATTLE FARMS
                </h1>
            </div>
        </div>
    );
};

export default TopNav;
