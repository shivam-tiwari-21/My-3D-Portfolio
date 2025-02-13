import { motion } from "framer-motion";
import { styles } from "../Style";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full mx-auto py-16">
      <div
        className={`${styles.paddingX} max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-60 h-30 violet-gradient" />
        </div>
        <div>
          <motion.h1 
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className={`${styles.heroHeadText} text-white text-center`}
          >
            Hi, I'm <span className="text-[#915eff]">Shivam Tiwari</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className={`${styles.heroSubText} mt-2 text-white-100 text-center`}
          >
            I develop Full-Stack Web Applications
            <br className="sm:block hidden" />
            primarily using the MERN Stack from Scratch
          </motion.p>
        </div>
      </div>

      <div className="section-container">
        {/* <ComputersCanvas /> */}
      </div>

      {/* Animated div component placed below modal */}
      <div className="w-full flex justify-center items-center z-10 mt-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 26, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
