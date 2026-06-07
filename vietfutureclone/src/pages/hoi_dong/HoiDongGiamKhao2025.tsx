import { judges2025 } from '../../data/judges-2025';

export default function HoiDongGiamKhao2025() {
  return (
    <main>
      <section className="relative overflow-hidden" style={{ height: "650px" }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://vietfuture.world/wp-content/uploads/2025/11/nen-future-copy1.jpg')",
            backgroundPosition: "49% 6%",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-2xl md:text-4xl font-bold">
            HỘI ĐỒNG GIÁM KHẢO 2025
          </h1>
        </div>
      </section>

      <div className="h-7.5" />

      <div className="container mx-auto max-w-305 px-4 pb-12">
        <div className="text-center space-y-6">
          <p className="font-bold text-xl">
            BAN GIÁM KHẢO VIETFUTURE AWARDS 2025
          </p>

          <p className="text-justify">
            Hội đồng Giám khảo VietFuture Awards 2025 là tập hợp các chuyên gia, nhà khoa học, doanh nhân và nhà đầu tư hàng đầu trong nhiều lĩnh vực công nghệ, kinh doanh và đổi mới sáng tạo. Các thành viên Ban Giám khảo đã dành nhiều tâm huyết để đánh giá và chọn ra những dự án xuất sắc nhất từ hàng trăm hồ sơ tham dự.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {judges2025.map((judge, index) => (
              <div key={index} className="text-center p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img
                  src={judge.img}
                  alt={judge.name}
                  className="w-full aspect-[350/216] object-cover rounded-lg mb-3"
                  loading="lazy"
                />
                <h3 className="font-bold text-sm leading-tight">{judge.name}</h3>
                <p className="text-xs text-gray-600 mt-1">{judge.position}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-lg text-left">
            <p className="text-center font-bold text-lg mb-3">Cơ cấu Ban Giám khảo 2025</p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>1 Chủ tịch Hội đồng Giám khảo</li>
              <li>1 Phó Chủ tịch VINASA</li>
              <li>1 Phó Chủ tịch, Tổng thư ký VINASA</li>
              <li>1 Phó Tổng thư ký VINASA</li>
              <li>19 Ủy viên Hội đồng (chuyên gia, doanh nhân, nhà đầu tư)</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
