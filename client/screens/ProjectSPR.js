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
import { getTableSuccess} from "../redux/table/table.action";
const prerender = window.location.port === '45678';


const title = 'АКТУАЛЬНЫЕ ЦЕНЫ';
const description = 'Наши цены — адекватные и умеренные. Все оплаты мы разбиваем на 3 этапа, это удобно и доступно. Вы можете получить очень качественный сайт на основе готового решения, с уникальным дизайном по цене от 13000 грн.';
const roles = [
  'Простой',
  'Стандарт',
  'Лучший',
];

const mapDispatchToProps = dispatch => bindActionCreators({
    getTableSuccess

}, dispatch);


class ProjectSPR extends Component {
    render () {
        return (
            <React.Fragment>
                <ScrollToTop status={this.props.status} />
                <Helmet>
                    <title>{`Projects | ${title}`}</title>
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
                        url="/projects/contact"
                        roles={roles}
                    />
                    <ProjectSection>
                        <ProjectSectionContent>
                            {this.props.priceInfo &&
                                <ProjectPriceTable

                                    name={this.props.priceInfo}
                                    currency={this.props.priceInfo}
                                    price={this.props.priceInfo}
                                    cent={this.props.priceInfo}
                                    title={'sdgfsdg'}
                                    fields={roles}
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
        tableName: state.table.tableName,
        priceInfo: state.table.priceInfo
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(ProjectSPR);
