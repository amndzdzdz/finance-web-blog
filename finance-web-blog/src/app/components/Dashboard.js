import React from "react";

export default function Dashboard({ input }) {
  let domain = input["domain"];

  return (
    <div className="m-5">
      <form>
        <div className="form-group">
          <input
            type="text"
            name="title"
            className="form-control"
            id="titleInput"
            placeholder="Title"
            defaultValue={"edit" in input ? input["heading"] : ""}
          ></input>
        </div>
        <div className="form-group mt-3">
          <input
            type="text"
            name="summary"
            className="form-control"
            id="summaryInput"
            placeholder="Enter a short description that will be displayed on the webpage"
            defaultValue={"edit" in input ? input["summary"] : ""}
          ></input>
        </div>
        <div className="form-group mt-3">
          <input
            type="text"
            className="form-control"
            name="author"
            id="author"
            placeholder="Author"
            defaultValue={"edit" in input ? input["author_name"] : ""}
          ></input>
        </div>
        <select
          className="form-select mt-3"
          aria-label="Default select example"
          name="domain"
        >
          <option defaultValue>
            {"edit" in input ? input["domain"] : "Select domain"}
          </option>
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
          defaultValue={"edit" in input ? parseInt(input["read_time"]) : ""}
        ></input>
        <textarea
          className="form-control min-vh-100 mt-3"
          placeholder="Content"
          name="content"
          defaultValue={"edit" in input ? input["content"] : ""}
        ></textarea>
      </form>
    </div>
  );
}
