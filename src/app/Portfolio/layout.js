import {Box, Container} from "@mui/material";

const Layout = ({children}) => {
    return(
        <Box>
            <Container
                maxWidth={'1200px'}
                sx={{
                    maxWidth: '1200px',
                }}
            >
                {children}
            </Container>
        </Box>
    )
};

export default Layout;