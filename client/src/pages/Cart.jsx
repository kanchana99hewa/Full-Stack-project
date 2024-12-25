import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CircularProgress } from '@mui/material';
import { DeleteOutline } from '@mui/icons-material';
import Button from '../components/Button';
import { useDispatch } from 'react-redux';
import { openSnackbar } from '../redux/reducers/snackbarSlice';
import { getCart, addToCart, deleteFromCart, placeOrder } from '../api';

const Container = styled.div`
  padding: 20px 30px 200px;
  height: 100%;
  overflow-y: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  background: ${({ theme }) => theme.bg};
`;

const Section = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 22px;
  gap: 28px;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 500;
  text-align: center;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 32px;
  width: 100%;
  padding: 12px;
  flex-direction: column;
`;

const Table = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: ${({ head }) => (head ? '22px' : '0')};
`;

const TableItem = styled.div`
  flex: 1;
  font-weight: ${({ bold }) => (bold ? '600' : '400')};
  font-size: ${({ bold }) => (bold ? '18px' : '16px')};
`;

const Subtotal = styled.div`
  font-size: 22px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
`;

const Cart = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [buttonLoad, setButtonLoad] = useState(false);
  const [deliveryDetails, setDeliveryDetails] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: '',
    completeAddress: '',
  });

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('krist-app-token');
      const response = await getCart(token);
      setProducts(response.data);
    } catch (error) {
      dispatch(openSnackbar({ message: 'Failed to load cart', severity: 'error' }));
    } finally {
      setLoading(false);
    }
  };

  const calculateSubtotal = () => {
    return products
      .reduce((total, item) => total + item.quantity * item.product.price.org, 0)
      .toFixed(2);
  };

  const handleOrder = async () => {
    if (!Object.values(deliveryDetails).every(Boolean)) {
      dispatch(
        openSnackbar({ message: 'Please fill in all required delivery details.', severity: 'error' })
      );
      return;
    }
    setButtonLoad(true);
    try {
      const token = localStorage.getItem('krist-app-token');
      const orderDetails = {
        products,
        address: Object.values(deliveryDetails).join(', '),
        totalAmount: calculateSubtotal(),
      };
      await placeOrder(token, orderDetails);
      dispatch(openSnackbar({ message: 'Order placed successfully', severity: 'success' }));
      fetchCart();
    } catch (error) {
      dispatch(openSnackbar({ message: error.message, severity: 'error' }));
    } finally {
      setButtonLoad(false);
    }
  };

  return (
    <Container>
      {loading ? (
        <CircularProgress />
      ) : (
        <Section>
          <Title>Your Shopping Cart</Title>
          {products.length === 0 ? (
            <>Cart is empty</>
          ) : (
            <Wrapper>
              {products.map((item) => (
                <Table key={item.product._id}>
                  <TableItem>{item.product.title}</TableItem>
                  <TableItem>${item.product.price.org}</TableItem>
                  <TableItem>{item.quantity}</TableItem>
                  <TableItem>${(item.quantity * item.product.price.org).toFixed(2)}</TableItem>
                  <DeleteOutline
                    onClick={() => deleteFromCart(item.product._id, localStorage.getItem('krist-app-token'))}
                  />
                </Table>
              ))}
              <Subtotal>Subtotal: ${calculateSubtotal()}</Subtotal>
              <Button text="Place Order" isLoading={buttonLoad} onClick={handleOrder} />
            </Wrapper>
          )}
        </Section>
      )}
    </Container>
  );
};

export default Cart;
