import React, { Component } from "react";
import Footer from "../components/footer";
import $ from 'jquery';
import {apply} from '../../scripts/controller/apply'
export default class ApplyPage extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.state = {
      files: [],
    };
  }
    applyForm () {

    var result = { };
      $.each($('form').serializeArray(), function() {
        result[this.name] = this.value;
      });
        apply(result)
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
                  <h1 className="text-center">Apply</h1>
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
                  <h5>Name</h5>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    placeholder="Project name"
                  />                

                  <div className="spacer-10"></div>

                  <h5>Supply</h5>
                  <input
                    type="text"
                    name="supply"
                    id="supply"
                    className="form-control"
                    placeholder="Supply of project, if you decide"
                  />

                  <div className="spacer-10"></div>

                  <h5>Whitelist Supply Cap</h5>
                  <input
                    type="text"
                    name="wlSupplyCap"
                    id="wlSupplyCap"
                    className="form-control"
                    placeholder="eg. %20"
                  />

                  <div className="spacer-10"></div>

                  <h5>Arctic Whitelist Allocation(%)</h5>
                  <input
                    type="text"
                    name="arcticWlAlloc"
                    id="arcticWlAlloc"
                    className="form-control"
                    placeholder="eg. %20"
                  />

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

                  <h5>Contact</h5>
                  <input
                    type="text"
                    name="contact"
                    id="contact"
                    className="form-control"
                    placeholder="Any socail media or email"
                  />
                  <div className="spacer-10"></div>

                  <button
                  onClick={this.applyForm}
                    type="button"
                    id="submit"
                    className="btn-main"
                  >Submit</button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}
