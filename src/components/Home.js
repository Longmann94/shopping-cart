
import { wrap } from 'popmotion';
import { motion, AnimatePresence } from "framer-motion";
import { useState } from 'react';

import IconButton from '@mui/material/IconButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Home = ({ promoArr, count }) => {

  const [[page, direction], setPage] = useState([0, 0]);

  const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    y: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

const promoIndex = wrap(0, promoArr.length, page);

const paginate = ( newDirection: number ) => {
  setPage([page + newDirection, newDirection]);
};

  return (
    <div className="homepage-container">
      <div className="homepage-information-section">
        <h1>Welcome to <b style={{fontStyle: 'italic'}}>Random Items 4 Sale</b>, Stranger!</h1>
        <p>This is the homepage of the store, the webpage is built using React.</p>
        <p>We stock some of the most random items you can find in a single store.</p>
        <p>It doesn't make sense why these items are being sold in one place, but our prices on the other hand are very sensible.</p>
        <p>We are certain that you will be able to find something useful in our store. :)</p>
      </div>
      <div className='promo-banner'>End of the Year Sales and Deals Check it Out!</div>

      <div className='promo-section'>
        <IconButton className='promo-navigate-backward' onClick={() => paginate(-1)}><ArrowBackIosIcon /></IconButton>
        <AnimatePresence initial={false} custom={direction}>

          <motion.div
            className='promo-container'
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
          >
            <div className='promo-content'>{promoArr[promoIndex].promo}</div>
          </motion.div>

        </AnimatePresence>
        <IconButton className='promo-navigate-forward' onClick={() => paginate(1)}><ArrowForwardIosIcon /></IconButton>
      </div>
    </div>
  );
}

export default Home;
