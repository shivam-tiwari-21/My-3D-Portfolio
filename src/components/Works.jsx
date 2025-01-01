import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import {styles} from "../Style";
import {github} from "../assets";
import {SectionWrapper} from "../hoc";
import {projects} from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Works = () => {
  return (
    <>
     <motion.div variants={textVariant()}>
<p className={styles.sectionSubText}>My Works</p>
      <h1 className={styles.sectionHeadText}>Projects.</h1>
    </motion.div>
<div className='w-full flex '>
<motion.p
variants={fadeIn("","",0.1,1)}
className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
>
  Following Projects showcase my skills and experience through real-world examples my work. Bla Bla Bla shgfakhsdblk,sadbc,hbsdfywwyuibcbshsbcjiiusuhfncbnhsoalsnmzlkwsfggbta
  sshfvbsfbivhkn vv sdhdkjcsdiiddkfsndbfsdfn h uushfdjci9pndj odhffa039r33u4923ijjdcsbc vu 03hbandb 0iosddf jcanm,nxxpooaidyf vghnjdksdfucj0sdknxcm ccw9eisdfj smfxcgfyuwaiskldmznxcx9328w7ro8siudlgvb rfxkudlfhkc 84ruigjkvcc fadeIn
  skadjfhnaslkdjfcnlasdjfnc  sodfljncr9sdioflhkb ,s.dzxlijkcnlaUDzjfncslfxxjkvn alkjszdkfcn soidfncsfkjvhsd usidfjknccxk usdfjkvn s,hkjwnc asdjzfucjwa dkvzuyfciuljksandzhcbkvhjn 
</motion.p>
</div>

    </>
  )
}

export default SectionWrapper(Works,"works");