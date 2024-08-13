'use client';
import {Box, Typography} from "@mui/material";
import dynamic from "next/dynamic";

const Iframe = dynamic(() => import('./component/iframeForContacts'), {ssr: false});

const Page = () => {
    return (
        <Box
            sx={{
                padding: '100px 0px'
            }}
        >
            <Box
                sx={{
                    backgroundColor: 'gray',
                }}
            >
                <Typography>
                    Address: г. Киев, пр-т Леси Украинки, 26
                </Typography>
                <Typography>
                    Telephone: +38 099 111 11 11
                </Typography>
                <Typography>
                    E-mail: info@devstudio.com
                </Typography>
            </Box>
            <Box>
                <Iframe/>
            </Box>
        </Box>
    )
}

export default Page;