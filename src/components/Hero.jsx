import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`relative md:h-7 h-7 inset-0 top-[80px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Sumair</span>
          </h1>
          <p className={`${styles.heroSubText} mt-0 text-white-100`}>
            Skilled in front-end development   <br className='sm:block hidden' />
            with React, JS, HTML, CSS, Redux and Node.Js
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute hover:brightness-200 transition-all duration-150 top-[88vh] w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 cursor-pointer border-slate-400 hover:border-white flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-slate-400 hover:bg-white mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;