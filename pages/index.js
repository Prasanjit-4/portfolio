import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>

        <h1>About Me</h1>
        <p>I'm a second year student at SRM Institute of Science and Technology pursuing BTech. CSE with specialization in cloud computing.</p>
        <p>Currently I am learning about blockchain infrastructure along with the cryptographic principles that supports it all.</p>
        <p>My interests include playing football, reading books and learning mathematics</p>

        <h1>My Socials</h1>
        <p>
          <a href="https://github.com/Prasanjit-4" target='_blank'>Github Profile</a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/prasanjit-panda-56152a250/" target="_blank">Linkedin Profile</a>
        </p>
        <p>
          <a href="https://devfolio.co/@peajay" target="_blank">Devfolio Profile</a>
        </p>

        <h1>Projects</h1>
        <p><a href='https://github.com/stuff-makers/Polinyx' target="_blank">Polinyx</a></p>
        <p>A video chatting application with sign language interpretation and Speech-to-text features</p>
        <p>
          <a href="https://github.com/vinay-04/unfold-precompile-evm" target="_blank">ZkSnark Precompile</a>
        </p>
        <p>A ZkSnark based precompile for the Avalanche network</p>

        <h1>Hackathons</h1>
        <p>I love participating in hackathons. They are a great platform to learn about new technologies in a short period of time and ofcourse get in contact with other like-minded individuals</p>
        <p>Throughout my 3rd semester I participated in various hackathons and advanced to their later stages unfortunately didn't win a lot.</p>
        <p>Recently I participated in <a href='https://unfoldweb3.com/#home'>Unfold 2023</a> and was able to win <a href="https://x.com/Avalanche_In/status/1717543567571464642?s=20">3rd Position</a> in the Avalanche Track along with a prize amount of $1000</p>


        <h1>Academics</h1>
        <p>Semester wise GPA</p>
        <p>Semester 1: 9.86</p>
        <p>Semester 2: 9.86</p>

        <h1>Research Based Projects</h1>
        <p>I created a small audio device using arduino that takes in audio input and analyzes it using Discrete Fourier Transform implemented using MATLAB.
          This method of audio analysis has various applications such as detection of Parkinson's disease along with voice-based authentication.
          This project won the TechKnow physics Exhibition organized by my college in my 2nd semester.
        </p>

      </section>
    </Layout>
  );
}