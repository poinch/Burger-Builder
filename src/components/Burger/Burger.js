import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

function Burger({ ingredients }) {
  let transformedIngredients = Object.keys(ingredients)
  .flatMap(igKey => {
    return [...Array(ingredients[igKey])]
    .map((_, i) => {
      return <BurgerIngredient key={igKey + i} type={igKey} />
    })
  })

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients</p>
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top'/>
        {transformedIngredients}
      <BurgerIngredient type='bread-bottom'/>
    </div>
  )
}

export default Burger;
