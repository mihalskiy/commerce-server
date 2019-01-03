import {LinkButton} from "../components/Button";
import React from "react";
import {ProjectDetails, ProjectTitle, ProjectDescription, ProjectHeaderContainer} from "../components/Project";
import { Media } from '../utils/StyleUtils';
import Circle from 'react-circle';
import styled from "styled-components";



const prerender = window.location.port === '45678';

let NavPortfolio = ({ title, description, url, src }) => (
    <ProjectHeaderContainer>

        <ProjectHeaderNav>
            <ProjectDetails className="ProjectDetails" entered={!prerender}>
                <ProjectTitle>{title}</ProjectTitle>
                <ProjectDescription>{description}</ProjectDescription>
                <LinkButton
                    secondary
                    style={{ paddingLeft: '3px' }}
                    icon="chevronRight"
                    href={url}
                    rel="noopener noreferrer"
                >
                    Заказать
                </LinkButton>
            </ProjectDetails>
            <NavImgItem>
                <ProjectImage src={src} alt={url} />
                <ProjectSubImage>
                    <ProjectSubImg src="https://picsum.photos/400/180" alt={url} />
                    <ProjectSubImageTitle>Розработано Сайтов</ProjectSubImageTitle>
                    <ProjectImageItem>
                        <CircleItem>
                            <Circle
                                animate={true} // Boolean: Animated/Static progress
                                animationDuration="3s" // String: Length of animation
                                responsive={false} // Boolean: Make SVG adapt to parent size
                                size="50" // String: Defines the size of the circle.
                                lineWidth="25" // String: Defines the thickness of the circle's stroke.
                                progress="35" // String: Update to change the progress and percentage.
                                progressColor="rgb(76, 154, 255)" // String: Color of "progress" portion of circle.
                                bgImage="#535761" // String: Color of "empty" portion of circle.
                                textColor="#6b778c" // String: Color of percentage text color.
                                textStyle={{
                                    font: 'bold 4rem Helvetica, Arial, sans-serif' // CSSProperties: Custom styling for percentage.
                                }}
                                percentSpacing={5} // Number: Adjust spacing of "%" symbol and number.
                                roundedStroke={true} // Boolean: Rounded/Flat line ends
                                showPercentage={true} // Boolean: Show/hide percentage.
                                showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
                            />
                            <span>Лендинг 35%</span>
                        </CircleItem>
                        <CircleItem>
                            <Circle
                                animate={true} // Boolean: Animated/Static progress
                                animationDuration="3s" // String: Length of animation
                                responsive={false} // Boolean: Make SVG adapt to parent size
                                size="50" // String: Defines the size of the circle.
                                lineWidth="25" // String: Defines the thickness of the circle's stroke.
                                progress="35" // String: Update to change the progress and percentage.
                                progressColor="rgb(76, 154, 255)" // String: Color of "progress" portion of circle.
                                bgImage="#535761" // String: Color of "empty" portion of circle.
                                textColor="#6b778c" // String: Color of percentage text color.
                                textStyle={{
                                    font: 'bold 4rem Helvetica, Arial, sans-serif' // CSSProperties: Custom styling for percentage.
                                }}
                                percentSpacing={5} // Number: Adjust spacing of "%" symbol and number.
                                roundedStroke={true} // Boolean: Rounded/Flat line ends
                                showPercentage={true} // Boolean: Show/hide percentage.
                                showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
                            />
                            <span>Интернет магазинов 35%</span>
                        </CircleItem>
                        <CircleItem>
                            <Circle
                                animate={true} // Boolean: Animated/Static progress
                                animationDuration="3s" // String: Length of animation
                                responsive={false} // Boolean: Make SVG adapt to parent size
                                size="50" // String: Defines the size of the circle.
                                lineWidth="25" // String: Defines the thickness of the circle's stroke.
                                progress="35" // String: Update to change the progress and percentage.
                                progressColor="rgb(76, 154, 255)" // String: Color of "progress" portion of circle.
                                bgImage="#535761" // String: Color of "empty" portion of circle.
                                textColor="#6b778c" // String: Color of percentage text color.
                                textStyle={{
                                    font: 'bold 4rem Helvetica, Arial, sans-serif' // CSSProperties: Custom styling for percentage.
                                }}
                                percentSpacing={5} // Number: Adjust spacing of "%" symbol and number.
                                roundedStroke={true} // Boolean: Rounded/Flat line ends
                                showPercentage={true} // Boolean: Show/hide percentage.
                                showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
                            />
                            <span>Сайт визтки 30%</span>
                        </CircleItem>
                    </ProjectImageItem>
                </ProjectSubImage>
            </NavImgItem>
        </ProjectHeaderNav>
    </ProjectHeaderContainer>
);

export const ProjectSubImage = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 200px;
  background: #292e3a;
  border-radius: 8px;
  position: absolute;
  top: 35%;
  left: 0;
  

  img {
    width: 100%;
    margin: 0 0 10px 0;
  }
  
  @media (max-width: ${Media.tablet}) {
    position: unset;
    align-items: center;
  }

`;

const NavImgItem = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 50%;
  justify-content: space-between;
  align-items: flex-end;
   
  @media (max-width: ${Media.tablet}) {
    position: unset;
    align-items: center;
    margin-bottom: 10px;
  }
`;

const CircleItem = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin-top: 10px;
`;

const ProjectImageItem = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding-left: 10px;
margin-bottom: 10px;

 span {
 margin-left: 10px;
 font-size: 10px;
 }
`;

export const ProjectSubImageTitle = styled(ProjectTitle)`
  font-size: 16px !important;  
  text-align: center;
`;

export const ProjectImage = styled.img`
max-width: 100%;
display: flex;
max-height: 100%;
width: 90%;
@media (max-width: ${Media.tablet}) {
    display: none;
  }
`;

export const ProjectSubImg = styled(ProjectImage)`
@media (max-width: ${Media.tablet}) {
    display: flex;
  }
`

export const ProjectHeaderNav = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
width: 100%;
max-width: 1200px;

.ProjectDetails {
width: 40%;
align-content: start;
}

@media (max-width: ${Media.desktopSM}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    .ProjectDetails {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 50px 25px 50px;
    }
    width: 100%;
  }

  @media (max-width: ${Media.tablet}) {
    flex-direction: column-reverse;
    padding: 0 50px;
  }

`;

export default NavPortfolio;
