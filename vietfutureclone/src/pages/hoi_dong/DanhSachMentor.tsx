export default function DanhSachMentor() {
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
            DANH SÁCH MENTOR
          </h1>
        </div>
      </section>

      <div className="h-7.5" />

      <div className="container mx-auto max-w-305 px-4 pb-12">
        <div className="text-justify space-y-6">
          <p className="text-center font-bold text-xl">
            ĐỘI NGŨ MENTOR VIETFUTURE AWARDS
          </p>

          <p>
            Đội ngũ Mentor của VietFuture Awards là các chuyên gia giàu kinh nghiệm trong nhiều lĩnh vực khác nhau, sẵn sàng đồng hành, hướng dẫn và hỗ trợ các nhóm dự án trong suốt quá trình tham gia Giải thưởng. Các Mentor sẽ giúp sinh viên hoàn thiện ý tưởng, phát triển sản phẩm, kỹ năng thuyết trình và kết nối với các nguồn lực phù hợp.
          </p>

          <p><b>Vai trò của Mentor:</b></p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Hướng dẫn các nhóm dự án hoàn thiện hồ sơ dự thi</li>
            <li>Tư vấn về công nghệ, mô hình kinh doanh và chiến lược phát triển</li>
            <li>Hỗ trợ kỹ năng thuyết trình và phản biện</li>
            <li>Kết nối với các chuyên gia, doanh nghiệp và nhà đầu tư</li>
            <li>Chia sẻ kinh nghiệm thực tế từ quá trình khởi nghiệp</li>
          </ul>

          <div className="mt-8">
            <p className="font-bold text-center text-lg mb-6">
              Danh sách Mentor (Đang cập nhật)
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center p-4 border rounded-lg shadow-sm">
                <div className="w-20 h-20 mx-auto mb-3 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-2xl font-bold">M</div>
                <h3 className="font-bold">Mentor 1</h3>
                <p className="text-xs text-gray-600 mt-1">Chuyên gia Công nghệ</p>
              </div>

              <div className="text-center p-4 border rounded-lg shadow-sm">
                <div className="w-20 h-20 mx-auto mb-3 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-2xl font-bold">M</div>
                <h3 className="font-bold">Mentor 2</h3>
                <p className="text-xs text-gray-600 mt-1">Chuyên gia Kinh doanh</p>
              </div>

              <div className="text-center p-4 border rounded-lg shadow-sm">
                <div className="w-20 h-20 mx-auto mb-3 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-2xl font-bold">M</div>
                <h3 className="font-bold">Mentor 3</h3>
                <p className="text-xs text-gray-600 mt-1">Chuyên gia Tài chính</p>
              </div>

              <div className="text-center p-4 border rounded-lg shadow-sm">
                <div className="w-20 h-20 mx-auto mb-3 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-2xl font-bold">M</div>
                <h3 className="font-bold">Mentor 4</h3>
                <p className="text-xs text-gray-600 mt-1">Chuyên gia Marketing</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-yellow-50 rounded-lg">
            <p className="text-center font-bold text-lg">Trở thành Mentor</p>
            <p className="text-center mt-2">
              Nếu bạn quan tâm và mong muốn trở thành Mentor đồng hành cùng VietFuture Awards, vui lòng liên hệ với Ban Tổ chức qua email:{' '}
              <a href="mailto:anhnnp@vinasa.org.vn" className="text-primary-light hover:underline">anhnnp@vinasa.org.vn</a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
