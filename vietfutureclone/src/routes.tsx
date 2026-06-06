import { type ReactElement } from 'react';
import HomePage from './pages/HomePage';
import GioiThieuChung from './pages/gioi_thieu/gioi-thieu-chung';
import LinhVucDuThi from './pages/gioi_thieu/linh-vuc-du-thi';
import LichTrinhTrienKhai from './pages/gioi_thieu/lich-trinh-trien-khai';
import TieuChiDanhGia from './pages/gioi_thieu/tieu-chi-danh-gia';
import QuyenLoiPage from './pages/tham_gia/QuyenLoiPage';
import QuyTrinhDangKyPage from './pages/tham_gia/QuyTrinhDangKyPage';
import DanhSachGiaiThuong2025 from './pages/giai_thuong/danh-sach-giai-thuong-2025';
import DanhSachGiaiThuong2024 from './pages/giai_thuong/danh-sach-giai-thuong-2024';
import DanhSachGiaiThuong2023 from './pages/giai_thuong/danh-sach-giai-thuong-2023';

interface RouteConfig {
  path: string;
  element: ReactElement;
}

export const routes: RouteConfig[] = [
  { path: '/', element: <HomePage /> },
  // Trang giới thiệu
  { path: '/gioi-thieu-chung', element: <GioiThieuChung /> },
  { path: '/linh-vuc-du-thi', element: <LinhVucDuThi /> },
  { path: '/tieu-chi-danh-gia', element: <TieuChiDanhGia /> },
  { path: '/lich-trinh-trien-khai', element: <LichTrinhTrienKhai /> },
  // Trang hội đồng
  { path: '/gioi-thieu-hoi-dong', element: <HomePage /> },
  { path: '/giam-khao', element: <HomePage /> },
  { path: '/mentor', element: <HomePage /> },
  // Trang giải thưởng
  { path: '/danh-sach-giai-thuong-vietfuture-2025', element: <DanhSachGiaiThuong2025 /> },
  { path: '/danh-sach-giai-thuong-vietfuture-2024', element: <DanhSachGiaiThuong2024 /> },
  { path: '/danh-sach-giai-thuong-vietfuture-2023', element: <DanhSachGiaiThuong2023 /> },
  // Trang tham gia
  { path: '/quyen-loi', element: <QuyenLoiPage /> },
  { path: '/quy-trinh-dang-ky', element: <QuyTrinhDangKyPage /> },
  // Trang truyền thông
  { path: '/thong-cao-bao-chi', element: <HomePage /> },
  { path: '/bao-chi-dua-tin', element: <HomePage /> },
  { path: '/faqs', element: <HomePage /> },
  { path: '/lien-he', element: <HomePage /> },
];

