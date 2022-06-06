import React from "react";
import Clock from "../components/clock";
import { createGlobalStyle } from "styled-components";
import { Discord } from "react-bootstrap-icons";
import { Twitter } from "react-bootstrap-icons";
import { TrophyFill } from "react-bootstrap-icons";
import { getStarknet } from "get-starknet"

const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.white {
    background: #FAF6F1;
    border-bottom: solid 1px #ccc !important;
  }
  .imageSize{
    max-width: 50%;
  }
`;

const Colection = function () {
  const [openCheckout, setOpenCheckout] = React.useState(false);
  React.useEffect(() => {
    const starknet = getStarknet()
    console.log(starknet)
  },[])

  return (
    <div>
      <GlobalStyles />

      <section className="container">
        <div className="row mt-md-5 pt-md-4">
          <div className="col-md-6 text-center">
            <img
              src="./img/items/big-1.jpg"
              className="img-fluid img-rounded mb-sm-30 imageSize"
              alt=""
            />
          </div>
          <div className="col-md-6">
            <div className="item_info">
              Raffle ends in
              <div className="de_countdown">
                <Clock deadline="December, 30, 2022" />
              </div>
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
                  Winners 18
                </div>
              </div>
      
              <div className="spacer-40"></div>
              <div className="de_tab">
                <h3>Buy Ticket</h3>

                <div className="de_tab_content">
                  {/* button for checkout */}
                  <div className="d-flex flex-row mt-5">
                    <button className="btn-small">-</button>
                    <input
                      className="form-small"
                      type="text"
                      value="1"
                      readonly
                    />
                    <button className="btn-small">+</button>
                  </div>
                  <div className="d-flex flex-row mt-5">
                    <button
                      className="btn-main lead"
                      onClick={() => setOpenCheckout(true)}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}

      {openCheckout && (
        <div className="checkout">
          <div className="maincheckout">
            <button
              className="btn-close"
              onClick={() => setOpenCheckout(false)}
            >
              x
            </button>
            <div className="heading">
              <h3>Checkout</h3>
            </div>
            <p>
              You are about to purchase a{" "}
              <span className="bold">AnimeSailorClub #304</span>
              <span className="bold">from Monica Lucas</span>
            </p>
            <div className="detailcheckout mt-4">
              <div className="listcheckout">
                <h6>
                  Enter quantity.
                  <span className="color">10 available</span>
                </h6>
                <input
                  type="text"
                  name="buy_now_qty"
                  id="buy_now_qty"
                  className="form-control"
                />
              </div>
            </div>
            <div className="heading mt-3">
              <p>Your balance</p>
              <div className="subtotal">10.67856 ETH</div>
            </div>
            <div className="heading">
              <p>Service fee 2.5%</p>
              <div className="subtotal">0.00325 ETH</div>
            </div>
            <div className="heading">
              <p>You will pay</p>
              <div className="subtotal">0.013325 ETH</div>
            </div>
            <button className="btn-main lead mb-5">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Colection;
