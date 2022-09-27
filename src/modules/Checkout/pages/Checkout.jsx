import React from "react";
import { useParams } from "react-router-dom";
import PaymentDetails from "../components/PaymentDetails";
import Seats from "../components/Seats";
import checkoutAPI from "apis/checkoutAPI";
import useRequest from "hooks/useRequest";

const Checkout = () => {
  const { checkoutId } = useParams();
  const {
    data: tickets,
    isLoading,
    error,
  } = useRequest(() => checkoutAPI.getTicketRoom(checkoutId));

  return (
    <div className="hidden xl:block lg:block md:block">
      <div className="grid grid-cols-12 mt-20 max-w-[1200px] mx-auto">
        <Seats checkoutId={checkoutId} tickets={tickets} />
        <PaymentDetails checkoutId={checkoutId} tickets={tickets} />
      </div>
    </div>
  );
};

export default Checkout;
