import React from 'react'
import "./Contact.scss";
function Contact() {
  return (
    <main className="contact_us">
      <section className="contact_us_container">
        <article>
          <div>
            <h3>
              <span>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.55423 5.24L6.17123 1.335C5.78123 0.885 5.06623 0.887 4.61323 1.341L1.83123 4.128C1.00323 4.957 0.766232 6.188 1.24523 7.175C4.10685 13.1 8.88528 17.8851 14.8062 20.755C15.7922 21.234 17.0222 20.997 17.8502 20.168L20.6582 17.355C21.1132 16.9 21.1142 16.181 20.6602 15.791L16.7402 12.426C16.3302 12.074 15.6932 12.12 15.2822 12.532L13.9182 13.898C13.8484 13.9712 13.7565 14.0194 13.6566 14.0353C13.5567 14.0512 13.4543 14.0339 13.3652 13.986C11.1357 12.7021 9.28622 10.8502 8.00523 8.619C7.95726 8.52975 7.93989 8.42723 7.95578 8.32716C7.97168 8.22708 8.01996 8.13499 8.09323 8.065L9.45323 6.704C9.86523 6.29 9.91023 5.65 9.55423 5.239V5.24Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Call To Us
            </h3>
            <p>We are available 24/7, 7 days a week</p>
            <p>Phone: +880161112222</p>
          </div>
          <div>
            <h3>
              <span>
                <svg
                  width="22"
                  height="16"
                  viewBox="0 0 22 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L11 8L21 1M1 15H21V1H1V15Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Write To Us
            </h3>
            <p>Fill out our form and we will contact you within 24 hours</p>
            <p>Emails: customer@shopYassine.com</p>
            <p>Emails: support@shopYassine.com</p>
          </div>
        </article>
        <article>
          <form>
            <div>
              <input type="text" placeholder="Your Name " />
              <input type="email" placeholder="Your Email" />
              <input type="text" placeholder="Your Phone" />
            </div>
            <div>
              <textarea placeholder="Your Message"></textarea>
            </div>
            <div>
              <button type="submit">Send Message</button>
            </div>
          </form>
        </article>
      </section>
    </main>
  );
}

export default Contact