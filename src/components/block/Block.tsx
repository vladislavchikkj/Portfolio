import { motion } from "framer-motion";
import { useRef } from "react";

import style from "./block.module.scss";

export const Block = () => {
  const constraintsRef = useRef(null);

  return (
    <div className={style.block_container}>
      <motion.div className={style.drag_area} ref={constraintsRef} />
      <div className={style.bloks_wrapper}>
        <motion.div
          drag
          dragConstraints={constraintsRef}
          whileDrag={{ scale: 1.05 }}
          className={style.block__1}>
          <div className={style.block_name}>JS</div>
        </motion.div>
        <motion.div
          drag
          dragConstraints={constraintsRef}
          whileDrag={{ scale: 1.05 }}
          className={style.block__2}>
          <div className={style.block_name}>TS</div>
        </motion.div>
        <motion.div
          drag
          dragConstraints={constraintsRef}
          whileDrag={{ scale: 1.05 }}
          className={style.block__3}></motion.div>
        <motion.div
          drag
          dragConstraints={constraintsRef}
          whileDrag={{ scale: 1.05 }}
          className={style.block__4}></motion.div>
        <motion.div
          drag
          dragConstraints={constraintsRef}
          whileDrag={{ scale: 1.05 }}
          className={style.block__5}>
          Hi. <br /> My name is Vlad. <br /> I’m a frontend developer.
        </motion.div>
        <motion.div
          drag
          dragConstraints={constraintsRef}
          whileDrag={{ scale: 1.05 }}
          className={style.block__6}>
          {"<Menu/>"}
        </motion.div>
        <motion.div
          drag
          dragConstraints={constraintsRef}
          whileDrag={{ scale: 1.05 }}
          className={style.block__7}></motion.div>
        <motion.div
          drag
          dragConstraints={constraintsRef}
          whileDrag={{ scale: 1.05 }}
          className={style.block__8}>
          {"<Contacts/>"}
        </motion.div>
        <motion.div
          drag
          dragConstraints={constraintsRef}
          whileDrag={{ scale: 1.05 }}
          className={style.block__9}>
          download .CV
        </motion.div>
        <div className={style.code}>
          {"const arr = [10, 12, 15, 21];"}
          <br />
          {"for (var i = 0; i < arr.length; i++) {"} <br />
          &nbsp;&nbsp;{"// pass in the variable i so that each function"} <br />
          &nbsp;&nbsp;{"// has access to the correct index   "}
          <br />
          &nbsp;&nbsp;{"setTimeout(function(i_local) {"}
          <br />
          &nbsp;&nbsp;&nbsp;{"return function() { "}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          {"console.log('The index of this number is: ' +"}
          <br />
          {"i_local);"}
          <br />
          &nbsp; &nbsp;&nbsp;{"}"}
          <br />
          &nbsp;{" }(i), 3000);"}
          <br />
          {"}"}
        </div>
      </div>
      <div className={style.projects}>{"<My projects/>"}</div>
    </div>
  );
};
