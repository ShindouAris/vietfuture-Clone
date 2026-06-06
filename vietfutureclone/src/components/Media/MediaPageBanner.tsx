interface MediaPageBannerProps {
  title: string;
  variant?: 'gradient' | 'image';
  backgroundImage?: string;
  uppercase?: boolean;
}

export default function MediaPageBanner({
  title,
  variant = 'gradient',
  backgroundImage,
  uppercase = true,
}: MediaPageBannerProps) {
  const titleClass = [
    'text-center font-bold text-2xl md:text-[2rem] tracking-wide px-4 text-white!',
    uppercase ? 'uppercase' : '',
  ].join(' ');

  if (variant === 'image' && backgroundImage) {
    return (
      <section
        className="relative w-full min-h-[300px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        aria-label={title}
      >
        <div className="absolute inset-0 bg-black/25" aria-hidden />
        <h1 className={`relative z-10 ${titleClass}`}>{title}</h1>
      </section>
    );
  }

  return (
    <section
      className="w-full py-12 md:py-16 bg-linear-to-r from-[#e8d574] via-[#8fd4e8] via-40% via-[#c4b5e8] to-[#e8956a]"
      aria-label={title}
    >
      <h1 className={titleClass}>{title}</h1>
    </section>
  );
}
