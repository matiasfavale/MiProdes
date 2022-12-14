import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";
import * as teamsApi from "../../api/teamsApi";
import { func } from "prop-types";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function createCourse(course){
    return {type:types.CREATE_COURSE, course}
}

export function loadCourseSuccess(courses){
    return {type: types.LOAD_COURSES_SUCCESS, courses};
}

export function createCourseSuccess(courses){
    return {type: types.CREATE_COURSE_SUCCESS, courses};
}

export function updateCourseSuccess(course){
    return {type:types.UPDATE_COURSE_SUCCESS, course}
}

export function deleteCourseOptimistic(course){
    return {type:types.DELETE_COURSE_OPTIMISTIC, course}
}

export function loadCourses(){
    return function(dispatch){
        dispatch(beginApiCall());
        //courseApi
        return courseApi.getCourses()
        .then(courses => {
            dispatch(loadCourseSuccess(courses));
        })
        .catch(error => {
            dispatch(apiCallError(error));
            throw error;
        })
    }
}

export function saveCourse(course){
    return function(dispatch, getState){
        dispatch(beginApiCall());
        return courseApi.saveCourse(course)
        .then(savedCourse => {
            course.id
            ? dispatch(updateCourseSuccess(savedCourse))
            : dispatch(createCourseSuccess(savedCourse));
        })
        .catch(error => {
            dispatch(apiCallError(error));
            throw error;
        })
    }
}

export function deleteCourse(course){
    return function(dispatch){
        dispatch(deleteCourseOptimistic(course));
        return courseApi.deleteCourse(course.id);
    }
}