import {Box, Button} from "@mui/material";
import {checkHeaderNavBtn} from "@/app/component/Utils/checkHeaderNavBtn";
import Link from "next/link";

const mobileBtn = ['Home', 'Portfolio', 'Contact'];
const mobileSubLinkHeader = ['info@devstudio.com', '+38 096 111 11 11'];

export const MobileNavigation = () => {
    return (
        <Box
            sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                backgroundColor: 'white',
                zIndex: 1,
            }}
        >
           <Box
               component={'ul'}
               sx={{
                   listStyle: 'none',
                   padding: 0,
                   display: 'flex',
                   flexDirection: 'column',
                   alignItems: 'center',
                   rowGap: '30px'
               }}
           >
               {mobileBtn.map((ele, index) => {
                   return (
                       <Box
                           key={index}
                           component={'li'}
                       >
                           <Link
                               href={checkHeaderNavBtn(ele)}
                           >
                               {ele}
                           </Link>
                       </Box>
                   )
               })}
           </Box>
           <Box
               component={'ul'}
               sx={{
                   margin: '40px',
                   padding: 0,
                   listStyle: 'none',
                   display: 'flex',
                   flexDirection: 'column',
                   alignItems: 'center',
                   rowGap: '20px',
               }}
           >
               {mobileSubLinkHeader.map((ele, index) => {
                   return (
                       <Box
                           key={index}
                           component={'li'}
                       >
                           <a>
                               {ele}
                           </a>
                       </Box>
                   )
               })}
           </Box>
        </Box>
    )
}