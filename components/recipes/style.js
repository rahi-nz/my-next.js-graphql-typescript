import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  width: 500px;
  background: #f1f3f4;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 0 5px 6px -6px #777;
  &:hover {
    box-shadow: 0 5px 6px -4px #212121;
  }
  a {
    text-decoration: none;
    color: #000;
  }
`;

export const Title = styled.p`
  text-align: center;
  margin: 10px;
`;

export const Photo = styled.img`
  width: 100%;
  height: auto;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`;
