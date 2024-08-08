import { useState, React } from "react";
import styled from "styled-components";
import Projectcard from "../cards/projectscards";
import { allprojects } from "../../Data/constant";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0px 80px 0px;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 80px 0;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

export const ToggleButtonGroup = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  margin: 22px 0px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
export const ToggleButton = styled.div`
  padding: 8px 18px;
  border-radius: 6px;
  cursor: pointer;
  ${({ active, theme }) =>
    active &&
    `
    background: ${theme.primary + 20};
    `}
  &:hover {
    background: ${({ theme }) => theme.primary + 8};
  }
  @media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
  }
`;

export const Divider = styled.div`
  width: 1.5px;
  background: ${({ theme }) => theme.primary};
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
`;

export default function projects() {
  let [toggle, Settoggle] = useState("all");

  function alltoggle() {
    Settoggle("all");
  }

  function reacttoggle() {
    Settoggle("react");
  }

  function Jstoggle() {
    Settoggle("Js");
  }

  function csstoggle() {
    Settoggle("css");
  }

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. Here are some of my
          projects
        </Desc>
        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButton active onClick={alltoggle}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton onClick={alltoggle}>All</ToggleButton>
          )}

          <Divider />
          {toggle === "react" ? (
            <ToggleButton active onClick={reacttoggle}>
              React
            </ToggleButton>
          ) : (
            <ToggleButton onClick={reacttoggle}>React</ToggleButton>
          )}
          <Divider />
          {toggle === "Js" ? (
            <ToggleButton onClick={Jstoggle} active>
              JavaScript
            </ToggleButton>
          ) : (
            <ToggleButton onClick={Jstoggle}>JavaScript</ToggleButton>
          )}
          <Divider></Divider>
          {toggle === "css" ? (
            <ToggleButton active onClick={csstoggle}>
              CSS
            </ToggleButton>
          ) : (
            <ToggleButton onClick={csstoggle}>CSS</ToggleButton>
          )}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === "all" &&
            allprojects.map((project) => <Projectcard project={project} />)}
          {allprojects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <Projectcard project={project} />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
}
