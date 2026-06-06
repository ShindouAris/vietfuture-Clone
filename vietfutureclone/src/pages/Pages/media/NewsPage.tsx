import MediaPageBanner from '../../../components/Media/MediaPageBanner';
import NewsCarousel from '../../../components/Media/NewsCarousel';
import { newsArticles } from '../../../data/newsArticles';

export default function NewsPage() {
  return (
    <>
      <MediaPageBanner title="TIN TỨC" />

      <main className="bg-white py-10 md:py-14">
        <div className="container mx-auto max-w-305 px-2 sm:px-4">
          <NewsCarousel articles={newsArticles} />
        </div>
      </main>
    </>
  );
}
