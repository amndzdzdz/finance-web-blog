import styles from "./HeaderImage.module.css";

export default function HeaderImage() {
  return (
    <>
      <div
        id="nav-image"
        className={`bg-image d-flex justify-content-center align-items-center ${styles.headerImage}`}
      >
        <h1 className="text-white">Financial Analysis and News</h1>
      </div>

      <div className="container-fluid border-top bg-primary py-3">
        <div className="container text-center text-light w-100 w-md-50">
          Get all the latest news, reports, and financial analysis for leading
          companies around the world!
        </div>
      </div>
    </>
  );
}
