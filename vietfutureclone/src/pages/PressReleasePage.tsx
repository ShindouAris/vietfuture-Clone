import MediaPageBanner from '../components/Media/MediaPageBanner';
import PressReleaseContent, { PRESS_HEADER_IMAGE } from '../components/Media/PressReleaseContent';

export default function PressReleasePage() {
  return (
    <>
      <MediaPageBanner
        title="Thông cáo báo chí"
        variant="image"
        backgroundImage={PRESS_HEADER_IMAGE}
        uppercase={false}
      />
      <main className="bg-white pb-10">
        <PressReleaseContent />
      </main>
    </>
  );
}
