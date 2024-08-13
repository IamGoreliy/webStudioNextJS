import {Box, Container} from "@mui/material";
import {Logo, NavigationBtn} from "@/stylingComponent";
import {MobileMenuIcon} from "@/creatorSVG";
import {checkHeaderNavBtn} from "@/app/component/Utils/checkHeaderNavBtn";


const navPageBtn = ['Home', 'Portfolio', 'Contact'];
const subLinkHeader = ['info@devstudio.com', '+38 096 111 11 11'];



export const Header = ({openMobMenu}) => {
    const [stateMobileMenu, setStateMobileMenu] = openMobMenu;
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                height: {xs: '50px', md: 'unset'},
            }}
        >

            <Logo
                href='/'
                style={{
                    fontFamily: 'Raleway sans-serif',
                    fontWeight: 700,
                    fontSize: '24px',
                    lineHeight: 1.16,
                    width: '134px'
                }}
            >
                <span style={{color: '#2196F3'}}>Web</span> Studio
            </Logo>
            <Box
                sx={{
                    display: {xs: 'none', md: 'flex'},
                    width: '100%'
                }}
            >
                <Box
                    component='ul'
                    sx={{
                        display: 'flex',
                        padding: '0px',
                        listStyle: 'none',
                        columnGap: '30px',
                        marginLeft: '200px',
                        alignItems: 'center',
                    }}
                >
                    {navPageBtn.map(eleBtn => {
                        return (
                            <Box
                                key={eleBtn}
                                component='li'

                            >
                                <NavigationBtn href={checkHeaderNavBtn(eleBtn)}>{eleBtn}</NavigationBtn>
                            </Box>
                        )
                    })}
                </Box>
                <Box
                    sx={{
                        marginLeft: 'auto',
                    }}
                >
                    <Box
                        component='ul'>
                        {subLinkHeader.map(textForLink => {
                            return (
                                <Box
                                    key={textForLink}
                                    component='li'
                                >
                                    <NavigationBtn
                                        href={`/${textForLink}`}
                                    >
                                        {textForLink}
                                    </NavigationBtn>
                                </Box>
                            )
                        })}
                    </Box>
                </Box>
            </Box>
            <Box
                component={'button'}
                onClick={() => setStateMobileMenu(!stateMobileMenu)}
                sx={{
                    display: {xs: 'flex', md: 'none'},
                    marginLeft: 'auto',
                    marginRight: '10px',
                    border: '1px solid, transparent',
                    backgroundColor: 'transparent',
                }}
            >
                <MobileMenuIcon/>
            </Box>
        </Box>
    )
}