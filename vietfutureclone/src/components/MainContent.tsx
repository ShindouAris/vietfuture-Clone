import Countdown from './Countdown';

export default function MainContent() {
  return (
    <main className="py-8">
      <div className="container mx-auto max-w-[1220px] px-4">
        <div className="text-center mb-8">
          <a
            href="/danh-sach-giai-thuong-vietfuture-2025"
            className="inline-block bg-[#007aff] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#0057B7] transition-colors"
          >
            DANH SÁCH ĐẠT GIẢI VIETFUTURE 2025
          </a>
        </div>

        <div className="prose max-w-none">
          <p className="text-center font-bold text-xl mb-4">
            GIẢI THƯỞNG SÁNG TẠO TƯƠNG LAI
          </p>

          <p className="text-justify mb-4">
            Giải thưởng Sáng tạo tương lai – VietFuture Awards là giải thưởng thường niên do Hiệp hội Phần mềm và Dịch vụ Công nghệ thông tin (VINASA) tổ chức. Đây là Giải thưởng dành cho các dự án khởi nghiệp Đổi mới sáng tạo của sinh viên các trường đại học, cao đẳng trên cả nước và các dự án theo đặt hàng từ doanh nghiệp, các dự án R&D của các trường Đại học/Cao đẳng muốn thương mại hoá.
          </p>

          <p className="text-justify mb-4">
            Giải thưởng Sáng tạo tương lai – VietFuture Awards là nơi kết nối hợp tác giữa các trường đại học và doanh nghiệp trong lĩnh vực khởi nghiệp đổi mới sáng tạo và nghiên cứu và phát triển, kết nối thương mại hoá các đề tài nghiên cứu và tuyển dụng.
          </p>

          <p className="text-justify mb-8">
            Giải thưởng kỳ vọng sẽ thu hút sự quan tâm của các cá nhân, các nhóm nghiên cứu trên toàn quốc để giải quyết các bài toán thiết thực xuất phát từ thực tiễn. Từ đó có thể ứng dụng rộng rãi trong cả nước, hướng đến khu vực và quốc tế, thúc đẩy phong trào khởi nghiệp mạnh mẽ hơn tại các trường đại học và giúp các doanh nghiệp tìm được các ý tưởng mới cho hệ sinh thái các sản phẩm, giải pháp của doanh nghiệp; đồng thời tuyển dụng được các nhóm nhân tài tham gia chương trình.
          </p>

          <div className="text-center mb-8">
            <img
              src="/images/2025/11/Tai-sao-nen-tham-gia-copy.jpg"
              alt="Tại sao nên tham gia"
              className="w-full max-w-4xl mx-auto rounded-lg"
            />
          </div>

          <div className="text-center mb-8">
            <a
              href="/quyen-loi"
              className="inline-block bg-[#007aff] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#0057B7] transition-colors"
            >
              QUYỀN LỢI THAM GIA
            </a>
          </div>

          <div className="text-center mb-8">
            <img
              src="/images/2025/11/Lic-trinh-trien-khai1.jpg"
              alt="Lịch trình triển khai"
              className="w-full max-w-4xl mx-auto rounded-lg"
            />
          </div>

          <div className="text-center mb-8">
            <img
              src="/images/2026/01/14-linh-vuc-copy.jpg"
              alt="14 lĩnh vực"
              className="w-full max-w-4xl mx-auto rounded-lg"
            />
          </div>

          <div className="text-center mb-8">
            <img
              src="/images/2025/11/CTTT-1.png"
              alt="Cơ cấu giải thưởng 1"
              className="w-full max-w-3xl mx-auto"
            />
          </div>

          <div className="text-center mb-8">
            <img
              src="/images/2025/11/CTTT-21.png"
              alt="Cơ cấu giải thưởng 2"
              className="w-full max-w-3xl mx-auto"
            />
          </div>

          <div className="text-center mb-8">
            <img
              src="/images/2025/11/CTTT-31.png"
              alt="Cơ cấu giải thưởng 3"
              className="w-full max-w-3xl mx-auto"
            />
          </div>

          <div className="text-center mb-8">
            <a
              href="https://vietfuture.vinasa.org.vn/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#007aff] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#0057B7] transition-colors"
            >
              ĐĂNG KÝ THAM GIA
            </a>
          </div>

          <p className="text-center font-bold text-xl my-8">
            NHỮNG HÌNH ẢNH NỔI BẬT TẠI VIETFUTURE AWARDS 2025
          </p>

          <div className="space-y-6 mb-8">
            <img
              src="/images/2025/11/Vong-thuyet-trinh-toan-quoc-copy.jpg"
              alt="Vòng thuyết trình toàn quốc"
              className="w-full rounded-lg"
            />
            <img
              src="/images/2025/11/Le-trao-copy.jpg"
              alt="Lễ trao giải"
              className="w-full rounded-lg"
            />
            <img
              src="/images/2026/01/Hoat-dong-noi-bat-copy111.jpg"
              alt="Hoạt động nổi bật"
              className="w-full rounded-lg"
            />
          </div>

          <div className="text-center mb-8">
            <div className="aspect-video max-w-4xl mx-auto">
              <iframe
                src="https://www.youtube.com/embed/6nbzqcxshKc"
                title="Lễ công bố và vinh danh giải thưởng VietFuture 2025"
                className="w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <Countdown />
        </div>
      </div>
    </main>
  );
}
