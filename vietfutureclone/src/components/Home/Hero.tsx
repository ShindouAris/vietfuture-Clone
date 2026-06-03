export default function Hero() {
  return (
    <section className="relative md:h-125 md:w-full lg:h-162.5 w-170 h-70">
      <img
        src="/images/2026/01/bannertv.jpg"
        alt="VietFuture Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <div className="container mx-auto max-w-305 px-4 h-full relative z-10">
        <div className="flex items-center h-full">
          <div className="w-full md:w-1/3 ml-0 md:ml-30 md:mt-55">
            <a
              href="https://vietfuture.vinasa.org.vn/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-linear-to-r from-[#0057B7] to-[#66B2FF] text-white font-bold text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-xl hover:shadow-xl transition-all transform hover:scale-105"
            >
              ĐĂNG KÝ THAM GIA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
