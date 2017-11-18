import { FETCH_USER, FETCH_GIT_VIEWER } from './types';
import axios from 'axios';
import { GraphQLClient } from 'graphql-request';
import { fetchViewerQuery } from './graphQlRequests';

const GITHUB_GRAPH_QL_ENDPOINT = 'https://api.github.com/graphql';

const client = new GraphQLClient(GITHUB_GRAPH_QL_ENDPOINT, {
  headers: {
    Authorization: 'bearer 028cdfde5b775212642c9b470b9e363e6cc0a2ae'
  }
});

export const fetchUser = () => async dispatch => {
  const req = await axios.get('/api/me');
  dispatch({
    type: FETCH_USER,
    payload: req.data
  });
};

export const fetchGit = () => async dispatch => {
  const req = await client.request(fetchViewerQuery);
  dispatch({
    type: FETCH_GIT_VIEWER,
    payload: req
  });
};
