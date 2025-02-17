export default function Dashboard() {
  return (
    <div className="container m-5">
      <form>
        <div className="form-group">
          <input
            type="text"
            name="title"
            className="form-control"
            id="titleInput"
            placeholder="Title"
          ></input>
        </div>
        <div className="form-group mt-3">
          <input
            type="text"
            name="summary"
            className="form-control"
            id="summaryInput"
            placeholder="Enter a short description that will be displayed on the webpage"
          ></input>
        </div>
        <div className="form-group mt-3">
          <input
            type="text"
            className="form-control"
            name="author"
            id="author"
            placeholder="Author"
          ></input>
        </div>
        <select
          className="form-select mt-3"
          aria-label="Default select example"
          name="domain"
        >
          <option selected>Select domain</option>
          <option value="1">Microeconomy</option>
          <option value="2">Macroeconomy</option>
          <option value="3">Politics</option>
        </select>
        <input
          type="number"
          className="form-control mt-3"
          id="timeInput"
          name="time"
          placeholder="Estimated Read time"
        ></input>
        <textarea
          className="form-control min-vh-100 mt-3"
          placeholder="Content"
          name="content"
        ></textarea>
        <button type="submit" className="btn btn-primary mt-3">
          Upload post
        </button>
      </form>
    </div>
  );
}
