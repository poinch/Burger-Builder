import { useEffect } from 'react';

import axios from '../../axios-orders';
import WithErrorHandler from '../WithErrorHandler/WithErrorHandler';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import Order from '../../components/Order/Order';
import Spinner from '../../components/UI/Spinner/Spinner';

const Orders = (props) => {
  const { onFetchOrders, token, userId } = props

  useEffect(() => {
    onFetchOrders(token, userId)
  }, [onFetchOrders, token, userId])

  return (
    <div>
      {
        !props.loading ?

        props.orders.map(order => (
          <Order key={order.id} ingredients={order.ingredients} price={+order.price} />
        )):
        
        <Spinner />
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    orders: state.order.orders,
    token: state.auth.token,
    loading: state.order.loading,
    userId: state.auth.userId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchOrders: (token, userId) => dispatch(actions.fetchOrders(token, userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WithErrorHandler(Orders, axios));
