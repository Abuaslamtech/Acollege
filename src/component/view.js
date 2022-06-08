import classes from './view.module.css'

const View = () => {
    return ( 
        <div className={classes.vie}>
            <h2>Do you find this helpful?</h2>
            <div className={classes.hlp}>
                <button>Yes</button>
                <button>No</button>
            </div>
        </div>
     );
}
 
export default View;