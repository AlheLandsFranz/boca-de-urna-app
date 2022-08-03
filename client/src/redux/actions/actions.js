const BASE_URL = "https://obscure-journey-22000.herokuapp.com/"

export function postUserVote(payload){
    return async () => {
        return fetch( BASE_URL+ 'api/vote', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .catch(e => console.log(e))
    }
}

export function getAllVotes(){
    return async (dispatch) => fetch( BASE_URL+ "api/total-votes") 
        .then(response => response.json()) 
        .then(data => dispatch({ type: 'GET_ALL_VOTES', payload: data }))
        .catch(e => console.log(e))
}
