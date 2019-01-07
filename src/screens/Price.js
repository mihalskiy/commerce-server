import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet';
import ScrollToTop from '../utils/ScrollToTop';
import Footer from '../components/Footer';
import {ProjectContainer, ProjectSection, ProjectSectionContent, ProjectBackground, ProjectPriceTable} from '../components/Project';
import ProjectHeader from '../components/ProjectHeader'
import backgroundSpr from '../assets/spr-background.jpg';
import backgroundSprLarge from '../assets/spr-background-large.jpg';
import backgroundSprPlaceholder from '../assets/spr-background-placeholder.jpg';
import {bindActionCreators} from "redux";
import {getTable, getTableSuccess} from "../redux/table/table.action";
const prerender = window.location.port === '45678';


const title = 'АКТУАЛЬНЫЕ ЦЕНЫ';
const description = 'Наши цены — адекватные и умеренные. Все оплаты мы разбиваем на 3 этапа, это удобно и доступно. Вы можете получить очень качественный сайт на основе готового решения, с уникальным дизайном по цене от 13000 грн.';

const roles = [
    {
        simple: 'Простой'
    },
    {
        standard: 'Стандарт'
    },
    {
        best: 'Лучший'
    }
];

const mapDispatchToProps = dispatch => bindActionCreators({
    getTable,
    getTableSuccess

}, dispatch);


class Price extends Component {

    componentWillMount() {
        this.props.getTable({
            type: Object.keys(roles[0]),
            activeIndex: 0
        });
    }
    render () {
        const {tableInfo, status, activeIndex} = this.props;
        return (
            <React.Fragment>
                <ScrollToTop status={status} />
                <Helmet>
                    <title>{`Создания веб сайтов под ключ | ${title}`}</title>
                    <meta name="description" content={description} />
                </Helmet>
                <ProjectContainer>
                    <ProjectBackground
                        srcSet={`${backgroundSpr} 1000w, ${backgroundSprLarge} 1920w`}
                        placeholder={backgroundSprPlaceholder}
                        entered={!prerender}
                    />
                        <ProjectHeader
                            title={title}
                            description={description}
                            typeIndex={activeIndex}
                            roles={roles}
                        />

                    <ProjectSection>
                        <ProjectSectionContent>

                            {tableInfo &&
                                <ProjectPriceTable

                                    name={tableInfo}
                                    currency={tableInfo}
                                    price={tableInfo}
                                    cent={tableInfo}
                                    title={tableInfo}
                                    fields={tableInfo.fields}
                                />
                            }

                        </ProjectSectionContent>
                    </ProjectSection>
                    <ProjectSection>
                    </ProjectSection>
                </ProjectContainer>
                <Footer />
            </React.Fragment>
        )
    }
};

const mapStateToProps = function (state) {
    return {
        tableInfo: state.table.table,
        activeIndex: state.table.activeIndex
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Price);
