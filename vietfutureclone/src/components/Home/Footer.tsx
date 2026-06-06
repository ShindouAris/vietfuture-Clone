export default function Footer() {
  return (
    <footer className="bg-[#023e72] text-white">
      <div className="container mx-auto max-w-305 px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h2 className="text-lg font-bold mb-4">Về chúng tôi</h2>
            <p className="text-sm opacity-90">
              Hiệp hội Phần mềm và Dịch vụ CNTT Việt Nam (VINASA) là một tổ chức phi chính phủ, hoạt động phi lợi nhuận, đại diện cho ngành phần mềm và dịch vụ CNTT Việt Nam với mục đích thúc đẩy sự phát triển của các doanh nghiệp và ngành CNTT Việt Nam. VINASA được thành lập ngày 27/04/2002.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-4">Trụ sở chính</h2>
            <div className="text-sm opacity-90 space-y-2">
              <p>Tầng 11, Tòa nhà Cung Trí thức thành phố, 01 Tôn Thất Thuyết, Cầu Giấy, Hà Nội.</p>
              <p>Điện thoại: +84-24 3577-2336 / 8</p>
              <p>Email: contact@vinasa.org.vn</p>
              <p>Website: <a href="https://vinasa.org.vn" target="_blank" rel="noopener noreferrer" className="hover:underline">https://vinasa.org.vn</a></p>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-4">Văn phòng HCM</h2>
            <div className="text-sm opacity-90 space-y-2">
              <p>Tầng 4, Tòa nhà QTSC, 97-101 Nguyễn Công Trứ, Phường Sài Gòn, TP.HCM</p>
              <p>Điện thoại: (028) 3821 2001</p>
              <p>Liên hệ Ban tổ chức: Ms. Phương Anh, 0937 551 871, anhnnp@vinasa.org.vn</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/20 pt-8">
          <div>
            <h3 className="font-bold mb-3">CÁC SỰ KIỆN</h3>
            <ul className="text-sm space-y-2">
              <li><a href="https://dxsummit.vn/" target="_blank" rel="noopener noreferrer" className="hover:underline">DX Summit</a></li>
              <li><a href="https://biztech.biz.vn/" target="_blank" rel="noopener noreferrer" className="hover:underline">BizTech</a></li>
              <li><a href="https://tech4life.vn/" target="_blank" rel="noopener noreferrer" className="hover:underline">Tech4Life</a></li>
              <li><a href="https://talentx.com.vn/" target="_blank" rel="noopener noreferrer" className="hover:underline">TalentX</a></li>
              <li><a href="http://ai360.space/" target="_blank" rel="noopener noreferrer" className="hover:underline">AI360</a></li>
              <li><a href="https://greenx.vinasa.org.vn/" target="_blank" rel="noopener noreferrer" className="hover:underline">GreenX</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3">DỊCH VỤ</h3>
            <ul className="text-sm space-y-2">
              <li><a href="https://trustmark.vn/" target="_blank" rel="noopener noreferrer" className="hover:underline">Digital Trust</a></li>
              <li><a href="https://danhbaict.vn/" target="_blank" rel="noopener noreferrer" className="hover:underline">Danhbaict</a></li>
              <li><a href="http://skill7.online/" target="_blank" rel="noopener noreferrer" className="hover:underline">Skill7</a></li>
              <li><a href="https://innoconnect.vn/" target="_blank" rel="noopener noreferrer" className="hover:underline">InnoConnect</a></li>
              <li><a href="https://vinasaconnect.vn/" target="_blank" rel="noopener noreferrer" className="hover:underline">VINASA Connect</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3">CÁC GIẢI THƯỞNG</h3>
            <ul className="text-sm space-y-2">
              <li><a href="https://giaithuongsaokhue.vn/" target="_blank" rel="noopener noreferrer" className="hover:underline">Giải thưởng Sao Khuê</a></li>
              <li><a href="https://top10ict.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">Vietnam TOP 10 Tech & Map</a></li>
              <li><a href="https://smartcitiesvietnam.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">Smart City Award</a></li>
              <li><a href="https://vietfuture.world/" target="_blank" rel="noopener noreferrer" className="hover:underline">VietFuture Award</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3">KHUNG KỸ NĂNG SỐ</h3>
            <ul className="text-sm space-y-2">
              <li><a href="https://dx4sme.vn/" target="_blank" rel="noopener noreferrer" className="hover:underline">Khung chuyển đổi số dành cho DN SMEs</a></li>
              <li><a href="https://mdx.vinasa.org.vn/" target="_blank" rel="noopener noreferrer" className="hover:underline">Khung chuyển đổi số dành cho DN sản xuất</a></li>
            </ul>
            <div className="flex gap-2 mt-4">
              <a href="https://zalo.me/1135993391995696702" target="_blank" rel="noopener noreferrer">
                <img src="/images/2025/11/zalo-icon-300x300-1.png" alt="Zalo" className="w-10 h-10 rounded" />
              </a>
              <a href="https://www.facebook.com/vinasavn" target="_blank" rel="noopener noreferrer">
                <img src="/images/2025/11/2023_Facebook_icon-300x300-1.png" alt="Facebook" className="w-10 h-10 rounded" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black/20 py-4">
        <div className="container mx-auto max-w-305 px-4 text-center text-sm">
          © Copyright VIETFUTURE | All Right Reserved. VINASA
        </div>
      </div>
    </footer>
  );
}

