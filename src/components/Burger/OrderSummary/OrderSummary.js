import Button from '../../UI/Button/Button';

function OrderSummary({ ingredients, price, purchaseCancelled, purchaseContinued }) {
  const ingredientSummary = Object.entries(ingredients)
    .map(([ing, val], index) => {
      return (
        <li key={index}>
          <span style={{textTransform:'capitalize'}}>{ing}</span>: {val}
        </li>)
    })

  return (
    <>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total Price: {price.toFixed(2)} </strong></p>
      <p>Continue to Checkout?</p>
      <Button clicked={purchaseCancelled} btnType='Danger'>CANCEL</Button>
      <Button clicked={purchaseContinued} btnType='Success'>CONTINUE</Button>
    </>
  )
}

export default OrderSummary;
