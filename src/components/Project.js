import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Media, AnimFade, ColorTint } from '../utils/StyleUtils';
import ProgressiveImage from './ProgressiveImage';


const initDelay = 300;
const prerender = window.location.port === '45678';


/* const changeTable = (e) => {
     const datavalue = e.currentTarget.dataset.value;
     console.log('eeeee', e)
     console.log('eeeee', datavalue)
 };*/

export class ProjectBackground extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      offset: 0,
    }

    this.scheduledAnimationFrame = false;
    this.lastScrollY = 0;
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    this.lastScrollY = window.scrollY;
    if (this.scheduledAnimationFrame) return;
    this.scheduledAnimationFrame = true;

    requestAnimationFrame(() => {
      this.setState({ offset: this.lastScrollY * 0.4 });
      this.scheduledAnimationFrame = false;
    });
  }

  render() {
    const { offset } = this.state;

    return (
      <ProjectBackgroundImage
        offset={offset}
        {...this.props}
      />
    );
  }
}



export const ProjectPriceTable = ({ name= {}, currency = {}, price = {}, cent = {}, title = {}, fields=[] }) => (
    <ProjectTable>
            <ProjectDetails entered={!prerender}>
                <ProjectTableName>{name.name}</ProjectTableName>
                <ProjectTableItem>
                    <ProjectTableItemHeder>
                        <span>{currency.currency}</span>{price.price}<sup>{cent.cent}</sup>
                        <ProjectTableItemHederTitle>{title.title}</ProjectTableItemHederTitle>
                    </ProjectTableItemHeder>
                    <div>
                        <ProjectTableContent>
                            {fields && fields.map((field, index) => (
                                <ProjectTableList key={`role_${index}`}>{field.name}</ProjectTableList>
                            ))}
                        </ProjectTableContent>
                    </div>

                </ProjectTableItem>
            </ProjectDetails>
    </ProjectTable>
);

export const ProjectContainer = styled.article`
  position: relative;
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

export const ProjectSection = styled.section`
  position: relative;
  width: 100vw;
  padding-top: 100px;
  padding-right: 120px;
  padding-bottom: 100px;
  padding-left: 210px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${Media.desktop}) {
    padding-left: 120px;
  }

  @media (max-width: ${Media.tablet}) {
    padding-top: 60px;
    padding-right: 80px;
    padding-bottom: 60px;
    padding-left: 160px;
    height: auto;
  }

  @media (max-width: ${Media.mobile}) {
    padding-top: 40px;
    padding-right: 25px;
    padding-bottom: 40px;
    padding-left: 25px;
  }

  @media (max-width: ${Media.mobile}), (max-height: ${Media.mobile}) {
    padding-left: ${props => props.theme.spacingOuter.mobile};
    padding-right: ${props => props.theme.spacingOuter.mobile};
  }

  @media ${Media.mobileLS} {
    padding-left: 100px;
    padding-right: 100px;
  }

  ${props => props.light && `
    background: ${ColorTint(props.theme.colorBackground(1), 0.036)};
    padding-top: 120px;
    padding-bottom: 140px;

    @media (max-width: ${Media.tablet}) {
      padding-top: 80px;
      padding-bottom: 100px;
    }

    @media (max-width: ${Media.mobile}) {
      padding-top: 80px;
      padding-bottom: 100px;
    }
  `}
`;

export const ProjectBackgroundImage = styled(ProgressiveImage).attrs({
  alt: '',
  role: 'presentation',
  opacity: props => props.opacity ? props.opacity : 0.7,
  style: ({ offset }) => ({
    transform: `translate3d(0, ${offset}px, 0)`,
  }),
})`
  z-index: 0;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 800px;
  opacity: 0;

  ${props => props.entered && css`
    animation: ${AnimFade} 2s ease ${initDelay}ms forwards;
  `}

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg,
      ${props => props.theme.colorBackground(props.opacity)} 0%,
      ${props => props.theme.colorBackground(1)} 100%
    );
  }
`;

export const ProjectHeaderContainer = styled(ProjectSection.withComponent('header'))`
  padding-top: 120px;
  padding-bottom: 0;

  @media (max-width: ${Media.tablet}) {
    padding-top: 100px;
  }

  @media (max-width: ${Media.mobile}) {
    padding-top: 130px;
    padding-bottom: 20px;
  }
`;

export const ProjectHeaderInner = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 300px;
  grid-gap: 100px;
  max-width: 980px;

  @media (min-width: ${Media.desktop}) {
    max-width: 1100px;
    grid-template-columns: 1fr 400px;
  }

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 200px;
    grid-gap: 40px;
  }

  @media (max-width: ${Media.tablet}) {
    grid-template-columns: 100%;
    grid-gap: 30px;
  }
`;

const AnimFadeSlide = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, 60px, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const ProjectDetails = styled.div`
  opacity: 0;

  ${props => props.entered && css`
    animation: ${AnimFadeSlide} 1.4s ${props.theme.curveFastoutSlowin} ${initDelay}ms forwards;
  `}
`;

export const ProjectTitle = styled.h1`
  margin: 0;
  font-size: 54px;
  font-weight: 500;
  line-height: 1.1;

  @media (max-width: ${Media.tablet}) {
    font-size: 48px;
  }

  @media (max-width: ${Media.mobile}) {
    font-size: 34px;
  }

  @media (max-width: 320px) {
    font-size: 28px;
  }
`;

export const ProjectDescription = styled.p`
  font-size: 22px;
  line-height: 1.4;

  @media (max-width: ${Media.mobile}) {
    font-size: 18px;
  }
`;

export const ProjectMeta = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin-top: 10px;
  opacity: 0;
  
    .active {
        background: rgba(0,229,255,0.4);
      }
      
  ${props => props.entered && css`
    animation: ${AnimFadeSlide} 1.4s ${props.theme.curveFastoutSlowin} ${initDelay + 200}ms forwards;
  `}
`;

export const ProjectMetaItem = styled.li`
  padding: 15px 0;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  border-top: 1px solid ${props => props.theme.colorText(0.2)};

  &:last-child {
    border-bottom: 1px solid ${props => props.theme.colorText(0.2)};
  }

  @media (max-width: ${Media.tablet}) {
    padding: 20px 0;
  }

  @media (max-width: ${Media.mobile}) {
    padding: 15px 0;
  }
`;

const AnimProjectImage = keyframes`
  0% {
    transform: scale3d(0, 1, 1);
    transform-origin: left;
  }
  49% {
    transform: scale3d(1, 1, 1);
    transform-origin: left;
  }
  50% {
    transform: scale3d(1, 1, 1);
    transform-origin: right;
  }
  100% {
    transform: scale3d(0, 1, 1);
    transform-origin: right;
  }
`;

export const ProjectImage = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  transform: translate3d(0, 0, 0);
  max-width: 100%;

  &:before {
    content: '';
    background: ${props => props.theme.colorPrimary(1)};
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: scale3d(0, 1, 1);
    transform-origin: left;
    z-index: 16;
  }

  div {
    opacity: 0;
    width: 100%;
  }

  ${props => props.entered && css`
    &:before {
      animation: ${AnimProjectImage} 1.4s ${props.theme.curveFastoutSlowin} 0.6s;
    }

    div {
      animation: ${AnimFade} 0.8s ease 1.4s forwards;
    }
  `}
`;

export const ProjectSectionContent = styled.div`
  max-width: 980px;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: ${Media.desktop}) {
    max-width: 1100px;
  }
`;

export const ProjectSectionHeading = styled.h2`
  font-size: 32px;
  font-weight: 500;
  margin: 0;

  @media (max-width: ${Media.mobile}) {
    font-size: 24px;
  }
`;

export const ProjectSectionText = styled.p`
  font-size: 20px;
  line-height: 1.4;
  ba
  margin: 0;
  margin-top: 28px;
  color: ${props => props.theme.colorText(0.7)};

  @media (max-width: ${Media.mobile}) {
    font-size: 18px;
    margin-top: 22px;
  }
`;

export const ProjectTable = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 300px;
    border-radius: 5px 5px 0 0;
`;
export const ProjectTableName = styled.span`
  font-family:'Open Sans';
  font-weight: 800;
  display: flex;
  justify-content: center;
  font-size: 29px;
  text-transform: uppercase;
  color: white;
  background-color: ${props => props.theme.colorTable('#eac80d')};
  text-align: center;
  padding: 10px 0;
`;

export const ProjectTableItem = styled.div`
  width: 300px;
  background-color: #2b2937;
  border-radius: 0px 0px 5px 5px;
  font-family:'Open Sans';
  font-style: condensed;
  font-size: 90px;
  color: white;
  text-align: center;
`;

export const ProjectTableItemHeder = styled.div`
    div, span{
        font-size: 32px;
    }
    sup{
        font-size: 40px;
    }
`;

export const ProjectTableItemHederTitle = styled.p`
    font-size: 14px;
    color: #575757;
    padding: 0px;
    margin: -10px;
`;

export const ProjectTableContent = styled.ul`
    list-style: none;
    font-size: 15px;
    font-family:'Open Sans';
    color: #9095aa;
    padding: 0px;
    margin: 0px;
`;

export const ProjectTableList = styled.li`
    border-bottom: 1px solid #494a5a;
    padding: 0px;
    margin: 0px;
    text-align: center;
    height: 52px;
    line-height: 52px;
`;
