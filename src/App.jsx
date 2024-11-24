// import { motion ,useState} from 'framer-motion';
// import React from 'react';
// const App = () => {
//   return (
//     <div>
//       <motion.div
//         animate={{
//           x: 300,
//          backgroundColor:'pink',
//          rotate:360,
//          borderRadius:"50%"
//         }}
//         transition={{
//           duration: 2,
//           delay: 1,  
//         }}
//         drag    //isse puri sreen m move kr skte h
//         id="firstdiv"
//       >
//         <motion.h1
//       whileTap={{  //kind od hover
//         fontSize:'0.8vw'
//       }}
//       transition={{
//         ease:"anticipate"
//       }}
//         >hello</motion.h1>
// </motion.div>
//     </div>
//   );
// };
// export default App;


// 21/11/2024

// VARIANTS USE=ek animation ko ek var bana liya and bar bar use kr pay through of variants attribute

// import React from 'react'
// import { motion } from 'framer-motion'
// const App = () => {
//   const move={
//     start:{
//       x:0,
//       rotate:0,
//     },
//     end:{
//       x:800,
//       rotate:360,
//     }
//   }
//   return (
//     <div>
// < motion.div  variants={move} initial= 'start' animate="end" transition={{
//   duration:2, delay:1,
// }} className='w-[200px] h-[200px] bg-green-700 rounded-full' id="circle"></motion.div>
// <motion.div variants={move} initial= 'start' animate="end" transition={{
//   duration:2, delay:1,
// }} className='w-[200px] h-[200px] bg-purple-700 rounded-md mt-10' id="Rec"></motion.div>

//        </div>
//   )
// }

// export default App

// import React, { useState } from 'react'
// import {motion} from "framer-motion"
// const App = () => {
//   const [xval,setxval]=useState(0)
//   return (
//     <div>
//       <motion.div animate={{
//         x:xval,
//       }}
//       className='w-[200px] h-[200px] bg-purple-700 rounded-md m-10'></motion.div>
//       <button onClick={()=>setxval( xval+ 200)} className='px-3 py-2 rounded-md bg-green-600 text-zinc-200 m-10'>click</button>
//     </div>
//   )
// }

// export default App




//random value given and move the screen
// import React, { useState } from 'react'
// import {anticipate, motion} from "framer-motion"
// const App = () => {
//   const [xval,setxval]=useState(0);
//   const [yval,setyval]=useState(0);
//   const btnclick=()=>{
//     const randomx=Math.floor(Math.random()*1000);
//     const randomY=Math.floor(Math.random()*500);
//     console.log(randomx,randomY);
//     setxval( randomx);
//     setyval(randomY);
//   }
//   return (
//     <div>
//       <motion.div animate={{
//         x:xval,
//         y:yval,
//       }}
//       transition={{
//         ease:anticipate,
//       }}
//       className='w-[200px] h-[200px] bg-purple-700 rounded-md m-10'></motion.div>
//       <button onClick={btnclick} className='px-3 py-2 rounded-md bg-green-600 text-zinc-200 m-10'>click</button>
//     </div>
//   )
// }
// export default App;

import React from 'react'
import {motion,useScroll} from "framer-motion";
const App = () => {
  const {scrollYProgress}=useScroll();
  return (
    <div>
      <motion.div 
      style={{
        scaleX:scrollYProgress
      }}
       className='w-[100%] h-[15px] bg-blue-500' id="progress">
      </motion.div>
      <h1 className='text-5lxl font-semibold text-center'>Sheryinas coding Scholl</h1>
      <p className='line-through text-center'>Lorem  ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse at eius officiis harum, perferendisLorem ipsum dolor sit amet consectetur adipisicing elit. Esse at eius officiis harum, perferendisLorem ipsum dolor sit amet consectetur adipisicing elit. Esse at eius officiis harum, perferendisLorem ipsum dolor sit amet consectetur adipisicing elit. Esse at eius officiis harum, perferendisLorem ipsum dolorLorem ipsum dolor sit amet consectetur adipisicing elit. Esse at eius officiis harum, perferendisLorem ipsum dolor sit amet consectetur adipisicing elit. Esse at eius officiis harum, perferendisLorem ipsum dolor sit amet consectetur adipisicing elit. Esse at eius officiis harum, perferendisLorem ipsum dolor sit amet consectetur adipisicing elit. Esse at eius officiis harum, perferendisLorem ipsum dolor sit amet consectetur adipisicing elit. Esse at eius officiis harum, perferendisLorem ipsumLorem ipsum dolor sit amet consectetur adipisicing elit. Esse at eius officiis harum, perferendisLorem ipsum dolor sit amet consectetur adipisicing elit. Esse at eius officiis harum, perferendisLorem ipsum dolor sit ametLorem ipsum dolor sit amet consectetur adipisicing elit. Esse at eius officiis harum, perferendisLorem ipsum dolor sit amet consectetur adipisicing elit. Esse at eius officiis harum, perferendisLorem ipsum dolor sit amet consectetur adipisicing elit. Esse at eius officiis harum, perferendisLorem ipsum dolor sit amet consectetur adipisicing elit. Esse at eius officiis harum, perferendisLorem ipsum dolor sit amet consectetur adipisicing elit. Esse at eius officiis harum, perferendis consectetur adipisicing elit. Esse at eius officiis harum, perferendis dolor sit amet consectetur adipisicing elit. Esse at eius officiis harum, perferendis sit amet consectetur adipisicing elit. Esse at eius officiis harum, perferendis sit amet consectetur adipisicing elit. Esse at eius officiis harum, perferendis Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse at eius officiis harum,Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse at eius officiis harum, Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse at eius officiis harum, perferendisLorem ipsum dolor sit amet consectetur adipisicing elit. Esse at eius officiis harum, perferendisLorem ipsum dolor sit amet consectetur adipisicing elit. Esse at eius officiis harum, perferendisLorem ipsum dolor sit amet consectetur adipisicing elit. Esse at eius officiis harum, perferendisLorem ipsum dolor sit amet consectetur adipisicing elit. Esse at eius officiis harum,
         perferendisLorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse at eius officiis harum, perferendisLorem ipsum dolor sit amet consectetur adipisicing elit. Esse at eius officiis harum, perferendisLorem ipsum dolor sit amet consectetur adipisicing elit. Esse at eius officiis harum, perferendisLorem ipsum dolor sit amet consectetur adipisicing elit. Esse at eius officiis harum, perferendisLorem ipsum dolor sit amet consectetur adipisicing elit. Esse at eius officiis harum, perferendisLorem ipsum dolor sit amet consectetur adipisicing elit. Esse at eius officiis harum, perferendisLorem ipsum dolor sit amet consectetur adipisicing elit. Esse at eius officiis harum, perferendisLorem ipsum dolor sit amet consectetur adipisicing elit. Esse at eius officiis harum, perferendisLorem ipsum dolor sit amet consectetur adipisicing elit. Esse at eius officiis harum, perferendisLorem ipsum dolor sit amet consectetur adipisicing elit. Esse at eius officiis harum, perferendisv
         adipisicing elit. Esse at eius officiis harum, perferendisLorem ipsum dolor sit amet consectetur adipisicing elit. Esse at eius officiis harum, perferendis sit amet consectetur adipisicing elit. Esse at eius officiis harum, perferendis perferendis Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse at eius officiis harum, perferendis Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse at eius officiis harum, perferendisLorem ipsum dolor sit amet consectetur adipisicing elit. Esse at eius officiis harum, perferendisLorem ipsum dolor sit amet consectetur adipisicing elit. Esse at eius officiis harum, perferendisLorem ipsum dolor sit amet consectetur adipisicing elit. Esse at eius officiis harum, perferendisipsum dolor sit amet consectetur adipisicing elit. Esse at eius officiis harum, perferendis perferendis Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse at eius officiis harum, perferendis Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse at eius officiis harum, perferendis ex quaerat deleniti. Fugiat aliquid ut dolore alias doloremque! Distinctio repellat vero autem consequuntur deleniti aperiam enim minus aspernatur, amet est dicta veritatis odit soluta quaerat, explicabo tempore reprehenderit expedita aliquam quas ducimus alias deserunt! Animi ipsa praesentium quod error! Corporis necessitatibus repellendus eos cupiditate dicta, sequi alias deleniti odio. Libero excepturi, aperiam in obcaecati consequatur optio quia a quaerat, nesciunt, rerum tempora minima eum beatae laborum sit atque odio voluptate nisi ex sequi neque dolorum! Impedit amet itaque repellendus dolore blanditiis consectetur reprehenderit ad tempore totam nemo, aliquam sapiente repudiandae molestias adipisci eum pariatur exercitationem voluptate doloribus quae dolor molestiae obcaecati? Voluptate error eligendi sit, sequi similique dolor ab rerum exercitationem aperiam dicta, perferendis hic atque deleniti optio odit earumLorem ipsum dolor sit amet consectetur adipisicing elit. Esse at eius officiis harum, perferendisLorem ipsum dolor sit amet consectetur adipisicing elit. Esse at eius officiis harum, perferendisLorem ipsum dolor sit amet consectetur adipisicing elit. Esse at eius officiis harum, perferendis repellendus non eum dolorem beatae iure nesciunt! Expedita, nam asperiores laudantium doloremque ducimus repellendus similique optio, animi quidem velit ullam nisi. Quam, exercitationem? Rem culpa earum saepe nemo voluptas necessitatibus ratione nobis veniam aspernatur debitis. Consectetur possimus nisi rem est temporibus voluptates exercitationem dicta, qui sapiente officiis dolores. Eius quo eligendi, quidem nesciunt debitis repudiandae eos alias accusamus laboriosam est tenetur perspiciatis, ex voluptatum blanditiis magni aut velit architecto sint dolor laudantium qui sapiente. At commodi quis id aperiam, libero totam sint optio aspernatur quod nam nisi provident ratione eligendi consectetur, illum laudantium! Repellendus, quasi ipsa. Saepe deserunt ratione eos exercitationem numquam minus quas, veritatis, officiis corrupti culpa rem sint neque alias explicabo, nobis ipsum. Minus quaerat magnam eveniet ea dolorum autem. Placeat aspernatur dicta alias tenetur iusto impedit sapiente laudantium dolorem ut. A pariatur quidem dolorem tenetur, rem optio reiciendis rerum est explicabo vitae vero quia nam odit facilis sit eius atque non quod quasi delectus esse. Ipsum odit, officiis earum impedit inventore fuga quas qui nulla! Optio eligendi vel sequi officiis iusto cum, aut cumque officia laboriosam odio accusamus qui laudantium, ab atque veniam. Hic libero aut sequi optio. Similique numquam ullam atque obcaecati facilis eos labore sunt voluptatibus eum deleniti magnam inventore cum exercitationem laboriosam ea, explicabo, saepe consequuntur adipisci quis veritatis quasi fuga reprehenderit aspernatur. Aut tenetur nulla reiciendis repudiandae, iste accusamus mollitia ratione quia eligendi provident. Ratione, corrupti. Voluptatem corrupti, minus placeat repudiandae atque nostrum a aliquam eius, beatae neque nulla aliquid numquam saepe reprehenderit rerum quis voluptate sapiente iste quisquam cumque magni perspiciatis. Id expedita quaerat quisquam eum laudantium!</p>
    </div>
  )
}

export default App