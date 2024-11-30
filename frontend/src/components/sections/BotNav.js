import classes from "./BotNav.module.css";

function BotNav() {
    return (
        <div className={classes.botnav}>
            <div className={classes.botnavleft}>
                <div>
                    <h3>Bigtime Products</h3>
                    <p>123 Fake St.</p>
                    <p>Columbus, OH 12345</p>
                </div>
                <div className={classes.logoContainer}>
                    <div className={classes.logo}>
                        <p>A</p>
                    </div>
                    <div className={classes.logo}>
                        <p>B</p>
                    </div>
                    <div className={classes.logo}>
                        <p>C</p>
                    </div>
                    <div className={classes.logo}>
                        <p>D</p>
                    </div>
                </div>
            </div>
            <div className={classes.botnavright}>
                <div className={classes.linkGrid}>
                    <div className={classes.gridItem}><strong>Related Sites</strong></div>
                    <div className={classes.gridItem}><p>Example Link</p></div>
                    <div className={classes.gridItem}><p>Example Link</p></div>
                    <div className={classes.gridItem}><p>Example Link</p></div>
                    <div className={classes.gridItem}><p><strong>Extra Resources</strong></p></div>
                    <div className={classes.gridItem}><p>Example Link</p></div>
                    <div className={classes.gridItem}><p>Example Link</p></div>
                    <div className={classes.gridItem}><p>Example Link</p></div>
                </div>
            </div>
        </div>
    );
}

export default BotNav;
