import { useState, useEffect } from "react";
import FadeIn from "../components/FadeIn";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import CounterCard from "../components/CounterCard";
import SEO from "../components/SEO";
import "./Home.css";

const slides = [
  "https://res.cloudinary.com/djw6sbckx/image/upload/v1773627521/mmcfrankcsoc-academy/fz5frrog6u7vhxl0scx8.jpg",
  "https://res.cloudinary.com/djw6sbckx/image/upload/v1781131314/mmcfrankcsoc-academy/odpmsatiuovleldqw97f.jpg",
  "https://res.cloudinary.com/djw6sbckx/image/upload/v1781131275/mmcfrankcsoc-academy/hyqetrej9nqyqlwtj9by.jpg",
  "https://res.cloudinary.com/djw6sbckx/image/upload/v1781131134/mmcfrankcsoc-academy/ckc2gckxtlmvrqqlumpc.jpg",
  "https://res.cloudinary.com/djw6sbckx/image/upload/v1781097009/mmcfrankcsoc-academy/j4dvekyrn0qypsrjbu9b.jpg",
  "https://res.cloudinary.com/djw6sbckx/image/upload/v1781096963/mmcfrankcsoc-academy/jr0lsspqr08zxpf9dec5.jpg",
  "https://res.cloudinary.com/djw6sbckx/image/upload/v1781096767/mmcfrankcsoc-academy/flrd8vibtnc2jbbszjlz.jpg",
  "https://res.cloudinary.com/djw6sbckx/image/upload/v1781096450/mmcfrankcsoc-academy/mcdotzarshyz0shevu95.jpg",
];

function Home() {
  return (
    <main className="home">
      <SEO
        title="Home"
        description="MmcfraNkcsoc Academy brings AI and technology education to children in rural Ghana. Join our mission today."
      />

      {/* HERO SECTION */}
      <section className="hero">
        {/* SLIDESHOW */}
        <div className="hero-slideshow">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            className="hero-swiper"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div
                  className="hero-slide"
                  style={{ backgroundImage: `url(${slide})` }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* OVERLAY PANEL */}
        <div className="hero-overlay-panel">
          <div className="hero-panel-content">
            <span className="hero-label">AI & Technology Education</span>
            <h1>
              Empowering Rural Communities Through <span>Technology</span>
            </h1>
            <p>
              MmcfraNkcsoc Academy brings hands-on AI and IT education to
              children in less-endowed communities across Ghana. Every child
              deserves access to the tools of the future.
            </p>
            <div className="hero-buttons">
              <Link to="/join" className="btn-primary">
                Join Our Mission
              </Link>
              <Link to="/about" className="btn-outline-white">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* KENTE DIVIDER */}
      <div className="kente-divider-wrapper">
        <div className="kente-divider">
          <div className="kente-wave-1" />
          <div className="kente-wave-2" />
          <div className="kente-wave-3" />
        </div>
      </div>
      {/* IMPACT STATS */}

      {/* IMPACT STATS */}
      <section className="impact">
        <div className="container">
          <FadeIn>
            <div className="impact-grid">
              <CounterCard target={3} label="Schools Visited" />
              <CounterCard target={100} label="Children Reached" suffix="+" />
              <CounterCard target="Growing" label="Member Community" />
              <CounterCard target={2025} label="Year Founded" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="mission-section">
        <div className="container">
          <FadeIn>
            <span className="section-label">Our Mission</span>
            <h2>Bridging the Gap Between Communities and Technology</h2>
            <p>
              MmcfraNkcsoc Academy is dedicated to bringing AI and technology
              education to children in rural Ghana while fostering community
              growth and digital inclusion. We believe that education is most
              effective when it reaches those who need it most.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="what-we-do">
        <div className="container">
          <span className="section-label">What We Do</span>
          <h2>How We Make An Impact</h2>
          <div className="what-grid">
            <FadeIn delay={0}>
              <div className="what-card">
                <div
                  className="what-card-image"
                  style={{ backgroundImage: `url(${slides[0]})` }}
                />
                <div className="what-card-body">
                  <span className="what-tag">AI Education</span>
                  <h3>AI Education</h3>
                  <p>
                    We introduce children to artificial intelligence concepts in
                    simple, engaging ways that spark curiosity and critical
                    thinking.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="what-card">
                <div
                  className="what-card-image"
                  style={{ backgroundImage: `url(${slides[1]})` }}
                />
                <div className="what-card-body">
                  <span className="what-tag">IT Skills</span>
                  <h3>IT Skills</h3>
                  <p>
                    From basic computer literacy to coding fundamentals, we
                    equip students with practical digital skills for the modern
                    world.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="what-card">
                <div
                  className="what-card-image"
                  style={{ backgroundImage: `url(${slides[2]})` }}
                />
                <div className="what-card-body">
                  <span className="what-tag">School Visits</span>
                  <h3>School Visits</h3>
                  <p>
                    We go directly to rural and less-endowed schools, removing
                    barriers and bringing education to where it is needed most.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={300}>
              <div className="what-card">
                <div
                  className="what-card-image"
                  style={{ backgroundImage: `url(${slides[3]})` }}
                />
                <div className="what-card-body">
                  <span className="what-tag">Community</span>
                  <h3>Community Building</h3>
                  <p>
                    We build a network of passionate volunteers and educators
                    committed to bridging the digital divide in Ghana.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-box">
            <span className="section-label-light">Get Involved</span>
            <h2>Join Us In Shaping The Future</h2>
            <p>
              Whether you want to volunteer, partner with us, or simply spread
              the word — there is a place for you in our mission.
            </p>
            <div className="cta-buttons">
              <Link to="/join" className="btn-primary">
                Become A Member
              </Link>
              <Link to="/about" className="btn-outline-white">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
