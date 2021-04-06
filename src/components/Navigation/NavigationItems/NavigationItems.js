import { useSelector } from 'react-redux';

import classes from './NavigationItems.module.css';
import NavigationItem from '../NavigationItem/NavigationItem';

function NavigationItems() {
  const isAuthenticated = useSelector(state => state.auth.token !== null)

  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link='/' exact>Burger Builder</NavigationItem>
      {
        isAuthenticated
        ? <NavigationItem link='/orders'>Orders</NavigationItem>
        : null
      }
      
      {
        isAuthenticated 
        ? <NavigationItem link='/logout'>Logout</NavigationItem>
        : <NavigationItem link='/auth'>Authenticate</NavigationItem> 
      }    
    </ul>
  )
}

export default NavigationItems;
