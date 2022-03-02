//ACTIONS

export const GET_HOME_PRODUCT = "GET_HOME_PRODUCT"

//ACTIONS'S METHODS

export const getHomeProduct = () => {
    return async (dispatch) => {
        const response = await fetch('faker/products.json')
        const data = await response.json()
        dispatch({type: GET_HOME_PRODUCT, payload: data})
    }
}
