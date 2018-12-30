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
import {getPortfolio, getPortfolioSuccess} from '../redux/portfolio/portfolio.action';
import Loader from '../components/Loader'
const prerender = window.location.port === '45678';


const title = 'ПРИМЕРЫ НАШИХ РАБОТ';
const description = 'Лучше всего о нашем качестве и надежности расскажет наше портфолио. Для каждого Заказчика мы стараемся подобрать оптимальную схему взаимоотношений, одинаково внимательно относясь как к крупным клиентам, так и к небольшим заказам. Наш Заказчик обращается к нам при следующей регистрации или перерегистрации, и это - наш главный показатель качества и конкурентноспособности.';

const mapDispatchToProps = dispatch => bindActionCreators({
    getPortfolio,
    getPortfolioSuccess
}, dispatch);


class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.props.getPortfolio();


    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        // Are we adding new items to the list?
        // Capture the scroll position so we can adjust scroll later.
        if (prevProps.loading) {
            //debugger
        }
        return null;
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        // If we have a snapshot value, we've just added new items.
        // Adjust scroll so these new items don't push the old ones out of view.
        // (snapshot here is the value returned from getSnapshotBeforeUpdate)
        if (snapshot !== undefined) {
            //debugger
        }
    }

    render() {

        const {status, loading, portfolio} = this.props;
        return (
            <React.Fragment>
                <ScrollToTop status={status}/>
                <Helmet>
                    <title>{`Создания веб сайтов под ключ | ${title}`}</title>
                    <meta name="description" content={description}/>
                </Helmet>
                    {!loading &&
                            <ProjectContainer status={status} delay={50}>
                                <ProjectBackground
                                    srcSet={`${backgroundSpr} 1000w, ${backgroundSprLarge} 1920w`}
                                    placeholder={backgroundSprPlaceholder}
                                    entered={!prerender}/>
                                <NavPortfolio
                                    title={title}
                                    description={description}
                                    url="/contact"
                                    src={backgroundSprPlaceholder}/>
                                <ProjectSection>
                                    <ProjectSectionContent>
                                        <ProjectSectionPortfolio>
                                            {portfolio && !loading && portfolio.payload.result.map((list, index) => (
                                                <PortfolioList
                                                    id={list.id}
                                                    bg={list.bgColor}
                                                    title={list.title}
                                                    description={list.description}
                                                    list={list.PortfolioItems}
                                                    key={`role_${index}`}/>
                                            ))
                                            }

                                        </ProjectSectionPortfolio>
                                    </ProjectSectionContent>

                                </ProjectSection>
                                <ProjectSection>
                                    {/*<ProjectSectionHeading>Full project coming soon...</ProjectSectionHeading>*/}
                                </ProjectSection>
                            </ProjectContainer>
                        }
                {loading &&
                <Loader
                    size={'300px'}
                    color={'rgba(51,234,255,1)'}
                />
                }
                <Footer/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = function (state) {

    return {
        portfolio: state.portfolio.portfolioList,
        loading: state.portfolio.loading

    }
}




const ProjectSectionPortfolio = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
`;


export default connect(mapStateToProps,mapDispatchToProps)(Portfolio);


