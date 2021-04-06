import classes from './Backdrop.module.css';

function Backdrop({ show, clicked }) {
  return show ? <div onClick={clicked} className={classes.Backdrop}></div> : null
}

export default Backdrop
