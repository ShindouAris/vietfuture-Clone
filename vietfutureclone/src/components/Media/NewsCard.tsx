export interface NewsArticle {
  title: string;
  excerpt: string;
  href: string;
  image: string;
  day: string;
  month: string;
}

interface NewsCardProps {
  article: NewsArticle;
}

function DateBadge({ day, month }: { day: string; month: string }) {
  return (
    <div
      className="absolute top-3 left-3 z-10 flex flex-col items-center justify-center min-w-12 py-1.5 px-2
        bg-[#0979a8]/75 border border-[#66b2ff] text-white text-center leading-tight"
      aria-hidden
    >
      <span className="text-lg font-bold">{day}</span>
      <span className="text-[11px] font-medium uppercase">{month}</span>
    </div>
  );
}

export default function NewsCard({ article }: NewsCardProps) {
  return (
    <a
      href={article.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white overflow-hidden hover:opacity-95 transition-opacity"
    >
      <div className="relative aspect-4/3 overflow-hidden bg-gray-100">
        <img
          src={article.image}
          alt=""
          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
          loading="lazy"
        />
        <DateBadge day={article.day} month={article.month} />
      </div>

      <div className="pt-4 pb-6 px-2 text-center">
        <h2 className="text-[#0979a8] font-bold text-[15px] md:text-base leading-snug mb-3 line-clamp-3">
          {article.title}
        </h2>
        <p className="text-[#555] text-sm leading-relaxed line-clamp-3">{article.excerpt}</p>
      </div>
    </a>
  );
}
