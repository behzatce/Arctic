import React from 'react';
import ColumnRaffles from '../components/columnRaffles';
import Footer from '../components/footer';




const explore= () => (
<div>

  <section className='jumbotron breadcumb no-bg'>
    <div className='mainbreadcumb'>
      <div className='container'>
        <div className='row m-10-hor'>
          <div className='col-12'>
            <h1 className='text-center'>Raffle hall</h1>
          </div>
        </div>
      </div>
    </div>
    <div className='row'>
          <div className='col-lg-12'>
              <div className="items_filter">
                <ul className="de_nav">
                    <li id='Mainbtn' className="active"><span onClick="">raffles</span></li>
                    <li id='Mainbtn1' className=""><span onClick="">auction</span></li>
                </ul>
            </div>
          </div>
        </div>
  </section>

  <section className='container'>
    <ColumnRaffles/>
  </section>


  <Footer />
</div>

);
export default explore;