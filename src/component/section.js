import { Link } from "react-router-dom";

const Section = () => {
    return ( 
        <div className="section">
            <Link to={'/'} className="cont link">
                <h2>Morning Section</h2>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit, optio sapiente.</h3>
            </Link>
            <Link to={'/'}  className="cont">
                <h2>Afternoon Section</h2>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit, optio sapiente.</h3>
            </Link>
            <Link to={'/'}  className="cont">
                <h2>Evening Section</h2>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit, optio sapiente.</h3>
            </Link>
        </div>
     );
}
 
export default Section;