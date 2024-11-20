import classes from "./TopNav.module.css"

function TopNav() {
    return (
        <div className={classes.topnav}>
            <div className={classes.title}>
                <h2>Bigtime Products</h2>
            </div>
            <div className={classes.links}>
                <p>Home</p>
                <p>About</p>
                <p>Products</p>
            </div>
        </div>
    );
}

export default TopNav;
