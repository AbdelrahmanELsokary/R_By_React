import Buttonu from './Button_hero';
function Hero() {
  return (
    <>
      <section className=" bg-[#dee2e6]">
        <div className="container flex flex-wrap items-center justify-center gap-28 px-14">
          <div className="info pt-20 ">
            <h1 className=" text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ">
              Hello
              <br />
              I’m Ridho
            </h1>
            <p>Freelancer Web Developer</p>
            <Buttonu />
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
