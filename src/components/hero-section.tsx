export function HeroSection() {
  return (
    <section className='relative h-[70vh] md:h-[80vh] overflow-hidden'>
      <video
        src='/hero-video.mp4'
        autoPlay
        muted
        loop
        className='w-full h-full object-cover'
      />
      <div className='absolute bottom-0 left-0 right-0 flex z-10 items-center justify-center text-white p-14 overflow-hidden'>
        <div className='animate-marquee whitespace-nowrap'>
          <span className='text-2xl md:text-[100px] font-bold uppercase tracking-wider mx-4'>
            HANDCRAFTED ELEGANCE
          </span>
        </div>
      </div>
    </section>
  );
}
