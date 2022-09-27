import React from "react";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import _ from "lodash";
import { CheckoutDetails } from "../../models/CheckoutDetails";
import { ticketBookingSlice } from "../../slices/checkoutSlice";

const PaymentDetails = ({ tickets, checkoutId }) => {
  const movieDetails = tickets?.thongTinPhim;
  // const seatList = tickets?.danhSachGhe;
  const { seatSelected } = useSelector((state) => state.checkout);
  const dispatch = useDispatch();
  return (
    <div className="col-span-12 xl:col-span-3 lg:col-span-3 h-[600px] bg-primary border-borderColor rounded-md px-4 pt-6 mx-auto w-72">
      <div className="flex flex-col">
        <div className="py-3 border-b border-borderColor">
          <h3 className="text-2xl text-white font-bold">
            {movieDetails?.tenPhim}
          </h3>
        </div>
        <div className="py-3 border-b border-borderColor">
          <p className="font-bold text-xl">
            Địa điểm <br />
          </p>
          <span className="text-textSecondary">{movieDetails?.tenCumRap}</span>
        </div>
        <div className="py-3 border-b border-borderColor">
          <p className="font-bold text-xl">Ngày chiếu</p>
          <span className="text-textSecondary">
            {dayjs(movieDetails?.ngayChieu).format("DD.MM.YYYY")} -
            {movieDetails?.gioChieu} {movieDetails?.tenRap}
          </span>
        </div>
        <div className="flex flex-col py-3 border-b-2 border-borderColor">
          <div className="w-full">
            <span className="text-white text-xl">Ghế: </span>
            {_.sortBy(
              seatSelected.map((s) => ({ ...s, stt: parseInt(s.stt, 10) })),
              ["stt"]
            ).map((bookingSeat, index) => {
              return (
                <span key={index} className="text-teal-400 text-xl">
                  {" "}
                  {bookingSeat.stt}
                </span>
              );
            })}
          </div>
          <div className="text-right col-span-1 m-4 ">
            <span className="text-teal-400 text-xl font-bold">
              {seatSelected
                .reduce((total, seat, index) => {
                  return (total += seat.giaVe);
                }, 0)
                .toLocaleString()}{" "}
              VND
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end mt-8 ">
        <button
          onClick={() => {
            const checkoutDetails = new CheckoutDetails();
            checkoutDetails.maLichChieu = checkoutId;
            checkoutDetails.danhSachVe = seatSelected;
            console.log("checkoutDetails", checkoutDetails);
            dispatch(ticketBookingSlice(checkoutDetails));
          }}
          className="btn-main w-4/5 mx-auto"
        >
          ĐẶT VÉ
        </button>
      </div>
    </div>
  );
};

export default PaymentDetails;
