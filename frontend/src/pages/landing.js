import React from "react";
import { Features } from "../data";
import { Tile, Button } from "carbon-components-react";
import { useNavigate } from "react-router";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ResponsiveVideoEmbed } from "../components";
import "./pages.css"

const Container = styled.div`
${tw`relative -mx-8 -mt-8 bg-center bg-cover`}
background-image: url("https://images.unsplash.com/photo-1576788369575-4ab045b9287e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MjE1MTQ1OA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080");
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

const SlantedBackground = styled.span`
${tw`relative px-4 -mx-4 py-2`}
&::before {
  content: "";
  ${tw`absolute inset-0 bg-gray-100 transform -skew-x-12`}
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


  return (
      <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
    <Container style={{marginTop:"1%"}}>
      <OpacityOverlay />
      <HeroContainer>
        <TwoColumn>
          <LeftColumn>
            <Notification>We provide free learning tutorials about programming</Notification>
            <Heading>
              <h1>Start Learning Programming for FREE at TechHubHK</h1>
            </Heading>
            <PrimaryAction onClick={()=>{navigate("../menu")}}>Click to Start</PrimaryAction>
          </LeftColumn>
          <RightColumn id="landingVideo">
            <StyledResponsiveVideoEmbed
              url="https://www.youtube.com/embed/EEiTeE1Vt68"
              background="transparent"
            />
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

    // const navigate = useNavigate();
    // return (
    //     <div>
    //         <div className="upperBanner">
    //             <h1>Welcome to Tech Hub HK</h1>
    //         </div>
    //         <img src ={HongKongImage} alt="Hong Kong" className="banner"/>
    //         <div className="downBanner">
    //             <h2>A Tech Hub for 🇭🇰</h2>
               
    //         </div>
    //     </div>
    // );
}