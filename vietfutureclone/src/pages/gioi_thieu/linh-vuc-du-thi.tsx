const fields = [
  { id: 1, name: 'Giáo dục, học tập và đào tạo 4.0 (Education, Learning and Training 4.0)', desc: 'Các dự án liên quan đến ứng dụng công nghệ và dữ liệu nhằm cải thiện phương pháp giảng dạy, học tập trực tuyến, cá nhân hóa học tập và nâng cao hiệu quả quản lý, đào tạo trong giáo dục.' },
  { id: 2, name: 'Y tế và chăm sóc sức khỏe (Medical and Healthcare)', desc: 'Các ứng dụng và giải pháp công nghệ trong lĩnh vực y tế, bao gồm chẩn đoán thông minh, giám sát sức khỏe từ xa, chăm sóc sức khỏe cá nhân, quản lý y tế và các sản phẩm, dịch vụ y tế đổi mới.' },
  { id: 3, name: 'Giải pháp đô thị & di chuyển thông minh (Smart City and Smart Mobility Solutions)', desc: 'Bao gồm các giải pháp công nghệ phục vụ giao thông thông minh, quản lý di chuyển, vận hành đô thị, hạ tầng công cộng và phát triển các mô hình di chuyển bền vững trong đô thị hiện đại.' },
  { id: 4, name: 'Thương mại điện tử và Logistics (E-commerce and Logistics)', desc: 'Xây dựng các nền tảng, ứng dụng và giải pháp hỗ trợ hoạt động thương mại điện tử, logistics, chuỗi cung ứng và giao nhận, giúp doanh nghiệp, sinh viên kết nối thị trường trong nước và quốc tế.' },
  { id: 5, name: 'Nông nghiệp và Thực phẩm sạch (Agriculture and Clean Food)', desc: 'Các giải pháp công nghệ nhằm nâng cao năng suất và hiệu quả sản xuất nông nghiệp, quản lý tài nguyên nông nghiệp, đảm bảo truy xuất nguồn gốc và cung cấp thực phẩm sạch, an toàn cho người tiêu dùng.' },
  { id: 6, name: 'Công nghệ xanh, Môi trường và Phát triển bền vững (Green Technology, Environment and Sustainable Development)', desc: 'Các dự án sử dụng công nghệ để bảo vệ môi trường, tiết kiệm và tối ưu năng lượng, phát triển năng lượng tái tạo, kinh tế tuần hoàn, tái chế tài nguyên và thúc đẩy phát triển bền vững.' },
  { id: 7, name: 'Du lịch (Tourism)', desc: 'Xây dựng các ứng dụng và dịch vụ công nghệ phục vụ du lịch thông minh, quản lý điểm đến, hướng dẫn du lịch số, cá nhân hóa trải nghiệm và phát triển du lịch bền vững.' },
  { id: 8, name: 'Văn hóa, Giải trí và Nghệ thuật số (Culture, Digital Arts and Entertainment)', desc: 'Các dự án sáng tạo nội dung và trải nghiệm số trong lĩnh vực văn hóa, nghệ thuật, game và giải trí, ứng dụng công nghệ để kết nối cộng đồng, nâng cao trải nghiệm người dùng và phát triển công nghiệp sáng tạo số.' },
  { id: 9, name: 'Công nghệ cho Xã hội và Phát triển cộng đồng (Technology for Social and Community Development)', desc: 'Các dự án ứng dụng công nghệ nhằm giải quyết các vấn đề xã hội, hỗ trợ cộng đồng địa phương và tạo ra tác động xã hội tích cực, bền vững.' },
  { id: 10, name: 'Trí tuệ nhân tạo và tự động hóa (Artificial Intelligence and Automation)', desc: 'Các ứng dụng trí tuệ nhân tạo, học máy và tự động hóa trong các lĩnh vực như dự báo, quản lý, sản xuất, vận hành và dịch vụ, nhằm nâng cao hiệu suất và tạo ra các sản phẩm, dịch vụ thông minh.' },
  { id: 11, name: 'Khoa học dữ liệu và phân tích thông tin (Data Science and Information Analytics)', desc: 'Các ứng dụng tập trung vào thu thập, xử lý, phân tích và trực quan hóa dữ liệu nhằm trích xuất thông tin giá trị, dự báo xu hướng, hỗ trợ ra quyết định, quản lý và tối ưu hoạt động trong kinh doanh và xã hội (không bao gồm AI chuyên sâu và hạ tầng dữ liệu).' },
  { id: 12, name: 'Hạ tầng dữ liệu, Điện toán đám mây & An ninh mạng (Data Infrastructure, Cloud Computing and Cybersecurity)', desc: 'Các dự án và giải pháp công nghệ tập trung vào xây dựng, vận hành và bảo vệ hạ tầng dữ liệu, hệ thống điện toán đám mây, nền tảng số và an toàn thông tin, đảm bảo tính ổn định, bảo mật và hiệu quả cho các hoạt động số.' },
  { id: 13, name: 'Các ứng dụng sử dụng công nghệ mới (Blockchain, Web3, AR/VR, Metaverse & IoT)', desc: 'Các sản phẩm, ứng dụng và mô hình kinh doanh ứng dụng công nghệ mới và công nghệ đột phá nhằm tạo ra trải nghiệm, giá trị và phương thức tương tác mới trong nhiều lĩnh vực.' },
  { id: 14, name: 'Các sản phẩm, ứng dụng công nghệ khác', desc: 'Các sản phẩm, giải pháp và mô hình công nghệ đổi mới sáng tạo không thuộc các lĩnh vực trên nhưng có tính ứng dụng cao, tiềm năng phát triển và tạo ra giá trị thực tiễn cho xã hội.' },
];

export default function LinhVucDuThi() {
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
          <h1 className="text-white text-2xl md:text-4xl font-bold">LĨNH VỰC DỰ THI</h1>
        </div>
      </section>

      <div className="h-7.5" />

      <div className="container mx-auto max-w-305 px-4 pb-12">
        <p className="mb-6">
          Các dự án, sản phẩm, ứng dụng công nghệ số do sinh viên các trường phát triển trong 14 lĩnh vực
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3 text-left font-bold whitespace-nowrap">STT</th>
                <th className="border p-3 text-left font-bold">Lĩnh vực</th>
                <th className="border p-3 text-left font-bold">Mô tả</th>
              </tr>
            </thead>
            <tbody>
              {fields.map((field) => (
                <tr key={field.id} className="even:bg-gray-50">
                  <td className="border p-3 font-bold align-top whitespace-nowrap">{field.id}</td>
                  <td className="border p-3 align-top">{field.name}</td>
                  <td className="border p-3 align-top">{field.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
