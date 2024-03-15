import { Glow, GlowCapture } from "@codaworks/react-glow";
import Link from "next/link";
import style from "./contacts.module.scss";

export const Contacts = () => {
  return (
    <div className={style.content}>
      <div className={style.title}>{"<Contacts/>"}</div>
      <div className={style.wrapper}>
        <div className={style.blocks}>
          <GlowCapture>
            <Glow color="#dd94ff">
              <Link target="_blank" href={"https://github.com/vladislavchikkj"}>
                <div className="glowable-text">GitHub</div>
              </Link>
            </Glow>
          </GlowCapture>
          <GlowCapture>
            <Glow color="#dd94ff">
              <Link
                target="_blank"
                href={"mailto:vlad.kosevichhh@gmail.com"}
                type="mail">
                <div className="glowable-text">MAIL</div>
              </Link>
            </Glow>
          </GlowCapture>
          <GlowCapture>
            <Glow color="#dd94ff">
              <Link
                target="_blank"
                href={"https://t.me/whatislovv"}
                type="mail">
                <div className="glowable-text">TELEGRAM</div>
              </Link>
            </Glow>
          </GlowCapture>
          <GlowCapture>
            <Glow color="#dd94ff">
              <Link
                target="_blank"
                href={
                  "https://www.instagram.com/vladislavchi_kk/?igsh=Y2QzMTllOHdtanJl&utm_source=qr"
                }
                type="mail">
                <div className="glowable-text">INSTAGRAM</div>
              </Link>
            </Glow>
          </GlowCapture>
          <GlowCapture>
            <Glow color="#dd94ff">
              <Link
                target="_blank"
                href={
                  "https://www.linkedin.com/in/vladislav-kosevich-761630261"
                }>
                <div className="glowable-text">LinkedIn</div>
              </Link>
            </Glow>
          </GlowCapture>
          <div className={style.last}>Write me now</div>
        </div>
        <div className={style.logo}></div>
      </div>
    </div>
  );
};
