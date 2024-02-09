import { motion } from "framer-motion";
import { useRef } from "react";

import React from "react";
import Typed from "typed.js";
import style from "./block.module.scss";

export const Block = () => {
  const constraintsRef = useRef(null);

  const el = React.useRef(null);
  const elCode = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Hi. <br /> My name is Vlad. <br /> I’m a frontend developer."],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  React.useEffect(() => {
    const typed = new Typed(elCode.current, {
      strings: [
        `const arr = [10, 12, 15, 21];
      <br />
      for (var i = 0; i < arr.length; i++) { <br />
      &nbsp;&nbsp;// pass in the variable i so that each function <br />
      &nbsp;&nbsp;// has access to the correct index   
      <br />
      &nbsp;&nbsp;setTimeout(function(i_local) {
      <br />
      &nbsp;&nbsp;&nbsp;return function() { 
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      console.log('The index of this number is: ' +
      <br />
      i_local);
      <br />
      &nbsp; &nbsp;&nbsp;{
      <br />
      &nbsp; }(i), 3000);
      <br />
      }`,
      ],
      typeSpeed: 5,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className={style.block_container}>
      <motion.div className={style.drag_area} ref={constraintsRef} />
      <div className={style.bloks_wrapper}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.2,
            delay: 0.1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          drag
          dragConstraints={constraintsRef}
          whileDrag={{ scale: 1.01 }}
          className={style.block__1}>
          <div className={style.block_name}>JS</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.2,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          drag
          dragConstraints={constraintsRef}
          whileDrag={{ scale: 1.01 }}
          className={style.block__2}>
          <div className={style.block_name}>TS</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.2,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          drag
          dragConstraints={constraintsRef}
          whileDrag={{ scale: 1.01 }}
          className={style.block__3}></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.2,
            delay: 0.4,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          drag
          dragConstraints={constraintsRef}
          whileDrag={{ scale: 1.01 }}
          className={style.block__4}></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.1,
            delay: 0.1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          drag
          dragConstraints={constraintsRef}
          whileDrag={{ scale: 1.01 }}
          className={style.block__5}>
          <div className={`${style.text} `}>
            <span ref={el} />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.2,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          drag
          dragConstraints={constraintsRef}
          whileDrag={{ scale: 1.01 }}
          className={style.block__6}>
          <p>{"<Menu/>"}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.2,
            delay: 0.7,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          drag
          dragConstraints={constraintsRef}
          whileDrag={{ scale: 1.01 }}
          className={style.block__7}></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.2,
            delay: 0.6,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          drag
          dragConstraints={constraintsRef}
          whileDrag={{ scale: 1.01 }}
          className={style.block__8}>
          <p>{"<Contacts/>"}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.2,
            delay: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          drag
          dragConstraints={constraintsRef}
          whileDrag={{ scale: 1.01 }}
          className={style.block__9}>
          <p>download .CV</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.2,
            delay: 0.9,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className={style.code}>
          <span ref={elCode} />
        </motion.div>
      </div>
    </div>
  );
};
