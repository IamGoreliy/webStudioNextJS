import {Box, Container, Typography} from "@mui/material";
import Image from "next/image";
import {HeaderButton} from "@/stylingComponent";
import {dataCapabilities} from "@/app/component/SectionHeroTitle/dataSectionTitle";


export const SectionTitle = () => {
    return (
        <Box>
            <Box
                sx={{
                    backgroundColor: 'gray',
                    backgroundImage: 'linear-gradient(90deg, rgba(47,48,58,0.4) 0%, rgba(47,48,58,0.7) 100%), url(/image/hero-background/1200/header_img1200.jpg)',
                    maxWidth: '1600px',
                    height: {xl: '700px', md: '500px', xs: '350px'},
                    backgroundSize: 'cover',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}
            >
                <Typography
                    variant={'h1'}
                    sx={{
                        textAlign: 'center',
                        paddingTop: {xs: '100px', md: '200px'},
                        fontWeight: 900,
                        fontSize: {xs: '26px', md: '44px'},
                        lineHeight: 1.61,
                        color: 'white',
                    }}
                >
                    Эффективные решения <br/>для вашего бизнеса
                </Typography>
                <HeaderButton
                    variant={'contained'}
                    sx={{
                        display: 'flex',
                        width: '200px',
                        marginTop: '50px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                    }}
                >
                    Заказать услугу
                </HeaderButton>
            </Box>
            <Box>
                <Container
                    maxWidth={'1200px'}
                    sx={{
                        maxWidth: '1200px'
                    }}
                >
                    <Box
                        component={'ul'}
                        sx={{
                            listStyle: 'none',
                            padding: 0,
                            display: 'flex',
                            flexDirection: {xs: 'column', md: 'row'},
                            justifyContent: {md: 'center'},
                            alignItems: {xs: 'center'},
                            columnGap: {md: '40px'},
                            rowGap: {xs: '30px'},
                            marginTop: {md: '50px'},
                        }}
                    >
                        {dataCapabilities.map(ele => {
                            const {id, imgUrl, title, desc} = ele;
                            return (
                                <Box
                                    key={id}
                                    component={'li'}
                                    sx={{
                                        maxWidth: {md:'270px'},
                                        width: {xs: '100%'},
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: '100%',
                                            height: '120px',
                                            backgroundColor: '#f5f4fa'
                                        }}
                                    >
                                        {imgUrl}
                                    </Box>
                                    <Typography
                                        variant={'h6'}
                                        sx={{
                                            mt: '30px',
                                            fontWeight: 'bold',
                                            fontSize: '1.05em',
                                            lineHeight: 1.14,
                                            textAlign: {xs: 'center', md: 'unset'}
                                        }}
                                    >
                                        {title}
                                    </Typography>
                                    <Typography
                                        variant={'p'}
                                        sx={{
                                            display: 'block',
                                            mt: '10px',
                                            fontWeight: 500,
                                            fontSize: '14px',
                                            lineHeight: 1.14,
                                            color: '#757575',
                                            textAlign: {xs: 'center', md: 'unset'}
                                        }}
                                    >
                                        {desc}
                                    </Typography>
                                </Box>
                            )
                        })}
                    </Box>
                </Container>
            </Box>
        </Box>
    )
}