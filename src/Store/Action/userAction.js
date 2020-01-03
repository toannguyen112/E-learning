import { LOGIN } from "./type";

import { settings } from "../../config/settings";
import reduxAction from "./action";
import {restConnector} from '../../Services/index'
export const addCourse = (course) => {
    return dispatch => {
        restConnector({
            method: "POST",
            url: "/api/quanlynguoidung/dangnhap",
            data: userLogin,
        }).then(res => {
            localStorage.setItem(settings.userLogin, JSON.stringify(res.data))
            localStorage.setItem(settings.token, res.data.accessToken)

            dispatch(reduxAction(LOGIN, res.data));

            restConnector.default.headers['Authorization'] = 'Bearer' + res.data.accessToken
            history.push('./')
        }).catch(err => {
            console.log(err.response.data);

        })
    }
}