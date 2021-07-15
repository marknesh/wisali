import React from 'react'
import Layout from './Layout'

function AgencyList() {
    return (
        <Layout>
            <div>
  <div className="parallax titlebar" data-background="images/listings-parallax.jpg" data-color="rgba(48, 48, 48, 1)" data-color-opacity="0.8" data-img-width={800} data-img-height={505}>
    <div id="titlebar">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>Agency List</h2>
            {/* Breadcrumbs */}
            <nav id="breadcrumbs">
              <ul>
                <li><a href="/">Home</a></li>
                <li>Agency List</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Content */}
  <div className="container">
    <div className="row">
      <div className="col-md-6"> 
        {/* Agency */}
        <div className="agent agents-profile agency"> <a href="/agency-list" className="utf-agent-avatar"> <img src="images/agency-01.jpg" alt="" /> </a>
          <div className="utf-agent-content">
            <div className="utf-agent-name">
              <p className="text-alt">Agency</p>
              <div className="fp_pdate">1 Hour Ago</div>
              <h4><a href="/agency-list">Modern House Real Estate</a></h4>
              <ul className="utf-agent-contact-details">
                <li><i className="icon-material-outline-business" />Rome</li>
              </ul> 
              <ul className="utf-social-icons">
                <li><a className="facebook" href="#"><i className="icon-facebook" /></a></li>
                <li><a className="twitter" href="#"><i className="icon-twitter" /></a></li>
                <li><a className="linkedin" href="#"><i className="icon-linkedin" /></a></li>
                <li><a className="instagram" href="#"><i className="icon-instagram" /></a></li>
                <li><a className="gplus" href="#"><i className="icon-gplus" /></a></li>
              </ul>
            </div>
            <div className="clearfix" />
            <p>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text.</p>                      
          </div>
        </div>
      </div>	
      <div className="col-md-6"> 
        {/* Agency */}
        <div className="agent agents-profile agency"> <a href="/agency-list" className="utf-agent-avatar"> <img src="images/agency-02.jpg" alt="" /> </a>
          <div className="utf-agent-content">
            <div className="utf-agent-name">
              <p className="text-alt">Agency</p>	
              <div className="fp_pdate">7 Hours Ago</div>
              <h4><a href="/agency-list">House Real Estate</a></h4>
              <ul className="utf-agent-contact-details">
                <li><i className="icon-material-outline-business" />Belize</li>
              </ul> 
              <ul className="utf-social-icons">
                <li><a className="facebook" href="#"><i className="icon-facebook" /></a></li>
                <li><a className="twitter" href="#"><i className="icon-twitter" /></a></li>
                <li><a className="linkedin" href="#"><i className="icon-linkedin" /></a></li>
                <li><a className="instagram" href="#"><i className="icon-instagram" /></a></li>
                <li><a className="gplus" href="#"><i className="icon-gplus" /></a></li>
              </ul>
            </div>
            <div className="clearfix" />
            <p>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text.</p>                      
          </div>
        </div>
      </div>
      <div className="col-md-6"> 
        {/* Agency */}
        <div className="agent agents-profile agency"> <a href="/agency-list" className="utf-agent-avatar"> <img src="images/agency-03.jpg" alt="" /> </a>
          <div className="utf-agent-content">
            <div className="utf-agent-name">
              <p className="text-alt">Agency</p>
              <div className="fp_pdate">4 Hours Ago</div>
              <h4><a href="/agency-list">High-Rise Real Estate</a></h4>
              <ul className="utf-agent-contact-details">
                <li><i className="icon-material-outline-business" />Bologna</li>
              </ul> 
              <ul className="utf-social-icons">
                <li><a className="facebook" href="#"><i className="icon-facebook" /></a></li>
                <li><a className="twitter" href="#"><i className="icon-twitter" /></a></li>
                <li><a className="linkedin" href="#"><i className="icon-linkedin" /></a></li>
                <li><a className="instagram" href="#"><i className="icon-instagram" /></a></li>
                <li><a className="gplus" href="#"><i className="icon-gplus" /></a></li>
              </ul>
            </div>
            <div className="clearfix" />
            <p>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text.</p>                      
          </div>
        </div>
      </div>
      <div className="col-md-6"> 
        {/* Agency */}
        <div className="agent agents-profile agency"> <a href="/agency-list" className="utf-agent-avatar"> <img src="images/agency-04.jpg" alt="" /> </a>
          <div className="utf-agent-content">
            <div className="utf-agent-name">
              <p className="text-alt">Agency</p>
              <div className="fp_pdate">2 Hours Ago</div>
              <h4><a href="/agency-list">Country House Real Estate</a></h4>
              <ul className="utf-agent-contact-details">
                <li><i className="icon-material-outline-business" />Lima</li>
              </ul> 
              <ul className="utf-social-icons">
                <li><a className="facebook" href="#"><i className="icon-facebook" /></a></li>
                <li><a className="twitter" href="#"><i className="icon-twitter" /></a></li>
                <li><a className="linkedin" href="#"><i className="icon-linkedin" /></a></li>
                <li><a className="instagram" href="#"><i className="icon-instagram" /></a></li>
                <li><a className="gplus" href="#"><i className="icon-gplus" /></a></li>
              </ul>
            </div>
            <div className="clearfix" />
            <p>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text.</p>                      
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <div className="clearfix" />
        {/* Pagination */}
        <div className="utf-pagination-container margin-top-20">
          <nav className="pagination">
            <ul>
              <li><a href="#"><i className="fa fa-angle-left" /></a></li>
              <li><a href="#" className="current-page">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li className="blank">...</li>
              <li><a href="#">10</a></li>
              <li><a href="#"><i className="fa fa-angle-right" /></a></li>
            </ul>
          </nav>
        </div>
        {/* Pagination / End */} 
      </div>
    </div>
  </div>
  <div class="margin-top-65"></div>
</div>

            
        </Layo>
    )
}

export default AgencyList
