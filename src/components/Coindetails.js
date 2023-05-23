
import { Badge, Box, Button, Container, Progress, Spinner, Stat, StatArrow, StatHelpText, StatLabel, StatNumber, Text, VStack } from "@chakra-ui/react";
import React from "react";
// import Spinner from "./Spinner";
import { useEffect,useState } from "react";
import { HStack } from "@chakra-ui/react";
import { RadioGroup,Radio } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ErrorComponent from "./ErrorComponent";
import {server} from '../index'
import { Image } from "@chakra-ui/react";
import { Chart } from "react-chartjs-2";


function Coindetails()
{
    const[coin,setCoin]=useState({});
    const[loading,setLoading]=useState(true);
    const [error,seterror]=useState(false)
    const[page,setPages]=useState(1);
   const[ chartarray,setChartArray]=useState();
    const[days,setDays]=useState();
    const[currency,setcurrenncy]=useState('inr');

    const currencysymbol=currency==="inr"? "₹":currency === "eur" ?"€":"$";

    const btns=["24h",'7d',"14d","30d","60d","200d","365d","max"];

   const switchStartStats =(key)=>{
              switch(key){
                 case "24h":
                    setDays("24h");
                    setLoading(true);
                 break;

                 case "7d":
                    setDays("7d");
                    setLoading(true);
                 break;

                 case "14d":
                    setDays("14d");
                    setLoading(true);
                 break;

                 case "30d":
                    setDays("30d");
                    setLoading(true);
                 break;

                 case "60d":
                    setDays("60d");
                    setLoading(true);
                 break;

                 case "200d":
                    setDays("200d");
                    setLoading(true);
                 break;

                     
                 case "365d":
                    setDays("365d");
                    setLoading(true);
                 break;

                 case "max":
                    setDays("max");
                    setLoading(true);
                 break;

              default:
                setDays("24h");
                setLoading(true);
              break;

              }
   }

const params=useParams();

    useEffect(()=>{
        // setLoading(true)
        const fetchCoin=async ()=>{
            try{
     const {data}=await axios.get(`${server}/coins/${params.id}`);

     const {data:{chartData}}=await axios.get(`${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`)

      setCoin(data);
      setChartArray(chartData.prices);
      setLoading(false);
      console.log(data)
            }catch(error){
                // setLoading(false);
                seterror(true)
            }

        }
        
        fetchCoin();
    },[params.id],currency,days)

    
    if(error)
    return<ErrorComponent message={'Error while fetching coins'}></ErrorComponent>
    return(

       <Container maxW={'container.xl'}>
        {
            loading?<Spinner></Spinner>:
            <>
            <Box w={"full"} borderWidth={'1'}>
                <Chart currency={currencysymbol} days={days}></Chart>
            </Box>
            

            <HStack p={"4"} overflowX={"auto"}>
                {
                    btns.map((i)=>(
                        <Button key={"id"}  onClick={switchStartStats(i)}>{i}</Button>
                    ))
                }
            </HStack>
            
            
       <RadioGroup value={currency} onChange={setcurrenncy} p={"8"}>
       <HStack spacing={"4"}>
        <Radio value={"inr"}>INR</Radio>
        <Radio value={"usd"}>usd</Radio>
        <Radio value={"eur"}>eur</Radio>
       </HStack>
       </RadioGroup>
            <VStack spacing={'4 '} p={'16'} alignItems={'flex-start'}>
                <Text fontSize={'small'} opacity={'0.7'} alignSelf={'center'}>Last Updated on {Date(coin.market_data.last_updated).split('G')[0]} </Text>
                <Image src={coin.image.large} objectFit={'contain'} h={'16'} w={'16'}></Image>
                <Stat>
                    <StatLabel>
               {coin.name}
                    </StatLabel>
                    <StatNumber> {currencysymbol}{coin.market_data.current_price[currency]}</StatNumber>
                    <StatHelpText>
                        <StatArrow type={coin.market_data.price_change_percentage_24h > 0 ? "increase" :"decrease"}></StatArrow>
                        {coin.market_data.price_change_percentage_24h}%
                    </StatHelpText>
                </Stat>
                  <Badge bgColor={'blackAlpha.800'} color={'white'} fontSize={'2xl'}>
                    {`#${coin.market_cap_rank}`}
                  </Badge>
                  <CustomBar high={`${currencysymbol}${coin.market_data.high_24h[currency]}`}
                  low={`${currencysymbol}${coin.market_data.low_24h[currency]}`}></CustomBar>
            </VStack>
            
<Box w={'full'} p={'4'}>
    <Item title={"max supply"} value= {coin.market_data.max_supply}></Item>
    <Item title={"Circulating supply"} value= {coin.market_data.circulating_supply}></Item>
    <Item title={"Markt Cap"} value={` ${currencysymbol}${coin.market_data.market_cap[currency]}`}></Item>
    <Item title={"All Time Low"} value={` ${currencysymbol}${coin.market_data.atl[currency]}`}></Item>
    <Item title={"All Time High"} value={` ${currencysymbol}${coin.market_data.ath[currency]}`}></Item>
</Box>
        
            </>
        }
       </Container>
    );
}


const Item=(title,value)=>{
    <HStack justifyContent={'space-between'} w={'full'} my={'4'}>
        <Text fontFamily={""} letterSpacing={'widest'} >{title}</Text>
        <Text>{value}</Text>
    </HStack>
}

const CustomBar=({high,low})=>{

    <VStack w={"full"}>
        <Progress value={'50'} colorScheme={'teal'} w={'full'}></Progress>
        <HStack justifyContent={'space-between'} w={'full'}>
            <Badge children={low} colorScheme={'red'}></Badge>
            <Text fontSize={"sm"}>24H Range</Text>
            <Badge children={high} colorScheme={'green'}></Badge>
        </HStack>
    </VStack>
    
}


export default Coindetails;

