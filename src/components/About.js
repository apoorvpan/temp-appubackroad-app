import aboutImg from "../images/about.jpeg";
import Title from "./Title";

const About = () => {
  return (
    <section className="section" id="about">
      <Title title="about" subTitle="us" />

      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            My name is Apoorv Prakash We started <b>Appu backroad </b>is the
            largest independently owned travel agency headquartered in Varanasi,
            and consistently we are growing rapidly in India.
          </p>
          <p>
            We are an employee-owned company with a passion for providing
            exemplary customer service, leveraging our expertise and technology
            to deliver innovative travel solutions in a gratifying work
            environmen
          </p>
          <a href="#" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
};
export default About;
