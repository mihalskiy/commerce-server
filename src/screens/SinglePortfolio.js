import React, {Component} from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import ProgressiveImage from '../components/ProgressiveImage';
import ScrollToTop from '../utils/ScrollToTop';
import Footer from '../components/Footer';
import {
  ProjectContainer, ProjectSection, ProjectSectionContent, ProjectImage,
  ProjectSectionHeading, ProjectSectionText, ProjectBackground
} from '../components/Project';
import ProjectHeader from '../components/ProjectHeader'
import { Media } from '../utils/StyleUtils';
import sliceBackground from '../assets/slice-background.jpg';
import sliceBackgroundLarge from '../assets/slice-background-large.jpg';
import sliceBackgroundPlaceholder from '../assets/slice-background-placeholder.jpg';
import sliceApp from '../assets/slice-app.jpg';
import sliceAppLarge from '../assets/slice-app-large.jpg';
import sliceAppPlaceholder from '../assets/slice-app-placeholder.jpg';
import sliceSidebarLayers from '../assets/slice-sidebar-layers.png';
import sliceSidebarLayersLarge from '../assets/slice-sidebar-layers-large.png';
import sliceSidebarLayersPlaceholder from '../assets/slice-sidebar-layers-placeholder.png';
import sliceSidebarAnnotations from '../assets/slice-sidebar-annotations.png';
import sliceSidebarAnnotationsLarge from '../assets/slice-sidebar-annotations-large.png';
import sliceSidebarAnnotationsPlaceholder from '../assets/slice-sidebar-annotations-placeholder.png';
import sliceSlides from '../assets/slice-slides.jpg';
import sliceSlidesLarge from '../assets/slice-slides-large.jpg';
import sliceSlidesPlaceholder from '../assets/slice-slides-placeholder.jpg';
import sliceBackgroundBar from '../assets/slice-background-bar.jpg';
import sliceBackgroundBarLarge from '../assets/slice-background-bar-large.jpg';
import sliceBackgroundBarPlaceholder from '../assets/slice-background-bar-placeholder.jpg';
import sliceAnnotation from '../assets/slice-annotation.png';
import sliceAnnotationLarge from '../assets/slice-annotation-large.png';
import sliceAnnotationPlaceholder from '../assets/slice-annotation-placeholder.png';
import {bindActionCreators} from "redux";
import {getPortfolioById, getPortfolioIdSuccess} from "../redux/portfolio/portfolio.action";
import {connect} from "react-redux";
import Loader from "./Portfolio";

const prerender = window.location.port === '45678';

const title = 'Biomedical image collaboration';
const description = 'This project involved designing a better way for biomedical educators and learners to annotate digital slides together.';
const roles = [
  'User Research',
  'UX Design',
  'Interface Design',
];

const mapDispatchToProps = dispatch => bindActionCreators({
  getPortfolioById,
  getPortfolioIdSuccess
}, dispatch);

class SinglePortfolio extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
    this.props.getPortfolioById(this.props.match.params.id);


  }

  render() {
    const {status, portfolio, loading} = this.props;

    return(
        <React.Fragment>
          <ScrollToTop status={status} />
          {portfolio &&
          <Helmet>
            <title>{`Создания веб сайтов под ключ | ${portfolio.result.title}`}</title>
            <meta name="description" content={portfolio.result.description}/>
          </Helmet>
          }
          { portfolio && !loading &&
          <ProjectContainer>
            <ProjectBackground
                srcSet={`${portfolio.result.bgColor} 1000w, ${portfolio.result.bgColor} 1920w`}
                placeholder={portfolio.result.bgColor}
                opacity={0.8}
                entered={!prerender}
            />
            <ProjectHeader
                title={portfolio.result.title}
                description={portfolio.result.description}
                url="https://www.best.edu.au/s/q2yjjvl7?data=8%404!9%4020303!10%40-15087&version=1"
                roles={roles}
            />
            {portfolio && !loading && portfolio.result.PortfolioItems.map((list, index) => (
                <ProjectSection>
                  <ProjectSectionColumns>
                    <SidebarImagesText>
                      <ProjectSectionHeading>{list.name}</ProjectSectionHeading>
                      <ProjectSectionText>{list.description}</ProjectSectionText>
                    </SidebarImagesText>
                    <SidebarImages>
                      <SidebarImage
                          srcSet={`${list.desktopImg} 1920w, ${list.tabletImg} 700w, ${list.tabletImg} 300w`}
                          placeholder={sliceSidebarLayersPlaceholder}
                          alt={list.name}
                          sizes={`(max-width: ${Media.mobile}) 200px, 343px`}
                      />
                      <SidebarImage
                          srcSet={`${portfolio.result.bgColor} 300w, ${portfolio.result.bgColor} 700w`}
                          placeholder={portfolio.result.bgColor}
                          alt="Multiple user annotations on a shared layer."
                          sizes={`(max-width: ${Media.mobile}) 200px, 343px`}
                      />
                    </SidebarImages>
                  </ProjectSectionColumns>
                </ProjectSection>
            ))}
            <Footer />
          </ProjectContainer>
          }
          {loading &&
          <Loader
              size={'300px'}
              color={'rgba(51,234,255,1)'}
          />
          }
        </React.Fragment>
    )
  }
};

const ProjectTextRow = styled.div`
  max-width: 660px;
  align-self: center;
  margin-bottom: 80px;
`;

const ProjectSectionColumns = styled(ProjectSectionContent)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 70px;
  margin: 20px 0 60px;

  @media (max-width: ${Media.tablet}) {
    grid-template-columns: 1fr;
    margin: 0 0 60px;
  }
`;

const ProjectSectionGrid = styled(ProjectSectionContent)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 70px;
  margin: 40px 0;

  @media (max-width: ${Media.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const ProjectSectionGridBackground = styled.div`
  grid-column: 1;
  grid-row: 1;

  @media (max-width: ${Media.tablet}) {
    padding: 0 120px;
  }

  @media (max-width: ${Media.mobile}) {
    padding: 0 60px;
  }
`;

const ProjectSectionGridForeground = styled.div`
  grid-column: 1;
  grid-row: 1;
  position: relative;
  right: -140px;
  bottom: 40px;
  align-self: flex-end;
  width: 110%;

  @media (max-width: 1200px) {
    width: auto;
    left: auto;
    right: auto;
  }
`;

const ProjectSectionGridText = styled.div`
  padding-top: 80px;

  @media (max-width: ${Media.desktop}) {
    padding-top: 40px;
  }

  @media (max-width: ${Media.tablet}) {
    padding-top: 0;
  }
`;

const SidebarImages = styled.div`
  display: grid;
  grid-template-columns: repeat(6, [col] 1fr);
  align-items: center;

  @media (max-width: ${Media.tablet}) {
    padding: 0 80px;
    margin-top: 60px;
  }

  @media (max-width: ${Media.mobile}) {
    padding: 0 20px;
    margin-top: 40px;
  }
`;

const SidebarImagesText = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  padding-right: 10px;

  @media (max-width: ${Media.tablet}) {
    padding-right: 0;
  }
`;

const SidebarImage = styled(ProgressiveImage)`
  &:first-child {
    grid-column: col 1 / span 4;
    grid-row: 1;
    position: relative;
    top: 5%;
    opacity: 0.4;
  }

  &:last-child {
    grid-column: col 3 / span 4;
    grid-row: 1;
    position: relative;
    top: -5%;
  }
`;

const mapStateToProps = function (state) {
  debugger
  return {
    portfolio: state.portfolio.payload,
    loading: state.portfolio.loading

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SinglePortfolio);
