
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./components/Layout";
import ConnectButton from "./components/ConnectButton";

import "./App.css";

import NavBar from "./components/NavBar";

export default function App() {
  return (
    // <ChakraProvider>
    //   <Layout>
    //     <p style={{ color: "white" }}>Hello, world!</p>
    //     <ConnectButton />
    //   </Layout>
    // </ChakraProvider>
    <ChakraProvider>
      <NavBar />
    </ChakraProvider>
  )
}
