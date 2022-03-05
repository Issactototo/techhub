import React, { useEffect, useState } from "react";
import { Features } from "../data";
import { Tile, Button, Loading } from "carbon-components-react";
import { useNavigate } from "react-router";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ResponsiveVideoEmbed } from "../components";
import { getLandingContent } from "../functions";
import "./pages.css"




const Container = styled.div`
${tw`relative bg-center bg-cover`}
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0  opacity-25`;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;
const RightColumn = tw.div`w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`;

const Heading = styled.h1`
${tw`text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-5xl font-black text-gray-100 leading-none`}
h1 {
  ${tw`inline-block mt-3`}
}
`;


const Notification = tw.span`inline-block my-4 pl-3 py-1 text-gray-100 border-l-4 border-blue-500 font-medium text-sm`;

const PrimaryAction = tw.button`px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100  font-bold rounded shadow transition duration-300  hocus:text-gray-500 `;

const StyledResponsiveVideoEmbed = styled(ResponsiveVideoEmbed)`
padding-bottom: 56.25% !important;
padding-top: 0px !important;
${tw`rounded`}
iframe {
  ${tw`rounded bg-black shadow-xl`}
}
`;

export function LandingPage(){
  const navigate =useNavigate();
  const [content, changeContent] = useState(null);
  const [isLoading, changeLoading] = useState(true);

  useEffect(()=>{
    async function fetchMyAPI() {
      const contentfulContent = await getLandingContent();
      changeContent(contentfulContent.data)
      changeLoading(false)
    }
    
    fetchMyAPI()
  },[])


  return (
      <div style={{display:"flex",flexDirection:"column",justifyContent:"center", maxWidth:"100%"}}>

    <Container style={{marginTop:"1%", backgroundImage: `url(${isLoading?null:content.landingImage})`}} >
      <OpacityOverlay />
      <HeroContainer>
        <TwoColumn>
          <LeftColumn>
            <Notification>{isLoading?"Loading...":content.slogan}</Notification>
            <Heading>
              <h1>{isLoading?"Loading...":content.title}</h1>
            </Heading>
            <PrimaryAction onClick={()=>{navigate("../menu")}}>Click to Start</PrimaryAction>
          </LeftColumn>
          <RightColumn id="landingVideo">
          {isLoading?"Loading...": <StyledResponsiveVideoEmbed
              url={content.youtube}
              background="transparent"
            />}
           
          </RightColumn>
        </TwoColumn>
      </HeroContainer>
    </Container>
     <div className="features" id = "features">
     {
         Features.map((feature,index)=>(
             <div className="featureSection" id ="featureSection">
                 <Tile style={{ paddingTop: "8%"}}>
                     <div className={`${(index===0)?"featureSectionWithoutMargin":"featureSection"}`}>
                         <h3 className="featureTitle">{feature.title}</h3>
                         <br/>
                         <p className="featureDescription">{feature.description}</p>
                         <Button 
                             className="featureButton"
                             onClick={()=>{navigate(feature.link);window.scrollTo(0, 0)}}
                         >
                             Learn More</Button>
                     </div>
                 </Tile>
             </div>
         ))
     }
     </div>
     </div>
  );

}