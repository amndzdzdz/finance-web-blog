export default function HeaderImage() {
  return (
    <>
      <div
        id="nav-image"
        className={`bg-image d-flex justify-content-center align-items-center`}
        style={{
          width: "100vw",
          height: "25vh",
          backgroundImage: 'url("/img.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-white">Financial Analysis and News</h1>
      </div>
      <div className="container-fluid" style={{ backgroundColor: "#073f67" }}>
        <div className="container text-center text-light w-50 pt-3 pb-3">
          Get all the latest news, reports and financial Analysis for leading
          companies around the world!
        </div>
      </div>
    </>
  );
}
