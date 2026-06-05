import { type ReactElement } from 'react';
import HomePage from './pages/HomePage';
import GioiThieuChung from './pages/gioi_thieu/gioi-thieu-chung';

interface RouteConfig {
  path: string;
  element: ReactElement;
}

export const routes: RouteConfig[] = [
  { path: '/', element: <HomePage /> },
  // Trang giới thiệu
  { path: '/gioi-thieu-chung', element: <GioiThieuChung /> },
  { path: '/linh-vuc-du-thi', element: <HomePage /> },
  { path: '/tieu-chi-danh-gia', element: <HomePage /> },
  { path: '/lich-trinh-trien-khai', element: <HomePage /> },
  // Trang hội đồng
  { path: '/gioi-thieu-hoi-dong', element: <HomePage /> },
  { path: '/giam-khao', element: <HomePage /> },
  { path: '/mentor', element: <HomePage /> },
  // Trang giải thưởng
  { path: '/danh-sach-giai-thuong-vietfuture-2025', element: <HomePage /> },
  { path: '/danh-sach-giai-thuong-vietfuture-2024', element: <HomePage /> },
  { path: '/danh-sach-giai-thuong-vietfuture-2023', element: <HomePage /> },
  // Trang tham gia
  { path: '/quyen-loi', element: <HomePage /> },
  { path: '/quy-trinh-dang-ky', element: <HomePage /> },
  // Trang truyền thông
  { path: '/thong-cao-bao-chi', element: <HomePage /> },
  { path: '/bao-chi-dua-tin', element: <HomePage /> },
  { path: '/faqs', element: <HomePage /> },
  { path: '/lien-he', element: <HomePage /> },
];
