import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";



function Header(){
    return(<HStack shadow={"base"} p={"4"} bgColor={"blackAlpha.900"}>
        <Button color={'white'}  variant={"unstyled"}><Link to='/'>Home</Link></Button>
        <Button color={'white'}  variant={"unstyled"}><Link to='/exchange'>Exchange</Link></Button>
        <Button color={'white'}  variant={"unstyled"}><Link to='/coins'>Coins</Link></Button>
        {/* <Button color={'white'} variant={'unstyled'}><Link to='/coins' >Coindetails</Link></Button> */}
        </HStack>)
}


export default Header;
