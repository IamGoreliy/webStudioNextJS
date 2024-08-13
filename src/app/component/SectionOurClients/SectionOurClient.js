import {Box, Typography} from "@mui/material";
import {clientData} from "@/app/component/SectionOurClients/clientData";

export const SectionOurClient = () => {
    return (
        <Box
            sx={{
                padding: '100px 0px',
            }}
        >
            <Typography
                variant={'h3'}
                sx={{
                    textAlign: 'center',
                    fontWeight: 900,
                    fontSize: {xs: '26px', md: '44px'},
                    lineHeight: 1.61,
                }}
            >
                Постоянные клиенты
            </Typography>
            <Box
                component={'ul'}
                sx={{
                    display: 'flex',
                    flexDirection: {xs: 'column', md: 'row'},
                    justifyContent: {md: 'space-between'},
                    alignItems: {xs: 'center'},
                    padding: 0,
                    listStyle: 'none',
                    columnGap: {md: '20px'},
                    rowGap: {xs: '20px'},
                }}
            >
                {clientData.map(ele => {
                    const {id, clientLogo} = ele;
                    return (
                        <Box
                            key={id}
                            component={'li'}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                border: '1px solid black',
                                width: '210px',
                                height: '90px',
                            }}
                        >
                            {clientLogo}
                        </Box>
                    )
                })}
            </Box>
        </Box>
    )
}