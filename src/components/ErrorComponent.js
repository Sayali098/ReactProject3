 import { Alert, AlertIcon } from "@chakra-ui/react";
import React from "react";

 function ErrorComponent({message}){
    return (
<Alert status={"error"} position={'fixed'} left={'50%'} bottom={'4'} transform={"translateX(-50%)"} w={'container.lg'}>
   <AlertIcon>

   </AlertIcon>
   {message}
</Alert>


    )
 }
 export default ErrorComponent;
