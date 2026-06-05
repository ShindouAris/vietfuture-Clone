export default function Hero() {
  return (
    <section className="relative w-full">
      <div className="height-fix is-invisible">
        <img
          decoding="async"
          width="1600"
          height="650"
          src="https://vietfuture.world/wp-content/uploads/2026/01/bannertv.jpg"
          className="attachment-original size-original"
          alt=""
          srcSet="https://vietfuture.world/wp-content/uploads/2026/01/bannertv.jpg 1600w, https://vietfuture.world/wp-content/uploads/2026/01/bannertv-300x122.jpg 300w, https://vietfuture.world/wp-content/uploads/2026/01/bannertv-1024x416.jpg 1024w, https://vietfuture.world/wp-content/uploads/2026/01/bannertv-768x312.jpg 768w, https://vietfuture.world/wp-content/uploads/2026/01/bannertv-1536x624.jpg 1536w"
          sizes="(max-width: 1600px) 100vw, 1600px"
        />
      </div>

    </section>
  );
}
