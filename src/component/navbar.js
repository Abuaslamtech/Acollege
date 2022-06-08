import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="navbar">
            <h2> <span className="a">Aco</span>llege</h2>
            <ul className="menu">
                <li><Link to={'/acollege'}>Home</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/contact'}>Contact</Link></li>
            </ul>
        </div>
     );
}
 
export default Navbar;