import DanhSachGiaiThuongPage from './DanhSachGiaiThuongPage';
import { prizes2024 } from './data/prizes2024';

const columns = [
  { key: 'stt', label: 'STT', nowrap: true },
  { key: 'tenBang', label: 'Tên Bảng' },
  { key: 'tenGiai', label: 'Tên Giải' },
  { key: 'tenTruong', label: 'Tên trường' },
  { key: 'tenDuAn', label: 'Tên Dự án' },
  { key: 'linhVucDangKy', label: 'Lĩnh vực đăng ký' },
  { key: 'tienThuong', label: 'Tiền thưởng', nowrap: true },
];

export default function DanhSachGiaiThuong2024() {
  return (
    <DanhSachGiaiThuongPage
      year={2024}
      columns={columns}
      data={prizes2024.map((row) => ({ ...row }))}
    />
  );
}
