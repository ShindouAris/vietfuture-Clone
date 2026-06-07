interface ColumnConfig {
  key: string;
  label: string;
  nowrap?: boolean;
}

interface DanhSachGiaiThuongPageProps {
  year: number;
  columns: ColumnConfig[];
  data: Record<string, string>[];
}

function CellContent({ value }: { value: string }) {
  if (!value.includes('\n')) return <>{value}</>;
  return value.split('\n').map((line, index) => (
    <span key={index}>
      {index > 0 && <br />}
      {line}
    </span>
  ));
}

export default function DanhSachGiaiThuongPage({ year, columns, data }: DanhSachGiaiThuongPageProps) {
  return (
    <main>
      <section className="relative min-h-50 md:min-h-75 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://vietfuture.world/wp-content/uploads/2025/11/nen-future-copy1.jpg')",
            backgroundPosition: '49% 6%',
          }}
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-white text-2xl md:text-4xl font-bold uppercase">
            Danh sách giải thưởng VietFuture {year}
          </h1>
        </div>
      </section>

      <div className="h-7.5" />

      <div className="container mx-auto max-w-305 px-4 pb-12">
        <div className="col-inner">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  {columns.map((col) => (
                    <th
                      key={col.key}
                      className={`border p-3 text-left font-bold ${col.nowrap ? 'whitespace-nowrap' : ''}`}
                    >
                      {col.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((row, rowIndex) => (
                  <tr key={rowIndex} className="even:bg-gray-50">
                    {columns.map((col) => (
                      <td
                        key={col.key}
                        className={`border p-3 align-top ${col.nowrap ? 'whitespace-nowrap' : ''}`}
                      >
                        <CellContent value={row[col.key] ?? ''} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
