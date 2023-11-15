export const request = async (method, url, data) => {
    
    const response = await fetch(url, {
        method, 
    });

    // if GET request
    const result = await response.json();

    return result
};