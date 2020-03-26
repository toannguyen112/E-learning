import { resConnector } from "../Services/index";

// let user = localStorage.getItem("userLogin")
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
    let user = JSON.parse(localStorage.getItem("userLogin"));

    return resConnector({
      url: `/api/QuanLyKhoaHoc/ThemKhoaHoc`,
      method: "POST",
      data: course,
      headers: {
        Authorization: "Bearer  " + user.accessToken
      }
    });
  }

  deleteCourse(maKhoaHoc) {
    let user = JSON.parse(localStorage.getItem("userLogin"));

    return resConnector({
      url: `api/QuanLyKhoaHoc/XoaKhoaHoc?maKhoaHoc=${maKhoaHoc}`,
      method: "DELETE",

      headers: {
        Authorization: "Bearer  " + user.accessToken
      }
    });
  }



  updateCourse(course) {
    let user = JSON.parse(localStorage.getItem("userLogin"));

    return resConnector({
      url: `api/QuanLyKhoaHoc/CapNhatKhoaHoc`,
      method: "PUT",
      data: course,

      headers: {
        Authorization: "Bearer " + user.accessToken
      }
    });
  }


  updateImg(file,tenKhoaHoc) {
    let user = JSON.parse(localStorage.getItem("userLogin"));
    let form_data = new FormData();
    form_data.append("file", file);
    form_data.append("tenKhoaHoc",tenKhoaHoc);
    return resConnector({
      url: `api/QuanLyKhoaHoc/UploadHinhAnhKhoaHoc`,
      method: "POST",
      data: form_data,

      headers: {
        Authorization: "Bearer" + user.accessToken
      }
    });
  }



}
export default CourseService;
