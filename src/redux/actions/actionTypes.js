export const CREATE_COURSE = "CREATE_COURSE";
export const LOAD_COURSES_SUCCESS = "LOAD_COURSES_SUCCESS";
export const LOAD_AUTHORS_SUCCESS = "LOAD_AUTHORS_SUCCESS";
export const CREATE_COURSE_SUCCESS = "CREATE_COURSE_SUCCESS";
export const UPDATE_COURSE_SUCCESS = "UPDATE_COURSE_SUCCESS";
export const BEGIN_API_CALL = "BEGIN_API_CALL";
export const API_CALL_ERROR = "API_CALL_ERROR";

// By convention, actions that end in "_SUCCESS" are assumed to have been the result of a completed
// API call. But since we're doing an optimistic delete, we're hiding loading state.
// So this action name deliberately omits the "_SUCCESS" suffix.
// If it had one, our apiCallsInProgress counter would be decremented below zero
// because we're not incrementing the number of apiCallInProgress when the delete request begins.
export const DELETE_COURSE_OPTIMISTIC = "DELETE_COURSE_OPTIMISTIC";


//app
export const CREATE_USER = "CREATE_USER";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";

export const LOAD_MATCHES_SUCCESS = "LOAD_MATCHES_SUCCESS";
export const LOAD_TEAMS_SUCCESS = "LOAD_TEAMS_SUCCESS";
export const LOAD_LOGIN_LOCALST_SUCCESS = "LOAD_LOGIN_LOCALST_SUCCESS";
export const GET_PREDICTION = "GET_PREDICTION";
export const CHANGE_MATCH_PREDICTION = "CHANGE_MATCH_PREDICTION";
export const CREATE_PREDICTION_SUCCESS = "CREATE_PREDICTION_SUCCESS";
export const LOAD_PREDICTION_SUCCESS = "LOAD_PREDICTION_SUCCESS";
export const LOAD_PLAYERS_SUCCESS = "LOAD_PLAYERS_SUCCESS";
export const CHANGE_PlAYER = "CHANGE_PlAYER";
export const LOAD_POINT_SUCCESS = "LOAD_POINT_SUCCESS";
export const CREATE_POINT_SUCCESS = "CREATE_PLAYER_SUCCESS";
export const CHANGE_POINT_DISPLAY = "CHANGE_POINT_DISPLAY";
export const CHANGE_RESULTS_MATCH = "CHANGE_RESULTS_MATCH";
export const MATCH_DISABLED_SUCCESS = "MATCH_DISABLED_SUCCESS";
export const CREATE_RESULTADOS_SUCCESS = "CREATE_RESULTADOS_SUCCESS";
export const LOAD_POSICIONES_TEAMS_SUCCESS = "LOAD_POSICIONES_TEAMS_SUCCESS";
export const LOAD_RANKING_SUCCESS = "LOAD_RANKING_SUCCESS";
export const LOAD_SAVEPOINTS_USER_SUCCESS = "LOAD_SAVEPOINTS_USER_SUCCESS";
export const SAVE_GOALS_SUCCESS = "SAVE_GOALS_SUCCESS";
export const SAVE_POINTS_ENABLE= "SAVE_POINTS_ENABLE";
export const CHANGE_ACTIVE_GROUP= "CHANGE_ACTIVE_GROUP";
export const CHANGE_CAMPEON = "CHANGE_CAMPEON";
export const SAVE_CAMPEON_SUCCESS = "SAVE_CAMPEON_SUCCESS";
export const LOAD_LOGOUT_LOCALST_SUCCESS = "LOAD_LOGOUT_LOCALST_SUCCESS";