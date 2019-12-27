import { resConnector } from "../Services/index";
 class UserService {
    UserSignUp(user) {
        return resConnector({
          url: "/api/QuanLyNguoiDung/DangKy",
          method: "POST",
          data : user
        });
      }


      UserLogin(user) {
        return resConnector({
          url: "/api/QuanLyNguoiDung/DangNhap",
          method: "POST",
          data : user
        });
      }
}

export default UserService