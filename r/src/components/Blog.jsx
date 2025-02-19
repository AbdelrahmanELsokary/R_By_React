function Blog() {
  return (
    <>
      <section className="blog" id="blog">
        <div className="container ">
          <h2 className=" text-center text-3xl md:text-4xl lg:text-5xl font-bold my-7">Blog</h2>
          <div className="blog1 flex justify-center flex-wrap ">
            <div className="learning flex items-center rounded-xl bg-[#dee2e6] p-9 m-5">
              <div className="image">
                <img src="/images/python.webp" alt="python img" className=" m-4 w-36" />
              </div>
              <div className="learn ">
                <h4 className=" text-lg font-medium">Learn HTML</h4>
                <p>
                  Lorem ipsum dolor <br /> sit amet, consecte adipiscing <br /> elit. Proin tristique elit nec. <br /> lorem ipsum
                </p>
              </div>
            </div>
            <div className="learning flex items-center rounded-xl bg-[#dee2e6] p-9 m-5">
              <div classNameName="image">
                <img src="/images/java.webp" alt="java img" className=" m-4 w-36" />
              </div>
              <div className="learn">
                <h4 className=" text-lg font-medium">Learn Css</h4>
                <p>
                  Lorem ipsum dolor <br /> sit amet, consecte adipiscing <br /> elit. Proin tristique elit nec. <br /> lorem ipsum
                </p>
              </div>
            </div>
          </div>
          <div className="blog1 flex justify-center flex-wrap ">
            <div className="learning flex items-center rounded-xl bg-[#dee2e6] p-9 m-5">
              <div className="image">
                <img src="/images/C++.webp" alt="C++ Img" className=" m-4 w-36" />
              </div>
              <div className="learn">
                <h4 className=" text-lg font-medium">Learn Javascript</h4>
                <p>
                  Lorem ipsum dolor <br /> sit amet, consecte adipiscing <br /> elit. Proin tristique elit nec. <br /> lorem ipsum
                </p>
              </div>
            </div>
            <div className="learning flex items-center rounded-xl bg-[#dee2e6] p-9 m-5">
              <div className="image">
                <img src="/images/R.webp" alt="Go img" className=" m-4 w-36" />
              </div>
              <div className="learn">
                <h4 className=" text-lg font-medium">Learn Go Lang</h4>
                <p>
                  Lorem ipsum dolor <br /> sit amet, consecte adipiscing <br /> elit. Proin tristique elit nec. <br /> lorem ipsum
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Blog;
