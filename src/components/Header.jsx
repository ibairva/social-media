import React, { useState } from "react";
import styled from "styled-components";
import { Drawer, Collapse } from "antd";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBell, faCommentAlt } from "@fortawesome/free-regular-svg-icons";
import {
  faRss,
  faUserFriends,
  faSuitcase,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";
import AppTextInput from "./AppTextInput";
import user1 from "../images/user1.png";
import menu from "../images/menu.jpg";
import LinkedInText from "../images/LinkedInText.png";

const RSS = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 11C6.38695 11 8.67613 11.9482 10.364 13.636C12.0518 15.3239 13 17.6131 13 20"
        stroke="#181818"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4 4C8.24346 4 12.3131 5.68571 15.3137 8.68629C18.3143 11.6869 20 15.7565 20 20"
        stroke="#181818"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5 20C5.55228 20 6 19.5523 6 19C6 18.4477 5.55228 18 5 18C4.44772 18 4 18.4477 4 19C4 19.5523 4.44772 20 5 20Z"
        stroke="#181818"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const Users = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
        stroke="#181818"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
        stroke="#181818"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
        stroke="#181818"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
        stroke="#181818"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const Jobs = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z"
        stroke="#181818"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21"
        stroke="#181818"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const Chat = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
        stroke="#181818"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const Notices = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
        stroke="#181818"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
        stroke="#181818"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const LinkedIcon = () => {
  return (
    <svg
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.5262 2.5262C0 5.05241 0 9.11827 0 17.25V28.75C0 36.8817 0 40.9476 2.5262 43.4738C5.05241 46 9.11827 46 17.25 46H28.75C36.8817 46 40.9476 46 43.4738 43.4738C46 40.9476 46 36.8817 46 28.75V17.25C46 9.11827 46 5.05241 43.4738 2.5262C40.9476 0 36.8817 0 28.75 0H17.25C9.11827 0 5.05241 0 2.5262 2.5262ZM11.4811 14.4099C9.58715 14.4099 8.05 12.8571 8.05 10.9425C8.05 9.02789 9.58715 7.475 11.4811 7.475C13.3751 7.475 14.9123 9.02789 14.9123 10.9425C14.9123 12.8571 13.3771 14.4099 11.4811 14.4099ZM8.54016 38.525V16.9024H14.4221V38.525H8.54016ZM32.068 38.525H37.95V25.2389C37.95 14.9132 26.9644 15.2886 24.2254 20.3719V16.9024H18.3434V38.525H24.2254V27.5093C24.2254 21.3901 32.068 20.8889 32.068 27.5093V38.525Z"
        fill="url(#paint0_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="23"
          y1="0"
          x2="23"
          y2="46"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#0077B5" />
          <stop offset="1" stop-color="#0E6795" />
        </linearGradient>
      </defs>
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

const Arrow = () => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.50024 8.50021L8.50025 3.50021"
        stroke="#02B033"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.50024 3.50021H8.50025V8.50021"
        stroke="#02B033"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
const HeaderDiv = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  background-color: #ffffff;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;
const LinksDiv = styled.div`
  width: auto;
  height: 80px;
  display: flex;
  flex: 2;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;
const LinkedInDiv = styled.div`
  // width:130px;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 10px 5px;
  margin-right: 20px;
`;
const OtherLinksDiv = styled.div`
  // width:550px;
  height: 80px;
  display: flex;
  flex: 3;
  align-items: center;
  justify-content: space-between;
  border-left: 1px solid #f4f4f4;
  border-right: 1px solid #f4f4f4;
  padding: 10px 20px;
`;
const LinksInnerDiv = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 12px;
  flex-direction: column;
  cursor:pointer;
`;
const LinksInnerDiv2 = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  flex-direction: column;
  margin-right: 30px;
  border-right: 1px solid #f4f4f4;
  cursor:pointer;
  @media (max-width: 768px){
    margin-right:0px;
  }
`;
const Icons = styled(FontAwesomeIcon)`
  font-size: 60px;
  color: #0077b5;
  display: flex;
  border-radius: 7px;
  cursor: pointer;
`;

const LinksIcons = styled(FontAwesomeIcon)`
  font-size: 24px;
  color: #181818;
  display: flex;
  cursor: pointer;
`;
const LinkText = styled.p`
  font-size: 12px;
  color: #181818;
  font-weight: 500;
  font-family: "Gotham Medium";
  text-align: center;
  display: flex;
  margin-top: 5px;
  margin-bottom: 0px;
`;
const InputContainer = styled.div`
  // width:360px;
  height: auto;
  padding: 10px;
  flex: 1;
  display: felx;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #f4f4f4;
`;

const InfoDiv = styled.div`
  // width:340px;
  height: auto;
  display: flex;
  flex: 1;
  justify-content: right;
  align-items: center;
  padding: 10px 20px;
  border-right: 1px solid #f4f4f4;
  @media (max-width: 768px){
    padding:10px 0px 10px;
    border-right:none;
    border-bottom: 1px solid #f4f4f4;
    margin-bottom:10px;
  }
`;
const ImageDiv = styled.div`
  width: 50px;
  min-width: 50px;
  height: 50px;
  border-radius: 50px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const UserImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;
const ImageDiv2 = styled.div`
  width: 43px;
  min-width: 43px;
  height: 43px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const UserImage2 = styled.img`
  width: 43px;
  height: 43px;
  border-radius: 50%;
`;
const InfoTextDiv = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
const UpperText = styled.p`
  display: flex;
  font-size: 12px;
  color: #181818;
  font-weight: 600;
  font-family: "Gotham Medium";
  margin-bottom: 0px;
`;
const UpperInnerText = styled.p`
  display: flex;
  font-size: 12px;
  color: #181818;
  font-weight: 400;
  font-family: "Gotham Pro";
  margin-left: 10px;
  margin-bottom: 0px;
`;
const LowerText = styled.p`
  display: flex;
  font-size: 12px;
  color: #747474;
  font-family: "Gotham Pro";
  margin-bottom: 0px;
`;
const LowerInnerText = styled.p`
  display: flex;
  font-size: 12px;
  color: #02b033;
  font-weight: 600;
  font-family: "Gotham Bold";
  margin-left: 10px;
  margin-bottom: 0px;
`;
const ArrowDiv = styled.div`
  display: flex;
  margin-top: 4px;
`;
const MobileMainContainer = styled.div`
  display: none;
  padding: 0px 20px;
  height: 60px;
  width: 100%;
  background-color: #ffffff;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
const MobileMenuImage = styled.img`
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
`;
const CustomDrawer = styled(Drawer)`
  .ant-drawer-body {
    background-color: #ffffff;
  }
  .ant-collapse-header {
    padding: 0px;
  }
`;

const CollapseBox = styled(Collapse)`
  .ant-collapse {
    padding: 0px;
  }
  .ant-collapse
    > .ant-collapse-item.ant-collapse-no-arrow
    > .ant-collapse-header {
    padding: 0px;
  }
  .ant-collapse-header {
    padding: 0px;
    padding-left: 0px;
  }
`;
const DrowerTitle = styled.p`
  font-size: 16;
  color: #181818;
  font-family: "Gotham Medium";
  // margin: 20px 0;
  display: flex;
  margin: 0px 0px 20px;
  border-bottom: 2px solid transparent;
`;
const DrowerIconView = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  // margin: 20px 0;
  border-bottom: 2px solid transparent;
`;
const DrowerTitleIcon = styled.p`
  font-size: 16;
  color: #181818;
  font-family: "Gotham Medium";
`;
const BadgeText = styled.div`
  background-color: yellow;
  padding: 2px 5px;
  border-radius: 50%;
`;
const MobIcon = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  margin-right: 10px;
`;
const LinkedInLogoDiv =styled.div`
width:120px;
height:40px;
display:flex;
margin:0px auto;
`;
const LinkedInImage = styled.img`
width:120px;
height:40px;
display:flex;
`;
const Header = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <HeaderDiv>
        <LinksDiv>
          <LinkedInDiv>
            {/* <Icons icon={faLinkedin} /> */}
            <LinkedIcon />
          </LinkedInDiv>
          <OtherLinksDiv>
          <Link to="/feed">
            <LinksInnerDiv>
              {/* <LinksIcons icon={faRss} /> */}
              <RSS />
              <LinkText>FEED</LinkText>
            </LinksInnerDiv>
            </Link>
            <LinksInnerDiv>
              {/* <LinksIcons icon={faUserFriends} /> */}
              <Users />
              <LinkText>NETWORK</LinkText>
            </LinksInnerDiv>
            <LinksInnerDiv>
              {/* <LinksIcons icon={faSuitcase} /> */}
              <Jobs />
              <LinkText>JOBS</LinkText>
            </LinksInnerDiv>
            <LinksInnerDiv>
              {/* <LinksIcons icon={faCommentAlt} /> */}
              <Chat />
              <LinkText>CHAT</LinkText>
            </LinksInnerDiv>
            <LinksInnerDiv>
              {/* <LinksIcons icon={faBell} /> */}
              <Notices />
              <LinkText>NOTICES</LinkText>
            </LinksInnerDiv>
          </OtherLinksDiv>
        </LinksDiv>
        <InputContainer>
          <AppTextInput placeholder={"Search"} icon />
        </InputContainer>
        <Link to="/profile">
        <InfoDiv>
          <ImageDiv>
            <UserImage src={user1} />
          </ImageDiv>
          <InfoTextDiv>
            <UpperText>
              D.KARGAEV
              <UpperInnerText>YOU</UpperInnerText>
            </UpperText>
            <LowerText>
              367 views today
              <LowerInnerText>
                +32{" "}
                <ArrowDiv>
                  <Arrow />
                </ArrowDiv>
              </LowerInnerText>
            </LowerText>
          </InfoTextDiv>
        </InfoDiv>
        </Link>
        <LinksInnerDiv2>
          <LinkText>OTHER</LinkText>
        </LinksInnerDiv2>
      </HeaderDiv>
      <MobileMainContainer>
        <MobileMenuImage src={menu} onClick={showDrawer} />
        <InputContainer>
          <AppTextInput placeholder={"Search"} icon />
        </InputContainer>
        <LinksInnerDiv2>
          <DotsH />
          <LinkText>OTHER</LinkText>
        </LinksInnerDiv2>
        <CustomDrawer
          // title="Basic Drawer"
          placement={"left"}
          closable={false}
          onClose={onClose}
          visible={visible}
          key={"left"}
        >
          <LinkedInLogoDiv>
            <LinkedInImage src={LinkedInText}/>
          </LinkedInLogoDiv>
          <InfoDiv>
          <ImageDiv2>
            <UserImage2 src={user1} />
          </ImageDiv2>
          <InfoTextDiv>
            <UpperText>
              D.KARGAEV
              <UpperInnerText>YOU</UpperInnerText>
            </UpperText>
            <LowerText>
              367 views today
              <LowerInnerText>
                +32{" "}
                <ArrowDiv>
                  <Arrow />
                </ArrowDiv>
              </LowerInnerText>
            </LowerText>
          </InfoTextDiv>
        </InfoDiv>
          <DrowerTitle active={true}>
            <MobIcon>
              <RSS />
            </MobIcon>
            FEED{" "}
          </DrowerTitle>
          <DrowerTitle active={false}>
            <MobIcon>
              <Users />
            </MobIcon>
            NETWORK
          </DrowerTitle>
          <DrowerTitle active={false}>
            <MobIcon>
              <Jobs />
            </MobIcon>
            JOBS
          </DrowerTitle>
          <DrowerTitle active={false}>
            <MobIcon>
              <Chat />
            </MobIcon>
            CHAT
          </DrowerTitle>
          <DrowerTitle active={false}>
            <MobIcon>
              <Notices />
            </MobIcon>
            NOTICES
          </DrowerTitle>
        </CustomDrawer>
      </MobileMainContainer>
    </>
  );
};

export default Header;
