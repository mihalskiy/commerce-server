import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {LinkButton, ProjectHeaderButton} from '../components/Button'
import styled from 'styled-components';

const theme = {
    main: "https://picsum.photos/1920/1020",
    progress: "87%"
};

let PortfolioTable = ({number, name, progress}) => (
    <PortfolioTableContent>
        <PortfolioTableNum>{number}</PortfolioTableNum>
        <PortfolioTableTitle>{name}</PortfolioTableTitle>
        <PortfolioTableProgressAlign>
            <PortfolioTableProgress>
                <PortfolioTableProgressItem theme={{progress: progress + '%' || theme.progress}} />
            </PortfolioTableProgress>
            <PortfolioTableNum>{progress}%</PortfolioTableNum>
        </PortfolioTableProgressAlign>
    </PortfolioTableContent>
);

class PortfolioList extends React.Component {
    render() {
        const {id, bg, title, description, list, url} = this.props;
debugger
        return (
            <React.Fragment>
                    <PortfolioListContent theme={{main: bg || theme.main}}>

                        <PortfolioListItem>

                            <PortfolioDetail>
                                <PortfolioListItemAlign>
                                    <PortfolioListTitle>{title}</PortfolioListTitle>
                                    <PortfolioListSubTitle> {description} </PortfolioListSubTitle>
                                </PortfolioListItemAlign>
                                <PortfolioListItemAlign>
                                    {list && list.map((list, index) => (
                                        <PortfolioTable number={list.id} name={list.name} progress={list.progress} key={`role_${index}`}/>
                                    ))}
                                </PortfolioListItemAlign>
                            </PortfolioDetail>

                            <PortfolioListButton>
                                <LinkButton
                                    delay={400}
                                    icon="send"
                                    sending={false}
                                    loading={false}
                                    href={`/portfolio/${id}`}
                                    status={'entering'}>

                                    Перейти
                                </LinkButton>
                            </PortfolioListButton>
                        </PortfolioListItem>
                    </PortfolioListContent>

            </React.Fragment>
        )
    }
}


export const PortfolioTableProgressAlign = styled.div`
  display: flex;
  flex-direction: row;
  &:first-of-type {
  margin-right: 10px;
  }
`;
export const PortfolioListItemAlign = styled.div`
  display: flex;
  flex-direction: column;
`;


export const PortfolioTableProgress = styled.div`
  width: 80px;
  height: 5px;
  background: rgb(54, 63, 78);
  position: relative;
  margin-right: 8px;
`;

export const PortfolioTableProgressItem = styled.span`
    width: ${props => props.theme.progress};
    z-index: 1000;
    background: white;
    position: absolute;
    height: 5px;
`;
export const PortfolioTableTitle = styled.h5`
  color: #ffffff;
  margin: 0 8px;
`;
export const PortfolioTableNum = styled.span`
  color: #989b9c;
`;
export const PortfolioTableContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  border-bottom: 1px solid lavender;
  justify-content: space-between;
  align-items: baseline;
  padding: 10px 0;
`;

const PortfolioDetail = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

export const PortfolioListContent = styled.div`
  max-width: 475px;
  max-height: 300px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${props => props.theme.main});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  min-height: 300px;
  margin: 40px 15px 15px 0;
`;

export const PortfolioListItem = styled.div`
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  background: rgba(0,0,0,0.5);
  border-radius: 25px;
  justify-content: space-between;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px 25px;
  position: relative;
`;

const PortfolioListButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  align-self: flex-end;
  width: 100%;
  
  button {
  height: 40px;
  }
`

export const PortfolioListTitle = styled.h1`
  opacity: 1;
`;

export const PortfolioListSubTitle = styled.span`
  font-size: 12px;
`;


export default PortfolioList;
