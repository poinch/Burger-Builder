import classes from './Logo.module.css';
import logo from '../../assets/images/burger-logo.png';

function Logo() {
  return (
    <div className={classes.Logo}>
      <img src={logo} alt='logo' />
    </div>
  )
}

export default Logo;
