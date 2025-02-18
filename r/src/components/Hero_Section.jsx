function Hero() {
  return (
    <>
      <section className=" bg-[#dee2e6]">
        <div className="container flex items-center justify-center gap-28 px-14">
          <div className="info">
            <h1 className=" sm:text-lg md:text-4xl lg:text-5xl font-mono font-extrabold leading-tight ">
              Hello
              <br />
              I’m Ridho
            </h1>
            <p>Freelancer Web Developer</p>
            <a href="/" className="bg-[#212529] text-white block w-24 text-center rounded-xl my-4 py-2 px-4">
              Hire Me
            </a>
          </div>
          <div className="image">
            <img src="/images/user.webp" alt="hero img" />
          </div>
        </div>
      </section>
    </>
  );
}
export default Hero;
