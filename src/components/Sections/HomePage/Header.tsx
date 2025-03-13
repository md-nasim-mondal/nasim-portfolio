'use client';

const Header: React.FC = () => {
  return (
    <header id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <source src="/assets/videos/portfolio_header_video_1.mp4" type="video/mp4" />
      </video>

      {/* Overlay with linear gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1FB382] to-[#24DFDE] opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 w-full text-center lg:text-start">
        <div className="text-white max-w-7xl mx-auto px-6 xl:px-0">
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="block md:inline-block text-5xl md:text-7xl pb-[1%]">
              Hello!
            </span>
            <br className="hidden md:block" />
            I&apos;m Md. Nasim Mondal
          </h1>
          <p className="mt-2 text-lg md:text-2xl font-semibold">
            <span className="block md:inline-block">MERN Stack Developer</span>{' '}
            <span className="hidden md:inline">||</span>{' '}
            <span className="block md:inline-block">Passionate About Programming</span>
          </p>
          {/* <button className="mt-8 px-4 py-2 bg-blue-600 text-white rounded">
            Hire Me
          </button> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
