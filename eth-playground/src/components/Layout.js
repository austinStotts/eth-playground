import { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";


export default function Layout({ children }) {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      h="100%"
      // bg="gray.800"
    >
      {children}
    </Flex>
  )
}