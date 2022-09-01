import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Carousel from "react-material-ui-carousel";
import { frases } from "../utils";
import "../assets/styles/CarouselComp.css";
import useAppContext from "../hooks/useAppContext";

const carouselVariants = {
  offscreen: {
    opacity: 0,
    scale: 0.5,
  },
  onscreen: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
      delay: 0.5,
    },
  },
};

const Item = ({ url, body }) => {
  return (
    <div className="carousel-container">
      <img className="carousel-img" src={`images/${url}.jpg`} alt="" />
      <div className="overlay">
        <div className="overlay-content">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 1 }}
          >
            <motion.p variants={carouselVariants}>{body}</motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const images = [
  100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114,
  115,
];

const CarouselComp = () => {
  const [data, setData] = useState([]);
  const { autoPlayCarou } = useAppContext();
  const [auto, setAuto] = useState(false);

  const ramdomArray = (array) => {
    array.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    ramdomArray(images);
    let newData = [];

    images.forEach((val, i) => {
      newData.push({ url: val, frase: frases[i] });
    });

    setData(newData);
  }, []);

  return (
    <Carousel
      animation="slide"
      autoPlay={autoPlayCarou}
      indicators={false}
      navButtonsAlwaysVisible
    >
      {data.map((values, i) => (
        <Item key={i} url={values.url} body={values.frase} />
      ))}
    </Carousel>
  );
};

export default CarouselComp;
