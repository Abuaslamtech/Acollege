import View from '../component/view';
import classes from './about.module.css';

const About = () => {
    return ( 
        <div className={classes.acont}>
            <h1>About Us</h1>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolorum debitis similique nostrum, quisquam, natus ipsam nisi dolorem minima quo cum at ullam cupiditate delectus laborum neque sed. Iusto, officia?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In sequi atque rerum iusto at perferendis architecto quibusdam ipsam facere ipsum eligendi eos vitae dolorum ab ut, aperiam, inventore praesentium? Velit.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, ex veniam laudantium ipsum eaque sunt vitae aperiam corrupti. At beatae tempora laboriosam ad. Vel minus libero veritatis odit aliquid dicta!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem suscipit deleniti, ad, rerum fugit eligendi in repellat provident itaque delectus tempore vero dolor aliquam nam culpa, ipsum maxime quasi doloremque?
            </p>
            <View />
        </div>
     );
}
 
export default About;