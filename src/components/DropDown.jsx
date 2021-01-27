import React, { useState } from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import styled from "styled-components";
import "./DropDown.css";

const DropDownContainer = styled.div`
  display: flex;
  width: ${(props) => (props.width ? props.width : "150px")};
  justify-content: space-around;
  align-items: center;
  margin-left: ${(props) => (props.leftMargin ? props.leftMargin : "-10px")};
  @media (max-width: 420px) {
    margin-bottom: 0px;
  }
`;
const DropText = styled.p`
  font-size: 11px;
  color: #181818;
  margin: 0px;
  font-family: "Gotham Medium";
`;

const Select = styled(Menu)`
  background-color: #00000000;
  padding: 0;
`;
const Options = styled(Menu.Item)`
  width: 100%;
  // height: 57px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid #000000;
  color: #000000;
  font-family: "Gotham Pro";
  background-color: #00000000;
  font-size: 11px;
  &:hover {
    color: #000000;
  }
  @media (max-width: 768px){
    background-color:#ffffff;
  }
`;
const DropDownMenu = styled.div`
  width: ${(props) => (props.inputWidth ? props.inputWidth : "166px")};
  color: #181818;
  font-size: 16px;
  // padding: 5px;
  border: ${(props) => (props.border ? "none" : "1px solid white")};
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#ffffff")};
  a:hover {
    color: #9e9e9e;
  }
`;
const Drop = styled(Dropdown)`
  padding: 4px 12px;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  .anticon svg {
    color: blue;
    height: 7px;
  }
}
`;

const Link = styled.a`
  font-size: 11px;
  color: ${(props) => (props.color ? props.color : "#181818")};
  font-family:${(props) => (props.fontFamily ? props.fontFamily : "Gotham Pro")};
`;
const DropDown = (props) => {
  const [myvalue, setMyvalue] = useState(props.DATA ? props.DATA[0].value : "");

  const setData = (item) => {
    setMyvalue(item?.value);
    if (props.callback) {
      props.callback(item);
    }
  };

  const menu = (
    <Select>
      {props.items
        ? props.items.map((item) => {
            return (
              <Options
                key={item.value}
                onClick={() => {
                  setData(item);
                }}
              >
                {item.label}
              </Options>
            );
          })
        : null}
    </Select>
  );

  return (
    <DropDownContainer width={props.width} leftMargin={props.leftMargin}>
      <DropText>{props.title ? props.title : null}</DropText>
      <DropDownMenu
        inputWidth={props.inputWidth}
        border={props.border}
        bgColor={props.bgColor}
      >
        <Drop overlay={menu} trigger={["click"]}>
          <Link
            fontFamily={props.fontFamily}
            color={props.color}
            className="ant-dropdown-link"
            onClick={(e) => e.preventDefault()}
          >
            {props.value === "" || !props.value ? "ENGLISH" : props.value}{" "}
            <DownOutlined />
          </Link>
        </Drop>
      </DropDownMenu>
    </DropDownContainer>
  );
};

export default DropDown;
