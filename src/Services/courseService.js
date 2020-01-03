import { resConnector } from "../Services/index";

const user = JSON.parse(localStorage.getItem("userLogin"));
class CourseService {
  fetchCourses() {
    return resConnector({
      url: "/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
      method: "GET"
    });
  }

  fetchCourseCatalog() {
    return resConnector({
      url: "/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc",
      method: "GET"
    });
  }

  fetchCourseDetail(courseid) {
    return resConnector({
      url: `/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${courseid}`,
      method: "GET"
    });
  }

  fethchCoursePagination() {
    return resConnector({
      url: `/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=1&pageSize=10&MaNhom=GP01`,
      method: "GET"
    });
  }

  addCourse(course) {
   

    return resConnector({
      url: `/api/QuanLyKhoaHoc/ThemKhoaHoc`,
      method: "POST",
      data: course,
      headers: {
        Authorization: "Bearer  " + user.accessToken
      }
    });
  }
}
export default CourseService;
