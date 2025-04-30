const baseUrl = "https://economia.awesomeapi.com.br/json";

export const getUSD = async () => {
    try {
        const url = `${baseUrl}/last/USD-BRL`;
        const response = await fetch(url);
        const json = await response.json();
        if (json.USDBRL) {
            return parseFloat(json.USDBRL.ask);
        }
        return 0;
    } catch (error) {
        return 0;
    }
};

export const getEUR = async () => {
    try {
        const url = `${baseUrl}/last/EUR-BRL`;
        const response = await fetch(url);
        const json = await response.json();
        if (json.EURBRL) {
            return parseFloat(json.EURBRL.ask);
        }
        return 0;
    } catch (error) {
        return 0;
    }
};
