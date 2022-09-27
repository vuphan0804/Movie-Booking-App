// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { getBanners } from "../../slices/bannerSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import useRequest from "hooks/useRequest";
import movieAPI from "apis/movieAPI";

const TRAILERS = [
  "https://www.youtube.com/watch?v=TOFxa0w_gAo",
  "https://www.youtube.com/watch?v=TOFxa0w_gAo",
  "https://www.youtube.com/watch?v=TOFxa0w_gAo",
];

const Banner = () => {
  // const dispatch = useDispatch();
  // const { banners, isLoading, error } = useSelector((state) => state.banner);
  // useEffect(() => {
  //   dispatch(getBanners());
  // }, []);

  const {
    data: banners,
    isLoading,
    error,
  } = useRequest(() => movieAPI.getBanners());

  const bannersMapped = banners?.map((banner, index) => {
    return { ...banner, trailer: TRAILERS[index] };
  });

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      className="mb-20 w-4/5 rounded-lg"
    >
      <div style={{ display: "flex" }}>
        {bannersMapped?.map((banner) => {
          return (
            <SwiperSlide>
              <img
                className="w-full object-fill"
                style={{ height: "550px" }}
                key={banner.maBanner}
                src={banner.hinhAnh}
                alt={`banner-${banner.maBanner}`}
              />
            </SwiperSlide>
          );
        })}
      </div>
    </Swiper>
  );
};

export default Banner;
