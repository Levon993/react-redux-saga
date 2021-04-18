import {CREATE_POST, FETCH_POST, SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT, REQUEST_POST} from "./types";

export function createPost(post){
    return{
        type: CREATE_POST,
        payload:post
    }
}

export function fetchedPosts() {
 return{
     type: REQUEST_POST
 }
}
// export function fetchedPosts() {
//         return async dispatch => {
//             try{
//                 dispatch(showLoader())
//                 const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
//                 const json = await response.json()
//                 dispatch({type:FETCH_POST,payload: json})
//                 dispatch(hideLoader())
//             }catch (e) {
//               dispatch(showAlert('Something went wrong'))
//                 dispatch(hideLoader())
//             }
//
//         }
// }

export function showLoader()
{
    return {
            type:SHOW_LOADER
           }
}
export function hideLoader()
{
    return {
            type:HIDE_LOADER
           }
}

export function showAlert(text)
{
    return dispatch =>{
        dispatch({
            type:SHOW_ALERT,
            payload:text
        })
        setTimeout(()=>{
            dispatch(hideAlert())
        },3000)
    }

}
export function hideAlert()
{
    return {
            type:HIDE_ALERT
           }
}
