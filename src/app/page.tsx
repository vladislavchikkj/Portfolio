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
import { About } from "@/components/about/about";
import { Block } from "@/components/block/Block";
import { Contacts } from "@/components/contacts/contacts";
import { Projects } from "@/components/projects/projects";
import { Refresh } from "@/components/refresh/Refresh";
import { Refresh1 } from "@/components/refresh/Refresh1";
import { useState } from "react";
import { FreeMode, Mousewheel, Scrollbar } from "swiper/modules";
import style from "./page.module.scss";

export default function App() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  return (
    <>
      <Swiper
        direction={"horizontal"}
        slidesPerView={"auto"}
        freeMode={true}
        scrollbar={true}
        mousewheel={true}
        history={true}
        keyboard={true}
        simulateTouch={false}
        modules={[FreeMode, Scrollbar, Mousewheel]}
        className="mySwiper">
        <SwiperSlide>
          <Refresh onClick={() => setCount(count + 1)} />
          <div className={style.src}>
            <Block key={count} />
            <div className={style.scr1}>
              <Projects key={count1} />
              <Refresh1 onClick={() => setCount1(count1 + 1)} />
            </div>
            <About />
            <Contacts />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
