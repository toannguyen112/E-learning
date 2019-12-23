import { resConnector } from "../Services/index";
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

  fethchCoursePagination(){
    return resConnector({
      url: `/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=1&pageSize=10&MaNhom=GP01`,
      method: "GET"
    })
  }

  // fixCourseImgServer() {
  //   return resConnector({
  //     url: "/api/QuanLyKhoaHoc/UploadHinhAnhKhoaHoc",
  //     method: "POST",
  //     data : [
  //       {
  //         "maKhoaHoc": "111",
  //         "biDanh": "angular-8",
  //         "tenKhoaHoc": "Angular 8",
  //         "moTa": "Angular",
  //         "luotXem": 0,
  //         "hinhAnh": "http://elearning0706.cybersoft.edu.vn/hinhanh/angular-8.jpg",
  //         "maNhom": "GP01",
  //         "ngayTao": "07/12/2019",
  //         "soLuongHocVien": 0,
  //         "nguoiTao": {
  //           "taiKhoan": "ducduc",
  //           "hoTen": "ducduc",
  //           "maLoaiNguoiDung": "GV",
  //           "tenLoaiNguoiDung": "Giáo vụ"
  //         },
  //         "danhMucKhoaHoc": {
  //           "maDanhMucKhoahoc": "BackEnd",
  //           "tenDanhMucKhoaHoc": "Lập trình Backend"
  //         }
  //       },
  //       {
  //         "maKhoaHoc": "1234",
  //         "biDanh": "front-end-nang-cao",
  //         "tenKhoaHoc": "Front End Nâng Cao",
  //         "moTa": "Khoá học Frontend nè bấy bì",
  //         "luotXem": 0,
  //         "hinhAnh": "http://elearning0706.cybersoft.edu.vn/hinhanh/front-end-nang-cao.png",
  //         "maNhom": "GP01",
  //         "ngayTao": "01/12/2019",
  //         "soLuongHocVien": 0,
  //         "nguoiTao": {
  //           "taiKhoan": "nguyendp",
  //           "hoTen": "Nguyen123",
  //           "maLoaiNguoiDung": "HV",
  //           "tenLoaiNguoiDung": "Học viên"
  //         },
  //         "danhMucKhoaHoc": {
  //           "maDanhMucKhoahoc": "FrontEnd",
  //           "tenDanhMucKhoaHoc": "Lập trình Front end"
  //         }
  //       },
  //       {
  //         "maKhoaHoc": "15DJ111",
  //         "biDanh": "php",
  //         "tenKhoaHoc": "PHP",
  //         "moTa": "phpphpphpphpphpphpphp",
  //         "luotXem": 0,
  //         "hinhAnh": "http://elearning0706.cybersoft.edu.vn/hinhanh/front-end-nang-cao.png",
  //         "maNhom": "GP01",
  //         "ngayTao": "01/12/2019",
  //         "soLuongHocVien": 0,
  //         "nguoiTao": {
  //           "taiKhoan": "nguyendp",
  //           "hoTen": "Nguyen123",
  //           "maLoaiNguoiDung": "HV",
  //           "tenLoaiNguoiDung": "Học viên"
  //         },
  //         "danhMucKhoaHoc": {
  //           "maDanhMucKhoahoc": "DiDong",
  //           "tenDanhMucKhoaHoc": "Lập trình di động"
  //         }
  //       },
  //       {
  //         "maKhoaHoc": "2201",
  //         "biDanh": "elestisearch",
  //         "tenKhoaHoc": "Elestisearch",
  //         "moTa": "Search Engine",
  //         "luotXem": 0,
  //         "hinhAnh": "http://elearning0706.cybersoft.edu.vn/hinhanh/elestisearch.jpg",
  //         "maNhom": "GP01",
  //         "ngayTao": "01/12/2019",
  //         "soLuongHocVien": 0,
  //         "nguoiTao": {
  //           "taiKhoan": "nguyendp",
  //           "hoTen": "Nguyen123",
  //           "maLoaiNguoiDung": "HV",
  //           "tenLoaiNguoiDung": "Học viên"
  //         },
  //         "danhMucKhoaHoc": {
  //           "maDanhMucKhoahoc": "FullStack",
  //           "tenDanhMucKhoaHoc": "Lập trình Full Stack"
  //         }
  //       },
  //       {
  //         "maKhoaHoc": "311",
  //         "biDanh": "angular-8213",
  //         "tenKhoaHoc": "Angular 8213",
  //         "moTa": "VueJS",
  //         "luotXem": 0,
  //         "hinhAnh": "",
  //         "maNhom": "GP01",
  //         "ngayTao": "08/12/2019",
  //         "soLuongHocVien": 0,
  //         "nguoiTao": {
  //           "taiKhoan": "ducduc",
  //           "hoTen": "ducduc",
  //           "maLoaiNguoiDung": "GV",
  //           "tenLoaiNguoiDung": "Giáo vụ"
  //         },
  //         "danhMucKhoaHoc": {
  //           "maDanhMucKhoahoc": "DiDong",
  //           "tenDanhMucKhoaHoc": "Lập trình di động"
  //         }
  //       },
  //       {
  //         "maKhoaHoc": "369369369",
  //         "biDanh": "angular12",
  //         "tenKhoaHoc": "Angular12",
  //         "moTa": "angular future",
  //         "luotXem": 9999,
  //         "hinhAnh": "http://elearning0706.cybersoft.edu.vn/hinhanh/angular12.jpg",
  //         "maNhom": "GP01",
  //         "ngayTao": "14/10/2019",
  //         "soLuongHocVien": 0,
  //         "nguoiTao": {
  //           "taiKhoan": "eblue",
  //           "hoTen": "ê văn lu",
  //           "maLoaiNguoiDung": "HV",
  //           "tenLoaiNguoiDung": "Học viên"
  //         },
  //         "danhMucKhoaHoc": {
  //           "maDanhMucKhoahoc": "FrontEnd",
  //           "tenDanhMucKhoaHoc": "Lập trình Front end"
  //         }
  //       },
  //       {
  //         "maKhoaHoc": "456783",
  //         "biDanh": "khoa-hoc-frontend-39",
  //         "tenKhoaHoc": "khoa hoc frontend 39",
  //         "moTa": "khoa hoc frontend 39",
  //         "luotXem": 123123343,
  //         "hinhAnh": "http://elearning0706.cybersoft.edu.vn/hinhanh/khoa-hoc-frontend-39.jpg",
  //         "maNhom": "GP01",
  //         "ngayTao": "01/11/2019",
  //         "soLuongHocVien": 0,
  //         "nguoiTao": {
  //           "taiKhoan": "khai",
  //           "hoTen": "Le The",
  //           "maLoaiNguoiDung": "GV",
  //           "tenLoaiNguoiDung": "Giáo vụ"
  //         },
  //         "danhMucKhoaHoc": {
  //           "maDanhMucKhoahoc": "Design",
  //           "tenDanhMucKhoaHoc": "Thiết kế Web"
  //         }
  //       },
  //       {
  //         "maKhoaHoc": "5",
  //         "biDanh": "android",
  //         "tenKhoaHoc": "android",
  //         "moTa": "NODEJS + REACTJS + MONGDBb",
  //         "luotXem": 30,
  //         "hinhAnh": "http://elearning0706.cybersoft.edu.vn/hinhanh/android.jpg",
  //         "maNhom": "GP01",
  //         "ngayTao": "18/09/2019",
  //         "soLuongHocVien": 0,
  //         "nguoiTao": {
  //           "taiKhoan": "NguyenTheMan",
  //           "hoTen": "Nguyễn Thế Mẫn",
  //           "maLoaiNguoiDung": "GV",
  //           "tenLoaiNguoiDung": "Giáo vụ"
  //         },
  //         "danhMucKhoaHoc": {
  //           "maDanhMucKhoahoc": "DiDong",
  //           "tenDanhMucKhoaHoc": "Lập trình di động"
  //         }
  //       },
  //       {
  //         "maKhoaHoc": "6666666",
  //         "biDanh": "front-end-277777",
  //         "tenKhoaHoc": "Front end 277777",
  //         "moTa": "khoa hoc frontend 3033",
  //         "luotXem": 99999999,
  //         "hinhAnh": "http://elearning0706.cybersoft.edu.vn/hinhanh/front-end-277777.jpg",
  //         "maNhom": "GP01",
  //         "ngayTao": "11/10/2019",
  //         "soLuongHocVien": 0,
  //         "nguoiTao": {
  //           "taiKhoan": "huyhuy111",
  //           "hoTen": "hoang huy",
  //           "maLoaiNguoiDung": "GV",
  //           "tenLoaiNguoiDung": "Giáo vụ"
  //         },
  //         "danhMucKhoaHoc": {
  //           "maDanhMucKhoahoc": "Design",
  //           "tenDanhMucKhoaHoc": "Thiết kế Web"
  //         }
  //       },
  //       {
  //         "maKhoaHoc": "7",
  //         "biDanh": "web-developer",
  //         "tenKhoaHoc": "Web Developer",
  //         "moTa": "NODEJS + REACTJS + MONGDB",
  //         "luotXem": 241,
  //         "hinhAnh": "http://elearning0706.cybersoft.edu.vn/hinhanh/web-developer.jpg",
  //         "maNhom": "GP01",
  //         "ngayTao": "11/09/2019",
  //         "soLuongHocVien": 0,
  //         "nguoiTao": {
  //           "taiKhoan": "NguyenTheMan",
  //           "hoTen": "Nguyễn Thế Mẫn",
  //           "maLoaiNguoiDung": "GV",
  //           "tenLoaiNguoiDung": "Giáo vụ"
  //         },
  //         "danhMucKhoaHoc": {
  //           "maDanhMucKhoahoc": "DiDong",
  //           "tenDanhMucKhoaHoc": "Lập trình di động"
  //         }
  //       },
  //       {
  //         "maKhoaHoc": "7FASDFA",
  //         "biDanh": "programming-c-language",
  //         "tenKhoaHoc": "Programming C Language",
  //         "moTa": "NODEJS + REACTJS + MONGDB",
  //         "luotXem": 12,
  //         "hinhAnh": "http://elearning0706.cybersoft.edu.vn/hinhanh/programming-c-language.png",
  //         "maNhom": "GP01",
  //         "ngayTao": "07/09/2019",
  //         "soLuongHocVien": 0,
  //         "nguoiTao": {
  //           "taiKhoan": "NguyenTheMan",
  //           "hoTen": "Nguyễn Thế Mẫn",
  //           "maLoaiNguoiDung": "GV",
  //           "tenLoaiNguoiDung": "Giáo vụ"
  //         },
  //         "danhMucKhoaHoc": {
  //           "maDanhMucKhoahoc": "DiDong",
  //           "tenDanhMucKhoaHoc": "Lập trình di động"
  //         }
  //       },
  //       {
  //         "maKhoaHoc": "Angular",
  //         "biDanh": "angular",
  //         "tenKhoaHoc": "Angular",
  //         "moTa": "This is course angular",
  //         "luotXem": 15,
  //         "hinhAnh": "http://elearning0706.cybersoft.edu.vn/hinhanh/angular.jpg",
  //         "maNhom": "GP01",
  //         "ngayTao": "23/09/2019",
  //         "soLuongHocVien": 0,
  //         "nguoiTao": {
  //           "taiKhoan": "NguyenTheMan",
  //           "hoTen": "Nguyễn Thế Mẫn",
  //           "maLoaiNguoiDung": "GV",
  //           "tenLoaiNguoiDung": "Giáo vụ"
  //         },
  //         "danhMucKhoaHoc": {
  //           "maDanhMucKhoahoc": "FrontEnd",
  //           "tenDanhMucKhoaHoc": "Lập trình Front end"
  //         }
  //       },
  //       {
  //         "maKhoaHoc": "dinh",
  //         "biDanh": "dinh",
  //         "tenKhoaHoc": "dinh",
  //         "moTa": "dinh",
  //         "luotXem": 100,
  //         "hinhAnh": "http://elearning0706.cybersoft.edu.vn/hinhanh/dinh.jpg",
  //         "maNhom": "GP01",
  //         "ngayTao": "28/10/2019",
  //         "soLuongHocVien": 0,
  //         "nguoiTao": {
  //           "taiKhoan": "NguyenTheMan",
  //           "hoTen": "Nguyễn Thế Mẫn",
  //           "maLoaiNguoiDung": "GV",
  //           "tenLoaiNguoiDung": "Giáo vụ"
  //         },
  //         "danhMucKhoaHoc": {
  //           "maDanhMucKhoahoc": "FullStack",
  //           "tenDanhMucKhoaHoc": "Lập trình Full Stack"
  //         }
  //       },
  //       {
  //         "maKhoaHoc": "fasd",
  //         "biDanh": "lap-trinh-fullstack",
  //         "tenKhoaHoc": "Lập trình Fullstack",
  //         "moTa": "NODEJS + REACTJS + MONGDB",
  //         "luotXem": 123,
  //         "hinhAnh": "http://elearning0706.cybersoft.edu.vn/hinhanh/lap-trinh-fullstack.png",
  //         "maNhom": "GP01",
  //         "ngayTao": "22/09/2019",
  //         "soLuongHocVien": 0,
  //         "nguoiTao": {
  //           "taiKhoan": "NguyenTheMan",
  //           "hoTen": "Nguyễn Thế Mẫn",
  //           "maLoaiNguoiDung": "GV",
  //           "tenLoaiNguoiDung": "Giáo vụ"
  //         },
  //         "danhMucKhoaHoc": {
  //           "maDanhMucKhoahoc": "DiDong",
  //           "tenDanhMucKhoaHoc": "Lập trình di động"
  //         }
  //       },
  //       {
  //         "maKhoaHoc": "FE-18",
  //         "biDanh": "front-end-co-ban",
  //         "tenKhoaHoc": "Front end cơ bản",
  //         "moTa": "jgjhjhjhjhjhj",
  //         "luotXem": 20,
  //         "hinhAnh": "http://elearning0706.cybersoft.edu.vn/hinhanh/front-end-co-ban.jpg",
  //         "maNhom": "GP01",
  //         "ngayTao": "10/10/2019",
  //         "soLuongHocVien": 0,
  //         "nguoiTao": {
  //           "taiKhoan": "khai",
  //           "hoTen": "Le The",
  //           "maLoaiNguoiDung": "GV",
  //           "tenLoaiNguoiDung": "Giáo vụ"
  //         },
  //         "danhMucKhoaHoc": {
  //           "maDanhMucKhoahoc": "FrontEnd",
  //           "tenDanhMucKhoaHoc": "Lập trình Front end"
  //         }
  //       },
  //       {
  //         "maKhoaHoc": "Golang",
  //         "biDanh": "lap-trinh-golang",
  //         "tenKhoaHoc": "Lập Trình Golang",
  //         "moTa": "Golang",
  //         "luotXem": 100000,
  //         "hinhAnh": "http://elearning0706.cybersoft.edu.vn/hinhanh/lap-trinh-golang.i&w=800&h=800&safe=active&bih=625&biw=1366&q=c%23&ved=0ahUKEwjL0dOS56flAhUJRo8KHSIQDeYQMwg2KAswCw&iact=mrc&uact=8",
  //         "maNhom": "GP01",
  //         "ngayTao": "02/11/2019",
  //         "soLuongHocVien": 0,
  //         "nguoiTao": {
  //           "taiKhoan": "nguyendp",
  //           "hoTen": "Nguyen123",
  //           "maLoaiNguoiDung": "HV",
  //           "tenLoaiNguoiDung": "Học viên"
  //         },
  //         "danhMucKhoaHoc": {
  //           "maDanhMucKhoahoc": "BackEnd",
  //           "tenDanhMucKhoaHoc": "Lập trình Backend"
  //         }
  //       },
  //       {
  //         "maKhoaHoc": "JSpring01",
  //         "biDanh": "java-spring",
  //         "tenKhoaHoc": "Java Spring",
  //         "moTa": "Java Spring là một khóa học lập trình backend cực kì chất lượng",
  //         "luotXem": 1,
  //         "hinhAnh": "http://elearning0706.cybersoft.edu.vn/hinhanh/java-spring.jpg",
  //         "maNhom": "GP01",
  //         "ngayTao": "08/11/2019",
  //         "soLuongHocVien": 0,
  //         "nguoiTao": {
  //           "taiKhoan": "NguyenTheMan",
  //           "hoTen": "Nguyễn Thế Mẫn",
  //           "maLoaiNguoiDung": "GV",
  //           "tenLoaiNguoiDung": "Giáo vụ"
  //         },
  //         "danhMucKhoaHoc": {
  //           "maDanhMucKhoahoc": "BackEnd",
  //           "tenDanhMucKhoaHoc": "Lập trình Backend"
  //         }
  //       },
  //       {
  //         "maKhoaHoc": "LTJ_02",
  //         "biDanh": "front-end",
  //         "tenKhoaHoc": "Front End",
  //         "moTa": "javaaaaaaaaaaaaaa",
  //         "luotXem": 10,
  //         "hinhAnh": "http://elearning0706.cybersoft.edu.vn/hinhanh/front-end.png",
  //         "maNhom": "GP01",
  //         "ngayTao": "23/09/2019",
  //         "soLuongHocVien": 0,
  //         "nguoiTao": {
  //           "taiKhoan": "khai",
  //           "hoTen": "Le The",
  //           "maLoaiNguoiDung": "GV",
  //           "tenLoaiNguoiDung": "Giáo vụ"
  //         },
  //         "danhMucKhoaHoc": {
  //           "maDanhMucKhoahoc": "BackEnd",
  //           "tenDanhMucKhoaHoc": "Lập trình Backend"
  //         }
  //       },
  //       {
  //         "maKhoaHoc": "phondeptrai",
  //         "biDanh": "phongcuckideptrai",
  //         "tenKhoaHoc": "phongcuckideptrai",
  //         "moTa": "phongcuckideptrai",
  //         "luotXem": 1000,
  //         "hinhAnh": "http://elearning0706.cybersoft.edu.vn/hinhanh/phongcuckideptrai.png",
  //         "maNhom": "GP01",
  //         "ngayTao": "08/12/2019",
  //         "soLuongHocVien": 0,
  //         "nguoiTao": {
  //           "taiKhoan": "dccm3030",
  //           "hoTen": "Trần Thanh Phong",
  //           "maLoaiNguoiDung": "GV",
  //           "tenLoaiNguoiDung": "Giáo vụ"
  //         },
  //         "danhMucKhoaHoc": {
  //           "maDanhMucKhoahoc": "BackEnd",
  //           "tenDanhMucKhoaHoc": "Lập trình Backend"
  //         }
  //       },
  //       {
  //         "maKhoaHoc": "Python-LT",
  //         "biDanh": "full-stack",
  //         "tenKhoaHoc": "Full Stack",
  //         "moTa": "Python thon thon",
  //         "luotXem": 10,
  //         "hinhAnh": "http://elearning0706.cybersoft.edu.vn/hinhanh/full-stack.jpg",
  //         "maNhom": "GP01",
  //         "ngayTao": "23/09/2019",
  //         "soLuongHocVien": 0,
  //         "nguoiTao": {
  //           "taiKhoan": "khai",
  //           "hoTen": "Le The",
  //           "maLoaiNguoiDung": "GV",
  //           "tenLoaiNguoiDung": "Giáo vụ"
  //         },
  //         "danhMucKhoaHoc": {
  //           "maDanhMucKhoahoc": "FullStack",
  //           "tenDanhMucKhoaHoc": "Lập trình Full Stack"
  //         }
  //       },
  //       {
  //         "maKhoaHoc": "qwe",
  //         "biDanh": "sad",
  //         "tenKhoaHoc": "sad",
  //         "moTa": "csd",
  //         "luotXem": 8,
  //         "hinhAnh": "http://elearning0706.cybersoft.edu.vn/hinhanh/sad.png",
  //         "maNhom": "GP01",
  //         "ngayTao": "11/10/2019",
  //         "soLuongHocVien": 0,
  //         "nguoiTao": {
  //           "taiKhoan": "eblue",
  //           "hoTen": "ê văn lu",
  //           "maLoaiNguoiDung": "HV",
  //           "tenLoaiNguoiDung": "Học viên"
  //         },
  //         "danhMucKhoaHoc": {
  //           "maDanhMucKhoahoc": "FrontEnd",
  //           "tenDanhMucKhoaHoc": "Lập trình Front end"
  //         }
  //       },
  //       {
  //         "maKhoaHoc": "ReactFe27",
  //         "biDanh": "reactfe27",
  //         "tenKhoaHoc": "ReactFe27",
  //         "moTa": "ReactFe27",
  //         "luotXem": 1000,
  //         "hinhAnh": "http://elearning0706.cybersoft.edu.vn/hinhanh/reactfe27.png",
  //         "maNhom": "GP01",
  //         "ngayTao": "11/10/2019",
  //         "soLuongHocVien": 0,
  //         "nguoiTao": {
  //           "taiKhoan": "NguyenTheMan",
  //           "hoTen": "Nguyễn Thế Mẫn",
  //           "maLoaiNguoiDung": "GV",
  //           "tenLoaiNguoiDung": "Giáo vụ"
  //         },
  //         "danhMucKhoaHoc": {
  //           "maDanhMucKhoahoc": "FrontEnd",
  //           "tenDanhMucKhoaHoc": "Lập trình Front end"
  //         }
  //       },
  //       {
  //         "maKhoaHoc": "reactfe99",
  //         "biDanh": "reactfe99",
  //         "tenKhoaHoc": "reactfe99",
  //         "moTa": "reactfe99",
  //         "luotXem": 1,
  //         "hinhAnh": "http://elearning0706.cybersoft.edu.vn/hinhanh/reactfe99.jpg",
  //         "maNhom": "GP01",
  //         "ngayTao": "01/12/2019",
  //         "soLuongHocVien": 0,
  //         "nguoiTao": {
  //           "taiKhoan": "nguyendp",
  //           "hoTen": "Nguyen123",
  //           "maLoaiNguoiDung": "HV",
  //           "tenLoaiNguoiDung": "Học viên"
  //         },
  //         "danhMucKhoaHoc": {
  //           "maDanhMucKhoahoc": "Design",
  //           "tenDanhMucKhoaHoc": "Thiết kế Web"
  //         }
  //       },
  //       {
  //         "maKhoaHoc": "TTC01",
  //         "biDanh": "toan-cao-cap-01",
  //         "tenKhoaHoc": "Toán cao cấp 01",
  //         "moTa": "Toán logic cực hayy",
  //         "luotXem": 9,
  //         "hinhAnh": "http://elearning0706.cybersoft.edu.vn/hinhanh/toan-cao-cap-01.jpg",
  //         "maNhom": "GP01",
  //         "ngayTao": "07/11/2019",
  //         "soLuongHocVien": 0,
  //         "nguoiTao": {
  //           "taiKhoan": "khai",
  //           "hoTen": "Le The",
  //           "maLoaiNguoiDung": "GV",
  //           "tenLoaiNguoiDung": "Giáo vụ"
  //         },
  //         "danhMucKhoaHoc": {
  //           "maDanhMucKhoahoc": "TuDuy",
  //           "tenDanhMucKhoaHoc": "Tư duy lập trình"
  //         }
  //       },
  //       {
  //         "maKhoaHoc": "TuDuyDinhCao",
  //         "biDanh": "tri-tue-nhan-tao",
  //         "tenKhoaHoc": "Trí tuệ nhân tạo",
  //         "moTa": "Robot, nhân tạo",
  //         "luotXem": 5,
  //         "hinhAnh": "http://elearning0706.cybersoft.edu.vn/hinhanh/tri-tue-nhan-tao.jpg",
  //         "maNhom": "GP01",
  //         "ngayTao": "30/10/2019",
  //         "soLuongHocVien": 0,
  //         "nguoiTao": {
  //           "taiKhoan": "khai",
  //           "hoTen": "Le The",
  //           "maLoaiNguoiDung": "GV",
  //           "tenLoaiNguoiDung": "Giáo vụ"
  //         },
  //         "danhMucKhoaHoc": {
  //           "maDanhMucKhoahoc": "TuDuy",
  //           "tenDanhMucKhoaHoc": "Tư duy lập trình"
  //         }
  //       },
  //       {
  //         "maKhoaHoc": "upload file",
  //         "biDanh": "swift-os",
  //         "tenKhoaHoc": "Swift OS",
  //         "moTa": "string",
  //         "luotXem": 0,
  //         "hinhAnh": "http://elearning0706.cybersoft.edu.vn/hinhanh/swift-os.png",
  //         "maNhom": "GP01",
  //         "ngayTao": "13/11/2019",
  //         "soLuongHocVien": 0,
  //         "nguoiTao": {
  //           "taiKhoan": "khai",
  //           "hoTen": "Le The",
  //           "maLoaiNguoiDung": "GV",
  //           "tenLoaiNguoiDung": "Giáo vụ"
  //         },
  //         "danhMucKhoaHoc": {
  //           "maDanhMucKhoahoc": "DiDong",
  //           "tenDanhMucKhoaHoc": "Lập trình di động"
  //         }
  //       },
  //       {
  //         "maKhoaHoc": "vue",
  //         "biDanh": "nodejs",
  //         "tenKhoaHoc": "NodeJS",
  //         "moTa": "This is my course",
  //         "luotXem": 15,
  //         "hinhAnh": "http://elearning0706.cybersoft.edu.vn/hinhanh/nodejs.jpg",
  //         "maNhom": "GP01",
  //         "ngayTao": "02/10/2019",
  //         "soLuongHocVien": 0,
  //         "nguoiTao": {
  //           "taiKhoan": "NguyenTheMan",
  //           "hoTen": "Nguyễn Thế Mẫn",
  //           "maLoaiNguoiDung": "GV",
  //           "tenLoaiNguoiDung": "Giáo vụ"
  //         },
  //         "danhMucKhoaHoc": {
  //           "maDanhMucKhoahoc": "DiDong",
  //           "tenDanhMucKhoaHoc": "Lập trình di động"
  //         }
  //       }
  //     ]
  //   });
  // }
}
export default CourseService;
