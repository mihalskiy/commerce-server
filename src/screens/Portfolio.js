import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet';
import ScrollToTop from '../utils/ScrollToTop';
import Footer from '../components/Footer';
import NavPortfolio from './NavPortfolio';
import PortfolioList from './PortfolioList';
import styled from 'styled-components';
import {
    ProjectContainer, ProjectSection, ProjectSectionContent, ProjectBackground} from '../components/Project';
import backgroundSpr from '../assets/sky.jpg';
import backgroundSprLarge from '../assets/sky.jpg';
import backgroundSprPlaceholder from '../assets/project-large.png';
import {bindActionCreators} from "redux";
import {getPortfolio} from '../redux/portfolio/portfolio.action';
const prerender = window.location.port === '45678';


const title = 'ПРИМЕРЫ НАШИХ РАБОТ';
const description = 'Лучше всего о нашем качестве и надежности расскажет наше портфолио. Для каждого Заказчика мы стараемся подобрать оптимальную схему взаимоотношений, одинаково внимательно относясь как к крупным клиентам, так и к небольшим заказам. Наш Заказчик обращается к нам при следующей регистрации или перерегистрации, и это - наш главный показатель качества и конкурентноспособности.';
const portfolioList = [
    {
        bgColor: "https://picsum.photos/400/180",
        title: 'first title',
        description: 'first description',
        categoryList: [
            {
                id: 1,
                name: 'ba bla',
                progress: '84'
            },
            {
                id: 1,
                name: 'ba bla',
                progress: '48'
            },
            {
                id: 1,
                name: 'ba bla',
                progress: '15'
            },
            {
                id: 1,
                name: 'ba bla',
                progress: '55'
            }
        ]
    },
    {
        bgColor: "https://picsum.photos/1020/720",
        title: 'first title',
        description: 'first description',
        categoryList: [
            {
                id: 1,
                name: 'ba bla',
                progress: '84'
            }
        ]
    }
];

const mapDispatchToProps = dispatch => bindActionCreators({
    getPortfolio,
}, dispatch);


class Portfolio extends Component {

    componentWillMount() {
        this.props.getPortfolio();
    }

    render() {
        const {status} = this.props;
        return (
            <React.Fragment>
                <ScrollToTop status={status}/>
                <Helmet>
                    <title>{`Создания веб сайтов под ключ | ${title}`}</title>
                    <meta name="description" content={description}/>
                </Helmet>
                <ProjectContainer>
                    <ProjectBackground
                        srcSet={`${backgroundSpr} 1000w, ${backgroundSprLarge} 1920w`}
                        placeholder={backgroundSprPlaceholder}
                        entered={!prerender}
                    />
                    <NavPortfolio
                        title={title}
                        description={description}
                        url="/contact"
                        src={backgroundSprPlaceholder}
                    />
                    <ProjectSection>
                        <ProjectSectionContent>
                            <ProjectSectionPortfolio>
                                {portfolioList && portfolioList.map((list, index) => (
                                    <PortfolioList
                                        bg={list.bgColor}
                                        title={list.title}
                                        description={list.description}
                                        list={list.categoryList}
                                        key={`role_${index}`}
                                    />
                                ))
                                }

                            </ProjectSectionPortfolio>
                        </ProjectSectionContent>

                    </ProjectSection>
                    <ProjectSection>
                        {/*<ProjectSectionHeading>Full project coming soon...</ProjectSectionHeading>*/}
                    </ProjectSection>
                </ProjectContainer>
                <Footer/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        portfolio: state,
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Portfolio);


const ProjectSectionPortfolio = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
`;

