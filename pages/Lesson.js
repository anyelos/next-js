import Layout from "../components/Layout";

const Lesson = () => (
  <Layout>
    <>
      <div className="Hero">
        <h1>Learn how to create a heart shape</h1>
        <p>
          In this lesson I will show you how to create a heart shape in any
          design tool. Simple and easy you will be able to implement it in a few
          minutes.
        </p>
        <div className="HeroGroup">
          <img src="/FigmaHeart.svg" />
        </div>
        <h3>Heart shape</h3>
        <p>
          Head over to your favorite design tool and start by making a Square
          140 x 140
        </p>
        <div className="HeroGroup">
          <img src="/Square.svg" />
        </div>
        <p>
          Next place a circle on each side of the square, make sure it's divided
          in two, Again 140 x 140.
        </p>
        <div className="HeroGroup">
          <img src="/Circles.svg" />
        </div>
        <p>
          last but not least, Create a union selection and rotate it to 45deg.
        </p>
        <div className="HeroGroup">
          <img src="/ShapeRotate.svg" />
        </div>
        <p>
          There you have it a pretty heart shape! Hope to see you on the next
          one!
        </p>
        <div className="HeroGroup">
          <img src="/FigmaHeart.svg" />
        </div>
      </div>
    </>
    <style jsx>{`
      .Hero {
        max-width: 800px;
        padding: 80px 20px;
        margin: 0 auto;
      }

      .Hero h3 {
        font-size: 2rem;
      }

      @media (max-width: 620px) {
        .Hero h1 {
          font-size: 3rem;
        }
      }

      .Hero h1 {
        font-size: 4rem;
        line-height: 1.15;
      }

      .Hero p {
        line-height: 1.5;
        font-size: 1.5rem;
      }

      .HeroGroup {
        background: #0a2a55;
        border-radius: 30px;
        padding: 80px;

        display: flex;
        align-items: center;
        justify-content: center;
      }
    `}</style>
    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }
    `}</style>
  </Layout>
);

export default Lesson;
