import View from '../component/view';
import classes from './contact.module.css';

const Contact = () => {
    return ( 
        <div className={classes.ccont}>
            <h1>Contact Us</h1>
            <p> Voluptatum, ex veniam laudantium ipsum eaque sunt vitae aperiam corrupti. At beatae tempora laboriosam ad. Vel minus libero veritatis odit aliquid dicta!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem suscipit deleniti, ad, rerum fugit eligendi in repellat provident itaque delectus tempore vero dolor aliquam nam culpa, ipsum maxime quasi doloremque?
            </p>
            <form action="" className={classes.form}>
                <input type="email" name='email' placeholder='example@email.com' required/>
                <input type="text" name='text' placeholder='Title of your message here' required/>
                <br/>
                <textarea name="" id="" cols="10" rows="10">Your message here</textarea>
                <button className={classes.svie}>Send</button>
            </form>
            <View />
        </div>
     );
}
 
export default Contact;