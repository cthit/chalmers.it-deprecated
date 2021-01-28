import Styled from "styled-components";
import { Heading } from "../../styles/Text.styles";

export const ItemWrapper = Styled.div`
  background-color: white;
  border-radius: 10px;
  /*border: 1px solid gray;*/ 
  width: 40rem;
  height: 10rem;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px, rgba(0, 0, 0, 0.2) 0px 3px 1px -2px;
`;

export const TitleText = Styled(Heading)`
  &:hover{
    text-decoration: underline
  }
  cursor: pointer;
  padding-left: 1rem;
  margin-bottom: 0;
`;

export const SubtitleText = Styled.p`
  margin-left: 1rem;
  flex-flow: column wrap;
  margin-top: 0;
  color: gray;
`;

export const NewsImage = Styled.img`
  height: 10rem;
  float: right;
`;
