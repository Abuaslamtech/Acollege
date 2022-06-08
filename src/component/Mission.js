import { Link } from 'react-router-dom';
import student from '../image/africa.jpg'

const Mission = () => {
    return ( 
        <div className="mission">
            <div className="msn">
                <div className="mcont">
                    <h2 className="mtitle"><span className="mhead">Our</span> Mission and Vision</h2>
                    <p className="mtext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, distinctio officia blanditiis error quia rerum soluta optio, ipsam vel, cupiditate est minima explicabo? Optio, porro ipsum fugiat dolore laborum similique?</p>
                    <Link to={'/mission'}><button className="rdmr">Read More</button></Link> 
                </div>
                <div className="mimg">
                    <img src={student} alt="student" />
                </div>
            </div>
        </div>
     );
}
 
export default Mission;