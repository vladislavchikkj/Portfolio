import style from "./about.module.scss";

export const About = () => {
  return (
    <div className={style.content}>
      <div className={style.info}>
        <div className={style.title}>{"<About me/>"}</div>
        <div className={style.text}>
          I’m a front-end web developer. I work with agencies across the globe
          to create high performance & rich interactive websites that work
          across all platforms & devices. <br /> <br /> With a strong emphasis
          on `Progressive Enhancement`, I look for creative ways to push the
          boundaries of website front-end code without compromising on browser
          support and performance. <br /> <br /> In a quest for always keeping
          myself updated, I read books and attend conferences & meetups.
        </div>
      </div>
      <div className={style.stack}>
        <div className={style.title}>{"<technology stack/>"}</div>
        <div className={style.blocks}>
          <div className={style.block_1}>HTML</div>
          <div className={style.block_2}>CSS</div>
          <div className={style.block_3}>
            SASS/ <br /> SCSS
          </div>
          <div className={style.block_4}>GIT</div>
          <div className={style.block_5}>FIGMA</div>
          <div className={style.block_6}>JS</div>
          <div className={style.block_7}>TS</div>
          <div className={style.block_8}>REACT</div>
          <div className={style.block_9}>NODE.JS</div>
          <div className={style.block_10}>NEXT.JS</div>
          <div className={style.block_11}>NestJS</div>
          <div className={style.block_12}>PRISMA</div>
          <div className={style.block_13}>
            Postgre <br /> SQL
          </div>
          <div className={style.block_14}>SEO</div>
          <div className={style.block_15}>HOSTING</div>
        </div>
      </div>
    </div>
  );
};
