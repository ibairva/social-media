import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import bg from "../images/bg.png";
import edu1 from "../images/edu1.png";
import UserBig from "../images/UserBig.png";
import art1 from "../images/art1.png";
import art2 from "../images/art2.png";
import art3 from "../images/art3.png";
import AppTextInput from "../components/AppTextInput";
import DropDown from "../components/DropDown";
import post1 from "../images/post1.png"
import post2 from "../images/post2.png"
import post3 from "../images/post3.png"
import post4 from "../images/post4.png"
import attachImage from "../images/attachImage.png"
import newPost1 from "../images/newPost1.png"

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

const Attach = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.15">
        <path
          d="M21 11.4384L12.8446 19.4644C11.8455 20.4476 10.4904 21 9.07749 21C7.66455 21 6.30948 20.4476 5.31039 19.4644C4.31129 18.4811 3.75 17.1476 3.75 15.7571C3.75 14.3665 4.31129 13.033 5.31039 12.0497L13.4658 4.02375C14.1319 3.36825 15.0352 3 15.9772 3C16.9192 3 17.8225 3.36825 18.4886 4.02375C19.1547 4.67924 19.5289 5.56829 19.5289 6.4953C19.5289 7.42231 19.1547 8.31135 18.4886 8.96685L10.3243 16.9928C9.99129 17.3206 9.5396 17.5047 9.06862 17.5047C8.59764 17.5047 8.14595 17.3206 7.81291 16.9928C7.47988 16.6651 7.29279 16.2206 7.29279 15.7571C7.29279 15.2935 7.47988 14.849 7.81291 14.5213L15.3471 7.11537"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};

const Photo = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.15">
        <path
          d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.5 10C9.32843 10 10 9.32843 10 8.5C10 7.67157 9.32843 7 8.5 7C7.67157 7 7 7.67157 7 8.5C7 9.32843 7.67157 10 8.5 10Z"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M21 15L16 10L5 21"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};

const Video = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.15">
        <path
          d="M19.038 3H4.962C3.87842 3 3 3.87842 3 4.962V19.038C3 20.1216 3.87842 21 4.962 21H19.038C20.1216 21 21 20.1216 21 19.038V4.962C21 3.87842 20.1216 3 19.038 3Z"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7.50049 3V21"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.5 3V21"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3 12.0003H21"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3 7.50041H7.5"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3 16.5H7.5"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.5 16.5H21"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.5 7.50041H21"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};

const Send = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.6666 1.33333L7.33325 8.66666"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.6666 1.33333L9.99992 14.6667L7.33325 8.66666L1.33325 6L14.6666 1.33333Z"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const DotsH = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
        stroke="#181818"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"
        stroke="#181818"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"
        stroke="#181818"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const Like = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.66671 14.6666H2.66671C2.31309 14.6666 1.97395 14.5262 1.7239 14.2761C1.47385 14.0261 1.33337 13.6869 1.33337 13.3333V8.66665C1.33337 8.31302 1.47385 7.97389 1.7239 7.72384C1.97395 7.47379 2.31309 7.33331 2.66671 7.33331H4.66671M9.33337 5.99998V3.33331C9.33337 2.80288 9.12266 2.29417 8.74759 1.9191C8.37252 1.54403 7.86381 1.33331 7.33337 1.33331L4.66671 7.33331V14.6666H12.1867C12.5083 14.6703 12.8203 14.5576 13.0653 14.3493C13.3103 14.1411 13.4718 13.8513 13.52 13.5333L14.44 7.53331C14.469 7.34222 14.4562 7.1471 14.4023 6.96148C14.3484 6.77586 14.2548 6.60418 14.1279 6.45832C14.0011 6.31247 13.8441 6.19593 13.6678 6.11679C13.4914 6.03765 13.3 5.99779 13.1067 5.99998H9.33337Z"
        stroke="#0275B1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const Comment = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 7.66669C14.0023 8.5466 13.7967 9.41461 13.4 10.2C12.9296 11.1412 12.2065 11.9328 11.3116 12.4862C10.4168 13.0396 9.3855 13.3329 8.33333 13.3334C7.45342 13.3356 6.58541 13.1301 5.8 12.7334L2 14L3.26667 10.2C2.86995 9.41461 2.66437 8.5466 2.66667 7.66669C2.66707 6.61452 2.96041 5.58325 3.51381 4.68839C4.06722 3.79352 4.85884 3.0704 5.8 2.60002C6.58541 2.20331 7.45342 1.99772 8.33333 2.00002H8.66667C10.0562 2.07668 11.3687 2.66319 12.3528 3.64726C13.3368 4.63132 13.9233 5.94379 14 7.33335V7.66669Z"
        stroke="#0275B1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const Download = () =>{
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M8 17L12 21L16 17" stroke="#0275B1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 12V21" stroke="#0275B1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.8799 18.0901C21.7493 17.4787 22.4013 16.6062 22.7412 15.5992C23.0811 14.5922 23.0913 13.5031 22.7703 12.4899C22.4493 11.4767 21.8138 10.5921 20.956 9.96462C20.0982 9.33709 19.0628 8.99922 17.9999 9.00006H16.7399C16.4392 7.82793 15.8764 6.7393 15.0941 5.81614C14.3117 4.89297 13.3301 4.15932 12.2231 3.67041C11.1162 3.1815 9.91278 2.95008 8.70346 2.99357C7.49414 3.03706 6.31045 3.35433 5.24149 3.92148C4.17253 4.48864 3.24616 5.2909 2.53212 6.26788C1.81808 7.24487 1.33498 8.3711 1.11919 9.5618C0.903403 10.7525 0.960543 11.9767 1.28631 13.1421C1.61208 14.3075 2.19799 15.3838 2.99993 16.2901" stroke="#0275B1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
  )
}
const Share = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 5.33337C13.1046 5.33337 14 4.43794 14 3.33337C14 2.2288 13.1046 1.33337 12 1.33337C10.8954 1.33337 10 2.2288 10 3.33337C10 4.43794 10.8954 5.33337 12 5.33337Z"
        fill="#0275B1"
        stroke="#0275B1"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4 10C5.10457 10 6 9.10457 6 8C6 6.89543 5.10457 6 4 6C2.89543 6 2 6.89543 2 8C2 9.10457 2.89543 10 4 10Z"
        fill="#0275B1"
        stroke="#0275B1"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 14.6666C13.1046 14.6666 14 13.7712 14 12.6666C14 11.5621 13.1046 10.6666 12 10.6666C10.8954 10.6666 10 11.5621 10 12.6666C10 13.7712 10.8954 14.6666 12 14.6666Z"
        fill="#0275B1"
        stroke="#0275B1"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.72681 9.00671L10.2801 11.66"
        stroke="#0275B1"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.2735 4.34009L5.72681 6.99342"
        stroke="#0275B1"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const FilterArray = [
  { label: "TRENDING", value: "TRENDING" },
  { label: "LATEST", value: "LATEST" },
  { label: "MOST LIKED", value: "MOST LIKED" },
];

const LangArray = [
  { label: "ENGLISH", value: "ENGLISH" },
  { label: "SPANISH", value: "SPANISH" },
  { label: "FRENCH", value: "FRENCH" },
];

const HashTagArray = [
  { tag: "work" },
  { tag: "business" },
  { tag: "hr" },
  { tag: "userinterface" },
  { tag: "digital" },
  { tag: "userexperience" },
  { tag: "ux" },
  { tag: "ui" },
  { tag: "freelance" },
];
const EduArray = [
  {
    message: "Moscow State Linguistical University",
    image: edu1,
  },
  {
    message: "Digital freelancers group",
    image: edu1,
  },
  {
    message: "Interaction design association",
    image: edu1,
  },
];

const ArticleArray = [
  {
    title: "HOW I MAKE COOL DESIGN?",
    views: "9,344 views",
    image: art1,
  },
  {
    title: "ADVICES FOR YOUNG HR MANAGER",
    views: "7,345 views",
    image: art2,
  },
  {
    title: "A LITTLE ABOUT USABILITY TESTING",
    views: "6,123 views",
    image: art3,
  },
];

const FeedArray = [
  {
    posterName: "Theresa Steward",
    posterJob: "iOS Developer",
    image:post1,
    postText:
      "What did the Dursleys care if Harry lost his place on the House Quidditch team because he hadn’t practiced all summer? What was it to the Dursleys if Harry went back to school without any of his homework done? The Dursleys were what wizards called Muggles (not a drop of magical blood in their veins).",
    postImage: null,
    hasAttachment: false,
    likes: "42",
    comments: "9",
    likedBy: ["Ted Bell", "Annette Nguyen", "Cody Hawkins"],
    commentBy: null,
  },
  {
    posterName: "Kyle Fisher",
    posterJob: "Product Designer at Commandor Corp.",
    image:post2,
    postText: "How’s your day going, guys?",
    postImage:newPost1,
    hasAttachment: false,
    likes: "12",
    comments: "3",
    likedBy: null,
    commentBy: ["Audrey Alexendar"],
  },
  {
    posterName: "Brandon Wilson",
    posterJob: "Senior UX Designer",
    image:post3,
    postText: "There is some new guidelines for iOS",
    postImage: null,
    hasAttachment: true,
    attachment: [
      {
        title: "iOS 11 guidelines for UI/UX Designers",
        type: "PDF",
        size: "324 kb",
      },
      {
        title: "iOS 11 guidelines for developers",
        type: "PDF",
        size: "245 kb",
      },
    ],
    likes: "89",
    comments: "7",
    likedBy: null,
    commentBy: null,
    subHeader: "High rated post from your feed",
  },
  {
    posterName: "Audrey Alexandar",
    posterJob: "Team Lead at Google",
    image:post4,
    postText:
      "The bun runs along the road and meets a wolf. «Little bun, little bun, I want to eat you!» says the wolf. «I ran away from Grandfather, I ran away from Grandmother, I ran away from the hare. And I can run away from you, grey wolf!» says the bun and runs away.",
    postImage: null,
    hasAttachment: false,
    likes: "10",
    comments: "0",
    likedBy: null,
    commentBy: null,
    isFirstPost: true,
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
  @media (max-width: 768px){
    align-items:center;
  }
`;
const RightContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 15px 0px;
  @media (max-width: 768px){
    align-items:center;
  }
`;

const ProfileContainer = styled.div`
  width: 96%;
  height: 280px;
  display: flex;
  background-color: #ffffff;
  flex-direction: column;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 10px;
`;

const UpperProfile = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  background-image: url(${bg});
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
`;
const LowerProfile = styled.div`
  width: 100%;
  height: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  padding: 0px 20px;
`;
const UserImageBg = styled.div`
  width: 100px;
  height: 100px;
  background-color: #ffffff;
  border-radius: 90px;
  display: flex;
  position: absolute;
  top: -50px;
  left: 100px;
  @media (max-width: 768px){
    left:43%;
  }
  @media (max-width: 512px){
    left:39%;
  }
  @media (max-width: 390px){
    left:36%;
  }
  @media (max-width: 380px){
    left:33%;
  }
  


`;
const UserImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 90px;
  display: flex;
`;
const InfoText = styled.p`
  font-size: 10px;
  color: #181818;
  display: flex;
  font-family: "Gotham Pro";
  text-align: center;
`;
const NameDiv = styled.p`
  font-size: 14px;
  color: #181818;
  display: flex;
  font-family: "Gotham Bold";
  text-align: center;
  margin-top: 56px;
`;
const Icon = styled.div`
  width: auto;
  height: auto;
  display: flex;
  margin-left: 10px;
  margin-top: 4px;
  cursor:pointer;
`;
const ButtonContainer = styled.div`
  width: 96%;
  height: 75px;
  display: flex;
  background-color: #ffffff;
  border-radius: 4px;
  overflow: hidden;
  margin: 10px 0px;
  justify-content: center;
  align-items: center;
`;

const Button1 = styled.div`
  width: 230px;
  height: 32px;
  border-radius: 4px;
  background-color: #0275b1;
  border: 1px solid #0275b1;
  font-size: 11px;
  color: #ffffff;
  font-family: "Gotham Medium";
  cursor: pointer;
  display: flex;
  text-align: center;
  justify-content: center;
  padding: 0px 10px;
  align-items: center;
`;

const GroupsContainer = styled.div`
  width: 96%;
  height: 400px;
  display: flex;
  background-color: #ffffff;
  margin: 10px 0px;
  padding: 20px 30px;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 4px;
`;
const GroupsHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  border-bottom: 1px solid #f4f4f4;
  justify-content: space-between;
  align-items: center;
`;

const GroupsContent = styled.div`
  width: 100%;
  height: 280px;
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  justify-content: space-around;
  align-items: center;
`;
const GroupsInnerDiv = styled.div`
  width: 100%;
  height: 76px;
  border-radius: 4px;
  border: 1px solid #f4f4f4;
  padding: 5px 20px 5px;
  justify-content: space-evenly;
  align-items: center;
  display: flex;
  @media (max-width: 768px){
    justify-content: space-between; 
  }
  @media (max-width: 512px){
    justify-content: left; 
  }
`;
const ShowMoreDiv = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
`;
const Text1 = styled.p`
  font-size: 12px;
  color: #181818;
  font-family: "Gotham Medium";
`;
const Text2 = styled.p`
  font-size: 12px;
  color: #0275b1;
  font-family: "Gotham Medium";
`;
const ShowMoreText3 = styled.p`
  font-size: 12px;
  color: #0275b1;
  display: flex;
  margin-top: 15px;
  margin-bottom: 0px;
  font-family: "Gotham Medium";
`;

const GroupImage = styled.img`
  width: 52px;
  height: 52px;
  display: flex;
  border-radius: 25px;
  margin-right: 15px;
`;

const GroupText = styled.p`
  font-size: 14px;
  color: #181818;
  display: flex;
  margin-bottom: 0px;
  font-family: "Gotham Medium";
  line-height: 17px;
`;
const HashContainer = styled.div`
  width: 96%;
  height: 265px;
  display: flex;
  background-color: #ffffff;
  margin: 10px 0px;
  padding: 20px 30px;
  justify-content: flex-start;
  flex-direction: column;
  border-radius: 4px;
  @media (max-width: 768px){
    height:auto;
  }
`;
const HashHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  border-bottom: 1px solid #f4f4f4;
  justify-content: space-between;
  align-items: center;
`;
const HashContent = styled.div`
  width: 100%;
  height: 190px;
  display: block;
  padding-top: 10px;
  @media (max-width: 768px){
    height:auto;
  }
`;
const Hashtag = styled.div`
  width: auto;
  height: auto;
  background-color: #e9f0f8;
  border-radius: 4px;
  display: inline-block;
  margin: 5px;
  padding: 7px 10px;
  font-size: 12px;
  color: #181818;
  font-family: "Gotham Pro";
`;
const ArticleContainer = styled.div`
  width: 96%;
  height: 300px;
  display: flex;
  background-color: #ffffff;
  margin: 10px 0px;
  padding: 20px 30px;
  justify-content: flex-start;
  flex-direction: column;
  border-radius: 4px;
`;
const ArticleHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  border-bottom: 1px solid #f4f4f4;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
const ArticleContent = styled.div`
  width: 100%;
  height: 190px;
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  justify-content: space-around;
  align-items: center;
`;
const ChatUserDiv = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  padding: 3px;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin: 7px 0px;
`;
const VidImageBg = styled.div`
  min-width: 80px;
  width: 80px;
  height: 52px;
  display: flex;
`;
const VidImage = styled.img`
  width: 80px;
  height: 52px;
  margin-right: 16px;
`;
const MiddleDiv2 = styled.div`
  width: 180px;
  height: auto;
  display: flex;
  padding: 8px;
  flex-direction: column;
`;
const Name = styled.p`
  font-size: 12px;
  color: #181818;
  font-family: "Gotham Medium";
  margin-bottom: 3px;
  line-height: 15px;
`;
const MessageText = styled.p`
  font-size: 10px;
  line-height: 15px;
  color: #181818;
`;

const NewPostContainer = styled.div`
  width: 96%;
  height: 135px;
  display: flex;
  background-color: #ffffff;
  margin-bottom: 10px;
  padding: 20px 30px;
  justify-content: flex-start;
  flex-direction: column;
  border-radius: 4px;
  @media (max-width: 512px){
    height:160px;
  }
`;
const NewPostHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  border-bottom: 1px solid #f4f4f4;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
const NewPostContent = styled.div`
  width: 100%;
  height: 190px;
  display: flex;
  padding-top: 10px;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 512px){
    flex-direction:column;
  }
`;
const IconsDiv = styled.div`
  width: 250px;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 512px){
    width:170px; 
  }
`;
const IconBg = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 4px;
  cursor:pointer;
`;
const IconBgActive = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0275b1;
  border-radius: 4px;
  cursor:pointer;
`;
const FilterContainer = styled.div`
  width: 96%;
  height: 25px;
  display: flex;
  background-color: #00000000;
  border-top: 1px solid #e7e7e7;
  margin: 25px 0px 0px;
  padding: 5px 30px;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
`;
const DropDownDiv = styled.div`
  width: auto;
  height: auto;
  display: flex;
  background-color: #f7f9fb;
  position: absolute;
  top: -15px;
  left: 45%;
  @media (max-width: 768px){
    left:43%;
  }
  @media (max-width: 768px){
    left:36%;
  }
  @media (max-width: 400px){
    left:31%;
  }
`;
const FeedContainer = styled.div`
  width: 96%;
  min-height: 135px;
  height: auto;
  display: flex;
  background-color: #ffffff;
  margin: 10px 0px;
  padding: 5px 0px 0px;
  justify-content: flex-start;
  flex-direction: column;
  border-radius: 4px;
`;

const FeedHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  padding: 10px 30px;
  border-bottom: 1px solid #f4f4f4;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
const FeedLeftHeader = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  font-size:10px;
  color: #181818;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0px;
  font-family: "Gotham Pro";
`;
const FeedRightHeader = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PostUserDiv = styled.div`
  width: 100%;
  height: 54px;
  display: flex;
  align-items: center;
  padding: 10px 30px;
`;
const UserImageDiv = styled.div`
  width: auto;
  height: auto;
  display: flex;
`;
const UserInfoDiv = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
`;
const PosterImage = styled.img`
  width: 52px;
  height: 52px;
  border-radius: 25px;
  display: flex;
  margin-right: 15px;
`;
const UserInfo1 = styled.p`
  font-size: 14px;
  font-family: "Gotham Medium";
  color: #181818;
  display: flex;
  margin-bottom: 5px;
`;
const UserInfo2 = styled.p`
  font-size: 10px;
  font-family: "Gotham Pro";
  color: #181818;
  display: flex;
  margin-bottom: 5px;
`;
const FeedContent = styled.div`
  width:auto;
  height: auto;
  display: flex;
  padding-top: 10px;
  justify-content: space-around;
  align-items: center;
  flex-direction:column;
  padding:20px 30px;
  @media (max-width: 420px){
    padding:20px 10px;
  }
`;
const FeedFooter = styled.div`
  width: 100%;
  height: 49px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #f4f4f4;
  align-items: center;
`;
const FeedLeftFooter = styled.div`
  width: 170px;
  height: 49px;
  display: flex;
  align-items: center;
`;
const FeedLeftFooter1 = styled.div`
  width: 90px;
  height: 49px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #f4f4f4;
`;
const FeedLeftFooter2 = styled.div`
  width: 80px;
  height: 49px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #f4f4f4;
`;
const FeedRightFooter = styled.div`
  width: 100px;
  height: 49px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const RightInnerDiv = styled.div`
  width: 100px;
  height: 49px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid #f4f4f4;
`;
const LikeDiv = styled.div`
  width: auto;
  height: auto;
  display: flex;
`;
const Counter = styled.p`
  font-size: 12px;
  font-family: "Gotham Medium";
  color: #181818;
  display: flex;
  margin-bottom: 0px;
  margin-left: 10px;
`;
const CommentDiv = styled.div`
  width: auto;
  height: auto;
  display: flex;
`;
const Hl=styled.p`
  font-size: 10px;
  color: #0275b1;
  display: flex;
  // margin-top: 15px;
  margin-bottom: 0px;
  margin-right:4px;
  font-family: "Gotham Pro";
`;
const TextDiv=styled.div`
display:flex;
width:100%;
height:auto;
text-align:left;
font-size: 14px;
font-family: "Gotham Pro";
color: #181818;
margin-bottom:20px;
`;
const ImageDiv =styled.div`
width:100%;
height:auto;
display:flex;
`;
const PostedImage = styled.img`
width:100%;
height:auto;
display:flex;
`;
const AttachDiv=styled.div`
width:100%;
height:80px;
display:flex;
align-items:center;
justify-content:space-between;
background-color:#E9F0F8;
border-radius:5px;
padding:8px 30px;
margin:10px 0px;
@media (max-width: 420px){
 height:auto;
}
`;
const LeftInnerAttach =styled.div`
width:auto;
height:auto;
display:flex;
align-items:center;
justify-content:flex-start;
`;
const RightInnerAttach =styled.div`
width:auto;
height:auto;
display:flex;
align-items:center;
justify-content:center;
`;
const AttachImg =styled.img`
width:42px;
height:42px;
display:flex;
border-radius:20px;
margin-right:15px;
`;
const AttachInfoDiv=styled.div`
width:auto;
height:auto;
display:flex;
align-items:baseline;
justify-content:center;
flex-direction:column;
`;
const AttachTitle=styled.p`
font-size: 14px;
font-family: "Gotham Medium";
color: #181818;
display: flex;
margin-bottom: 5px;
`;
const AttachFileInfo=styled.p`
font-size: 10px;
font-family: "Gotham Pro";
color: #181818;
display: flex;
margin-bottom: 0px;
`;
const Info=styled.p`
font-size: 10px;
font-family: "Gotham Pro";
color: #181818;
display: flex;
margin-bottom: 0px;
margin-right:3px;
`;

const FeedPage = () => {
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
                <NewPostContainer>
                  <NewPostHeader>
                    <Text1>NEW POST</Text1>
                  </NewPostHeader>
                  <NewPostContent>
                    <AppTextInput
                      placeholder={"What's on your mind?"}
                      justify={"space-between"}
                      inputPadding={"0px"}
                      inputDivPadding={"0px"}
                      innerDivWidth={"100%"}
                    />
                    <IconsDiv>
                      <IconBg>
                        <Attach />
                      </IconBg>
                      <IconBg>
                        <Photo />
                      </IconBg>
                      <IconBg>
                        <Video />
                      </IconBg>
                      <IconBgActive>
                        <Send />
                      </IconBgActive>
                    </IconsDiv>
                  </NewPostContent>
                </NewPostContainer>
                <FilterContainer>
                  <DropDownDiv>
                    <DropDown
                      items={FilterArray}
                      title={"SORT BY: "}
                      inputWidth={"100px"}
                      width={"auto"}
                      border={"none"}
                      bgColor={"#f7f9fb"}
                      color={"#0275b1"}
                      value={"TRENDING"}
                      fontFamily={"Gotham Medium"}
                    />
                  </DropDownDiv>
                </FilterContainer>
                {FeedArray.map((item)=>(
                  <FeedContainer>
                  <FeedHeader>
                {item.subHeader?(<FeedLeftHeader>{item.subHeader}</FeedLeftHeader>):
                  item.likedBy?(<FeedLeftHeader>{item.likedBy.map((liked)=>(
                                            <Hl>{liked}</Hl>
                  ))} liked this post.</FeedLeftHeader>):
                  item.commentBy?(<FeedLeftHeader>{item.commentBy.map((comment)=>(
                                            <Hl>{comment} </Hl>
                  ))} comment this.</FeedLeftHeader>):
                  item.isFirstPost?(<FeedLeftHeader>First post from &nbsp;<Hl> {item.posterName}</Hl></FeedLeftHeader>):null}                    
                    <FeedRightHeader>
                      <DotsH />
                    </FeedRightHeader>
                  </FeedHeader>
                  <PostUserDiv>
                    <UserImageDiv>
                      <PosterImage src={item.image} />
                    </UserImageDiv>
                    <UserInfoDiv>
                  <UserInfo1>{item.posterName}</UserInfo1>
                  <UserInfo2>{item.posterJob}</UserInfo2>
                    </UserInfoDiv>
                  </PostUserDiv>
                  <FeedContent>
                    <TextDiv>{item.postText}</TextDiv>
                    {item.postImage?(<ImageDiv><PostedImage src={item.postImage}/></ImageDiv>):
                      item.hasAttachment? item.attachment.map((attached)=>(
                            <AttachDiv>
                              <LeftInnerAttach>
                                <AttachImg src={attachImage}/>
                                <AttachInfoDiv>
                      <AttachTitle>{attached.title}</AttachTitle>
                      <AttachFileInfo><Info>{attached.type}</Info>File,<Info>{attached.size}</Info></AttachFileInfo>
                                </AttachInfoDiv>
                              </LeftInnerAttach>
                              <RightInnerAttach><Download/></RightInnerAttach>
                            </AttachDiv>
                      )):null}
                  </FeedContent>
                  <FeedFooter>
                    <FeedLeftFooter>
                      <FeedLeftFooter1>
                        <LikeDiv>
                          <Like />
                          <Counter>{item.likes}</Counter>
                        </LikeDiv>
                      </FeedLeftFooter1>
                      <FeedLeftFooter2>
                        <CommentDiv>
                          <Comment />
                          <Counter>{item.comments}</Counter>
                        </CommentDiv>
                      </FeedLeftFooter2>
                    </FeedLeftFooter>
                    <FeedRightFooter>
                      <RightInnerDiv>
                        <Share />
                        <Counter>Share</Counter>
                      </RightInnerDiv>
                    </FeedRightFooter>
                  </FeedFooter>
                </FeedContainer>
                ))}
              </LeftContainer>
            </Col>
            <Col xxl={6} xl={6} lg={24} md={24} sm={24} xs={24}>
              <RightContainer>
                <ProfileContainer>
                  <UpperProfile></UpperProfile>
                  <LowerProfile>
                    <UserImageBg>
                      <UserImage src={UserBig} />
                    </UserImageBg>
                    <NameDiv>
                      Dmitry Kargaev{" "}
                      <Icon>
                        <LinkedSm />
                      </Icon>
                    </NameDiv>
                    <InfoText>
                      Freelance UX/UI designer, 80+ projects in web design,
                      mobile apps (iOS & android) and creative projects. Open to
                      offers.
                    </InfoText>
                  </LowerProfile>
                </ProfileContainer>
                <ButtonContainer>
                  <Button1>WRITE NEW ARTICLE</Button1>
                </ButtonContainer>
                <GroupsContainer>
                  <GroupsHeader>
                    <Text1>MY GROUPS</Text1>
                    <Text2>EDIT LIST</Text2>
                  </GroupsHeader>
                  <GroupsContent>
                    {EduArray.map((item) => (
                      <GroupsInnerDiv>
                        <GroupImage src={item.image} />
                        <GroupText>{item.message}</GroupText>
                      </GroupsInnerDiv>
                    ))}
                  </GroupsContent>
                  <ShowMoreDiv>
                    <ShowMoreText3>SHOW ALL (12)</ShowMoreText3>
                  </ShowMoreDiv>
                </GroupsContainer>
                <HashContainer>
                  <HashHeader>
                    <Text1>FOLLOWED HASHTAGS</Text1>
                  </HashHeader>
                  <HashContent>
                    {HashTagArray.map((item) => (
                      <Hashtag>#{item.tag}</Hashtag>
                    ))}
                  </HashContent>
                </HashContainer>
                <ArticleContainer>
                  <ArticleHeader>
                    <Text1>TRENDING ARTICLES</Text1>
                  </ArticleHeader>
                  <ArticleContent>
                    {ArticleArray.map((item) => (
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
                  </ArticleContent>
                </ArticleContainer>
              </RightContainer>
            </Col>
          </ContentRow>
        </ContentContainer>
      </MainContainer>
      <Footer array={LangArray} callbackFunction={setDrop} />
    </>
  );
};

export default FeedPage;
