// api call to fetch cars
export async function fetchCars(){
    const headers = {
        'X-RapidAPI-Key': '1f753e8533msh92d11a027dcf6cdp167449jsn7b4384de9200',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {headers: headers,});

    const result = await response.json();
    return result;
}