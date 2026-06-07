import DanhSachGiaiThuongPage from './DanhSachGiaiThuongPage';
import { prizes2023 } from '../../data/prizes2023';

const columns = [
  { key: 'stt', label: 'STT', nowrap: true },
  { key: 'tenGiai', label: 'Tên giải' },
  { key: 'tenTruong', label: 'Tên trường' },
  { key: 'tenDuAn', label: 'Tên Dự án' },
  { key: 'linhVucDangKy', label: 'Lĩnh vực đăng ký' },
  { key: 'soTien', label: 'Số tiền', nowrap: true },
];

export default function DanhSachGiaiThuong2023() {
  return (
    <DanhSachGiaiThuongPage
      year={2023}
      columns={columns}
      data={prizes2023.map((row) => ({ ...row }))}
    />
  );
}
