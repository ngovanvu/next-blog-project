import Image from "next/image";
import classes from "./hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/image/site/Me.jpg" alt="Image Me" width={300} height={300} />
      </div>
      <h1>Hi, I'm TOM</h1>
      <p>I blog about web development - especially front-end framework like React</p>
    </section>
  );
};

export default Hero;
