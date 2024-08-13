'use client';
import {Box, Button, Container} from "@mui/material";
import {Header} from "@/app/component/Header";
import {Footer} from "@/app/component/Footer";
import {createContext, useState, Provider} from "react";
import {MobileNavigation} from "@/app/component/mobileNavigation";



const Template = ({children}) => {
    const [stateMobileMenu, setStateMobileMenu] = useState(false);
    console.log(stateMobileMenu)
    return (
        <Box>
            <Container
                maxWidth={'1200px'}
                sx={{
                    maxWidth: '1200px'
                }}
            >
                <Header openMobMenu={[stateMobileMenu, setStateMobileMenu]}/>
            </Container>
            <Box
                sx={{
                    position: 'relative',
                }}
            >
                {stateMobileMenu && <MobileNavigation/>}
                {children}
            </Box>
            <Footer/>
        </Box>
    )
}

export default Template;