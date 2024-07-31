import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/CV_Dariusz_Słupski.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id='hero' className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt='Hero' />

        <img
          className={styles.colorMode}
          src={themeIcon}
          alt='Color mode icon'
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Dariusz <br />
          Słupski
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href='https://twitter.com' target='_blank'>
            <img src={twitterIcon} alt='Twitter Icon' />
          </a>
          <a href='https://github.com' target='_blank'>
            <img src={githubIcon} alt='Github Icon' />
          </a>
          <a href='https://linkedin.com' target='_blank'>
            <img src={linkedinIcon} alt='Linkedin Icon' />
          </a>
        </span>
        <p>
          I am a passionate and dedicated Junior Front-End Developer
          <br /> with a knack for creating engaging, user-friendly websites and
          web applications.
          <br /> Here you'll find a collection of my projects showcasing my
          skills in
          <br /> HTML, CSS, JavaScript, and React.
        </p>
        <a href={CV} download>
          <button className='hover'>Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
