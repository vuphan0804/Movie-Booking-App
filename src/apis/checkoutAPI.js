import { CheckoutDetails } from "modules/Checkout/models/CheckoutDetails";
import axiosClient from "./axiosClient";

const checkoutAPI = {
  getTicketRoom: (checkoutId) => {
    return axiosClient.get("QuanLyDatVe/LayDanhSachPhongVe", {
      params: {
        MaLichChieu: checkoutId,
      },
    });
  },
  ticketBooking: (checkoutDetails = new CheckoutDetails()) => {
    return axiosClient.post("QuanLyDatVe/DatVe", {
      params: {
        DanhSachVe: checkoutDetails,
      },
    });
  },
};

export default checkoutAPI;
