import classes from './Order.module.css';

function Order({ ingredients, price }) {

  const transformedIngredients = [];
  Object.entries(ingredients)
    .forEach(ingredient => {
      transformedIngredients.push({
        name: ingredient[0],
        amount: ingredient[1]
      })
    })

  const ingredientsOutput = transformedIngredients.map(ing => {
    return (
      <span key={ing.name}>
        {ing.name} ({ing.amount})
      </span>)
  })

  return (
    <div className={classes.Order}>
      <p> Ingredients: {ingredientsOutput}</p>
      <p>Price: <strong>USD {price.toFixed(2)}</strong></p>
    </div>
  )
}

export default Order;
