import { Glow, GlowCapture } from "@codaworks/react-glow";
import style from "./contacts.module.scss";

export const Contacts = () => {
  return (
    <div className={style.content}>
      <div className={style.title}>{"<Contacts/>"}</div>
      <div className={style.wrapper}>
        <div className={style.blocks}>
          <GlowCapture>
            <Glow color="#dd94ff">
              <div className="glowable-text">GitHub</div>
            </Glow>
          </GlowCapture>
          <GlowCapture>
            <Glow color="#dd94ff">
              <div className="glowable-text">MAIL</div>
            </Glow>
          </GlowCapture>
          <GlowCapture>
            <Glow color="#dd94ff">
              <div className="glowable-text">TELEGRAM</div>
            </Glow>
          </GlowCapture>
          <GlowCapture>
            <Glow color="#dd94ff">
              <div className="glowable-text">INSTAGRAM</div>
            </Glow>
          </GlowCapture>
          <GlowCapture>
            <Glow color="#dd94ff">
              <div className="glowable-text">LinkedIn</div>
            </Glow>
          </GlowCapture>
          <div className={style.last}>Write me now</div>
        </div>
        <div className={style.logo}></div>
      </div>
    </div>
  );
};
