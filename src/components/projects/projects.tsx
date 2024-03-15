import { motion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import style from "./projects.module.scss";

export const Projects = () => {
  const constraintsRef = useRef(null);
  const codeMarkup = `
  <span class=${style.keyword}>.my-project</span> {
    content: 'Some of my projects';
    <span class=${style.keyword}>.shop</span> {
        name: 'desk-culture.com';
        type: 'online store';
        technology stack: 'html css scss 
        next.js nest prisma postgresql';
    }
    <span class=${style.keyword}>.crypto-app</span> {
        name: 'crypto.dream';
        type: 'crypto app';
        technology stack: 'html css scss 
        next.js nest prisma postgresql';
    }
    <span class=${style.keyword}>.games</span> {
        name: 'chess';
        type: 'game';
        technology stack: 'html css js';
      }
  }
`;
  return (
    <div className={style.content}>
      <div className={style.info}>
        <div className={style.title}>{"<My projects/>"}</div>
        <div className={style.code}>
          <code
            className={style.codeBlock}
            dangerouslySetInnerHTML={{ __html: codeMarkup }}
          />
        </div>
      </div>
      <div className={style.blocks}>
        <motion.div className={style.drag_area} ref={constraintsRef} />
        <div className={style.bloks_wrapper}>
          <motion.div
            drag
            dragConstraints={constraintsRef}
            whileDrag={{ scale: 1.01 }}
            className={`${style.block} ${style.first}`}>
            <Link href={"https://desk-culture.com"} className={style.link}>
              <div className={style.block_content}>desk-culture.com</div>
            </Link>
          </motion.div>
          <motion.div
            drag
            dragConstraints={constraintsRef}
            whileDrag={{ scale: 1.01 }}
            className={style.block}>
            <div className={`${style.block_content} ${style.shop}`}></div>
          </motion.div>
          <motion.div
            drag
            dragConstraints={constraintsRef}
            whileDrag={{ scale: 1.01 }}
            className={style.block}>
            <div className={style.block_content}></div>
          </motion.div>
          <motion.div
            drag
            dragConstraints={constraintsRef}
            whileDrag={{ scale: 1.01 }}
            className={style.block}>
            <div className={style.block_content}></div>
          </motion.div>
          <motion.div
            drag
            dragConstraints={constraintsRef}
            whileDrag={{ scale: 1.01 }}
            className={`${style.block} ${style.second}`}>
            <div className={style.block_content}>crypto.dream</div>
          </motion.div>
          <motion.div
            drag
            dragConstraints={constraintsRef}
            whileDrag={{ scale: 1.01 }}
            className={style.block}>
            <div className={`${style.crypto} ${style.block_content} `}></div>
          </motion.div>
          <motion.div
            drag
            dragConstraints={constraintsRef}
            whileDrag={{ scale: 1.01 }}
            className={style.block}>
            <div className={style.block_content}>dream.chess</div>
          </motion.div>
          <motion.div
            drag
            dragConstraints={constraintsRef}
            whileDrag={{ scale: 1.01 }}
            className={style.block}>
            <div className={`${style.block_content} ${style.chess}`}></div>
          </motion.div>
          <motion.div
            drag
            dragConstraints={constraintsRef}
            whileDrag={{ scale: 1.01 }}
            className={style.block}>
            <div className={style.block_content}>more/my.app</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
