import {Box, Typography} from "@mui/material";
import {dataProduct} from "@/app/component/SectionOurProduct/dataSectionProduct";
import Image from "next/image";

export const SectionOurProduct = () => {
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
                Чем мы занимаемся
            </Typography>
            <Box
                component={'ul'}
                sx={{
                    display: 'flex',
                    flexDirection: {xs: 'column', md: 'row'},
                    justifyContent: {md: 'center'},
                    alignItems: {xs: 'center'},
                    padding: 0,
                    listStyle: 'none',
                    columnGap: '40px',
                }}
            >
                {dataProduct.map(ele => {
                    const {id, imgUrl, title} = ele;
                    return (
                        <Box
                            key={id}
                            component={'li'}
                            sx={{
                                position: 'relative',
                                maxWidth: {md: '370px'},
                                maxHeight: {md: '294px'},
                                width: {xs: '100%'},
                                height: {xs: 'auto'},
                            }}
                        >
                            <Image
                                src={imgUrl}
                                alt=''
                                width={370}
                                height={294}
                                style={{
                                    width: '100%',
                                    height: '100%',

                                }}
                            />
                            <Typography
                                sx={{
                                    display: 'inline-flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    position: 'absolute',
                                    bottom: '0px',
                                    left: '0px',
                                    width: '100%',
                                    height: '70px',
                                    backgroundColor: 'rgba(47, 48, 58, 0.8)',
                                    color: 'white',
                                    textTransform: 'uppercase',
                                    fontWeight: 600
                                }}
                            >
                                {title}
                            </Typography>
                        </Box>
                    )
                })}
            </Box>
        </Box>
    )
}