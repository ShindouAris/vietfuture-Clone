import DanhSachGiaiThuongPage from './DanhSachGiaiThuongPage';
import { prizes2025 } from './data/prizes2025';

const columns = [
  { key: 'stt', label: 'STT', nowrap: true },
  { key: 'hoiDong', label: 'Tên Hội đồng' },
  { key: 'tenGiai', label: 'Tên Giải' },
  { key: 'tenDuAn', label: 'Tên Dự án' },
  { key: 'tenTruong', label: 'Tên trường' },
  { key: 'linhVuc', label: 'Lĩnh vực' },
];

export default function DanhSachGiaiThuong2025() {
  return (
    <DanhSachGiaiThuongPage
      year={2025}
      columns={columns}
      data={prizes2025.map((row) => ({ ...row }))}
    />
  );
}
