import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet';
import ScrollToTop from '../utils/ScrollToTop';
import Footer from '../components/Footer';
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
import ProjectHeader from '../components/ProjectHeader'
const prerender = window.location.port === '45678';


const title = 'ПРИМЕРЫ НАШИХ РАБОТ';
const description = 'Лучше всего о нашем качестве и надежности расскажет наше портфолио. Для каждого Заказчика мы стараемся подобрать оптимальную схему взаимоотношений, одинаково внимательно относясь как к крупным клиентам, так и к небольшим заказам. Наш Заказчик обращается к нам при следующей регистрации или перерегистрации, и это - наш главный показатель качества и конкурентноспособности.';

const mapDispatchToProps = dispatch => bindActionCreators({
    getPortfolioList,
    getPortfolioSuccess

}, dispatch);
const roles = [
    {
        lending: 'Лендинг'
    },
    {
        store: 'Интернет магазин'
    },
    {
        business_card: 'Сайт Визитка'
    }
];


class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            type: 'lending',
            activeIndex: 0
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
       /* this.setState(({ paging }) => ({
            paging: { ...paging, offset: offset },
            page: offset
        }));*/

        this.props.getPortfolioList({
            paginationIndex: offset,
            page: 1,
            type: this.props.portfolio.result.type,
            typeIndex: this.props.portfolio.result.typeIndex
        })
    }
    render() {

        const {status, loading, portfolio} = this.props;
        debugger
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
                    <ProjectHeader
                        title={title}
                        description={description}
                        typeIndex={portfolio.result.typeIndex}
                        roles={roles}
                    />

                    <ProjectSection>
                    <ProjectSectionContent>
                    <ProjectSectionPortfolio>
                        {portfolio.result.data && portfolio.result.data.result.map((item, index) => (
                            <PortfolioList
                                portfolioList={item}
                                key={`role_${index}`}
                            />
                        )) }


                    <Pagination
                        pageHandler = {this.pageHandler}
                        totalPages = {portfolio.result.data.pages}
                        currentPage={portfolio.result.paginationIndex}
                        success={portfolio.result.success}
                        loading={loading}
                    />

                    </ProjectSectionPortfolio>
                    </ProjectSectionContent>
                    </ProjectSection>
                    <Footer/>
                </ProjectContainer>



                }


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


