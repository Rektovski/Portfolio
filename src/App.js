import { ChakraProvider } from '@chakra-ui/react'
import Main from "./main/components/Main";
import "./App.css";

export default function App() {
    return (
        <ChakraProvider>
            <div className={'App '}>
                <Main/>
            </div>
        </ChakraProvider>
    );
}