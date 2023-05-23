// import axios from  "axios";
// import { useEffect } from "react";
import btcsrc from "../assets/btc.png";
import { Box, Image, Text } from "@chakra-ui/react";

import { motion } from "framer-motion";







function Home(){

return (<Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"} color={"white"}>
    <motion.div style={{
        height:'80vh',
    }}
    
    animate={{
        translateY:'20px'
    }}

    transition={{
        duration:2,
        repeat:Infinity,
        repeatType:"reverse"
    }
    }
    
    
    
    >
    <Image w={"full"} h={"full"} objectFit={"contain"} src={btcsrc} filter={"grayScale(1)"}></Image>
    </motion.div>


    <Text textAlign={"center"}  color={"whiteAlpha.900"} fontSize={'6xl'} 
     fontWeight={"thin"}
     mt={'-20'}
>
    Xcrypto
</Text>

</Box>);
}

export default Home;