import { useReducer, createContext, useEffect } from "react";
import axios from "axios";
import {useRouter} from 'next/router';


//initial state
const initialState = {
    user: null,
};

//create context
const Context = createContext();

//root reducer
const rootReducer = (state, action) => {
    switch (action.type){
        case "LOGIN":
        return { ...state, user: action.payload };
        case "LOGOUT":
        return { ...state, user: null };
        default:
        return state;
    }
};
//context provider

const Provider = ({children}) => {
    const [state, dispatch] = useReducer(rootReducer, initialState);

//router
const router = useRouter();

    useEffect(() => {
        dispatch({
            type: "LOGIN",
            payload: JSON.parse(window.localStorage.getItem('user')),

        });
    }, []);

    axios.interceptors.response.use(
        function(response){
            //any status code that lie within status 2xx will trigger this code
            return response;
        },function(error){
            //any status code that lie outside the status 2xx will trigger this code
            let res = error.response;
            //401 is the unauthorized error
            if (res.status === 401 && res.config && !res.config.__isRetryRequest){
                return new Promise((resolve, reject) => {
                    axios.get('api/logout')
                    .then((data) => {
                        console.log("401 ERROR > logout");
                        dispatch({type: 'LOGOUT'});
                        window.localStorage.removeItem('user');
                        rooter.push('/login');
                    }).catch(err => {
                        console.log("AXIOS INTERCEPTORS ERR", err);
                        reject(error);
                    } )
                });
            };
            return promise.reject(error);
        }
    );
    useEffect(() => {
        const getCsrfToken = async () => {
        const {data} = await axios.get('/api/csrf-token');
        console.log('csrf', data);
        axios.defaults.headers['X-CSRF-TOKEN'] = data.getCsrfToken;
    }
        getCsrfToken();
    }, []);
    return (
        <Context.Provider value={{state, dispatch}}>{children}</Context.Provider>
    );
};

 export { Context, Provider };