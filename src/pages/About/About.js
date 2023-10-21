import React from 'react'
import "./About.scss";
function About() {
  return (
    <main className="about_us">
      <section className="about_us_container">
        <article className='about_us_content'>
          <h1>Our Story</h1>
          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </article>
        <div className='img__container'>
          <img src={require("../../assets/icons/About-us.jpg")} alt='aboutImage'/>
        </div>
      </section>
    </main>
  );
}

export default About