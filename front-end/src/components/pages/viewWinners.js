import React from "react";
import Footer from "../components/footer";
import { Discord } from "react-bootstrap-icons";
import { Twitter } from "react-bootstrap-icons";
import { TrophyFill } from "react-bootstrap-icons";

const explore = () => (
  <div>
    <section className="jumbotron breadcumb no-bg">
      <div className="mainbreadcumb">
        <div className="container">
          <div className="row m-10-hor">
            <div className="col-12">
              <h2 className="text-center">Winners</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="container">
      <div className="row mt-md-5 pt-md-4">
        <div className="winners_img text-center">
          <img
            src="./img/items/big-1.jpg"
            className="img-fluid img-rounded mb-sm-30"
            alt=""
          />
        </div>
        <div className="col-md-6">
          <div className="item_info">
            <h2>Pinky Ocean</h2>
            <div className="item_info_counts">
              <div className="item_info_type">
                <i>
                  <Twitter />
                </i>
                Twitter
              </div>
              <div className="item_info_views">
                <i>
                  <Discord />
                </i>
                Discord
              </div>
              <div className="item_info_like">
                <i>
                  <TrophyFill />
                </i>
                18
              </div>
            </div>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="container">
      <div className="row">
        <div className="col-lg-12">
          <table className="table de-table table-rank">
            <thead>
              <tr>
                <th scope="col">Winners</th>
                <th scope="col">Entries</th>
                <th scope="col">Claim</th>
              </tr>
              <tr></tr>
            </thead>
            <tbody>
              <tr>
                <td>D4h8miatUAco86PTh7dm6aMXtc229SdfQ9MWoPMdvGVW</td>
                <td>25</td>
                <td className="d-plus">Claimed</td>
              </tr>
              <tr>
                <td>D4h8miatUAco86PTh7dm6aMXtc229SdfQ9MWoPMdvGVW</td>
                <td>25</td>
                <td className="d-plus">Claimed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);
export default explore;
