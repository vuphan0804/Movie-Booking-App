import React, { Fragment } from "react";
import "./style.css";
import { CloseOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { addToSeatSelected } from "modules/Checkout/slices/checkoutSlice";

const Seats = ({ tickets }) => {
  const dispatch = useDispatch();
  const { seatSelected } = useSelector((state) => state.checkout);
  console.log("seatSelected", seatSelected);
  const seatList = tickets?.danhSachGhe;
  const renderSeatList = () => {
    return seatList?.map((seat, index) => {
      let classVipSeat = seat.loaiGhe === "Vip" ? "vip-seat" : "";
      let classBookedSeat = seat.daDat === true ? "booked-seat" : "";
      let classBookingSeat = "";
      let indexBookingSeat = seatSelected.findIndex(
        (seatBooking) => seatBooking.maGhe === seat.maGhe
      );
      if (indexBookingSeat != -1) {
        classBookedSeat = "booking-seat";
      }

      return (
        <Fragment key={index}>
          <button
            onClick={() => {
              dispatch(addToSeatSelected(seat));
            }}
            disabled={seat.daDat}
            className={`seat ${classVipSeat} ${classBookedSeat} ${classBookingSeat}`}
            key={index}
          >
            {seat.daDat ? (
              <CloseOutlined style={{ marginBottom: 5 }} />
            ) : (
              seat.stt
            )}
          </button>
          {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };

  return (
    <div className="col-span-12 xl:col-span-9 lg:col-span-9 mx-auto">
      <div className="flex flex-col">
        <div className="h-8 rounded-t-3xl bg-slate-400 screen-shadow">
          <p className="text-center font-bold pt-1 text-xl">Màn hình</p>
        </div>
      </div>
      <div className="mt-10">{renderSeatList()}</div>
      <div className="mt-2 px-32">
        <ul className="flex justify-between">
          <li>
            <div className="seat"></div>Ghế thường
          </li>
          <li>
            <div className="seat vip-seat"></div>Ghế Vip
          </li>
          <li>
            <div className="seat booking-seat"></div>Ghế đang chọn
          </li>
          <li>
            <div className="seat booked-seat"></div>Ghế đẫ đặt
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Seats;
