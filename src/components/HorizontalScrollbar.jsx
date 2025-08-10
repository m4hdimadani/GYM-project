import { Box } from "@mui/material";
import BodyPart from "./BodyPart";

import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function HorizontalScrollbar({ data, setBodyPart, bodyPart }) {
  return (
    <Swiper
      slidesPerView={4}
      centeredSlides={false}
      slidesPerGroupSkip={1}
      grabCursor={true}
      keyboard={{
        enabled: true,
      }}
      navigation={true}
      modules={[Keyboard, Scrollbar, Navigation, Pagination]}
      className="mySwiper"
    >
      {data.map((item) => (
        <SwiperSlide>
          <Box
            key={item.id || item}
            itemId={String(item.id || item)}
            title={String(item.id || item)}
          >
            <BodyPart
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HorizontalScrollbar;
