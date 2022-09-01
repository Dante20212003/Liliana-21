import { motion, useAnimation, useInView } from "framer-motion";
import Image from "../assets/images/12.jpg";
import "../assets/styles/CardImage.css";
import { useEffect } from "react";
import { useRef } from "react";

const x = () => (
  <div ref={ref} className="card">
    <motion.div animate={animation}>
      <img src={Image} alt="" />
    </motion.div>
  </div>
);

const CardImage = ({ url, indice }) => {
  const cardVariants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 50,
      rotate: Number(indice) % 2 == 0 ? -10 : 10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 1 }}
    >
      <motion.div className="card" variants={cardVariants}>
        <img src={`images/${url}.jpg`} alt="" />
      </motion.div>
    </motion.div>
  );
};

export default CardImage;