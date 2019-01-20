const apiGetPortfolio =  process.env.PUBLIC_URL + '/api/portfolio';
const apiGetPortfolioList =  'http://localhost:8000' + '/api/portfolios';

async function getPortfolioListByType(params) {
    try {

        const {page, type, paginationIndex, typeIndex} = params;
        let response = await fetch(apiGetPortfolio + '?page=' + page + '&type=' + type, {
            method: 'GET',
            crossDomain: true,
            mode: "cors", // or without this line
            redirect: 'follow',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }

        })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            return data
        })

        return await {
            data: response,
            page: page,
            type: type,
            paginationIndex: paginationIndex ? paginationIndex : 1,
            typeIndex: typeIndex ? typeIndex : 0,

        }

    } catch (error) {
        console.error(`Error is : ${error}`);
    }
}

async function getPortfolioById(id) {
    try {
        let response = await fetch(apiGetPortfolio + `/${id}`, {
            method: 'GET',
            crossDomain: true,
            mode: "cors", // or without this line
            redirect: 'follow',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        return await response.status === 200 ? response.json() : ['null'];
    } catch (error) {
        console.error(`Error is : ${error}`);
    }
}
async function getPortfolioList() {
    try {
        let response = await fetch(apiGetPortfolioList, {
            method: 'GET',
            crossDomain: true,
            mode: "cors", // or without this line
            redirect: 'follow',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        return await response.status === 200 ? response.json() : ['null'];
    } catch (error) {
        console.error(`Error is : ${error}`);
    }
}
export const Api = {
    getPortfolioListByType,
    getPortfolioList,
    getPortfolioById
};
