import { resConnector } from "../Services/index";

const accessToken = localStorage.getItem("accessToken")
  

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
        Authorization: "Bearer  " + accessToken
      }
    });
  }


  fixPersonalUser(user) {
    return resConnector({
      url: "/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
      method: "PUT",
      data: user,
      headers: {
        Authorization: "Bearer  " + accessToken
      }
    });
  }
}

export default UserService;
