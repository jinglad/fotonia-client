import styled from "styled-components";

export const ReviewContainer = styled.div`
  padding: 10px;
  box-shadow: 0 0 15px black;
  border-radius: 10px;
  margin-bottom: 15px;
  height: 200px;
  & h4 {
    font-size: medium;
  }
  & h6 {
    color: #f2ab91;
  }
  & p {
    font-size: small;
  }
`;

export const ReviewImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-top: -40px;
`;
