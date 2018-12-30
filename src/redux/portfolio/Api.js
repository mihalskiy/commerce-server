const apiInsertNewOrder =  'http://localhost:8000' + '/api/portfolio';

async function getPortfolioList() {
    try {
        let response = await fetch(apiInsertNewOrder, {
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
    getPortfolioList
};
