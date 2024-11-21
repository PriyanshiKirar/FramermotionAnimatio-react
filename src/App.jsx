import { motion ,useState} from 'framer-motion';
import React from 'react';

const App = () => {
  const [x,setx]=useState("0")
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
          delay: 1,  
        }}
        drag
        id="firstdiv"
      >
        <motion.h1
      whileTap={{
        fontSize:'0.8vw'
      }}
      transition={{
        ease:"anticipate"
      }}
        >hello</motion.h1>
      </motion.div>
    </div>
  );
};
export default App;
