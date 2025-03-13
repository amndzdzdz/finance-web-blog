import Image from "next/image";

export default function About() {
  return (
    <>
      {/* About Us Section */}
      <section className="py-3 py-md-5">
        <div className="container">
          <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
            <div className="col-12">
              <div className="row justify-content-center">
                <div className="col-12 col-xl-11">
                  <span className="text-muted">About Us</span>
                  <h2 className="display-5 fw-bold mb-3 mb-xl-5">Who We Are</h2>
                  <p className="lead fs-4 text-secondary mb-5">
                    We are four students from different universities across
                    Germany, united by our shared passion for economics. Through
                    collaboration and diverse perspectives, we aim to deepen our
                    understanding of economic trends and their impact on
                    businesses and societies worldwide.
                  </p>
                  <p className="mb-5">
                    Our goal is to provide insightful and well-researched
                    analysis on macroeconomic and microeconomic trends,
                    financial markets, and business strategies. With expertise
                    spanning different academic backgrounds, we bring a unique
                    combination of theoretical knowledge and practical insights
                    to our discussions.
                  </p>
                  <p className="mb-5">
                    Whether it's understanding monetary policies, examining
                    global financial crises, or analyzing corporate strategies,
                    we are committed to delivering high-quality research and
                    well-informed opinions. We believe in the power of
                    knowledge-sharing and the importance of critical thinking in
                    navigating the complex world of economics.
                  </p>
                  <div className="row gy-4 gy-md-0 gx-xxl-5X">
                    <div className="col-12 col-md-6">
                      <div className="d-flex">
                        <div className="me-4 text-primary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            fill="currentColor"
                            className="bi bi-graph-up"
                            viewBox="0 0 16 16"
                          >
                            <path d="M0 0h1v15h15v1H0V0z" />
                            <path d="M10.293 3.5a1 1 0 0 1 1.414 0l2.5 2.5a1 1 0 0 1-1.414 1.414L11 5.914 7.707 9.207a1 1 0 0 1-1.414 0l-1.5-1.5L2.707 9.793a1 1 0 1 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0l1.5 1.5 3.293-3.293z" />
                          </svg>
                        </div>
                        <div>
                          <h2 className="h4 mb-3">Economic Insights</h2>
                          <p className="text-secondary mb-0">
                            We analyze global and regional economic trends,
                            providing data-driven insights that help individuals
                            and businesses understand financial markets.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="d-flex">
                        <div className="me-4 text-primary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            fill="currentColor"
                            className="bi bi-lightbulb"
                            viewBox="0 0 16 16"
                          >
                            <path d="M2 6a6 6 0 1 1 12 0c0 2.688-1.467 4.896-3.5 6v1.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5V12C3.467 10.896 2 8.688 2 6z" />
                          </svg>
                        </div>
                        <div>
                          <h2 className="h4 mb-3">Innovative Thinking</h2>
                          <p className="text-secondary mb-0">
                            Our team explores new economic theories and business
                            strategies, fostering a deeper understanding of how
                            innovation shapes industries and markets.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="row g-3">
                {[
                  ["Vincent", "/joseph.webp"],
                  ["Joseph Dziri", "/joseph.webp"],
                  ["Charlie", "/joseph.webp"],
                  ["David", "/joseph.webp"],
                ].map((tuple, index) => (
                  <div className="col-sm-6" key={index}>
                    <div className="card text-center border-0 bg-light">
                      <div className="card-body px-4 py-4">
                        <div className="mb-4 mx-2 mx-md-5">
                          <Image
                            className="img-fluid rounded-circle"
                            layout="responsive"
                            alt="Crew Member Image"
                            width={1}
                            height={1}
                            src={tuple[1]}
                            priority={false}
                            loading="lazy"
                          />
                        </div>
                        <h5 className="fw-bold">{tuple[0]}</h5>
                        <div className="text-muted">Student at THI</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <div className="ms-lg-5 mb-5">
                <span className="text-muted">Our Team</span>
                <h2 className="display-5 fw-bold mb-3 mb-xl-5">
                  Meet the Team
                </h2>
                <p className="lead">
                  Our team consists of passionate individuals with diverse
                  backgrounds in economics, finance, and business analysis. Each
                  of us brings unique expertise, allowing us to cover a broad
                  range of topics, from international trade to investment
                  strategies.
                </p>
                <p className="lead">
                  We strive to bridge the gap between academic research and
                  real-world economic challenges. Our mission is to provide
                  valuable insights that inspire businesses, students, and
                  policymakers to make informed decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
