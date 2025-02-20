export default function Footer() {
  return (
    <>
      <footer className=" bg-[#dee2e6] py-5" id="footer">
        <h2 className=" text-center font-bold text-3xl md:text-4xl lg:text-5xl">Contact</h2>
        <div className="container flex flex-wrap items-center justify-center gap-20">
          <div className="contact w-3/4">
            <div className="message ">
              <h3 className=" font-semibold text-xl py-2">Send Me Message</h3>
              <div className="send_me flex gap-2 my-3">
                <input type="email" placeholder="Email" className="p-1 bg-[#212529] rounded-lg w-full placeholder:px-2 placeholder:text-white" />
                <input type="text" placeholder="Name" className=" p-1 bg-[#212529] rounded-lg w-full placeholder:px-2 placeholder:text-white" />
              </div>
              <div className="text_area">
                <textarea placeholder="Message" className=" my-5 resize-none bg-[#212529] rounded-lg h-48 w-full placeholder:px-2 placeholder:text-white"></textarea>
              </div>
              <input type="submit" value="Send" className=" cursor-pointer bg-[#212529] block rounded-lg px-5 py-2 w-full text-white " />
            </div>
          </div>
          <div className="social_media">
            <h3 className=" font-semibold text-2xl"> Social Media</h3>
            <a href="/" className="flex gap-2 py-3 text-lg">
              <img src="/icons/whatsapp.png" alt="whatsapp" />
              089522231231
            </a>
            <a href="/" className="flex gap-2 text-lg">
              <img src="/icons/instagram.png" alt="instagram" />
              satriawan.ridho
            </a>
            <a href="/" className="flex gap-2 py-3 text-lg">
              <img src="/icons/facebook.png" alt="facebook" /> Ridho satriawan
            </a>
            <a href="/" className="flex gap-2 text-lg">
              <img src="/icons/linkedin.png" alt="linkedin" />
              Ridho satriawan
            </a>
            <a href="/" className="flex gap-2 py-3 text-lg">
              <img src="/icons/github.webp" alt="github" />
              ridhosatriawan
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
