const apiInsertNewOrder =  'http://localhost:8000' + '/api/portfolio';

async function getPortfolioList() {
    try {
        let response = await fetch(apiInsertNewOrder);
        return await response.status === 200 ? response.json() : [];
    } catch (error) {
        console.error(`Error is : ${error}`);
    }
}
export const Api = {
    getPortfolioList
};
