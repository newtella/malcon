import classes from './NavItems.module.css'
import NavItem from './NavItem'

const navItems = (props) => {
    const toolbarArray =[
        {route: "/", name: "Dashboard"},
        {route: "/about", name: "About"},
        {route: "/products", name: "Products"}
    ];
    const links = toolbarArray.map((navElement, index) => 
        <NavItem key={navElement.name} link = {navElement.route}>{navElement.name}</NavItem>
    );
    return(
        <ul className={classes.NavItems}>
            {links}
        </ul>
    )
}
export default navItems;