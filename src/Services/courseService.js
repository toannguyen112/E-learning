import {resConnector} from '../Services/index'
class CourseService {
    layChiTietKhoaHoc() {
        return resConnector({
            url: `/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=111`,
            method: "GET"
        })
    }

    layDanhSachKhoaHoc() {
        return resConnector({
            url:
                "/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
            method: "GET"
        })
    }
}
export default CourseService