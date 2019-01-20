import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import {AnimFade} from '../utils/StyleUtils';
import {bindActionCreators} from "redux";
import { ProjectHeaderButton } from '../components/Button';
import {getPortfolioListByType, getPortfolioIdSuccess} from "../redux/portfolio/portfolio.action";
import {connect} from "react-redux";
import { Transition } from 'react-transition-group';
import PortfolioList from "../screens/Portfolio";
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
     };

     backHandler = () => {
         let active = this.props.currentPage;
         this.props.pageHandler(active - 1);
     };
    renderPageNumbers = (pageNumbers, totalPages) => {
        let { currentPage } = this.props;
        return (
            <PaginationItem>
                <PaginationButton
                    delay={400}
                    onClick={currentPage >1 && this.backHandler}
                    disabled={currentPage < 5}
                    type="text">
                    &lt;
                </PaginationButton>
                { pageNumbers.map((number, index) => {
                        if (
                            number >= parseInt(currentPage) - 3 &&
                            number <= parseInt(currentPage) + 3
                        ) {
                            return (
                                <PaginationButton
                                    id={number}
                                    sending={this.props.loading}
                                    loading={this.props.loading}
                                    onClick={this.pagingHandler}
                                    className={number === currentPage ? 'active' : ''}
                                    value={number}
                                    hasValue={!!number}
                                    key={`role_${index}`}
                                    type="number">
                                    {number}
                                </PaginationButton>
                            );
                        } else {
                            return null;
                        }
                    })}
                    <PaginationButton
                        delay={400}
                        onClick={currentPage <= totalPages -4 && this.nextHandler}
                        type="text">
                        &gt;
                    </PaginationButton>
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
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
`;

const PaginationButton = styled.button`
  margin-top: 20px;
  transition-property: transform, opacity;
  transition-timing-function: ${props => props.theme.curveFastoutSlowin};
  transition-delay: ${props => props.status === 'entered' ? '0ms' : `${props.delay + initDelay}ms`};
  transition-duration: ${props => props.status === 'entered' ? '0.4s' : '0.8s'};
  transform: translate3d(0, 80px, 0);
  opacity: 1;
  margin-right: 5px;
  background: rgba(51,234,255,1);;
  border: 0;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  color: #111111;
  z-index: 1024;
  outline: none;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  
  &:hover {
    background: rgb(5, 215, 239);;
  }
  &.active {
        background: rgba(0,229,255,0.4);
  }
  
  

  ${props => props.disabled && `
    cursor: no-drop;
    background: rgb(65, 133, 141);
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
