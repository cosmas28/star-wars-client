import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloClient,
  gql,
  NormalizedCacheObject,
  InMemoryCache,
} from "@apollo/client";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        peopleData: {
          merge: true,
        },
        person: {
          merge: true,
        }
      }
    }
  }
});

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  uri: "http://localhost:8000/graphql"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
