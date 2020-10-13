import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #eeeeee;
  border-radius: 6px;
  padding: 10px 20px;
  align-items: center;
  p {
    text-align: left;
    width: 100%;
  }
`;

export const TagContainer = styled.div.attrs(() => ({
  "data-test-id": "TagContainer",
}))`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  span {
    background: #58abd6;
    padding: 5px 10px;
    border-radius: 6px;
    margin: 5px;
  }
`;

export const Photo = styled.img`
  width: 100%;
  height: auto;
`;

export const Description = styled.div`
  display: flex;
  text-align: left;
  flex-direction: column;
`;
