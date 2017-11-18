export const fetchViewerQuery = `{
viewer {
  login
  avatarUrl
  gists(last: 100) {
    nodes {
      name
    }
  }
  repositories(last: 100, orderBy: {field: UPDATED_AT, direction: DESC}) {
    edges {
      node {
        name
        owner {
          login
          avatarUrl
          resourcePath
        }
        primaryLanguage {
          name
        }
        languages(last: 100) {
          edges {
            node {
              name
              color
            }
            size
          }
        }
      }
    }
  }
}
}
`;
