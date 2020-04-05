import { resConnector } from "../Services/index";


const accessToken = localStorage.getItem("userLogin") ? JSON.parse(localStorage.getItem("userLogin")).accessToken : null;
class UserService {
  UserSignUp(user) {
    return resConnector({
      url: "/api/QuanLyNguoiDung/DangKy",
      method: "POST",
      data: user
    });
  }

  UserLogin(user) {
    return resConnector({
      url: "/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: user
    });
  }

  personalInfo(taiKhoan) {

    return resConnector({
      method: "POST",
      url: "/api/QuanLyNguoiDung/ThongTinTaiKhoan",
      data: { taiKhoan },
      headers: {
        Authorization: "Bearer " + accessToken
      }
    });
  }

  fixPersonalUser(userpro) {

    return resConnector({
      url: "/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
      method: "PUT",
      data: userpro,
      headers: {
        Authorization: "Bearer " + accessToken
      }
    });
  }

  fetchListUser() {

    return resConnector({
      url: "/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01",
      method: "GET",

      headers: {
        Authorization: "Bearer " + accessToken
      }
    });
  }

  addUser(user) {

    return resConnector({
      url: "/api/QuanLyNguoiDung/ThemNguoiDung",
      method: "POST",
      data: user,
      headers: {
        Authorization: "Bearer " + accessToken
      }
    });
  }

  deleteUser(taiKhoan) {

    return resConnector({
      url: `/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
      method: "DELETE",

      headers: {
        Authorization: "Bearer " + accessToken
      }
    });
  }
}

export default UserService;
