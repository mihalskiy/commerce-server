import {LinkButton} from "./Button";
import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {ProjectHeaderInner, ProjectDetails, ProjectTitle,ProjectMeta, ProjectMetaItem, ProjectDescription, ProjectHeaderContainer} from "./Project";
import {getTable, getTableSuccess} from '../redux/table/table.action';
import { connect } from 'react-redux';
import {getPortfolioList} from '../redux/portfolio/portfolio.action';




const prerender = window.location.port === '45678';

const mapDispatchToProps = dispatch => bindActionCreators({
    getTable,
    getPortfolioList

}, dispatch);

class ProjectHeader extends Component {
    handleClick(role, index) {
        this.props.getTable({
            type: Object.keys(role),
            typeIndex: index
        });
        this.props.getPortfolioList({
            type: Object.keys(role),
            page: 1,
            typeIndex: index
        })
    }

    render () {
        const {roles, url, description, title, typeIndex} = this.props;
        return(
            <ProjectHeaderContainer>
                <ProjectHeaderInner>
                    <ProjectDetails entered={!prerender}>
                        <ProjectTitle>{title}</ProjectTitle>
                        <ProjectDescription>{description}</ProjectDescription>
                        <LinkButton
                            secondary
                            style={{paddingLeft: '3px'}}
                            icon="chevronRight"
                            href={url}
                            rel="noopener noreferrer"
                        >
                            Заказать
                        </LinkButton>
                    </ProjectDetails>
                    <ProjectMeta entered={!prerender}>
                        {roles && roles.map((role, index) => (

                            <ProjectMetaItem className={typeIndex === index ? 'active' : ''} onClick={this.handleClick.bind(this, role, index)} data-value={Object.values(role)} key={`role_${index}`}>{Object.values(role)}</ProjectMetaItem>
                        ))}
                    </ProjectMeta>
                </ProjectHeaderInner>
            </ProjectHeaderContainer>
        )
    }

};

export default connect(null, mapDispatchToProps)(ProjectHeader);
