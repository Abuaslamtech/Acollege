import { Link } from 'react-router-dom';
import thumbnail from '../image/africah.jpg'
import pic from '../image/africa.jpg'

const Event = () => {
    return ( 
        <div className="event">
            <div className="eleft">
                <h1><span className='mhead'>Up</span>coming Events</h1>

                <div className="lievent">
                    <img src={thumbnail} alt="" />
                    <div className='eblock'>
                        <h3>Lorem  Ipsum</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti laboriosam aut fugiat mollitia provident a!  </p>
                        <Link to={'/'} className="link">Read More</Link>
                    </div>
                </div>

                <div className="lievent">
                    <img src={thumbnail} alt="" />
                    <div className='eblock'>
                        <h3>Lorem  Ipsum</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti laboriosam aut fugiat mollitia provident a! </p>
                        <Link to={'/'} className="link">Read More</Link>
                    </div>
                </div>

                <div className="lievent">
                    <img src={thumbnail} alt="" />
                    <div className='eblock'>
                        <h3>Lorem  Ipsum</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti laboriosam aut fugiat mollitia provident a! </p>
                        <Link to={'/'} className="link">Read More</Link>
                    </div>
                </div>
            </div>
            <div className="eright">
                <h1><span className='mhead'>Fea</span>tured Event</h1>

                <div className="tfevent">
                    <img src={pic} alt=""  className='tfimg'/>
                    <div className="tfeventd">
                        <h3>Graduation Ceremony</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum at fugit libero mollitia aut molestias ipsam praesentium! Deleniti sint placeat excepturi cupidit</p>
                        <button>Read More</button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Event;