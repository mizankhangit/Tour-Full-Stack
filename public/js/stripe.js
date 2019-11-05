import Axios from 'axios';
import { shwoAlert } from './alert';
const stripe = Stripe('pk_test_Ced6Vl9qRnD7pL8xsBKHDW1G00cloil9kG');

export const bookTour = async tourId => {
  try {
    // 1) Get checkout session from endpoint API
    const session = await Axios(
      `http://localhost:3000/api/v1/bookings/checkout-session/${tourId}`
    );
    console.log(session);
    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    console.log(err);
    shwoAlert('error', err);
  }
};
