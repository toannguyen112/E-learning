import { resConnector } from "../Services/index";
const accessToken = localStorage.getItem("userLogin") ? JSON.parse(localStorage.getItem("userLogin")).accessToken : null;
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



  fetchCourseOnCatalog(data) {
    return resConnector({
      url: `/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${data}&MaNhom=GP01`,
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
        Authorization: "Bearer " + accessToken
      }
    });
  }

  deleteCourse(maKhoaHoc) {


    return resConnector({
      url: `api/QuanLyKhoaHoc/XoaKhoaHoc?maKhoaHoc=${maKhoaHoc}`,
      method: "DELETE",

      headers: {
        Authorization: "Bearer " + accessToken
      }
    });
  }



  updateCourse(course) {


    return resConnector({
      url: `api/QuanLyKhoaHoc/CapNhatKhoaHoc`,
      method: "PUT",
      data: course,

      headers: {
        Authorization: "Bearer " + accessToken
      }
    });
  }


  updateImg(file, tenKhoaHoc) {

    let form_data = new FormData();
    form_data.append("file", file);
    form_data.append("tenKhoaHoc", tenKhoaHoc);
    return resConnector({
      url: `api/QuanLyKhoaHoc/UploadHinhAnhKhoaHoc`,
      method: "POST",
      data: form_data,

      headers: {
        Authorization: "Bearer " + accessToken
      }
    });
  }



}
export default CourseService;
