import React, { Component } from "react";
import Clock from "../components/clock";
import Footer from "../components/footer";

export default class ProjectForm extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.state = {
      files: [],
    };
  }

  onChange(e) {
    var files = e.target.files;
    console.log(files);
    var filesArr = Array.prototype.slice.call(files);
    console.log(filesArr);
    document.getElementById("file_name").style.display = "none";
    this.setState({ files: [...this.state.files, ...filesArr] });
  }

  render() {
    return (
      <div>
        <section className="jumbotron breadcumb no-bg">
          <div className="mainbreadcumb">
            <div className="container">
              <div className="row m-10-hor">
                <div className="col-12">
                  <h1 className="text-center">Project Form</h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container">
          <div className="row">
            <div className="col-lg-7 offset-lg-1 mb-5">
              <form id="form-create-item" className="form-border" action="#">
                <div className="field-set">
                  <h5>Upload Avatar Image</h5>

                  <div className="d-create-file">
                    <p id="file_name">PNG, JPG, GIF, WEBP or MP4. Max 200mb.</p>
                    {this.state.files.map((x) => (
                      <p key="{index}">
                        PNG, JPG, GIF, WEBP or MP4. Max 200mb.{x.name}
                      </p>
                    ))}
                    <div className="browse">
                      <input
                        type="button"
                        id="get_file"
                        className="btn-main"
                        value="Browse"
                      />
                      <input
                        id="upload_file"
                        type="file"
                        multiple
                        onChange={this.onChange}
                      />
                    </div>
                  </div>

                  <div className="spacer-single"></div>

                  <h5>Name</h5>
                  <input
                    type="text"
                    name="projectName"
                    id="projectName"
                    className="form-control"
                    placeholder="Project name"
                  />

                  <div className="spacer-10"></div>

                  <h5>Description</h5>
                  <textarea
                    data-autoresize
                    name="desc"
                    id="desc"
                    className="form-control"
                    placeholder="Description about project"
                  ></textarea>

                  <div className="spacer-10"></div>

                  <h5>Discord</h5>
                  <input
                    type="text"
                    name="discord"
                    id="discord"
                    className="form-control"
                    placeholder="Discord url, if you have"
                  />

                  <div className="spacer-10"></div>

                  <h5>Twitter</h5>
                  <input
                    type="text"
                    name="twitter"
                    id="twitter"
                    className="form-control"
                    placeholder="Twitter url, if you have"
                  />

                  <div className="spacer-10"></div>

                  <h5>Price</h5>
                  <input
                    type="text"
                    name="mintPrice"
                    id="mintPrice"
                    className="form-control"
                    placeholder="Mint price, if you decide"
                  />

                  <div className="spacer-10"></div>

                  <h5>Date</h5>
                  <input
                    type="text"
                    name="mintDate"
                    id="mintDate"
                    className="form-control"
                    placeholder="TBD, Leave blank if you haven't decided"
                  />

                  <div className="spacer-10"></div>

                  <h5>Supply</h5>
                  <input
                    type="text"
                    name="supply"
                    id="supply"
                    className="form-control"
                    placeholder="TBD, Leave blank if you haven't decided"
                  />

                  <div className="spacer-10"></div>

                  <h5>WhiteList Supply Cap</h5>
                  <input
                    type="text"
                    name="wlSupplyCap"
                    id="wlSupplyCap"
                    className="form-control"
                    placeholder="WhiteList Supply Cap"
                  />

                  <div className="spacer-10"></div>

                  <h5>Arctic Whitelist Allocation (%) </h5>
                  <input
                    type="text"
                    name="arcticWlAlloc"
                    id="arcticWlAlloc"
                    className="form-control"
                    placeholder="eg. 0, 10%, 20%, 30%."
                  />

                  <div className="spacer-10"></div>
                  <input
                        type="button"
                        id="projectSend"
                        className="btn-main"
                        value="Submit"
                      />
                </div>
              </form>
            </div>
          </div>
        </section>
        </div>
    );
  }
}
