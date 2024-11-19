import { motion } from 'framer-motion';
import React from 'react';

const App = () => {
  return (
    <div>
      <motion.div
        animate={{
          x: 300,
         backgroundColor:'pink',
         rotate:360,
        }}
        transition={{
          duration: 2,
          delay: 3,
          
        }}
        id="firstdiv"
      >
        <h1>hello</h1>
      </motion.div>
    </div>
  );
};

export default App;
