'use client';

import {Box, Button, Grid, Typography} from "@mui/material";
import {category, dataExamplesOfWebsites} from "@/app/Portfolio/SupportingPortfolio/dataExamplesOfWebsites";
import Image from "next/image";
import {useLayoutEffect, useRef, useState} from "react";


const Page = () => {
    const refLi = useRef(null);
    const [heightTextWindow, setHeightTextWindow] = useState(null);

    useLayoutEffect(() => {
        setHeightTextWindow(refLi.current.offsetHeight);
    }, []);

    console.log(heightTextWindow)

    return(
        <Box>
            <Box
                component={'ul'}
                sx={{
                    padding: 0,
                    listStyle: 'none',
                    display: 'flex',
                    justifyContent: 'center',
                    columnGap: '20px',
                    rowGap: {xs: '20px', md: 'unset'},
                    flexWrap: 'wrap',


                }}
            >
                {category.map((nameCategory, index) => {
                    return (
                        <Box
                            key={index}
                            component={'li'}
                        >
                            <Button
                                variant={'contained'}
                                sx={{
                                    backgroundColor: '#F5F4FA',
                                    color: 'black',
                                }}
                            >
                                {nameCategory}
                            </Button>
                        </Box>
                    )
                })}
            </Box>
            <Grid
                container
                spacing={2}
                sx={{
                    padding: '100px 0px'
                }}
            >
                {dataExamplesOfWebsites.map(ele => {
                    const {id, imgUrl, title, desc, text} = ele;
                    return (
                        <Grid
                            key={id}
                            item
                            xs={12}
                            md={6}
                            xl={4}
                            // sx={{
                            //     position: 'relative',
                            //     '&:hover::before': {
                            //         content: `'"${text}"'`,
                            //         position: 'absolute',
                            //         top: 0,
                            //         left: 0,
                            //         width: 'calc(100% - 16px)',
                            //         height: `${heightTextWindow}px`,
                            //         marginTop: '16px',
                            //         marginLeft: '16px',
                            //         backgroundColor: 'red',
                            //     },
                            // }}
                        >
                            <Box
                                sx={{
                                    border: '1px solid #EEEEEE',
                                    boxShadow: '0 1px 1px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16)',
                                    borderRadius: '4px',
                                    position: 'relative',
                                    '&:hover::before': {
                                        content: `'"${text}"'`,
                                        position: 'absolute',
                                        display: 'flex',
                                        textAlign: 'center',
                                        alignItems: 'center',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: `${heightTextWindow}px`,
                                        backgroundColor: 'rgba(33, 150, 243, 0.7)',
                                        color: '#ffffff',

                                    },
                                }}
                            >
                                <Image
                                    ref={refLi}
                                    src={imgUrl}
                                    alt=''
                                    width={1200}
                                    height={500}
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                    }}
                                />
                                <Box
                                    sx={{
                                        padding: '30px 15px',
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontWeight: 600,
                                        }}
                                    >
                                        {title}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            marginTop: '20px',
                                            color: '#757575',
                                        }}
                                    >
                                        {desc}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    )
};

export default Page;