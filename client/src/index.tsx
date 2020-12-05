import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.min.css'
import 'antd/dist/antd.min.js'

import { ApolloClient, createHttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
});

  const authLink = setContext((_, { headers}) => {
  const token = localStorage.getItem('token');
  const userData = localStorage.getItem('userData')
  return {
    headers: {
      ...headers,
      ...(token ? {authorization: `Bearer ${token}`} : {}),
      // ...(userData ? {user: `${userData}`} : {}),
    }
  }
});

// const userLink = setContext((_, previousContext) => ({
//   previousContext:{
//     ...previousContext,
//     user: {role: 'role'}
//   }
// }));

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});


ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();