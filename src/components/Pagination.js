import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import {AnimFade} from '../utils/StyleUtils';
import {bindActionCreators} from "redux";
import { ProjectHeaderButton } from '../components/Button';
import {getPortfolioList, getPortfolioIdSuccess} from "../redux/portfolio/portfolio.action";
import {connect} from "react-redux";
import { Transition } from 'react-transition-group';
const prerender = window.location.port === '45678';

const initDelay = 300;

 class Pagination extends Component {
     pagingHandler = (event) => {
         let offset = parseInt(event.currentTarget.id);
         this.props.pageHandler(offset);

    };

     nextHandler = () => {
         let active = this.props.currentPage;
         this.props.pageHandler(active + 1);
         debugger
     };

     backHandler = () => {
         let active = this.props.currentPage;
         this.props.pageHandler(active - 1);
         debugger
     };
    renderPageNumbers = (pageNumbers, totalPages) => {
        let { currentPage } = this.props;
        return (
            <PaginationItem>
                <Transition>
                    {status => (
                        <PaginationButton
                            status={status}
                            delay={400}
                            onClick={currentPage >1 && this.backHandler}
                            disabled={currentPage < 1}
                            type="text">
                            preview
                        </PaginationButton>
                    )}
                </Transition>
                {
                    pageNumbers.map(number => {
                        if (
                            number >= parseInt(currentPage) - 3 &&
                            number <= parseInt(currentPage) + 3
                        ) {
                            return (
                                <Transition>
                                    {status => (
                                        <PaginationButton
                                            id={number}
                                            sending={this.props.loading}
                                            loading={this.props.loading}
                                            status={status}
                                            onClick={this.pagingHandler}
                                            active={number == currentPage}
                                            value={number}
                                            hasValue={!!number}
                                            type="number">
                                            {number}
                                        </PaginationButton>
                                    )}

                                </Transition>
                            );
                        } else {
                            return null;
                        }
                    })}
                <Transition>
                    {status => (
                        <PaginationButton
                            status={status}
                            delay={400}
                            onClick={currentPage <= totalPages -4 && this.nextHandler}
                            type="text">
                            next
                        </PaginationButton>
                    )}
                </Transition>
            </PaginationItem>
        );   };

    buildComponent = () => {
        const totalPages =  this.props.totalPages;
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
        }
        return (
            <Container>
                {this.renderPageNumbers(pageNumbers ,totalPages)}
            </Container>
        );
    };

    render() {
        return this.buildComponent();
    }

}


const Container= styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const PaginationItem = styled.div`
    padding: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
`;

const PaginationButton = styled(ProjectHeaderButton)`
  margin-top: 20px;
  transition-property: transform, opacity;
  transition-timing-function: ${props => props.theme.curveFastoutSlowin};
  transition-delay: ${props => props.status === 'entered' ? '0ms' : `${props.delay + initDelay}ms`};
  transition-duration: ${props => props.status === 'entered' ? '0.4s' : '0.8s'};
  transform: translate3d(0, 80px, 0);
  opacity: 1;
  margin-right: 5px;

  ${props => props.sending && `
    svg {
      transition: transform ${props.curveFastoutSlowin}, opacity 0.3s ease 0.8s;
      transition-duration: 0.8s;
      transform: translate3d(150px, 0, 0);
      opacity: 0;
    }

    div {
      opacity: 0;
    }
  `}

  ${props => props.sending && css`
   div {
      animation: ${AnimFade} 0.5s ease 0.6s forwards;
    }
  `}

  ${props => (props.status === 'entering' ||
    props.status === 'entered') && !prerender && `
    transform: translate3d(0, 0, 0);
    opacity: 1;
  `}

  ${props => props.status === 'exiting' && `
    transition-duration: 0.4s;
    transition-delay: 0s;
    transform: translate3d(0, -40px, 0);
    opacity: 0;
  `}
`;

export default Pagination;
