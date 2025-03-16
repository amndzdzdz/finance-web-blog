import "bootstrap/dist/css/bootstrap.min.css";

export default function Comment({ commentEntry }) {
  return (
    <div className="container bg-white mb-3">
      <div className="row d-flex justify-content-center">
        <div className="col-md-8">
          <div className="card p-3">
            <div className="d-flex justify-content-between align-items-center">
              <div className="user d-flex flex-row align-items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    width="20"
                    height="20"
                    viewBox="0 0 256 256"
                    xmlSpace="preserve"
                    className="me-1"
                  >
                    <g
                      style={{
                        stroke: "none",
                        strokeWidth: 0,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: "none",
                        fillRule: "nonzero",
                        opacity: 1,
                      }}
                      transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                    >
                      <path
                        d="M 45 0 C 20.147 0 0 20.147 0 45 c 0 24.853 20.147 45 45 45 s 45 -20.147 45 -45 C 90 20.147 69.853 0 45 0 z M 45 22.007 c 8.899 0 16.14 7.241 16.14 16.14 c 0 8.9 -7.241 16.14 -16.14 16.14 c -8.9 0 -16.14 -7.24 -16.14 -16.14 C 28.86 29.248 36.1 22.007 45 22.007 z M 45 83.843 c -11.135 0 -21.123 -4.885 -27.957 -12.623 c 3.177 -5.75 8.144 -10.476 14.05 -13.341 c 2.009 -0.974 4.354 -0.958 6.435 0.041 c 2.343 1.126 4.857 1.696 7.473 1.696 c 2.615 0 5.13 -0.571 7.473 -1.696 c 2.083 -1 4.428 -1.015 6.435 -0.041 c 5.906 2.864 10.872 7.591 14.049 13.341 C 66.123 78.957 56.135 83.843 45 83.843 z"
                        style={{
                          stroke: "none",
                          strokeWidth: 1,
                          strokeDasharray: "none",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          fill: "rgb(0,0,0)",
                          fillRule: "nonzero",
                          opacity: 1,
                          strokeLinecap: "round",
                        }}
                        transform="matrix(1 0 0 1 0 0)"
                      />
                    </g>
                  </svg>

                  <span className="font-weight-bold text-primary">
                    {commentEntry.name}
                  </span>
                  <span className="me-1 font-weight-bold">:</span>
                  <span className="font-weight-bold pe-5">
                    {commentEntry.comment}
                  </span>
                </span>
              </div>

              <small>{commentEntry.date}</small>
            </div>

            <div className="action d-flex justify-content-between mt-2 align-items-center">
              <div className="icons align-items-center">
                <i className="fa fa-star text-warning"></i>
                <i className="fa fa-check-circle-o check-icon"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
