"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./globals.scss";
import style from "./page.module.scss";
import "./styles.css";

// import required modules
import { About } from "@/components/about/about";
import { Block } from "@/components/block/Block";
import { Contacts } from "@/components/contacts/contacts";
import Loader from "@/components/loader/loader";
import { Projects } from "@/components/projects/projects";
import { Refresh } from "@/components/refresh/Refresh";
import { Refresh1 } from "@/components/refresh/Refresh1";
import { useEffect, useState } from "react";
import { Mousewheel, Pagination } from "swiper/modules";

export default function App() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [isLoaling, setIsLoaling] = useState(true);

  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoaling(false);
      }, 2000);
    };
    fakeDataFetch();
  }, []);

  return isLoaling ? (
    <Loader />
  ) : (
    <>
      <div className={style.start}></div>
      <Swiper
        direction={"horizontal"}
        simulateTouch={false}
        spaceBetween={1}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper">
        <SwiperSlide>
          <Refresh onClick={() => setCount(count + 1)} />
          <Block key={count} />
          <div className={style.scroll}>scroll for move |</div>
          <div className={style.reset}>tap here for reset |</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.scr1}>
            <Projects key={count1} />
            <Refresh1 onClick={() => setCount1(count1 + 1)} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <About />
        </SwiperSlide>
        <SwiperSlide>
          <Contacts />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
