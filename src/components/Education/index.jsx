import React from "react";
import styled from "styled-components";
import { educations } from "../../Data/constant";
import TimeLine from "@mui/lab/Timeline";
import TimeLineItem from "@mui/lab/TimelineItem";
import TimeLineSeparator from "@mui/lab/TimelineSeparator";
import TimeLineConnector from "@mui/lab/TimelineConnector";
import TimeLineContent from "@mui/lab/TimelineContent";
import TimeLineDot from "@mui/lab/TimelineDot";
import TimelineContent from "@mui/lab/TimelineContent";
import EducationCard from "../cards/EducationCard";

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

const TimeLineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export default function edu() {
  return (
    <Container id="education">
      <Wrapper>
        <Title>Education</Title>
        <Desc>
          My education has been a journey of self-discovery and growth. My
          educational details are as follows.
        </Desc>
        <TimeLineSection>
          <TimeLine>
            {educations.map((education, idx) => (
              <TimeLineItem>
                <TimeLineContent>
                  <EducationCard education={education} />
                </TimeLineContent>
                <TimeLineSeparator>
                  <TimeLineDot
                    variant="outlined"
                    color="secondary"
                  ></TimeLineDot>
                  {idx !== educations.length - 1 && <TimeLineConnector />}
                </TimeLineSeparator>
              </TimeLineItem>
            ))}
          </TimeLine>
        </TimeLineSection>
      </Wrapper>
    </Container>
  );
}
