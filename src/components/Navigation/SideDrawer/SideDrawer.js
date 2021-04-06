import classes from './SideDrawer.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

function SideDrawer({ open, closed }) {
  const attachedClasses = [classes.SideDrawer, open ? classes.Open : classes.Close].join(' ')

  return (
    <>
      <Backdrop show={open} clicked={closed} />
      <div className={attachedClasses} onClick={closed}>
        <div className={classes.CloseButton} onClick={closed}>X</div>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </>
  )
}

export default SideDrawer;
