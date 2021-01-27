import React from "react";
import styled from "styled-components";
import DropDown from "./DropDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LinkedIcon =()=>{
  return(
    <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.5262 2.5262C0 5.05241 0 9.11827 0 17.25V28.75C0 36.8817 0 40.9476 2.5262 43.4738C5.05241 46 9.11827 46 17.25 46H28.75C36.8817 46 40.9476 46 43.4738 43.4738C46 40.9476 46 36.8817 46 28.75V17.25C46 9.11827 46 5.05241 43.4738 2.5262C40.9476 0 36.8817 0 28.75 0H17.25C9.11827 0 5.05241 0 2.5262 2.5262ZM11.4811 14.4099C9.58715 14.4099 8.05 12.8571 8.05 10.9425C8.05 9.02789 9.58715 7.475 11.4811 7.475C13.3751 7.475 14.9123 9.02789 14.9123 10.9425C14.9123 12.8571 13.3771 14.4099 11.4811 14.4099ZM8.54016 38.525V16.9024H14.4221V38.525H8.54016ZM32.068 38.525H37.95V25.2389C37.95 14.9132 26.9644 15.2886 24.2254 20.3719V16.9024H18.3434V38.525H24.2254V27.5093C24.2254 21.3901 32.068 20.8889 32.068 27.5093V38.525Z" fill="url(#paint0_linear)"/>
<defs>
<linearGradient id="paint0_linear" x1="23" y1="0" x2="23" y2="46" gradientUnits="userSpaceOnUse">
<stop stop-color="#0077B5"/>
<stop offset="1" stop-color="#0E6795"/>
</linearGradient>
</defs>
</svg>
  )
}

const FooterDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content:space-between;
  background-color: #e5e9efcc;
  border-top: 1px solid #b5c9e6cc;
  padding:20px 120px 50px;
  @media (max-width: 768px){
    display:none;
  }
`;
const Div1 = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction:column;
  @media (max-width: 768px){
    display:none;
  }
`;
const Div2 = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction:column;
`;
const Div3 = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction:column;
`;
const Div4 = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction:column;
`;
const Div5 = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction:column;
`;
const Div6 = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction:column;
`;
const IconDiv= styled.div`
width:auto;
height:auto;
display:flex;
align-items:center;
`;
const IconText = styled.p`
font-size:14px;
color:#181818;
margin-bottom:0px;
margin-top:10px;
display:flex;
font-family:"Gotham Medium";
`;
const InText = styled.p`
font-size:14px;
color:#0077b5;
margin-bottom:0px;
display:flex;
font-family:"Gotham Medium";
`;
const Icons = styled(FontAwesomeIcon)`
  font-size:60px;
  color:#0077b5;
  display: flex;
  margin-top:15px;
  border-radius:7px;
  cursor: pointer;
`;

const UpperDiv = styled.div`
width:auto;
height:50px;
display:flex;
// justify-content: center;
align-items: center;
`;
const LowerDiv = styled.div`
width:auto;
height:auto;
display:flex;
justify-content: center;
// align-items: center;
flex-direction:column;
`;
const Title =styled.p`
font-size:12px;
color: #181818;
font-family:"Gotham Medium";
text-align:left;
`;
const Items = styled.p`
font-size: 12px;
color: #181818;
font-weight:500;
font-family: "Gotham Pro";
text-align:left;
display:flex;
margin-bottom:0px;
margin-top:5px;
cursor:pointer;
`;
const Button1 = styled.div`
width: 170px;
height: 32px;
border-radius: 4px;
background-color: #0275b1;
border: 1px solid #0275b1;
font-size: 11px;
color: #ffffff;
font-family:"Gotham Medium";
cursor:pointer;
display:flex;
justify-content:space-between;
padding:0px 10px;
align-items:center;
margin-bottom:15px;
@media (max-width: 768px){
  margin:0px 20px 0px 0px;
}
@media (max-width: 512px){
  margin-bottom:10px;
`;
const Button2 = styled.div`
width: 170px;
height: 32px;
border-radius: 4px;
font-size: 11px;
color: #0275b1;
font-family:"Gotham Medium";
background-color:#000000000;
border: 1px solid #0275b1;
display:flex;
justify-content:space-between;
align-items:center;
padding:0px 10px;
cursor:pointer;
@media (max-width: 512px){
  margin-bottom:10px;
`;

const MobileFooter = styled.div`
width: 100%;
height: auto;
display: none;
justify-content:center;
background-color: #e5e9efcc;
border-top: 1px solid #b5c9e6cc;
padding:20px;
flex-direction:column;
@media (max-width: 768px){
  display:flex;
}
`;
const NavigationDiv=styled.div`
width:100%;
height:auto;
display:flex;
align-items:baseline;
margin-bottom:20px;
`;
const TitleDiv=styled.div`
width:100px;
height:auto;
display:flex;
align-items:center;
margin-right:20px;
`;
const ContentDiv=styled.div`
width:auto;
height:auto;
display:flex;
align-items:center;
`;
const ContentDiv2=styled.div`
width:auto;
height:auto;
display:block;
align-items:center;
`;
const ContentDiv3=styled.div`
width:auto;
height:auto;
display:flex;
align-items:center;
@media (max-width: 512px){
  flex-direction:column;
  align-items:baseline;
}
`;
const NavLinks =styled.p`
font-size: 12px;
color: #181818;
font-weight:500;
font-family: "Gotham Pro";
text-align:left;
display:inline-block;
margin:2px 10px 2px;
cursor:pointer;
`;
const Footer = (props) => {
  return (
    <>
    <FooterDiv>
      <Div1>
        <IconDiv><LinkedIcon/></IconDiv>
        <IconText>Linked<InText>In</InText></IconText>
      </Div1>
      <Div2>
        <UpperDiv>
            <Title>Navigation</Title>
        </UpperDiv>
        <LowerDiv>
            <Items>About</Items>
            <Items>Carreers</Items>
            <Items>Advertising</Items>
            <Items>Small Business</Items>
        </LowerDiv>
      </Div2>
      <Div3>
        <UpperDiv></UpperDiv>
        <LowerDiv> 
            <Items>Talent Solutions</Items>
            <Items>Marketing Solutions</Items>
            <Items>Sales Solutions</Items>
            <Items>Safety Center</Items></LowerDiv>
      </Div3>
      <Div4>
        <UpperDiv></UpperDiv>
        <LowerDiv>
        <Items>Community Guidelines</Items>
            <Items>Privacy & Terms</Items>
            <Items>Mobile App</Items>
        </LowerDiv>
      </Div4>
      <Div5>
        <UpperDiv>
            <Title>Fast Access</Title>
        </UpperDiv>
        <LowerDiv>
            <Button1>
                QUESTIONS?
            </Button1>
            <Button2>
                SETTINGS
            </Button2>
        </LowerDiv>
      </Div5>
      <Div6>
        <UpperDiv>
            <Title>Language</Title>
        </UpperDiv>
        <LowerDiv>
            <DropDown
                items={props.array}
                callback={props.callbackFunction}
                />
        </LowerDiv>
      </Div6>
    </FooterDiv>

    <MobileFooter>
      <NavigationDiv>
        <TitleDiv>Language</TitleDiv>
        <ContentDiv>
          <DropDown
                leftMargin={"0px"}
                items={props.array}
                callback={props.callbackFunction}
                />
        </ContentDiv>
      </NavigationDiv>
      <NavigationDiv>
        <TitleDiv>Fast Access</TitleDiv>
        <ContentDiv3>
          <Button1>
                  QUESTIONS?
          </Button1>
          <Button2>
                SETTINGS
          </Button2>
        </ContentDiv3>
      </NavigationDiv>
      <NavigationDiv>
        <TitleDiv>Navigation</TitleDiv>
        <ContentDiv2>
          <NavLinks>About</NavLinks>
          <NavLinks>Careers</NavLinks>
          <NavLinks>Advertising</NavLinks>
          <NavLinks>Small Business</NavLinks>
          <NavLinks>Talent Solutions</NavLinks>
          <NavLinks>Marketing Solutions</NavLinks>
          <NavLinks>Sales Solution</NavLinks>
          <NavLinks>Safety Center</NavLinks>
          <NavLinks>Community Guidelines</NavLinks>
          <NavLinks>Privacy & Terms</NavLinks>
          <NavLinks>Mobile App</NavLinks>
        </ContentDiv2>
      </NavigationDiv>
    </MobileFooter>
    </>
  );
};

export default Footer;
