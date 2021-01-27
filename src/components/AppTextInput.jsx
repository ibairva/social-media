import React from "react";
import styled from "styled-components";

const Search = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
        stroke="#0275B1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21 21L16.65 16.65"
        stroke="#0275B1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const TextInputWrapper = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  position: none;
  align-items: center;
  justify-content: center;
`;
const TextInputDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: ${(props) => (props.innerDivWidth ? props.innerDivWidth : "95%")};
  height: 50px;
  margin: 0px auto;
  justify-content: ${(props) => (props.justify ? props.justify : "center")};
  padding: ${(props) =>
    props.inputDivPadding ? props.inputDivPadding : "0px 11px"};
  background: #00000000;
  align-items: center;
  @media (max-width: 768px) {
    width: 80%;
  }
`;
const TextInput = styled.input`
  font-size: 14px;
  font-family: "Gotham Medium";
  width: 80%;
  height: 50px;
  outline: none;
  text-align: left;
  color: #999999;
  padding-left: ${(props) =>
    props.inputPadding ? props.inputPadding : "15px"};
  background: border-box;
  font-family: Open Sans;
  border: none;
  margin: 0px;
  input:-webkit-autofill {
    color: #2a2a2a !important;
  }
  ::placeholder {
    font-size: 14px;
    color: #999999;
    font-family: "Gotham Medium";
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    border: 1px solid green;
    -webkit-text-fill-color: green;
    -webkit-box-shadow: 0 0 0px 1000px #000 inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;
const AppTextInput = (props) => {
  const onChange = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <>
      <TextInputWrapper>
        <TextInputDiv
          justify={props.justify}
          innerDivWidth={props.innerDivWidth}
          inputDivPadding={props.inputDivPadding}
        >
          {props.icon ? <Search /> : null}
          <TextInput
            name={props.name}
            value={props.value}
            placeholder={props.placeholder}
            inputPadding={props.inputPadding}
            type="text"
            onChange={onChange}
          ></TextInput>
        </TextInputDiv>
      </TextInputWrapper>
    </>
  );
};

export default AppTextInput;
