'use client';
import {Box, Button, Container} from "@mui/material";
import {CustomButton, CustomInput, CustomLink, ListSocial, Logo} from "@/stylingComponent";
import {TextDecoration} from "@/stylingComponent";
import {Facebook, Instagram, Linkedin, Twitter} from "@/creatorSVG";

const socialIcon = [
    {
        id: 'instagram',
        element:
            <Instagram
                sx={{
                    width: '30px',
                    height: '30px',
                    fill: 'white',
                }}
            />,
    },
    {
        id: 'Twitter',
        element:
            <Twitter
                sx={{
                    width: '30px',
                    height: '30px',
                    fill: 'white',
                }}
            />,
    },
    {
        id: 'Facebook',
        element:
            <Facebook
                sx={{
                    width: '30px',
                    height: '30px',
                    fill: 'white',
                }}
            />,
    },
    {
        id: 'Linkedin',
        element:
            <Linkedin
                sx={{
                    width: '30px',
                    height: '30px',
                    fill: 'white',
                }}
            />,
    },
];


export const Footer = () => {
    return (
        <Box
            sx={{

                backgroundColor: '#2F303A',
                color: 'white',
                padding: {xs: '50px 30px', md: '80px'},
            }}
        >
            <Container
                maxWidth={'1200px'}
                sx={{
                    maxWidth: '1200px'
                }}
            >
                <Box
                    sx={{
                        textAlign: {xs: 'center', md: 'unset'},
                    }}
                >
                <Logo
                    href={'/'}
                    style={{
                        fontFamily: 'Raleway sans-serif',
                        fontWeight: 700,
                        fontSize: '24px',
                        lineHeight: 1.16,
                        color: 'white',
                    }}
                >
                    <span style={{color: '#2196F3'}}>Web</span> Studio
                </Logo>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: '20px',
                        // alignItems: 'center',
                        flexDirection: {xs: 'column', md: 'row'},
                        columnGap: '20px'
                    }}
                >
                    <Box
                        sx={{
                            textAlign: {xs: 'center', md: 'unset'},
                        }}
                    >
                        <TextDecoration
                            sx={{
                                marginTop: '0px',
                                fontStyle: 'italic',

                            }}
                        >
                            г. Киев, пр-т Леси Украинки, 26
                        </TextDecoration>
                        <TextDecoration
                            sx={{
                                marginTop: '10px',
                                color: 'rgba(255, 255, 255, 0.6)',
                                fontStyle: 'italic',
                            }}
                        >
                            info@example.com
                        </TextDecoration>
                        <TextDecoration
                            sx={{
                                marginTop: '10px',
                                color: 'rgba(255, 255, 255, 0.6)',
                                fontStyle: 'italic',
                            }}
                        >
                            +38 099 111 11 11
                        </TextDecoration>
                    </Box>
                    <Box
                        sx={{
                            marginTop: {xs: '20px', md: 0},
                            textAlign: {xs: 'center', md: 'unset'},
                        }}
                    >
                        <TextDecoration
                            sx={{
                                fontWeight: 700,
                                fontSize: '16px',
                                lineHeight: 1.14,
                                marginTop: '5px',

                            }}
                        >
                            ПРИСОЕДИНЯЙТЕСЬ
                        </TextDecoration>
                        <Box
                            component={'ul'}
                            sx={{
                                listStyle: 'none',
                                padding: 0,
                                display: 'flex',
                                justifyContent: {xs: 'center', md: 'space-between'},
                                columnGap: {xs: '40px', md: '20px'},
                            }}
                        >
                            {socialIcon.map(ele => {
                                const {id, element} = ele;
                                return (
                                    <ListSocial
                                        key={id}
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: '40px',
                                            height: '40px',
                                            borderRadius: '50%',
                                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                            '&:hover': {
                                                backgroundColor: '#2196F3',
                                            },
                                        }}
                                    >
                                        <CustomLink>
                                            {element}
                                        </CustomLink>
                                    </ListSocial>
                                )
                            })}
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            marginTop: {xs: '20px', md: 0},
                            textAlign: {xs: 'center', md: 'unset'},
                        }}
                    >
                        <TextDecoration
                            sx={{
                                fontWeight: 700,
                                fontSize: '16px',
                                lineHeight: 1.14,
                                marginTop: '5px',

                            }}
                        >
                            ПОДПИШИТЕСЬ НА РАССЫЛКУ
                        </TextDecoration>
                        <Box
                            component={'form'}
                            sx={{
                                display: 'flex',
                                flexDirection: {xs: 'column', lg: 'row'},
                                alignItems: {xs: 'center', md:'center'},
                                marginTop: '10px',
                            }}
                        >
                            <label>
                                <Box
                                    component={'input'}
                                    name={'email'}
                                    type={'email'}
                                    placeholder={'E-mail'}
                                    sx={{
                                        // width: '338px',
                                        height: '50px',
                                        borderRadius: '5px',
                                        backgroundColor: 'transparent',
                                        borderColor: 'rgba(255, 255, 255, 0.3)',
                                        fontSize: '16px',
                                        color: 'white',
                                        paddingLeft: '20px',
                                        '&:placeholder': {
                                            paddingLeft: '20px'
                                        },
                                        width: {xs: '92%', md: '208px', lg: '338px'}
                                    }}
                                />
                            </label>
                            <Button
                                variant={'contained'}
                                sx={{
                                    width: {xs: 'auto', md: '92%', lg: 'auto'},

                                    height: '55px',
                                    marginLeft: '0px',
                                }}
                            >
                                Подписаться
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}