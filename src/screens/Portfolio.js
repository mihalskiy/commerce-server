import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet';
import ScrollToTop from '../utils/ScrollToTop';
import Footer from '../components/Footer';
import NavPortfolio from './NavPortfolio';
import PortfolioList from './PortfolioList';
import Pagination from '../components/Pagination'
import styled from 'styled-components';
import {
    ProjectContainer, ProjectSection, ProjectSectionContent, ProjectBackground} from '../components/Project';
import backgroundSpr from '../assets/sky.jpg';
import backgroundSprLarge from '../assets/sky.jpg';
import backgroundSprPlaceholder from '../assets/project-large.png';
import {bindActionCreators} from "redux";
import {getPortfolioList, getPortfolioSuccess} from '../redux/portfolio/portfolio.action';
import Loader from '../components/Loader'
const prerender = window.location.port === '45678';


const title = 'ПРИМЕРЫ НАШИХ РАБОТ';
const description = 'Лучше всего о нашем качестве и надежности расскажет наше портфолио. Для каждого Заказчика мы стараемся подобрать оптимальную схему взаимоотношений, одинаково внимательно относясь как к крупным клиентам, так и к небольшим заказам. Наш Заказчик обращается к нам при следующей регистрации или перерегистрации, и это - наш главный показатель качества и конкурентноспособности.';

const mapDispatchToProps = dispatch => bindActionCreators({
    getPortfolioList,
    getPortfolioSuccess

}, dispatch);


class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            type: 'lending',
            paging: '',
            portfolio: []
        };

        this.props.getPortfolioList(this.state)
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        // Are we adding new items to the list?
        // Capture the scroll position so we can adjust scroll later.
        if (prevProps.loading) {
            //debugger
        }
        return null;
    }

    pageHandler = (offset) =>{
        this.setState(({ paging }) => ({
            paging: { ...paging, offset: offset },
            page: offset
        }));

        this.props.getPortfolioList(this.state)



    }
    render() {

        const {status, loading, portfolio, totalPages} = this.props;
        const {page} = this.state
        return (
            <React.Fragment>
                <ScrollToTop status={status}/>
                <Helmet>
                    <title>{`Создания веб сайтов под ключ | ${title}`}</title>
                    <meta name="description" content={description}/>
                </Helmet>
                { portfolio && !loading &&
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
                        {portfolio.data && portfolio.data.result.map((item, index) => (
                            <PortfolioList
                                portfolioList={item}
                                key={`role_${index}`}
                            />
                        )) }


                    <Pagination
                        pageHandler = {this.pageHandler}
                        totalPages = {portfolio.data.pages}
                        currentPage={page}
                    />

                    </ProjectSectionPortfolio>
                    </ProjectSectionContent>
                    </ProjectSection>
                </ProjectContainer>

                }

                <Footer/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = function (state) {

    return {
        portfolio: state.portfolio.payload,
        loading: state.portfolio.loading,
        totalPages: state.portfolio.payload
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


