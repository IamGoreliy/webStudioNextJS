import {Box, Container, Typography} from "@mui/material";
import {ourTeamData} from "@/app/component/SectionOurTeam/OurTeamData";
import Image from "next/image";
import {Facebook, Instagram, Linkedin, Twitter} from "@/creatorSVG";
import {CustomList} from "@/stylingComponent";




export const TestSectionOurTeam = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#F5F4FA',
                padding: '100px',
            }}
        >
            <Container
                maxWidth={'1200px'}
                sx={{
                    maxWidth: '1200px'
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
                    Наша команда
                </Typography>
                <Box
                    component={'ul'}
                    sx={{
                        listStyle: 'none',
                        padding: 0,
                        display: 'flex',
                        flexDirection: {xs: 'column', md: 'row'},
                        justifyContent: {md: 'center'},
                        alignItems: {xs: 'center'},
                        columnGap: {md: '37px'},
                        rowGap: {xs: '30px'},

                    }}
                >
                    {ourTeamData.map(ele => {
                        const {id, imgUrl, employeeName, department} = ele;
                        return (
                            <Box
                                key={id}
                                component={'li'}
                                sx={{
                                    width: '270px',
                                    maxHeight: 'auto',
                                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 1px rgba(0, 0, 0, 0.14), 0 2px 1px rgba(0, 0, 0, 0.2)',
                                    backgroundColor: 'white',
                                }}
                            >
                                <Image
                                    src={imgUrl}
                                    alt=''
                                    width={270}
                                    height={260}
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                    }}
                                />
                                <Box
                                    padding={'40px 30px'}
                                >
                                    <Typography
                                        variant={'h7'}
                                        sx={{
                                            display: 'block',
                                            textAlign: 'center',
                                            fontWeight: 600,
                                        }}
                                    >
                                        {employeeName}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            textAlign: 'center',
                                            mt: '10px',
                                            color: '#757575',
                                        }}
                                    >
                                        {department}
                                    </Typography>
                                    <Box
                                        component={'ul'}
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            columnGap: '15px',
                                            listStyle: 'none',
                                            padding: 0,
                                            mt: '20px',
                                        }}
                                    >
                                        <CustomList
                                            component={'li'}
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                width: '40px',
                                                height: '40px',
                                                borderRadius: '50%',
                                                backgroundColor: 'rgba(0, 0, 0, 0.2)',

                                            }}
                                        >
                                            <Instagram
                                                sx={{
                                                    width: '30px',
                                                    height: '30px',
                                                    fill: 'white',
                                                }}
                                            />
                                        </CustomList>
                                        <CustomList
                                            component={'li'}
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                width: '40px',
                                                height: '40px',
                                                borderRadius: '50%',
                                                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                                            }}
                                        >
                                            <Twitter
                                                sx={{
                                                    width: '30px',
                                                    height: '30px',
                                                    fill: 'white',
                                                }}
                                            />
                                        </CustomList>
                                        <CustomList
                                            component={'li'}
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                width: '40px',
                                                height: '40px',
                                                borderRadius: '50%',
                                                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                                            }}
                                        >
                                            <Facebook
                                                sx={{
                                                    width: '30px',
                                                    height: '30px',
                                                    fill: 'white',
                                                }}
                                            />
                                        </CustomList>
                                        <CustomList
                                            component={'li'}
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                width: '40px',
                                                height: '40px',
                                                borderRadius: '50%',
                                                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                                            }}
                                        >
                                            <Linkedin
                                                sx={{
                                                    width: '30px',
                                                    height: '30px',
                                                    fill: 'white',
                                                }}
                                            />
                                        </CustomList>
                                    </Box>
                                </Box>
                            </Box>
                        )
                    })}
                </Box>
            </Container>
        </Box>
    )
}