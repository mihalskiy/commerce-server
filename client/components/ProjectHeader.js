import {LinkButton} from "./Button";
import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {ProjectHeaderInner, ProjectDetails, ProjectTitle,ProjectMeta, ProjectMetaItem, ProjectDescription, ProjectHeaderContainer} from "./Project";
import {getTable, getTableSuccess} from '../redux/table/table.action';
import { connect } from 'react-redux';



const prerender = window.location.port === '45678';

const mapDispatchToProps = dispatch => bindActionCreators({
    getTable,
    getTableSuccess

}, dispatch);

class ProjectHeader extends Component {

    constructor(props) {
        super(props);
        //this.handleClick = this.handleClick.bind(this)
        this.state = {
            active: false
        }
    }

    handleClick(index, props, e) {
        this.props.getTable(e.currentTarget.dataset.value);
        this.setState({
            activeIndex: index
        });
    }

    componentWillMount() {
        this.props.getTable(this.props.roles[0]);
        this.setState({
            activeIndex: 0
        });
    }


    render () {
        return(
            <ProjectHeaderContainer>
                <ProjectHeaderInner>
                    <ProjectDetails entered={!prerender}>
                        <ProjectTitle>{this.props.title}</ProjectTitle>
                        <ProjectDescription>{this.props.description}</ProjectDescription>
                        <LinkButton
                            secondary
                            style={{paddingLeft: '3px'}}
                            icon="chevronRight"
                            href={this.props.url}
                            rel="noopener noreferrer"
                        >
                            Заказать
                        </LinkButton>
                    </ProjectDetails>
                    <ProjectMeta entered={!prerender}>
                        {this.props.roles && this.props.roles.map((role, index) => (

                            <ProjectMetaItem className={this.state.activeIndex === index ? 'active' : ''} onClick={this.handleClick.bind(this, index, this.props)} data-value={role} key={`role_${index}`}>{role}</ProjectMetaItem>
                        ))}
                    </ProjectMeta>
                </ProjectHeaderInner>
            </ProjectHeaderContainer>
        )
    }

};

export default connect(null, mapDispatchToProps)(ProjectHeader);
