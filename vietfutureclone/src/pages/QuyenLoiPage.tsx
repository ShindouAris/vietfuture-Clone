export default function QuyenLoiPage() {
  return (
    <main className="py-8 bg-[#f8fbff]">
      <div className="container mx-auto max-w-305 px-4">
        <div className="rounded-[32px] bg-white/80 border border-[#d9e9ff] p-6 shadow-sm text-left mb-8">
          <div className="col-inner">
            <p className="font-black text-3xl md:text-4xl text-[#140000] mb-4">
              <b>QUYỀN LỢI SINH VIÊN</b>
            </p>
            <ul className="list-disc list-inside space-y-3 text-base text-[#393939]">
              <li>Được trao Giấy chứng nhận tham gia Giải thưởng</li>
              <li>Được nhận hiện kim, hiện vật từ Nhà tài trợ và Doanh nghiệp khi đạt giải</li>
              <li>Được tham gia triển lãm và giới thiệu sản phẩm, dự án miễn phí tại Vòng Chung tuyển toàn quốc (Do BTC lựa chọn)</li>
              <li>
                Được công bố sản phẩm/giải pháp đạt giải tại website của cuộc thi: <a href="https://vietfuture.world" target="_blank" rel="noopener noreferrer" className="text-[#0057B7] hover:underline">https://vietfuture.world</a>
              </li>
              <li>Được hỗ trợ kết nối giới thiệu sản phẩm/giải pháp tới các doanh nghiệp quan tâm, đầu tư</li>
              <li>Có cơ hội được đầu tư dự án hoặc cơ hội việc làm tại các doanh nghiệp</li>
              <li>Được giới thiệu với các chuyên gia, quỹ đầu tư, nhà đầu tư để tiếp tục hoàn thiện dự án triển khai thực tế</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
