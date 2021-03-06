import Layout from "../components/Layout";
import TextLoop from "react-text-loop";
import Card from "../components/Card";

const Playground = () => (
  <Layout>
    <div className="container">
      <main>
        <div className="Hero">
          <div className="HeroGroup">
            <h1>
              <TextLoop>
                <span> Learn</span>
                <span> Grow</span>
                <span> Explore</span>
              </TextLoop>{" "}
              Together
            </h1>

            <p>
              Learn and improve skills across Business, UX/UI Design,
              Development. Taught by me to help your workforce do whatever comes
              next.
            </p>
            <p style={{ fontSize: "18px" }}>
              I'll show you how to create incredibly cool projects.
            </p>
            <a href="#BeginNow">
              <button>Begin now &rarr;</button>
            </a>
            <br></br>
            <a
              target="_blank"
              href="https://www.figma.com/file/fZtACphxjdiG2ry9yJJRLo/Angel-Icons"
              download=""
            >
              <button id="button2">Icons &rarr;</button>
            </a>
          </div>

          <div className="Image">
            <img src="/js.svg" alt="Park Logo" width="100%" />
          </div>
        </div>

        <div className="Block">
          <div className="TextBlock">
            <h3>
              <a>Learn from anywhere, any time.</a>
            </h3>
            <a name="BeginNow"></a>
            <p>
              It doesn't matter if you have experience or not, we will make sure
              you complete each course with a smile perfectly :)
            </p>
          </div>
        </div>

        <div className="CardGroup">
          <Card
            title="Create a heart shape in any design tool"
            subtitle="HEART SHAPE"
            button="Find out"
            image="/chat.svg"
          />
          <Card
            title="Grid display with CSS in React JS + More"
            subtitle="8 Sections"
            button="Find out"
            image="/messages.svg"
          />
        </div>
        <h5 style={{ fontSize: "30px" }}>More on the way &rarr;</h5>
      </main>

      <style jsx>{`
        .CardGroup {
          margin: 80px 0;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 80px;
        }

        .container {
          min-height: 100vh;
           {
            /* padding: 0 0.5rem; */
          }
          padding: 0 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .Hero {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          padding: 5rem 80px;
        }

        @media (max-width: 1020px) {
          .Hero {
            grid-template-columns: repeat(1, 1fr);
            grid-gap: 20px;
            padding: 30px 20px;
          }

          .HeroGroup {
            text-align: center;
          }

          .CardGroup {
            grid-template-columns: repeat(1, 1fr);
          }
        }

        .HeroGroup h1 a {
          color: blue;
        }

        .HeroGroup h1 span {
          color: blue;
        }

        .HeroGroup {
          max-width: 500px;
        }

        .Image {
          max-width: 600px;
        }

        .HeroGroup #button2 {
          margin-top: 10px;
          background: white;
          color: black;
          border: 1px solid #eaeaea;
        }

        .HeroGroup #button2:hover {
          background: black;
          color: white;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
          transform: translateY(-3px);
        }

        .HeroGroup button {
          background: blue;
          border: none;
          padding: 12px 32px;
          text-decoration: none;
          color: white;
          font-size: 22px;
          font-weight: 600;
          border-radius: 28px;
          cursor: pointer;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);

          transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .HeroGroup button:hover {
          background: linear-gradient(99.78deg, #4200ff 0.48%, #bd00ff 102.18%);
          color: white;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
          transform: translateY(-3px);
        }

        .HeroGroup h1 {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .HeroGroup a {
          color: white;
          text-decoration: none;
        }

        .HeroGroup p {
          font-size: 1.5rem;
          line-height: 1.5;
        }

        .Block {
          width: 100%;
          background: linear-gradient(100.08deg, #2f80ed 0%, #9051e0 100%);
        }

        .Block h3 {
          margin: 0;
          max-width: 500px;
          font-size: 3rem;
          color: white;
        }

        .TextBlock p {
          color: rgba(255, 255, 255, 0.7);
        }

        .TextBlock {
          max-width: 600px;
          padding: 50px 80px;
        }

        @media (max-width: 620px) {
          .TextBlock {
            padding: 30px 20px;
            text-align: center;
          }

          .TextBlock h3 {
            font-size: 2rem;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
      `}</style>
    </div>
  </Layout>
);

export default Playground;
