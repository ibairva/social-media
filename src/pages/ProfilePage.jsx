import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import chat1 from "../images/chat1.png";
import chat2 from "../images/chat2.png";
import chat3 from "../images/chat3.png";
import chat4 from "../images/chat4.png";
import chat5 from "../images/chat5.png";
import vid1 from "../images/vid1.png";
import vid2 from "../images/vid2.png";
import vid3 from "../images/vid3.png";
import bg from "../images/bg.png";
import UserBig from "../images/UserBig.png";
import project1 from "../images/project1.png";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";
import exp1 from "../images/exp1.png";
import exp2 from "../images/exp2.png";
import edu1 from "../images/edu1.png";

const DotsV = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z"
        fill="#181818"
        stroke="#181818"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11 19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19Z"
        fill="#181818"
        stroke="#181818"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11 5C11 5.55228 11.4477 6 12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5Z"
        fill="#181818"
        stroke="#181818"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const EditIcon = () => {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0)">
        <path
          d="M8.0257 3.61491H3.35903C3.00541 3.61491 2.66627 3.75539 2.41622 4.00544C2.16617 4.25549 2.0257 4.59463 2.0257 4.94825V14.2816C2.0257 14.6352 2.16617 14.9743 2.41622 15.2244C2.66627 15.4744 3.00541 15.6149 3.35903 15.6149H12.6924C13.046 15.6149 13.3851 15.4744 13.6352 15.2244C13.8852 14.9743 14.0257 14.6352 14.0257 14.2816V9.61491"
          stroke="#181818"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13.0257 2.61484C13.2909 2.34962 13.6506 2.20062 14.0257 2.20062C14.4008 2.20062 14.7605 2.34962 15.0257 2.61484C15.2909 2.88005 15.4399 3.23976 15.4399 3.61484C15.4399 3.98991 15.2909 4.34962 15.0257 4.61484L8.69236 10.9482L6.0257 11.6148L6.69236 8.94817L13.0257 2.61484Z"
          stroke="#181818"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(0.692383 0.948242)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

const Upload = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10"
        stroke="#181818"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.3333 5.33333L8 2L4.66667 5.33333"
        stroke="#181818"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8 2V10"
        stroke="#181818"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const LinkedSm = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.87868 0.87868C0 1.75736 0 3.17157 0 6V10C0 12.8284 0 14.2426 0.87868 15.1213C1.75736 16 3.17157 16 6 16H10C12.8284 16 14.2426 16 15.1213 15.1213C16 14.2426 16 12.8284 16 10V6C16 3.17157 16 1.75736 15.1213 0.87868C14.2426 0 12.8284 0 10 0H6C3.17157 0 1.75736 0 0.87868 0.87868ZM3.99344 5.01216C3.33466 5.01216 2.8 4.47202 2.8 3.80608C2.8 3.14014 3.33466 2.6 3.99344 2.6C4.65222 2.6 5.18688 3.14014 5.18688 3.80608C5.18688 4.47202 4.6529 5.01216 3.99344 5.01216ZM2.97049 13.4V5.87911H5.01639V13.4H2.97049ZM11.1541 13.4H13.2V8.77876C13.2 5.18719 9.37894 5.31778 8.42623 7.08587V5.87911H6.38033V13.4H8.42623V9.56845C8.42623 7.44004 11.1541 7.26569 11.1541 9.56845V13.4Z"
        fill="url(#paint0_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="8"
          y1="0"
          x2="8"
          y2="16"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#D8C281" />
          <stop offset="1" stop-color="#AC9B69" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const Location = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 7.33328L14.6667 1.33328L8.66667 13.9999L7.33333 8.66662L2 7.33328Z"
        fill="#0275B1"
      />
    </svg>
  );
};
const LangArray = [
  { label: "ENGLISH", value: "ENGLISH" },
  { label: "SPANISH", value: "SPANISH" },
  { label: "FRENCH", value: "FRENCH" },
  // { label: "RUSSIAN", value: "RUSSIAN" },
  // { label: "HINDI", value: "HINDI" },
];

const UsersArray = [
  {
    username: "Darlene Black",
    message: "HR Mangaer, 10 000 connection",
    image: chat1,
  },
  {
    username: "Theresa Steward",
    message: "iOS Developer",
    image: chat2,
  },
  {
    username: "Brandon Wilson",
    message: "Senior UX Designer",
    image: chat3,
  },
  {
    username: "Kyle Fisher",
    message: "Product Designer",
    image: chat4,
  },
  {
    username: "Audrey Alexander",
    message: "Team Lead at Google",
    image: chat5,
  },
];

const VidArray = [
  {
    title: "UX Foundations: Prototyping",
    views: "29,344 views",
    image: vid1,
  },
  {
    title: "Designing with Adobe XD and Pro",
    views: "11,345 views",
    image: vid2,
  },
  {
    title: "UX Foundations: Styles and GUIs",
    views: "9,123 views",
    image: vid3,
  },
];
const MainContainer = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  display: flex;
  background-color: #f7f9fb;
  position: relative;
  flex-direction: column;
`;
const ContentContainer = styled.div`
  width: 100%;
  height: auto;
  min-height: 600px;
  // display:flex;
  padding: 30px 120px;
  @media (max-width: 768px){
    padding:30px;
  }
`;
const ContentRow = styled(Row)`
  width: 100%;
  @media (max-width: 1200px){
    flex-direction:column-reverse;
  }
`;
const LeftContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 15px 0px;
`;
const RightContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 15px 0px;
`;
const ProfileContainer = styled.div`
  width: 96%;
  height: 360px;
  display: flex;
  background-color: #ffffff;
  flex-direction: column;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 10px;
  @media (max-width: 768px){
    height:auto;
}
`;
const DashboardContainer = styled.div`
  width: 96%;
  height: 360px;
  display: flex;
  background-color: #ffffff;
  margin-bottom: 10px;
  padding: 20px;
  flex-direction: column;
  border-radius: 4px;
`;
const DashBoardHeader = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  border-bottom: 1px solid #f4f4f4;
  justify-content: space-between;
  align-items: center;
`;
const VisitorsContainer = styled.div`
  width: 96%;
  height: 420px;
  display: flex;
  background-color: #ffffff;
  margin: 10px 0px;
  padding: 20px;
  flex-direction: column;
  border-radius: 4px;
`;
const VisitorsHeader = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  border-bottom: 1px solid #f4f4f4;
  justify-content: space-between;
  align-items: center;
`;
const SuggestionContainer = styled.div`
  width: 96%;
  height: 330px;
  display: flex;
  background-color: #ffffff;
  margin: 10px 0px;
  padding: 20px;
  flex-direction: column;
  border-radius: 4px;
`;
const SuggestionsHeader = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  border-bottom: 1px solid #f4f4f4;
  justify-content: space-between;
  align-items: center;
`;
const Text1 = styled.p`
  font-size: 12px;
  color: #181818;
  font-family:"Gotham Medium";
`;
const Text2 = styled.p`
  font-size: 12px;
  color: #0275b1;
  font-family:"Gotham Medium";
`;

const DataDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;
const DashNumber = styled.p`
  font-size: 52px;
  color: #0275b1;
  display: flex;
  font-family:"Gotham Medium";
  margin-bottom: -10px;
`;
const DashText = styled.p`
  font-size: 14px;
  color: #181818;
  display: flex;
  margin-bottom: 0px;
`;
const VisitorContent = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;
const ChatUserDiv = styled.div`
  width: 100%;
  height: 58px;
  display: flex;
  padding: 3px;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin: 4px 0px;
  // @media (max-width: 740px) {
  //   height: 80px;
  // }
`;
const ChatImageBg = styled.div`
  min-width: 50px;
  width: 50px;
  height: 50px;
  display: flex;
  overflow: hidden;
  border-radius: 40px;
`;
const ChatImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 16px;
  border-radius: 40px;
`;
const MiddleDiv = styled.div`
  width: 200px;
  height: auto;
  display: flex;
  padding: 8px;
  flex-direction: column;
`;

const MiddleDiv2 = styled.div`
  width: 180px;
  height: auto;
  display: flex;
  padding: 8px;
  flex-direction: column;
`;

const Name = styled.p`
  font-size: 14px;
  color: #181818;
  font-family:"Gotham Medium";
  margin-bottom: 3px;
  margin-top: 10px;
`;
const MessageText = styled.p`
  font-size: 10px;
  line-height: 15px;
  color: #181818;
`;

const SuggestionContent = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;
const VidImageBg = styled.div`
  min-width: 70px;
  width: 50px;
  height: 50px;
  display: flex;
`;
const VidImage = styled.img`
  width: 70px;
  height: 50px;
  margin-right: 16px;
`;
const SeeMoreText = styled.p`
  font-size: 12px;
  color: #0275b1;
  font-weight: 500;
  margin-top: 20px;
  margin-bottom: 5px;
  text-align: left;
  font-family:"Gotham Medium";
`;
const UpperProfile = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  background-image: url(${bg});
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
`;
const LowerProfile = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  position: relative;
  @media (max-width: 768px){
    height:auto;
  }
`;
const ProfileContent = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 36px 30px;
  justify-content: space-between;
`;
const LeftOption = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  background-color: #ffffff;
  border-radius: 3px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const RightOption = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
`;
const EditDiv = styled.div`
  width: 132px;
  height: 36px;
  display: flex;
  background-color: #ffffff;
  border-radius: 3px;
  margin-right: 15px;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
`;
const EditText = styled.p`
  font-size: 12px;
  text-align: center;
  font-family:"Gotham Pro";
  margin-bottom: 0px;
  color: #181818;
`;
const MoreDiv = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  background-color: #ffffff;
  border-radius: 3px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const LowerLeftDiv = styled.div`
  width: 200px;
  height: auto;
  display: flex;
  // @media (max-width: 680px){
  //   display:none;
  // }
`;
const LowerRightDiv = styled.div`
  width: auto;
  height: auto;
  display: flex;
  margin-left:180px;
  flex-direction: column;
  padding: 20px 40px;
  @media (max-width: 768px){
    margin-left:25px;
  }
  @media (max-width: 680px){
    margin-left:0px;
    margin-top:50px;
  }
`;
const UserImageBg = styled.div`
  width: 170px;
  height: 170px;
  background-color: #ffffff;
  border-radius: 90px;
  display: flex;
  position: absolute;
  top: -25px;
  left: 30px;
  @media (max-width: 768px){
    width: 130px;
    height: 130px;
  }
  @media (max-width: 680px){
    top:-60px;
    left:39%;
  }
  @media (max-width: 540px){
    left:36%;
  }
  @media (max-width: 480px){
    left:33%;
  }
  @media (max-width: 390px){
    left:29%;
  }
`;
const UserImage = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 90px;
  display: flex;
  @media (max-width: 768px){
    width: 130px;
    height: 130px;
  }
`;
const DivTop = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 580px){
      align-items:center;
      flex-direction:column;
  }
`;
const DivMiddle = styled.div`
  width: auto;
  height: auto;
  display: flex;
`;
const DivLower = styled.div`
  width: auto;
  height: auto;
  display: flex;
  @media (max-width: 680px){
    justify-content:center;
  }
  @media (max-width: 512px){
    flex-direction:column;
    align-items:center;
  }
`;
const Button1 = styled.div`
  width: 170px;
  height: 32px;
  border-radius: 4px;
  background-color: #0275b1;
  border: 1px solid #0275b1;
  font-size: 11px;
  color: #ffffff;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  font-family:"Gotham Medium";
  justify-content: center;
  padding: 0px 10px;
  align-items: center;
  margin-bottom: 15px;
  margin-right: 15px;
  @media (max-width: 580px){
    margin-right:0px;
}
`;
const Button2 = styled.div`
  width: 170px;
  height: 32px;
  border-radius: 4px;
  font-size: 11px;
  color: #0275b1;
  font-weight: 500;
  background-color: #000000000;
  border: 1px solid #0275b1;
  display: flex;
  font-family:"Gotham Medium";
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  cursor: pointer;
`;
const InfoText = styled.p`
  font-size: 14px;
  color: #181818;
  @media (max-width: 680px){
    text-align:center;
  }
`;
const NameDiv = styled.p`
  font-size: 18px;
  color: #181818;
  display: flex;
  font-family:Gotham Bold;
`;
const LocationDiv = styled.p`
  font-size: 12px;
  color: #181818;
  margin-top: 5px;
  display: flex;
  @media (max-width: 768px){
    text-align:center;
  }
`;
const Icon = styled.div`
  width: auto;
  height: auto;
  display: flex;
  margin-left: 10px;
  margin-top: 7px;
`;
const Icon2 = styled.div`
  width: auto;
  height: auto;
  display: flex;
  margin-right: 10px;
  margin-top: 3px;
`;
const TabsContainer = styled.div`
  width: 96%;
  height: 250px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  margin: 10px 0px;
  @media (max-width: 768px){
    width:auto;
  }
`;
const TabsContent = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-end;
`;
const Gap = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  border-top: 2px solid #f4f4f4;
`;
const AboutDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  background-color: #ffffff;
`;
const AboutHeader = styled.p`
  font-size: 18px;
  color: #181818;
  font-family:"Gotham Medium";
  display: flex;
  @media (max-width: 768px){
    justify-content:center;
  }
`;
const AboutContent = styled.p`
  font-size: 14px;
  color: #181818;
  display: flex;
`;
const SeeMoreText2 = styled.p`
  font-size: 12px;
  color: #0275b1;
  display: flex;
  font-family:"Gotham Medium";
`;
const Tab1 = styled.div`
  width: 240px;
  height: 50px;
  display: flex;
  border-radius: 4px 4px 0px 0px;
  background: linear-gradient(180deg, #0077b5 0%, #0e6795 100%);
  justify-content: center;
  font-family:"Gotham Medium";
  align-items: center;
  font-size: 12px;
  text-align: center;
  color: #ffffff;
`;
const Tab2 = styled.div`
  width: 240px;
  height: 40px;
  display: flex;
  background-color: #ffffff;
  border: 1px solid #f4f4f4;
  border-bottom: none;
  justify-content: center;
  font-family:"Gotham Medium";
  align-items: center;
  font-size: 12px;
  text-align: center;
  color: #181818;
`;
const Tab3 = styled.div`
  width: 240px;
  height: 40px;
  display: flex;
  border-radius: 0px 4px 0px 0px;
  background-color: #ffffff;
  border: 1px solid #f4f4f4;
  border-bottom: none;
  justify-content: center;
  align-items: center;
  font-family:"Gotham Medium";
  font-size: 12px;
  text-align: center;
  color: #181818;
`;
const ProjectContainer = styled.div`
  width: 96%;
  height: 355px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 4px;
  margin: 10px 0px;
  padding: 20px 30px;
  @media (max-width: 768px){
    height:auto;
  }
`;
const ProjectHeader = styled.p`
  font-size: 18px;
  display: flex;
  color: #181818;
  font-family:"Gotham Medium";
  display: flex;
  margin-bottom: 5px;
  @media (max-width: 768px){
    justify-content:center;
  }
`;
const ProjectCounter = styled.p`
  font-size: 18px;
  display: flex;
  color: #747474;
  font-weight: 500;
  display: flex;
  margin-left: 15px;
`;
const ProjectList = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px){
    flex-direction:column;
    align-items: center;
  }

`;
const ProjectDiv = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px){
    margin-bottom:20px;
  }
`;
const ProjectImage = styled.img`
  width: 250px;
  height: 160px;
  display: flex;
`;
const ProjectTitle = styled.p`
  font-size: 14px;
  display: flex;
  color: #181818;
  font-family:"Gotham Medium";
  margin-top: 10px;
  margin-bottom: 5px;
`;
const ProjectDetails = styled.p`
  font-size: 10px;
  display: flex;
  color: #181818;
`;
const ShowMoreText3 = styled.p`
  font-size: 12px;
  color: #0275b1;
  display: flex;
  margin-top: 15px;
  margin-bottom: 0px;
  font-family:"Gotham Medium";
`;
const SkillsContainer = styled.div`
  width: 96%;
  height: 220px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 4px;
  margin: 10px 0px;
  padding: 20px 30px;
  @media (max-width: 740px){
    height:auto;
  }
`;
const SkillsHeader = styled.p`
  font-size: 18px;
  display: flex;
  color: #181818;
  font-family:"Gotham Medium";
  display: flex;
  margin-bottom: 5px;
  @media (max-width: 768px){
    justify-content:center;
  }
`;
const SkillsDiv = styled.div`
width:100%;
height:auto;
display:flex;
margin:15px 0px 10px 0px;
align-items:center;
justify-content:space-between;
@media (max-width: 740px){
  flex-direction:column;
}
`;
const SkillsInnerDiv = styled.div`
width:250px;
height:80px;
border-radius:4px;
border:1px solid #F4F4F4;
padding:5px 15px;
justify-content: space-evenly;
display:flex;
flex-direction:column;
@media (max-width: 740px){
  margin-bottom:10px;
}
`;
const SkillsHeaderDiv = styled.div`
width:auto;
height:auto;
display:flex;
justify-content:space-between;
align-items:center;
`;

const SkillsInnerHeader = styled.p`
font-size: 14px;
color: #181818;
display:flex;
margin-bottom:0px;
font-family:"Gotham Medium";
`;
const InnerCounter = styled.p`
font-size: 14px;
display:flex;
margin-bottom:0px;
font-family:"Gotham Medium";
color: #0275B1;
`;
const SkillsImageDiv = styled.div`
width:auto;
height;auto;
display:flex;
align-items:center;
`;
const SkillsImage = styled.img`
width:24px;
height:24px;
display:flex;
border-radius:20px;
margin-right:-8px;
`;
const CounterImage = styled.div`
width:24px;
height:24px;
display:flex;
border-radius:20px;
justify-content:center;
align-items:center;
font-size: 10px;
margin-bottom:0px;
font-family:"Gotham Medium";
color: #ffffff;
background-color: #0275B1;
`;
const ExpContainer = styled.div`
  width: 96%;
  height: 345px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 4px;
  margin: 10px 0px;
  padding: 20px 30px;
  @media (max-width: 768px){
    height:auto;
  }
`;
const ExpHeader = styled.p`
  font-size: 18px;
  display: flex;
  color: #181818;
  font-family:"Gotham Medium";
  display: flex;
  margin-bottom: 5px;
  @media (max-width: 768px){
    justify-content:center;
  }
`;
const ExpContent = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  border-bottom: 1px solid #F4F4F4;
  padding-bottom:10px;
  margin-top:10px;
  @media (max-width: 512px){
    flex-direction:column;
    align-items:center;
  }
`;
const ExpContent2 = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  padding-bottom:10px;
  margin-top:10px;
  @media (max-width: 512px){
    flex-direction:column;
    align-items:center;
  }
`;
const ExpImageBg = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 30px;
  display: flex;
  margin-top:10px;
`;
const ExpImage = styled.img`
  width: 54px;
  height: 54px;
  border-radius: 30px;
  display: flex;
`;
const ExpInfoDiv = styled.div`
width:auto;
height:auto;
display:flex;
flex-direction:column;
margin-left:20px;
@media (max-width: 512px){
  align-items:center;
  margin-top:15px;
  margin-left:0px;
}
`;
const ExpTitle = styled.p`
font-size: 14px;
color: #181818;
display:flex;
font-family:"Gotham Medium";
@media (max-width: 512px){
  text-align:center;
}
`;
const ExpPlace = styled.p`
font-size: 10px;
color: #181818;
display:flex;
font-family:"Gotham Medium";
margin-bottom:2px;
@media (max-width: 512px){
  text-align:center;
}
`;
const Place = styled.p`
font-size: 10px;
color: #181818;
display:flex;
font-weight:500;
margin-left:20px;
margin-bottom:2px;
@media (max-width: 512px){
  text-align:center;
}
`;
const ExpTime = styled.p`
font-size: 10px;
color: #181818;
display:flex;
font-weight:500;
@media (max-width: 512px){
  text-align:center;
}
`;
const Time = styled.p`
font-size: 10px;
color: #0275B1;
display:flex;
font-family:"Gotham Bold";
margin-left:20px;
@media (max-width: 512px){
  text-align:center;
}
`;
const ExpText = styled.p`
font-size: 10px;
color: #181818;
display:flex;
font-weight:500;
@media (max-width: 512px){
  text-align:center;
}
`;
const EduContainer = styled.div`
width: 96%;
height: 195px;
display: flex;
flex-direction: column;
background-color: #ffffff;
border-radius: 4px;
margin: 10px 0px;
padding: 20px 30px;
@media (max-width: 768px){
  height:auto;
}
`;
const EduContent = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  padding-bottom:10px;
  margin-top:10px;
  @media (max-width: 512px){
    flex-direction:column;
    align-items:center;
  }
`;
const EduInfoDiv = styled.div`
width:auto;
height:auto;
display:flex;
flex-direction:column;
margin-left:20px;
@media (max-width: 512px){
  align-items:center;
  margin-top:15px;
  margin-left:0px;
}
`;
const ProfilePage = () => {
  const [dropValue, setDropValue] = useState(LangArray[0].value);

  const setDrop = (value) => {
    setDropValue(value);
  };

  return (
    <>
      <Header />
      <MainContainer>
        <ContentContainer>
          <ContentRow>
            <Col xxl={18} xl={18} lg={24} md={24} sm={24} xs={24}>
              <LeftContainer>
                <ProfileContainer>
                  <UpperProfile>
                    <ProfileContent>
                      <LeftOption>
                        <Upload />
                      </LeftOption>
                      <RightOption>
                        <EditDiv>
                          <EditIcon />
                          <EditText>EDIT PROFILE</EditText>
                        </EditDiv>
                        <MoreDiv>
                          <DotsV />
                        </MoreDiv>
                      </RightOption>
                    </ProfileContent>
                  </UpperProfile>
                  <LowerProfile>
                    {/* <LowerLeftDiv> */}
                      <UserImageBg>
                        <UserImage src={UserBig} />
                      </UserImageBg>
                    {/* </LowerLeftDiv> */}
                    <LowerRightDiv>
                      <DivTop>
                        <NameDiv>
                          Dmitry Kargaev{" "}
                          <Icon>
                            <LinkedSm />
                          </Icon>
                        </NameDiv>
                        <LocationDiv>
                          {" "}
                          <Icon2>
                            <Location />
                          </Icon2>
                          Saint Petersburg, Russian Federation
                        </LocationDiv>
                      </DivTop>
                      <DivMiddle>
                        <InfoText>
                          Freelance UX/UI designer, 80+ projects in web design,
                          mobile apps (iOS & android) and creative projects.
                          Open to offers.
                        </InfoText>
                      </DivMiddle>
                      <DivLower>
                        <Button1>CONTACT INFO</Button1>
                        <Button2>1043 CONNECTIONS</Button2>
                      </DivLower>
                    </LowerRightDiv>
                  </LowerProfile>
                </ProfileContainer>
                <TabsContainer>
                  <TabsContent>
                    <Tab1>PROFILE</Tab1>
                    <Tab2>ACTIVITY & INTERESTS</Tab2>
                    <Tab3>ARTICLES (3)</Tab3>
                  </TabsContent>
                  <Gap></Gap>
                  <AboutDiv>
                    <AboutHeader>About</AboutHeader>
                    <AboutContent>
                      I'm more experienced in eCommerce web projects and mobile
                      banking apps, but also like to work with creative
                      projects, such as landing pages or unusual corporate
                      websites.
                    </AboutContent>
                    <SeeMoreText2>SEE MORE</SeeMoreText2>
                  </AboutDiv>
                </TabsContainer>
                <ProjectContainer>
                  <ProjectHeader>
                    Projects <ProjectCounter>3 0f 12</ProjectCounter>
                  </ProjectHeader>
                  <ProjectList>
                    <ProjectDiv>
                      <ProjectImage src={project1} />
                      <ProjectTitle>Zara redesign concept</ProjectTitle>
                      <ProjectDetails>UX/UI design, 15.07.2019</ProjectDetails>
                    </ProjectDiv>
                    <ProjectDiv>
                      <ProjectImage src={project2} />
                      <ProjectTitle>SCTHON event brand identity</ProjectTitle>
                      <ProjectDetails>
                        Graphic design, 03.31.2019
                      </ProjectDetails>
                    </ProjectDiv>
                    <ProjectDiv>
                      <ProjectImage src={project3} />
                      <ProjectTitle>Drozd. Brand identity. 2016</ProjectTitle>
                      <ProjectDetails>
                        Graphic design, 03.04.2016
                      </ProjectDetails>
                    </ProjectDiv>
                  </ProjectList>
                  <ShowMoreText3>SHOW ALL (12)</ShowMoreText3>
                </ProjectContainer>
                <SkillsContainer>
                  <SkillsHeader>Skills & Endoresments</SkillsHeader>
                  <SkillsDiv>
                    <SkillsInnerDiv>
                      <SkillsHeaderDiv>
                      <SkillsInnerHeader>User experience (UX)</SkillsInnerHeader>
                      <InnerCounter>6</InnerCounter>
                      </SkillsHeaderDiv>
                      <SkillsImageDiv>
                        <SkillsImage src={chat1}/>
                        <SkillsImage src={chat2}/>
                        <SkillsImage src={chat3}/>
                        <SkillsImage src={chat4}/>
                        <SkillsImage src={chat5}/>
                        <CounterImage>+1</CounterImage>
                        </SkillsImageDiv>
                      </SkillsInnerDiv>
                    <SkillsInnerDiv>
                    <SkillsHeaderDiv>
                    <SkillsInnerHeader>User interface (UI)</SkillsInnerHeader>
                    <InnerCounter>7</InnerCounter>
                    </SkillsHeaderDiv>
                    <SkillsImageDiv>
                        <SkillsImage src={chat1}/>
                        <SkillsImage src={chat2}/>
                        <SkillsImage src={chat3}/>
                        <SkillsImage src={chat4}/>
                        <SkillsImage src={chat5}/>
                        <CounterImage>+2</CounterImage>
                    </SkillsImageDiv>
                    </SkillsInnerDiv>
                    <SkillsInnerDiv>
                    <SkillsHeaderDiv>
                    <SkillsInnerHeader>Brand identity</SkillsInnerHeader>
                    <InnerCounter>5</InnerCounter>
                    </SkillsHeaderDiv>
                    <SkillsImageDiv>
                        <SkillsImage src={chat1}/>
                        <SkillsImage src={chat2}/>
                        <SkillsImage src={chat3}/>
                        <SkillsImage src={chat4}/>
                        <SkillsImage src={chat5}/>
                    </SkillsImageDiv>
                    </SkillsInnerDiv>
                  </SkillsDiv>
                  <ShowMoreText3>SHOW ALL (17)</ShowMoreText3>
                </SkillsContainer>
                <ExpContainer>
                  <ExpHeader>Experience</ExpHeader>
                  <ExpContent>
                    <ExpImageBg>
                      <ExpImage src={exp1} />
                    </ExpImageBg>
                    <ExpInfoDiv>
                      <ExpTitle>Freelance UX/UI designer</ExpTitle>
                      <ExpPlace>
                        Self Employed <Place>Around the world</Place>
                      </ExpPlace>
                      <ExpTime>
                        Jun 2016 — Present <Time>3 yrs 3 mos</Time>
                      </ExpTime>
                      <ExpText>
                        Work with clients and web studios as freelancer. Work in
                        next areas: eCommerce web projects; creative landing
                        pages; iOs and Android apps; corporate web sites and
                        corporate identity sometimes.
                      </ExpText>
                    </ExpInfoDiv>
                  </ExpContent>
                  <ExpContent2>
                    <ExpImageBg>
                      <ExpImage src={exp2} />
                    </ExpImageBg>
                    <ExpInfoDiv>
                      <ExpTitle>UX/UI designer</ExpTitle>
                      <ExpPlace>
                        Upwork <Place>International</Place>
                      </ExpPlace>
                      <ExpTime>
                        Jun 2019 — Present <Time>3 mos</Time>
                      </ExpTime>
                      <ExpText>
                        New experience with Upwork system. Work in next areas:
                        UX/UI design, graphic design, interaction design, UX
                        research.
                      </ExpText>
                    </ExpInfoDiv>
                  </ExpContent2>
                </ExpContainer>
                <EduContainer>
                <ExpHeader>Education</ExpHeader>
                  <EduContent>
                    <ExpImageBg>
                      <ExpImage src={edu1} />
                    </ExpImageBg>
                    <EduInfoDiv>
                      <ExpTitle>Moscow State Linguistic University</ExpTitle>
                      <ExpPlace>
                      Bachelor's degree Field Of StudyComputer and Information Systems Security/Information Assurance
                      </ExpPlace>
                      <ExpTime>
                      2013 — 2017
                      </ExpTime>
                      <ExpText>
                      Additional English classes and UX profile courses​.
                      </ExpText>
                    </EduInfoDiv>
                  </EduContent>
                </EduContainer>
              </LeftContainer>
            </Col>
            <Col xxl={6} xl={6} lg={24} md={24} sm={24} xs={24}>
              <RightContainer>
                <DashboardContainer>
                  <DashBoardHeader>
                    <Text1>YOUR DASHBOARD</Text1>
                    <Text2>GO TO STATS</Text2>
                  </DashBoardHeader>
                  <DataDiv>
                    <DashNumber>367</DashNumber>
                    <DashText>views today</DashText>
                  </DataDiv>
                  <DataDiv>
                    <DashNumber>15</DashNumber>
                    <DashText>posts views</DashText>
                  </DataDiv>
                  <DataDiv>
                    <DashNumber>9</DashNumber>
                    <DashText>search appearances</DashText>
                  </DataDiv>
                </DashboardContainer>
                <VisitorsContainer>
                  <VisitorsHeader>
                    <Text1>VISITORS</Text1>
                    <Text2>VIEW ALL</Text2>
                  </VisitorsHeader>
                  <VisitorContent>
                    {UsersArray.map((item) => (
                      <ChatUserDiv>
                        <ChatImageBg>
                          <ChatImage src={item.image} />
                        </ChatImageBg>
                        <MiddleDiv>
                          <Name>{item.username}</Name>
                          <MessageText>{item.message}</MessageText>
                        </MiddleDiv>
                      </ChatUserDiv>
                    ))}
                  </VisitorContent>
                </VisitorsContainer>
                <SuggestionContainer>
                  <SuggestionsHeader>
                    <Text1>YOU MAY LIKE THESE COURSES</Text1>
                    <Text2></Text2>
                  </SuggestionsHeader>
                  <SuggestionContent>
                    {VidArray.map((item) => (
                      <ChatUserDiv>
                        <VidImageBg>
                          <VidImage src={item.image} />
                        </VidImageBg>
                        <MiddleDiv2>
                          <Name>{item.title}</Name>
                          <MessageText>{item.views}</MessageText>
                        </MiddleDiv2>
                      </ChatUserDiv>
                    ))}
                  </SuggestionContent>
                  <SeeMoreText>SEE ALL RECOMENDATIONS</SeeMoreText>
                </SuggestionContainer>
              </RightContainer>
            </Col>
          </ContentRow>
        </ContentContainer>
      </MainContainer>
      <Footer array={LangArray} callbackFunction={setDrop} />
    </>
  );
};

export default ProfilePage;
