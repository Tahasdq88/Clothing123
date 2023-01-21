import React from 'react'
import styled from 'styled-components'
import {Link , useLocation} from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { async } from 'regenerator-runtime';
import { payOrder } from '../../actions/orderActions';
const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  top: 70px;
  `;

const SuccessIcon = styled.i`
  font-size: 5rem;
  color: green;
  `;

const SuccessMessage = styled.p`
  font-size: 2rem;
  color: green;
  text-align: center;
  margin-top: 1rem;
  `;

const CheckoutSuccess = () => {
  
  return (
    <>
    <SuccessContainer>
      <SuccessIcon className="fa fa-check-circle" />
      <SuccessMessage>Payment Successful!</SuccessMessage>
    </SuccessContainer>
    </>
  )
}

export default CheckoutSuccess
