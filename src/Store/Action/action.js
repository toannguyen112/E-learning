import CourseService from "../../Services/courseService";
  export const reduxAction = (type, payload) =>{
    return{
        type : type,
        payload : payload
    }
}
export default reduxAction;
