import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <div className="allfoot">
             <div className="footer">
                <section className="acol">
                    <h2><span className="a">Aco</span>llege</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat labore aliquid minus dignissimos veniam ut quas quae, culpa, placeat, nulla ab voluptas quod quos facere commodi velit eveniet nesciunt! Laudantium.</p>
                </section>
                <section className="links">
                    <h2><span className="mhead">Use</span>ful Links</h2>
                    <Link to={'/about'}>About us</Link>
                    <Link to={'/contact'}>Contact us</Link>
                    <Link to={'/mission'}>Our Mission</Link>
                </section>
                <section className="contact">
                    <h2 ><span className="mhead">Con</span>tact</h2>
                    <div className="phone">+2349157519589</div>
                    <div className="email">abdullahabuaslam@gmail.com</div>
                    <div className="addr">No.12 dadaye street, t/jukun zaria</div>
                </section>
            </div>
                <div className="dev">Developed by Abuaslam</div>
        </div>
     );
}
 
export default Footer;