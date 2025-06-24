import classes from "./TopNav.module.css";

const TopNav = () => {
    return (
        <div className={classes.mainContainer}>
            <div className={classes.navBar}>
                <div className={classes.logo}></div>
                <div className={classes.links}>
                    <p>Home</p>
                    <p>Store</p>
                    <p>Events</p>
                    <p>Hours</p>
                    <p>Contact Us</p>
                </div>
            </div>
            <div className={classes.centerText}>
                <h1>WELCOME TO <br/>MOONSHADOW CATTLE FARMS</h1>
            </div>
        </div>
    );
};

export default TopNav;
