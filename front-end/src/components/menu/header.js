import React, { useEffect, useState } from "react";
import Breakpoint, { BreakpointProvider, setDefaultBreakpoints } from "react-socks";
import { Link } from '@reach/router';

import useOnclickOutside from "react-cool-onclickoutside";
import { walletProvider } from '../../scripts/artifacts/walletProvider'
setDefaultBreakpoints([
  { xs: 0 },
  { l: 1199 },
  { xl: 1200 }
]);

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        className: isCurrent ? 'active' : 'non-active',
      };
    }}
  />
);



const Header = function () {
  const [openMenu, setOpenMenu] = React.useState(false);
  const [walletAdress, setWalletAddress] = React.useState();

  const walletConnect = () => {
    walletProvider().then((stark) => setWalletAddress(stark.selectedAddress))
  }

  const checkWallet = () => {
    walletProvider().then((stark) => {
      if (stark.isConnected) {
        setWalletAddress(stark.selectedAddress)
      } else {
        setWalletAddress("");
      }
    })
  }

  const closeMenu = (): void => {
    setOpenMenu(false);
  };



  const [showmenu, btn_icon] = useState(false);
  useEffect(() => {
    checkWallet();
    const header = document.getElementById("myHeader");
    const totop = document.getElementById("scroll-to-top");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      btn_icon(false);
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        totop.classList.add("show");

      } else {
        header.classList.remove("sticky");
        totop.classList.remove("show");
      } if (window.pageYOffset > sticky) {
        closeMenu();
      }
    });

    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };

  }, []);
  return (
    <header id="myHeader" className='navbar white'>
      <div className='container'>
        <div className='row w-100-nav'>
          <div className='logo px-0'>
            <div className='navbar-title navbar-item'>
              <NavLink to="/">
                <h3 className='text-center'>Arctic</h3>
              </NavLink>
            </div>
          </div>

          <BreakpointProvider>
            <Breakpoint l down>
              {showmenu &&
                <div className='menu'>
                  <div className='navbar-item'>
                    <NavLink to="/" onClick={() => btn_icon(!showmenu)}>
                      Home
                    </NavLink>
                  </div>
                  <div className='navbar-item'>
                    <NavLink to="/apply" onClick={() => btn_icon(!showmenu)}>
                      Apply
                    </NavLink>
                  </div>
                </div>
              }
            </Breakpoint>

            <Breakpoint xl>
              <div className='navbar-item'>
                <NavLink to="/">
                  Home
                  <span className='lines'></span>
                </NavLink>
              </div>
              <div className='navbar-item'>
                <NavLink to="/apply">
                  Apply
                  <span className='lines'></span>
                </NavLink>
              </div>
            </Breakpoint>
          </BreakpointProvider>
          <div className='mainside'>
            {
              walletAdress != null ?
                (
                  <div className="wallet-connect">
                    Connected:
                    {String(walletAdress).substring(0, 6)}
                    ...
                    {String(walletAdress).substring(59)}
                  </div>

                ) :
                (
                  <>
                    <button onClick={walletConnect}>Connect Wallet{walletAdress}</button>
                  </>
                )
            }
          </div>

        </div>
        <button className="nav-icon" onClick={() => btn_icon(!showmenu)}>
          <div className="menu-line white"></div>
          <div className="menu-line1 white"></div>
          <div className="menu-line2 white"></div>
        </button>
      </div>
    </header>
  );
}
export default Header;