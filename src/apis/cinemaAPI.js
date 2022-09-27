import axiosClient from "./axiosClient";

const cinemaAPI = {
  getCinemaSystemDetails: () => {
    return axiosClient.get("QuanLyRap/LayThongTinHeThongRap");
  },
  getCinemaDetails: (cinemaId) => {
    return (
      axiosClient.get("QuanLyRap/LayThongTinCumRapTheoHeThong"),
      {
        params: {
          maHeThongRap: cinemaId,
        },
      }
    );
  },
  getShowtimesCinema: () => {
    return axiosClient.get("QuanLyRap/LayThongTinLichChieuHeThongRap", {
      params: {
        maNhom: "GP02",
      },
    });
  },
  getShowtimesMovie: (movieId) => {
    return axiosClient.get("QuanLyRap/LayThongTinLichChieuPhim", {
      params: {
        maPhim: movieId,
      },
    });
  },
};

export default cinemaAPI;
