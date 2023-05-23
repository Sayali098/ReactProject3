import React from "react";
import axios from "axios";
import { useEffect } from "react";
import {server} from '../index'
import { useState } from "react";
import { Container, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
import Spinner from "./Spinner";
import ErrorComponent from "./ErrorComponent";

function  Exchange()
{
    const[exchanges,setexchanges]=useState([]);
    const[loading,setLoading]=useState(true);
    const [error,seterror]=useState(false)

    useEffect(()=>{
        // setLoading(true)
        const fetchExchanges=async ()=>{
            try{
     const {data}=await axios.get(`${server}/exchanges?per_page=20`);
      setexchanges(data);
      setLoading(false);
      console.log(data)
            }catch(error){
                // setLoading(false);
                seterror(true)
            }

        }
        
        fetchExchanges();
    },[])

    if(error)
    return<ErrorComponent message={'Error while fetching exchanges'}></ErrorComponent>

    return(<Container maxW={'container.xl'}>
     {
       loading?( <Spinner></Spinner>):(<>
       
       
       <HStack wrap={'wrap'}>
        {
        exchanges.map((i)=>(
         <ExchangeCard key={i.id} name={i.name} image={i.image} 
         rank={i.trust_score_rank} url={i.url}>

         </ExchangeCard>
        )

        )}
       </HStack>
       </>)
     }

    </Container>);
};

const ExchangeCard=({name,image,rank,url})=>(
    <a href={url} target={'blank'}>

<VStack w={'52'} p={'8'} borderRadius={'md'} shadow={"lg"} m={"4"} transition={"all 0.2s"}

   css={{
    "&:hover":{
        transform:"scale(1.1)",
    },
   }}

>
    <Image src={image} w={"10"} h={"10"} objectfit={"contain"} alt={"Exchange"}></Image>
    <Heading noOfLines={'1'} size={"md"}> {rank}</Heading>
    <Text noofsize={'1'} > {name}</Text>
</VStack>
    </a>

)

export  default Exchange;