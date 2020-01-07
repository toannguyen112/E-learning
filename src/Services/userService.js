import { resConnector } from "../Services/index";



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
    const userLogin = JSON.parse(localStorage.getItem("userLogin"))
    return resConnector({
      method: "POST",
      url: "/api/QuanLyNguoiDung/ThongTinTaiKhoan",
      data: { taiKhoan },
      headers: {
        Authorization: "Bearer  " + userLogin.accessToken
      }
    });
  }

  fixPersonalUser(userpro) {
    const userLogin = JSON.parse(localStorage.getItem("userLogin"))
    return resConnector({
      url: "/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
      method: "PUT",
      data: userpro,
      headers: {
        Authorization: "Bearer  " + userLogin.accessToken
      }
    });
  }

  fetchListUser() {
    const userLogin = JSON.parse(localStorage.getItem("userLogin"))
    return resConnector({
      url: "/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01",
      method: "GET",

      headers: {
        Authorization: "Bearer  " + userLogin.accessToken
      }
    });
  }

  addUser(user) {
    const userLogin = JSON.parse(localStorage.getItem("userLogin"))
    return resConnector({
      url: "/api/QuanLyNguoiDung/ThemNguoiDung",
      method: "POST",
      data: user,
      headers: {
        Authorization: "Bearer  " + userLogin.accessToken
      }
    });
  }

  deleteUser(taiKhoan) {
    const userLogin = JSON.parse(localStorage.getItem("userLogin"))
    return resConnector({
      url: `/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
      method: "DELETE",

      headers: {
        Authorization: "Bearer  " + userLogin.accessToken
      }
    });
  }
}

export default UserService;
