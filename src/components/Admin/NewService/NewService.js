import { useState } from "react";
import { useHistory } from "react-router-dom";
import Sidebar from "../../Sidebar/Sidebar";

const NewService = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  let history = useHistory();

  const handleFileUpload = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const handleSubmit = (e) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("category", category);

    fetch("https://habitual-aeolian-celery.glitch.me/services", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          alert("Your Service is Added...!");
        }
        history.push("/");
      })
      .catch((error) => {
        console.error(error);
      });
    e.preventDefault();
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 mt-5">
          <Sidebar />
        </div>
        <div className="col-md-8 mt-5">
          <h1 className="font-weight-bold mb-3">New Service</h1>
          <div style={{ background: "lightgray" }} className="p-5 rounded mb-4">
            <form style={{ width: "600px", marginTop: "80px" }}>
              <div className="form-group">
                <input
                  type="text"
                  name="title"
                  className="form-control form-control-lg"
                  placeholder="Enter Service Title"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="d-flex justify-content-between">
                <div className="form-group">
                  <input
                    type="text"
                    name="category"
                    className="form-control form-control-lg"
                    placeholder="Enter Service Category"
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="price"
                    className="form-control form-control-lg"
                    placeholder="Enter Service Price"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group">
                <textarea
                  name="description"
                  className="form-control form-control-lg"
                  placeholder="Enter Description"
                  cols="30"
                  rows="5"
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div className="form-group">
                <span style={{ fontSize: "1.5rem" }}>Add Service Image</span>
                <input
                  onChange={handleFileUpload}
                  type="file"
                  className="form-control-lg"
                  name="icon"
                />
              </div>
              <div className="form-group">
                <input
                  onClick={handleSubmit}
                  type="submit"
                  value="submit"
                  className="btn btn-warning btn-lg"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewService;
