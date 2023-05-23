import React from "react";
import axios from "axios";
import { useEffect } from "react";
import {server} from '../index'
import { useState } from "react";
import { Button, Container, HStack,  Radio, RadioGroup} from "@chakra-ui/react";
import Spinner from "./Spinner";
import ErrorComponent from "./ErrorComponent";
import CoinsCard from "./CoinsCard";


function  Coins()
{
    const[coins,setCoins]=useState([]);
    const[loading,setLoading]=useState(true);
    const [error,seterror]=useState(false)
    const[page,setPages]=useState(1);
    const[currency,setcurrenncy]=useState('inr');
    const currencysymbol = currency === "inr" ?  "₹" : currency === "eur" ? "€" : "$";

    const changePage=(page)=>{
      setPages(page);
      setLoading(true)
    }

    const btns=new Array(132).fill(1);

    useEffect(()=>{
        // setLoading(true)
        const fetchCoins=async ()=>{
            try{
     const {data}=await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
      setCoins(data);
      setLoading(false);
    console.log(data)
            }catch(error){
                // setLoading(false);
                seterror(true);
                setLoading(false);
            }

        };
        
        fetchCoins();
    },[currency,page])

    if(error)
    return<ErrorComponent message={'Error while fetching coins'}></ErrorComponent>

    return(<Container maxW={'container.xl'}>
     {
       loading?( <Spinner></Spinner>):(<>
       
       <RadioGroup value={currency} onChange={setcurrenncy} p={"8"}>
       <HStack spacing={"4"}>
        <Radio value={"inr"}>INR</Radio>
        <Radio value={"usd"}>usd</Radio>
        <Radio value={"eur"}>eur</Radio>
       </HStack>
       </RadioGroup>
       
       <HStack wrap={'wrap'} justifyContent={"space-evenly"}>
        {
        coins.map((i)=>(
         <CoinsCard key={i.id} name={i.name} image={i.image} 
         i={i.id}
         price={i.current_price}
         rank={i.trust_score_rank} 
          symbol={i.symbol}
         currencysymbol={currencysymbol}
         >

         </CoinsCard>
        )

        )}
       </HStack>
       <HStack w={"full"} overflowX={"auto"} p={"8"}>
      {
        btns.map((item,index)=>(
            <Button bgColor={"blackAlpha.900"} 
            key={index}
            color={"white"} onClick={()=>changePage(index+1)}> 

            {index+1}
            </Button>
        ))
      }
       </HStack>
       </>)
     }

    </Container>);
};


export  default Coins;