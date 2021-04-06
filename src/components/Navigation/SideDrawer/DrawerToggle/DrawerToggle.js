import classes from './DrawerToggle.module.css';

function DrawerToggle({ clicked }) {
  return (
    <div className={classes.DrawerToggle} onClick={clicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default DrawerToggle;
