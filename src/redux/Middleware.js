
import {CREATE_POST} from "./types";
import {showAlert} from "./actions";
const forbidden = ['fuck','spam','php']
export function spamMiddleware({ dispatch })
{
    return function(next)
    {
        return  function (action) {

         if(action.type === CREATE_POST)
         {
             const found = forbidden.filter(f=> action.payload.title.includes(f))

             if(found.length)
             {
                 return dispatch(showAlert('Bad Word'))
             }
         }
            return next(action)
        }
    }
}
