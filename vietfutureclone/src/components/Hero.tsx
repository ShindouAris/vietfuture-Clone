export default function Hero() {
  return (
    <section className="relative h-[650px] w-full overflow-hidden">
      <img
        src="/images/2026/01/bannertv.jpg"
        alt="VietFuture Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
      
      <div className="container mx-auto max-w-[1220px] px-4 h-full relative z-10">
        <div className="flex items-center h-full">
          <div className="w-full md:w-1/3 ml-0 md:ml-8">
            <a
              href="https://vietfuture.vinasa.org.vn/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-[#0057B7] to-[#66B2FF] text-white font-bold text-lg px-8 py-4 rounded-xl hover:shadow-xl transition-all transform hover:scale-105"
            >
              ĐĂNG KÝ THAM GIA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
