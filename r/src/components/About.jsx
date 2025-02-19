import Button from './Button_About';
function About() {
  return (
    <>
      <section id="about">
        <div class="container flex flex-wrap justify-center gap-20 items-center px-7 py-10">
          <div class="titel">
            <h2 className=" text-5xl font-bold font-sans">
              About <br /> Me
            </h2>
          </div>
          <div class="about">
            <p className=" font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin <br /> tristique elit nec malesuada tincidunt.
              <br />
              Pellentesque lobortis metus quis ipsum mattis, <br /> vitae laoreet est posuere. Mauris bibendum eros massa, sit amet tempor sem lobortis non.
            </p>
            <Button text="Hire Me" />
            <Button text="Viwe CV" />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
