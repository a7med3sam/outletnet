import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center pt-16 md:pt-24 pb-8 md:pb-56 min-h-[60vh] md:min-h-[80vh] flex items-center"
      style={{
        backgroundImage: "url('/hero-bg.png')",
        // backgroundSize: "135%",
        backgroundPosition: "center",
        backgroundRepeat: 'no-repeat', 
      }}
    >
      <div className="absolute inset-0 bg-white opacity-25 md:opacity-20"></div>
      <div className="container mx-auto px-4 py-8 md:py-16 flex flex-col items-center text-[var(--color-text-primary)] text-center relative z-10">
        <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold mb-4 md:mb-6 mx-10">
          كل ما تحتاجه بين يديك بضغطة زر!
        </h1>
        <span className="text-base mt-8 md:text-lg font-medium mb-6 md:mb-8 max-w-3xl px-12">
          <span className="text-[var(--color-button-bg)]">اوتليت ووم </span>
          يوفّر لك تجربة تسوّق سهلة وسريعة مع توصيل فوري وعروض حصرية
          يومية. حمّل التطبيق الآن واستمتع بأفضل المنتجات من راحة منزلك!
        </span>
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {/* <button className="bg-[var(--color-button-bg)] text-white font-semibold px-4 py-2 md:px-6 md:py-3 rounded-xl text-sm md:text-base hover:bg-green-800 transition">
            تسجيل دخول
          </button> */}
          <button className="bg-[var(--color-button-bg)] text-white font-semibold px-4 py-2 md:px-6 md:py-3 rounded-xl text-sm md:text-base hover:bg-purple-800 transition">
            <a href="#get-app">أحصل على التطبيق</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
