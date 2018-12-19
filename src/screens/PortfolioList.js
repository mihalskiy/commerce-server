import React from 'react';
import styled from 'styled-components';

const theme = {
    main: "https://picsum.photos/400/180",
    progress: "25%"
};

let PortfolioList = ({bg, title, description, list}) =>(
  <PortfolioListContent theme={{main: bg}}>
      <PortfolioListItem>

          <PortfolioListItemAlign>
              <PortfolioListTitle>{title}</PortfolioListTitle>
              <PortfolioListSubTitle> {description} </PortfolioListSubTitle>
          </PortfolioListItemAlign>
          <PortfolioListItemAlign>
              {list && list.map((list, index) => (
                  <PortfolioTable number={list.id} nume={list.name} progress={list.progress} key={`role_${index}`}/>
              ))}
          </PortfolioListItemAlign>
      </PortfolioListItem>
  </PortfolioListContent>

);

let PortfolioTable = ({number, name, progress}) => (
        <PortfolioTableContent>
            <PortfolioTableNum>{number}</PortfolioTableNum>
            <PortfolioTableTitle>{name}</PortfolioTableTitle>
            <PortfolioTableProgressAlign>
                <PortfolioTableProgress>
                    <PortfolioTableProgressItem theme={{progress: progress + '%'}} />
                </PortfolioTableProgress>
                <PortfolioTableNum>{progress}%</PortfolioTableNum>
            </PortfolioTableProgressAlign>

        </PortfolioTableContent>
);


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
  background: #2b2937;
  background: rgba(0,0,0,0.5);
  border-radius: 25px;
  justify-content: space-between;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 10px 25px;
`

export const PortfolioListTitle = styled.h1`
  opacity: 1;
`;

export const PortfolioListSubTitle = styled.span`
  font-size: 12px;
`;


export default PortfolioList;
