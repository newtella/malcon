import classes from './Toolbar.module.css'
import NavItems from '../NavItems/NavItems'

const toolbar = (props) =>
{
    return(
        <header className={classes.header}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-3 col-lg-2">
                        <div className={classes.header__logo}>
                        <a href="./index.html"></a>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7">
                        <nav className={classes.header__menu}>
                            <NavItems/>
                        </nav>
                    </div>
                    <div className="col-lg-3">
                        <div className={classes.header__right}>
                            <ul className={classes.header__right__widget}>
                                <li><span className="icon_search search-switch" />
                                    <a href="#"><i className="fa fa-shopping-cart" /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    );
}
export default toolbar;
