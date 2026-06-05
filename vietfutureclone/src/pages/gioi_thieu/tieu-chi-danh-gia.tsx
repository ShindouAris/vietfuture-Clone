export default function TieuChiDanhGia() {
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
          <h1 className="text-white text-2xl md:text-4xl font-bold">TIÊU CHÍ ĐÁNH GIÁ</h1>
        </div>
      </section>

      <div className="h-7.5" />

      <div className="container mx-auto max-w-305 px-4 pb-12">
        <div className="text-center">
          <img
            src="https://vietfuture.world/wp-content/uploads/2025/11/Tieu-chi-danh-gia-VietFuture.png"
            alt="Tiêu chí đánh giá VietFuture"
            className="inline-block max-w-full h-auto"
          />
        </div>
      </div>
    </main>
  );
}
