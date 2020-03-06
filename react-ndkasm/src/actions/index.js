import axios from 'axios';

export const GET_TODOS = 'GET_TODOS';
export const GET_TODO = 'GET_TODO';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const getTodos = () => 
dispatch => {
  
  return axios({
      url: 'https://jsonplaceholder.typicode.com/todos',
      method: 'GET',
    })
    .then(({data})=> {
      // console.log(data);

      dispatch({type: GET_TODOS, payload: data});   
    })
    .catch(error => {
      console.log(error);

      dispatch({type: FETCH_FAILURE})
    });
};

export const getTodo = (id) => 
dispatch => {
  
  return axios({
      url: `https://jsonplaceholder.typicode.com/todos/${id}`,
      method: 'GET',
    })
    .then(({data})=> {
      // console.log(data);

      dispatch({type: GET_TODO, payload: data});   
    })
    .catch(error => {
      console.log(error);

      dispatch({type: FETCH_FAILURE})
    });
};