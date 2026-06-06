import { type ReactElement } from 'react';
import HomePage from './pages/HomePage';
import PressReleasePage from "./pages/Pages/media/PressReleasePage";
import NewsPage from "./pages/Pages/media/NewsPage";

interface RouteConfig {
  path: string;
  element: ReactElement;
}

// Làm xong component nào thì thêm route ở đây
export const routes: RouteConfig[] = [
  { path: '/', element: <HomePage /> },
  // Trang giới thiệu
  { path: '/gioi-thieu-chung', element: <HomePage /> },
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
  { path: '/thong-cao-bao-chi', element: <PressReleasePage /> },
  { path: '/bao-chi-dua-tin', element: <NewsPage /> },
  // [Optional] Trang liên hệ
  { path: '/faqs', element: <HomePage /> },
  { path: '/lien-he', element: <HomePage /> },
];
