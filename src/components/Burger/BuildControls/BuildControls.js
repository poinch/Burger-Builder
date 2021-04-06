import { useSelector } from 'react-redux';

import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad'},
  { label: 'Bacon', type: 'bacon'},
  { label: 'Cheese', type: 'cheese'},
  { label: 'Meat', type: 'meat'},
];

function BuildControls({ 
  ingredientAdded, ingredientRemoved, disabled, price, purchaseble, ordered
}) {

  const isAuthenticated = useSelector(state => state.auth.token !== null)

  return (
    <div className={classes.BuildControls}>
      <p style={{marginBottom: '8px'}}>Current Price: <strong>{price.toFixed(2)}</strong> </p>
      {
        controls.map(control => (
          <BuildControl 
            key={control.label} 
            label={control.label}
            added={() => ingredientAdded(control.type)}
            removed={() => ingredientRemoved(control.type)}
            disabled={disabled[control.type]}
          />
        ))
      }
      <button 
        onClick={ordered} 
        className={classes.OrderButton} 
        disabled={!purchaseble}>{isAuthenticated ? 'ORDER NOW' : 'SIGN UP TO ORDER'}</button>
    </div>
  )
}

export default BuildControls
