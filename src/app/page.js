'use client';
import styled from "@emotion/styled";
import {Box, Container, Typography} from "@mui/material";
import {SectionTitle} from "@/app/component/SectionHeroTitle/SectionTitle";
import {SectionOurProduct} from "@/app/component/SectionOurProduct/SectionOurProduct";
import {SectionOurTeam} from "@/app/component/SectionOurTeam/SectionOurTeam";
import {SectionOurClient} from "@/app/component/SectionOurClients/SectionOurClient";



const CustomDiv = styled(props => {
  return <div {...props}/>
})(() => {
  return {
    backgroundColor: 'white',
    color: 'black',
  }
})
export default function Home() {
      return (
        <Box>
          <SectionTitle/>
          <Container
              maxWidth={'1200px'}
              sx={{
                  maxWidth: '1200px'
              }}
          >
              <SectionOurProduct/>
          </Container>

          <SectionOurTeam/>

          <Container
            maxWidth={'1200px'}
            sx={{
                maxWidth: '1200px'
            }}
          >
              <SectionOurClient/>
          </Container>
        </Box>
  );
}
