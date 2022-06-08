import { Link } from "react-router-dom";

const Headimage = () => {
    return ( 
        <div className="headimage">
            <div className="headtxt">
                <h2> Enroll</h2>
                <h3> Your Child now</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo facere mollitia aliquid? Aliquam cumque repellendus itaque molestiae eius doloribus sunt dolor harum unde dolorum, porro exercitationem tempore, voluptatum laudantium amet!</p>
                <button className="act"><Link to={'/contact'}>Enroll Now</Link> </button>
                <button className="nact"><Link to={'/about'}> Read More </Link></button>
            </div>
        </div>
     );
}
 
export default Headimage;