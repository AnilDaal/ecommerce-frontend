import React from 'react';

const Payment = () => {
  return (
    <div
      className="container mx-auto "
      style={{ width: '80%', marginTop: '10px', marginBottom: '10px' }}
    >
      <h2 className="text-xl font-semibold">Payments</h2>
      <p style={{ lineHeight: '21px', color: 'gray', margin: '10px 0' }}>
        Furniturelelo offers you multiple payment methods. Whatever your online
        mode of payment, you can rest assured that Furniturelelo's trusted
        payment gateway partners use secure encryption technology to keep your
        transaction details confidential at all times.
      </p>
      <br />
      <p style={{ lineHeight: '21px', color: 'gray', margin: '10px 0' }}>
        You may use Internet Banking, Gift Card, Cash on Delivery and Wallet to
        make your purchase.
      </p>
      <br />
      <p style={{ lineHeight: '21px', color: 'gray', margin: '10px 0' }}>
        Furniturelelo also accepts payments made using Visa, MasterCard, Maestro
        and American Express credit/debit cards in India and 21 other countries.
      </p>
      <h2 className="text-xl font-semibold">
        Are there any hidden charges (Octroi or Sales Tax) when I make a
        purchase on Furniturelelo?
      </h2>
      <p style={{ lineHeight: '21px', color: 'gray', margin: '10px 0' }}>
        There are NO hidden charges when you make a purchase on Furniturelelo.
        The prices listed for all the items are final and all-inclusive. The
        price you see on the product page is exactly what you pay.
      </p>
      <br />
      <p style={{ lineHeight: '21px', color: 'gray', margin: '10px 0' }}>
        Delivery charges may be extra depending on the seller policy. Please
        check individual seller for the same. In case of seller WS Retail, the
        ₹50 delivery charge is waived off on orders worth ₹500 and over.
      </p>
      <br />
      <h2 className="text-xl font-semibold">What is Cash on Delivery?</h2>
      <br />
      <p style={{ lineHeight: '21px', color: 'gray', margin: '10px 0' }}>
        If you are not comfortable making an online payment on
        Furniturelelo.com, you can opt for the Cash on Delivery (C-o-D) payment
        method instead. With C-o-D you can pay in cash at the time of actual
        delivery of the product at your doorstep, without requiring you to make
        any advance payment online.
      </p>
      <br />
      <p style={{ lineHeight: '21px', color: 'gray', margin: '10px 0' }}>
        The maximum order value for a Cash on Delivery (C-o-D) payment is
        ₹50,000. It is strictly a cash-only payment method. Gift Cards or store
        credit cannot be used for C-o-D orders. Foreign currency cannot be used
        to make a C-o-D payment. Only Indian Rupees accepted.
      </p>
    </div>
  );
};

export default Payment;
