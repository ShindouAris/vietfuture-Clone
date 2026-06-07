export default function GioiThieuHoiDong() {
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
            GIỚI THIỆU HỘI ĐỒNG
          </h1>
        </div>
      </section>

      <div className="h-7.5" />

      <div className="container mx-auto max-w-305 px-4 pb-12">
        <div className="text-justify space-y-4">
          <p>
            Hội đồng Giải thưởng Sáng tạo Tương lai – VietFuture Awards là tập hợp các chuyên gia hàng đầu trong nhiều lĩnh vực, bao gồm các nhà khoa học, chuyên gia công nghệ, doanh nhân và nhà đầu tư. Hội đồng có trách nhiệm đánh giá, chọn lọc và vinh danh những dự án khởi nghiệp đổi mới sáng tạo xuất sắc nhất của sinh viên các trường đại học, cao đẳng trên toàn quốc.
          </p>

          <p>
            Với tiêu chí khách quan, công bằng và chuyên nghiệp, Hội đồng đánh giá các dự án dựa trên tính sáng tạo, khả năng ứng dụng thực tiễn, tiềm năng thương mại hóa và tác động xã hội. Các thành viên Hội đồng cam kết đồng hành cùng các tài năng trẻ, thúc đẩy tinh thần khởi nghiệp và đổi mới sáng tạo trong cộng đồng sinh viên Việt Nam.
          </p>

          <p><b>Vai trò của Hội đồng:</b></p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Xây dựng tiêu chí và quy trình đánh giá các dự án tham gia Giải thưởng</li>
            <li>Tham gia Sơ tuyển và Chung tuyển các dự án trên toàn quốc</li>
            <li>Đánh giá và chấm điểm các dự án dựa trên các tiêu chí đã đề ra</li>
            <li>Tư vấn, định hướng và hỗ trợ các dự án tiềm năng phát triển</li>
            <li>Kết nối các dự án với doanh nghiệp, nhà đầu tư và quỹ đầu tư</li>
          </ul>

          <p className="mt-6">
            Hội đồng Giải thưởng được chia thành các Ban Giám khảo chuyên ngành, phụ trách đánh giá các dự án thuộc 14 lĩnh vực khác nhau. Mỗi Ban Giám khảo bao gồm các chuyên gia có uy tín và kinh nghiệm sâu trong lĩnh vực tương ứng, đảm bảo chất lượng và độ chính xác trong đánh giá.
          </p>

          <p>
            Bên cạnh đó, đội ngũ Mentor là các chuyên gia giàu kinh nghiệm sẽ đồng hành, hướng dẫn và hỗ trợ các nhóm dự án trong suốt quá trình tham gia Giải thưởng, giúp các bạn sinh viên hoàn thiện ý tưởng, phát triển sản phẩm và kỹ năng thuyết trình.
          </p>

          <p>
            Hội đồng Giải thưởng Sáng tạo Tương lai – VietFuture Awards gồm 3 cấp:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li><b>Ban Cố vấn:</b> Các chuyên gia chiến lược, nhà lãnh đạo doanh nghiệp, nhà khoa học đầu ngành</li>
            <li><b>Ban Giám khảo:</b> Các chuyên gia đánh giá trực tiếp các dựạn dự thi</li>
            <li><b>Đội ngũ Mentor:</b> Các chuyên gia đồng hành, hướng dẫn và hỗ trợ các nhóm dự án</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
