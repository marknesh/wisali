import React from 'react'
import Layout from './Layout'

function AgencyProfile() {
    return (
        <Layout>
            <div>
  <div className="parallax titlebar" data-background="images/listings-parallax.jpg" data-color="rgba(48, 48, 48, 1)" data-color-opacity="0.8" data-img-width={800} data-img-height={505}>
    <div id="titlebar">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>House Real Estate</h2>
            {/* Breadcrumbs */}
            <nav id="breadcrumbs">
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/agency-list">Agency Profile</a></li>
                <li>House Real Estate</li>
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
      <div className="col-md-12"> 
        {/* Agency */}
        <div className="agent agents-profile agency"> <a href="/agency-profile" className="utf-agent-avatar"> <img src="images/agency-01.jpg" alt="" /> </a>
          <div className="utf-agent-content">
            <div className="utf-agent-name">
              <p className="text-alt">Agency</p>
              <div className="fp_pdate">6 Hours Ago</div>	
              <h4><a href="/agency-profile">House Real Estate</a></h4>
              <ul className="utf-agent-contact-details">
                <li><i className="icon-material-outline-business" />Italy</li>
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
            <p>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text.</p>                      
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Content */}
  <div className="container">
    <div className="row sticky-wrapper">
      <div className="col-lg-8 col-md-8">
        <div className="style-1 agency-tabs"> 
          {/* Tabs Navigation */}
          <ul className="tabs-nav">
            <li className="active"><a href="#tab1">Our Properties</a></li>
            <li><a href="#tab2">Our Agents</a></li>
          </ul>
          {/* Tabs Content */}
          <div className="tabs-container">
            <div className="tab-content" id="tab1"> 
              {/* Sorting */}
              <div className="utf-sort-box-aera">
                <div className="sort-by">
                  <label>Sort By:</label>
                  <div className="sort-by-select">
                    <select data-placeholder="Default Properties" className="utf-chosen-select-single-item">
                      <option>Default Properties</option>
                      <option>Low to High Price</option>
                      <option>High to Low Price</option>
                      <option>Newest Properties</option>
                      <option>Oldest Properties</option>
                    </select>
                  </div>
                </div>
                <div className="utf-layout-switcher"> 
                  <a href="#" className="list"><i className="sl sl-icon-list" /></a> 
                  <a href="#" className="grid"><i className="sl sl-icon-grid" /></a> 
                </div>
              </div>
              {/* Listings */}
              <div className="utf-listings-container-area list-layout">                 
                {/* Listing Item */}
                <div className="utf-listing-item"> <a href="#" className="utf-smt-listing-img-container">
                    <div className="utf-listing-badges-item"> <span className="for-sale">For Sale</span> </div>
                    <div className="utf-listing-img-content-item">
                      <img className="utf-user-picture" src="images/user_1.jpg" alt="user_1" />
                      <span className="like-icon with-tip" data-tip-content="Bookmark" /> 
                    </div>
                    <div className="utf-listing-carousel-item">
                      <div><img src="images/listing-01.jpg" alt="" /></div>
                      <div><img src="images/listing-01.jpg" alt="" /></div>
                      <div><img src="images/listing-01.jpg" alt="" /></div>
                    </div>
                  </a>
                  <div className="utf-listing-content">
                    <div className="utf-listing-title">
                      <span className="utf-listing-price">$22,000/mo</span>
                      <h4><a href="#">Renovated Luxury Apartment</a></h4>
                      <span className="utf-listing-address"><i className="icon-material-outline-location-on" /> 2021 San Pedro, Los Angeles 90015</span>
                    </div>
                    <ul className="listing-details">
                      <li><i className="fa fa-bed" /> Beds<span>3</span></li>
                      <li><i className="icon-feather-codepen" /> Baths<span>2</span></li>
                      <li><i className="fa fa-car" /> Garages<span>2</span></li>					  					 
                      <li><i className="icon-line-awesome-arrows" /> Sq Ft<span>1530</span></li>
                    </ul>
                    <div className="utf-listing-user-info"><a href="/agents-profile"><i className="icon-line-awesome-user" /> Julius Ogaden</a> <span>13 Days Ago</span></div>
                  </div>
                </div>
                {/* Listing Item / End */} 
                {/* Listing Item */}
                <div className="utf-listing-item"> <a href="#" className="utf-smt-listing-img-container">
                    <div className="utf-listing-badges-item"> <span className="for-rent">For Rent</span> </div>
                    <div className="utf-listing-img-content-item">
                      <img className="utf-user-picture" src="images/user_1.jpg" alt="user_1" />
                      <span className="like-icon with-tip" data-tip-content="Bookmark" /> 
                    </div>
                    <img src="images/listing-02.jpg" alt="" /> </a>
                  <div className="utf-listing-content">
                    <div className="utf-listing-title">
                      <span className="utf-listing-price">$25,000/mo</span>
                      <h4><a href="#">Renovated Luxury Apartment</a></h4>
                      <span className="utf-listing-address"><i className="icon-material-outline-location-on" /> 2021 San Pedro, Los Angeles 90015</span>
                    </div>
                    <ul className="listing-details">
                      <li><i className="fa fa-bed" /> Beds<span>3</span></li>
                      <li><i className="icon-feather-codepen" /> Baths<span>2</span></li>
                      <li><i className="fa fa-car" /> Garages<span>2</span></li>					  					 
                      <li><i className="icon-line-awesome-arrows" /> Sq Ft<span>1530</span></li>
                    </ul>
                    <div className="utf-listing-user-info"><a href="/agents-profile"><i className="icon-line-awesome-user" /> Mark Omari</a> <span>10 Days Ago</span></div>
                  </div>
                </div>
                {/* Listing Item / End */} 
                {/* Listing Item */}
                <div className="utf-listing-item"> <a href="#" className="utf-smt-listing-img-container">
                    <div className="utf-listing-badges-item"> <span className="for-rent">For Rent</span> </div>
                    <div className="utf-listing-img-content-item">
                      <img className="utf-user-picture" src="images/user_1.jpg" alt="user_1" />
                      <span className="like-icon with-tip" data-tip-content="Bookmark" /> 
                    </div>
                    <img src="images/listing-03.jpg" alt="" /> </a>
                  <div className="utf-listing-content">
                    <div className="utf-listing-title">
                      <span className="utf-listing-price">$18,000/mo</span>
                      <h4><a href="#">Renovated Luxury Apartment</a></h4>
                      <span className="utf-listing-address"><i className="icon-material-outline-location-on" /> 2021 San Pedro, Los Angeles 90015</span>
                    </div>
                    <ul className="listing-details">
                      <li><i className="fa fa-bed" /> Beds<span>3</span></li>
                      <li><i className="icon-feather-codepen" /> Baths<span>2</span></li>
                      <li><i className="fa fa-car" /> Garages<span>2</span></li>					  					 
                      <li><i className="icon-line-awesome-arrows" /> Sq Ft<span>1530</span></li>
                    </ul>
                    <div className="utf-listing-user-info"><a href="/agents-profile"><i className="icon-line-awesome-user" /> Samson Mendel</a> <span>15 Days Ago</span></div>
                  </div>                  
                </div>
                {/* Listing Item / End */} 
                {/* Listing Item */}
                <div className="utf-listing-item"> <a href="#" className="utf-smt-listing-img-container">
                    <div className="utf-listing-badges-item"> <span className="for-sale">For Sale</span> </div>
                    <div className="utf-listing-img-content-item">
                      <img className="utf-user-picture" src="images/user_1.jpg" alt="user_1" />
                      <span className="like-icon with-tip" data-tip-content="Bookmark" /> 
                    </div>
                    <div className="utf-listing-carousel-item">
                      <div><img src="images/listing-04.jpg" alt="" /></div>
                      <div><img src="images/listing-04.jpg" alt="" /></div>
                    </div>
                  </a>
                  <div className="utf-listing-content">
                    <div className="utf-listing-title">
                      <span className="utf-listing-price">$15,000/mo</span>
                      <h4><a href="#">Renovated Luxury Apartment</a></h4>
                      <span className="utf-listing-address"><i className="icon-material-outline-location-on" /> 2021 San Pedro, Los Angeles 90015</span>
                    </div>
                    <ul className="listing-details">
                      <li><i className="fa fa-bed" /> Beds<span>3</span></li>
                      <li><i className="icon-feather-codepen" /> Baths<span>2</span></li>
                      <li><i className="fa fa-car" /> Garages<span>2</span></li>					  					 
                      <li><i className="icon-line-awesome-arrows" /> Sq Ft<span>1530</span></li>
                    </ul>
                    <div className="utf-listing-user-info"><a href="/agents-profile"><i className="icon-line-awesome-user" /> John Williams</a> <span>24 Days Ago</span></div>
                  </div>                  
                </div>                
              </div>
              {/* Listings Container / End */} 
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
            <div className="tab-content" id="tab2"> 
              {/* Agents Container */}
              <div className="row"> 
                <div className="col-lg-4 col-md-6 col-xs-12">
                  <div className="agent">
                    <div className="utf-agent-avatar"> <a href="/agents-profile"> <img src="images/agent-01.jpg" alt="" /> <span className="view-profile-btn">View Profile</span> </a> </div>
                    <div className="utf-agent-content">
                      <div className="utf-agent-name">
                        <h4><a href="/agents-profile">Leon Jamal</a></h4>
                        <span>Agent In Afghanistan</span> 
                      </div>                      
                    </div>
                  </div>
                </div>
                {/* Agent / End */} 
                {/* Agent */}
                <div className="col-lg-4 col-md-6 col-xs-12">
                  <div className="agent">
                    <div className="utf-agent-avatar"> <a href="/agents-profile"> <img src="images/agent-02.jpg" alt="" /> <span className="view-profile-btn">View Profile</span> </a> </div>
                    <div className="utf-agent-content">
                      <div className="utf-agent-name">
                        <h4><a href="/agents-profile">Luke Bernard</a></h4>
                        <span>Agent In Venice</span> 
                      </div>                      
                    </div>
                  </div>
                </div>
                {/* Agent / End */} 
                {/* Agent */}
                <div className="col-lg-4 col-md-6 col-xs-12">
                  <div className="agent">
                    <div className="utf-agent-avatar"> <a href="/agents-profile"> <img src="images/agent-03.jpg" alt="" /> <span className="view-profile-btn">View Profile</span> </a> </div>
                    <div className="utf-agent-content">
                      <div className="utf-agent-name">
                        <h4><a href="/agents-profile">Karen Bigalow</a></h4>
                        <span>Agent In Rome</span> 
                      </div>                      
                    </div>
                  </div>
                </div>
                {/* Agent / End */} 
                {/* Agent */}
                <div className="col-lg-4 col-md-6 col-xs-12">
                  <div className="agent">
                    <div className="utf-agent-avatar"> <a href="/agents-profile"> <img src="images/agent-04.jpg" alt="" /> <span className="view-profile-btn">View Profile</span> </a> </div>
                    <div className="utf-agent-content">
                      <div className="utf-agent-name">
                        <h4><a href="/agents-profile">Tracy Nancy</a></h4>
                        <span>Agent In Milan</span> 
                      </div>                      
                    </div>
                  </div>
                </div>
                {/* Agent / End */}
                {/* Agent */}
                <div className="col-lg-4 col-md-6 col-xs-12">
                  <div className="agent">
                    <div className="utf-agent-avatar"> <a href="/agents-profile"> <img src="images/agent-05.jpg" alt="" /> <span className="view-profile-btn">View Profile</span> </a> </div>
                    <div className="utf-agent-content">
                      <div className="utf-agent-name">
                        <h4><a href="/agents-profile">Esther Mordecai</a></h4>
                        <span>Agent In Pisa</span> 
                      </div>                      
                    </div>
                  </div>
                </div>
                {/* Agent / End */}
                {/* Agent */}
                <div className="col-lg-4 col-md-6 col-xs-12">
                  <div className="agent">
                    <div className="utf-agent-avatar"> <a href="/agents-profile"> <img src="images/agent-06.jpg" alt="" /> <span className="view-profile-btn">View Profile</span> </a> </div>
                    <div className="utf-agent-content">
                      <div className="utf-agent-name">
                        <h4><a href="/agents-profile">Bill Mazden</a></h4>
                        <span>Agent In Naples</span> 
                      </div>                      
                    </div>
                  </div>
                </div>
                {/* Agent / End */}
                {/* Agent */}
                <div className="col-lg-4 col-md-6 col-xs-12">
                  <div className="agent">
                    <div className="utf-agent-avatar"> <a href="/agents-profile"> <img src="images/agent-07.jpg" alt="" /> <span className="view-profile-btn">View Profile</span> </a> </div>
                    <div className="utf-agent-content">
                      <div className="utf-agent-name">
                        <h4><a href="/agents-profile">Naim Sims</a></h4>
                        <span>Agent In Amalfi</span> 
                      </div>                      
                    </div>
                  </div>
                </div>
                {/* Agent / End */} 
                {/* Agent */}
                <div className="col-lg-4 col-md-6 col-xs-12">
                  <div className="agent">
                    <div className="utf-agent-avatar"> <a href="/agents-profile"> <img src="images/agent-08.jpg" alt="" /> <span className="view-profile-btn">View Profile</span> </a> </div>
                    <div className="utf-agent-content">
                      <div className="utf-agent-name">
                        <h4><a href="/agents-profile">Pamela Osaka</a></h4>
                        <span>Agent In Siena</span> 
                      </div>                      
                    </div>
                  </div>
                </div>
                {/* Agent / End */}
                {/* Agent */}
                <div className="col-lg-4 col-md-6 col-xs-12">
                  <div className="agent">
                    <div className="utf-agent-avatar"> <a href="/agents-profile"> <img src="images/agent-09.jpg" alt="" /> <span className="view-profile-btn">View Profile</span> </a> </div>
                    <div className="utf-agent-content">
                      <div className="utf-agent-name">
                        <h4><a href="/agents-profile">John Baptista</a></h4>
                        <span>Agent In Bologna</span> 
                      </div>                      
                    </div>
                  </div>
                </div>
                {/* Agent / End */}
                {/* Agent */}
                <div className="col-lg-4 col-md-6 col-xs-12">
                  <div className="agent">
                    <div className="utf-agent-avatar"> <a href="/agents-profile"> <img src="images/agent-10.jpg" alt="" /> <span className="view-profile-btn">View Profile</span> </a> </div>
                    <div className="utf-agent-content">
                      <div className="utf-agent-name">
                        <h4><a href="/agents-profile">Daniel Lions</a></h4>
                        <span>Agent In Lucca</span> 
                      </div>                      
                    </div>
                  </div>
                </div>
                {/* Agent / End */}
                {/* Agent */}
                <div className="col-lg-4 col-md-6 col-xs-12">
                  <div className="agent">
                    <div className="utf-agent-avatar"> <a href="/agents-profile"> <img src="images/agent-01.jpg" alt="" /> <span className="view-profile-btn">View Profile</span> </a> </div>
                    <div className="utf-agent-content">
                      <div className="utf-agent-name">
                        <h4><a href="/agents-profile">Zena Marion</a></h4>
                        <span>Agent In Matera</span> 
                      </div>                      
                    </div>
                  </div>
                </div>
                {/* Agent / End */}
                {/* Agent */}
                <div className="col-lg-4 col-md-6 col-xs-12">
                  <div className="agent">
                    <div className="utf-agent-avatar"> <a href="/agents-profile"> <img src="images/agent-02.jpg" alt="" /> <span className="view-profile-btn">View Profile</span> </a> </div>
                    <div className="utf-agent-content">
                      <div className="utf-agent-name">
                        <h4><a href="/agents-profile"> Kennedy Obama </a></h4>
                        <span>Agent In Genoa</span> 
                      </div>                      
                    </div>
                  </div>
                </div>
                {/* Agent / End */}	
              </div>
              {/* Agents Container / End */}               
            </div>
          </div>
        </div>
      </div>
      {/* Sidebar */}
      <div className="col-lg-4 col-md-4">
        <div className="sidebar"> 
          <div className="widget utf-sidebar-widget-item">
            <div className="utf-detail-banner-add-section">
              <a href="#"><img src="images/banner-add-2.jpg" alt="banner-add-2" /></a>
            </div>             
          </div>
          <div className="utf-sidebar-widget-item">
            <div className="utf-boxed-list-headline-item">
              <h3>Contact Us</h3>
            </div>
            <div className="widget">
              <div className="agefnt-widget">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Phone" />
                <textarea defaultValue={"Message..."} />
                <button className="button fullwidth margin-top-5">Send Message</button>
              </div>            
            </div>
          </div>
          {/* Widget / End */} 
          {/* Widget */}
          <div className="utf-sidebar-widget-item">
            <div className="utf-boxed-list-headline-item">
              <h3>Our Location</h3>
            </div>	
            <div className="widget">
              <div id="propertyMap-container" className="agency-map">
                <div id="propertyMap" data-latitude="48.8566" data-longitude="2.3522" data-map-icon="im im-icon-Hamburger" />
              </div>
            </div>
          </div>
          {/* Widget / End */} 
        </div>
      </div>
      {/* Sidebar / End */} 
    </div>
  </div>
  <div class="margin-top-65"></div>
</div>

            
        </Layout>
    )
}

export default AgencyProfile
