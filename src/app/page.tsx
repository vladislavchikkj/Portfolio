"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import "./globals.scss";
import style from "./page.module.scss";
import "./styles.css";

// import required modules
import { About } from "@/components/about/about";
import { Block } from "@/components/block/Block";
import { Contacts } from "@/components/contacts/contacts";
import { Projects } from "@/components/projects/projects";
import { Refresh } from "@/components/refresh/Refresh";
import { Refresh1 } from "@/components/refresh/Refresh1";
import { useState } from "react";
import { Mousewheel, Pagination } from "swiper/modules";

export default function App() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  return (
    <>
      <Swiper
        direction={"horizontal"}
        simulateTouch={false}
        spaceBetween={10}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper">
        <SwiperSlide>
          <Refresh onClick={() => setCount(count + 1)} />
          <Block key={count} />
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
