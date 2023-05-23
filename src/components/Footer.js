import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";



function Footer(){
    return(
<Box bgColor={"blackAlpha.900"} color={"whiteAlpha.900"} minH={'48'} px={"16"}
py={[16,8]}
>

    <Stack direction={['column','row']} alignItems={'center'} h={"full"}>
        <VStack alignItems={['center','flex-start']} w={'full'} >

            <Text fontWeight={'bold'} w={'full'}>About us</Text>

            <Text fontSize={"sm"} textAlign={['center','left']} letterSpacing={'widest'}>We are the best  crypto trading in India,we provide our guidence at very cheap price </Text>

            </VStack>
            <VStack>
                <Avatar boxSize={'28'} mt={['4','0']}></Avatar>
                <Text>Our Founder</Text>
            </VStack>
            
             </Stack>
</Box>


    )


   
}

export default Footer;
