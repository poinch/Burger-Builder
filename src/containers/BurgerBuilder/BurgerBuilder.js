import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import axios from '../../axios-orders';
import WithErrorHandler from '../WithErrorHandler/WithErrorHandler';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';


const BurgerBuilder = (props) => {
  const [purchasing, setPurchasing] = useState(false)

  const { onInitIngredients } = props

  useEffect(() => {
    onInitIngredients()
  }, [onInitIngredients])

  const updatePurchaseState = (ingredients) => {
    const sum = Object.entries(ingredients)
      .map(ing => ing[1])
      .reduce((a, b) => {
        return a + b
      }, 0);
    
    return sum > 0
  }

  const purchaseHandler = () => {
    if (props.isAuthenticated) {
      setPurchasing(true)
    } else {
      props.onSetAuthRedirectPath('/checkout')
      props.history.push('/auth')
    } 
  }

  const purchaseCancelHandler = () => {
    setPurchasing(true)
  }

  const purchaseContinueHandler = () => {
    props.onInitPurchase()
    props.history.push('/checkout')
  }

  const disabledInfo = {
    ...props.ings
  };
  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0
  }


  return (
    <>
      <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
        {
          !props.ings 
          ? <Spinner /> 
          : <OrderSummary 
            ingredients={props.ings} 
            price={props.price}
            purchaseCancelled={purchaseCancelHandler}
            purchaseContinued={purchaseContinueHandler}
          />
        }
      </Modal>
      {
        !props.ings || props.error 
        ? <>
            <p style={{textAlign: 'center'}}>Ingredients cant' be loaded</p>
            <Spinner />
          </> 
        : <>
            <Burger ingredients={props.ings} />
            <BuildControls 
              ingredientAdded={props.onIngredientAdded}
              ingredientRemoved={props.onIngredientRemoved}
              disabled={disabledInfo}
              price={props.price}
              purchaseble={updatePurchaseState(props.ings)}
              ordered={purchaseHandler}
            />
          </>
      }
    </>
  )
}

const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    error: state.burgerBuilder.error,
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onInitIngredients: () => dispatch(actions.initIngredients()),
    onIngredientAdded: (ingsName) => dispatch(actions.addIngredient(ingsName)),
    onIngredientRemoved: (ingsName) => dispatch(actions.removeIngredient(ingsName)),
    onInitPurchase: () => dispatch(actions.purchaseInit()),
    onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WithErrorHandler(BurgerBuilder, axios));
