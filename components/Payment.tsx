import React from "react";
import Button from "./Button";

const Payment = () => {
  const openPaymentSheet = async () => {};
  return (
    <>
      <Button
        title="Confirm Ride"
        className="my-6"
        onPress={openPaymentSheet}
      />
    </>
  );
};

export default Payment;
