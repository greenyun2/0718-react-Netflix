let initialState = {
  popularMovies: {},
  topRatedMovies: {},
  upComingMovies: {},
  loading: true,
  keyword: '',
  keywordList: [],
};

function movieReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case 'GET_MOVIES_REQUEST':
      return {
        ...state,
        loading: true,
      }
    case 'GET_MOVIES_SUCCESS':
      return {
        ...state,
        popularMovies: payload.popularMovies,
        topRatedMovies: payload.topRatedMovies,
        upComingMovies: payload.upComingMovies,
        loading: false,
        genreList: payload.genreList,
      };
      case 'GET_MOVIES_FAILURE':
        return {
          ...state,
          loading: false,
        }
      case 'SEARCH_BY_KEYWORD':
        return {
          ...state,
          keyword: payload.keyword,
        }
      case 'ADD_SEARCH_KEYWORD':
        return {
          ...state,
          keywordList: [...state.keyword]
        }
    default:
      return { ...state };
  }
}


export default movieReducer;
