import { motion, useAnimation, useInView } from "framer-motion";
import Image from "../assets/images/12.jpg";
import "../assets/styles/CardImage.css";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { Dialog } from "@mui/material";

const x = () => (
  <div ref={ref} className="card">
    <motion.div animate={animation}>
      <img src={Image} alt="" />
    </motion.div>
  </div>
);

const CardImage = ({ url, indice }) => {
  const [open, setOpen] = useState(false);

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
    hover: {
      scale: 1.2,
    },
  };

  return (
    <>
      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
        whileHover="hover"
      >
        <motion.div
          className="card"
          variants={cardVariants}
          onClick={() => {
            setOpen(true);
          }}
        >
          <img src={`images/${url}.jpg`} alt="" />
        </motion.div>
      </motion.div>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <img
          src={`images/${url}.jpg`}
          alt=""
          style={{ width: "100%", height: "550px", objectFit: "cover" }}
        />
      </Dialog>
    </>
  );
};

export default CardImage;
