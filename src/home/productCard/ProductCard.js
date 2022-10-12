import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../../actions/CartActions';
import { useSelector } from 'react-redux';
import './index.css';

function ProductCard(props) {
  const state = useSelector((state) => state);
  const [buttonDisable, setButtonDisable] = useState(false);
  const buttonFlag = () => {
    setButtonDisable(state.itemList.includes(props.product.key));
  };
  useEffect(() => {
    buttonFlag();
  });

  const dispatch = useDispatch();
  return (
    <Card style={{ marginTop: '5px' }}>
      <Card.Body>
        <Card.Title>{props.product.productName}</Card.Title>
        <button
          disabled={buttonDisable}
          variant="primary"
          onClick={() => {
            dispatch(addItem(props.product));
          }}
        >
          addToCart
        </button>
        {buttonDisable && (
          <a
            className="removeItem"
            onClick={() => {
              dispatch(removeItem(props.product));
            }}
          >
            {' '}
            remove{' '}
          </a>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
