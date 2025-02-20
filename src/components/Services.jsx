function Services() {
  return (
    <>
      <section className="services bg-[#dee2e6]">
        <div className="container py-7">
          <h2 className=" text-center font-bold text-3xl md:text-4xl lg:text-5xl py-3">Services</h2>
          <p className=" text-center font-medium font-sans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique <br /> elit nec malesuada tincidunt. Pellentesque lobortis.
          </p>
          <div className="our_service flex justify-center gap-14 flex-wrap py-7">
            <div className="service text-center bg-[#212529] px-5 py-10 rounded-xl shadow-2xl shadow-black">
              <img src="/icons/web-development.webp" alt="web-development" className=" mx-auto" />
              <h3 className=" text-2xl font-bold text-white py-2">Web Development</h3>
              <p className=" text-white">
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. <br /> Proin tristique elit nec
              </p>
            </div>
            <div className="service text-center bg-[#212529] px-5 py-10 rounded-xl shadow-2xl shadow-black">
              <img src="/icons/web-design.webp" alt="web-design" className=" mx-auto" />
              <h3 className=" text-2xl font-bold text-white py-2">Web Design</h3>
              <p className=" text-white">
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. <br /> Proin tristique elit nec
              </p>
            </div>
            <div className="service text-center bg-[#212529] p-5 py-10 rounded-xl shadow-2xl shadow-black">
              <img src="/icons/mobile.webp" alt="mobile" className=" mx-auto" />
              <h3 className=" text-2xl font-bold text-white py-2">App Design</h3>
              <p className=" text-white">
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. <br /> Proin tristique elit nec
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Services;
