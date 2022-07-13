import React from 'react';
import Layout from '../components/Layout';

export default function contact() {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article>
            <h3>Want To Get In Touch?</h3>
            <p>
              Four dollar toast biodiesel plaid salivai actually pickled banjo
              bespoke mlkshk intelligentsia edison bulb synth.
            </p>
            <p>Cardigan prism biciucle rights put a bird on it deep v.</p>
            <p>
              Hashtag swag health goth air plant, recelteet listicle
              fingerstache, cold-pressed fanny pack bicycle rights caridgan
              poke.
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                ></input>
              </div>
              <div className="form-row">
                <label htmlFor="email">Your Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                ></input>
              </div>
              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn block"
              >
                Submit
              </button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  );
}
