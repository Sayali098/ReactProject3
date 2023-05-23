import { Link } from "@chakra-ui/react";
import React from "react";
import { Text ,Image,Heading,VStack} from "@chakra-ui/react";


const CoinsCard=({id,name,image,symbol,price,currencysymbol="₹"})=>(
    <Link to={`/coins/${id}`} >

<VStack w={'52'} p={'8'} borderRadius={'md'} shadow={"lg"} m={"4"} transition={"all 0.2s"}

   css={{
    "&:hover":{
        transform:"scale(1.1)",
    },
   }}

>
    <Image src={image} w={"10"} h={"10"} objectfit={"contain"} alt={"Exchange"}></Image>
    <Heading noOfLines={'1'} size={"md"}> {symbol}</Heading>
    <Text noofsize={'1'} > {name}</Text>
    <Text noofsize={'1'} > {price ?`${currencysymbol} ${price}`:"NA"}</Text>

</VStack>
    </Link>

)

export default CoinsCard;