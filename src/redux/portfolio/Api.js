const apiInsertNewOrder =  process.env.PUBLIC_URL + '/api/portfolio';

async function getPortfolioList(params) {
    try {

        const {page, type, activeIndex} = params;
        debugger
        let response = await fetch(apiInsertNewOrder + '?page=' + page + '&type=' + type, {
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
            activeIndex: activeIndex ? activeIndex : 0,

        }

    } catch (error) {
        console.error(`Error is : ${error}`);
    }
}

async function getPortfolioById(id) {
    try {
        let response = await fetch(apiInsertNewOrder + `/${id}`, {
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
    getPortfolioList,
    getPortfolioById
};
