import logo from './logo.svg';
import './App.css';
import BTDanhSachSanPham from './BTDanhSachSanPham/BTDanhSachSanPham';
import Modal from './BTDanhSachSanPham/Modal';
import BTGioHangRedux from './BaiTapRedux/BTGioHang/BTGioHangRedux';
import BaiTapForm from './BTQuanLySinhVienRedux/BaiTapForm';

function App() {
  return (
    <div className="App">
      <BTDanhSachSanPham/>
      {/* <BTGioHangRedux/> */}
      {/* <BaiTapForm/> */}
    </div>
  );
}

export default App;
