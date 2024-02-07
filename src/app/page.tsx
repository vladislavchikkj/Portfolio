"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import "./globals.scss";
import "./styles.css";

// import required modules
import { Block } from "@/components/block/Block";
import { Refresh } from "@/components/refresh/Refresh";
import { useState } from "react";
import { FreeMode, Mousewheel, Scrollbar } from "swiper/modules";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Swiper
        direction={"horizontal"}
        slidesPerView={"auto"}
        freeMode={true}
        scrollbar={true}
        mousewheel={true}
        simulateTouch={false}
        modules={[FreeMode, Scrollbar, Mousewheel]}
        className="mySwiper">
        <Refresh onClick={() => setCount(count + 1)} />
        <SwiperSlide>
          <Block key={count} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
