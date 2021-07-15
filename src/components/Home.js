import React from 'react'
import { Link } from 'react-router-dom'
import Layout from './Layout'

function Home() {
    return (
        <Layout>
          
        
            <div id="map-container" className="homepage-map margin-bottom-0">
      <div id="map"> 
        {/* map goes here */} 
      </div>
      {/* Map Navigation */} 
      <a href="#" id="scrollEnabling" title="Enable or disable scrolling on map">Enable Scrolling</a>
      <ul id="mapnav-buttons">
        <li><a href="#" id="prevpoint" title="Previous point on map">Prev</a></li>
        <li><a href="#" id="nextpoint" title="Next point on mp">Next</a></li>
      </ul>        
    </div>
    {/* Main Search Container */}
    <div className="utf-main-search-container-area inner-map-search-block">
      <div className="container">
        <div className="row">
          <div className="col-md-12">             
            <form className="utf-main-search-form-item">              
              {/* Type */}
              <div className="search-type" style={{display: 'none'}}>
                <label className="active"><input className="first-tab" name="tab" defaultChecked="checked" type="radio" />Any Status</label>
                <label><input name="tab" type="radio" />For Sale</label>
                <label><input name="tab" type="radio" />For Rent</label>
                <div className="utf-search-type-arrow" />
              </div>
              {/* Box */}
              <div className="utf-main-search-box-area"> 
                {/* Row With Forms */}
                <div className="row with-forms"> 
                  {/* Status */}
                  <div className="col-md-2 col-sm-4">
                    <select data-placeholder="Select City" title="Select City" className="utf-chosen-select-single-item">
                      <option>Countries</option>
                      <option>Spain</option>
                      <option>France</option>
                      <option>Switzerland</option>
                      <option>Austria</option>
                      <option>Germany</option>
                      <option>Italy</option>
                      <option>USA</option>
                      <option>Britain</option>
                      <option>Kenya</option>
                      <option>Thailand</option>  
                    </select> 
                  </div>
                  {/* Property Type */}
                  <div className="col-md-2 col-sm-4">
                    <select data-placeholder="Property Type" className="utf-chosen-select-single-item">
                      <option>Property Type</option>
                      <option>Apartment House</option>
                      <option>House</option>
                      <option>Apartment</option>
                      <option>Room</option>
                      <option>Garage</option>
                      <option>Commercial</option>
                      <option>Property</option>
                      <option>Land</option>
                    </select>
                  </div>
                  {/* Status */}
                  <div className="col-md-2 col-sm-4">
                    <select data-placeholder="Any Status" className="utf-chosen-select-single-item">
                      <option>Any Status</option>
                      <option>For Sale</option>
                      <option>For Rent</option>
                    </select>
                  </div>
                  {/* Main Search Input */}
                  <div className="col-md-6">
                    <div className="utf-main-search-input-item">
                      <input type="text" placeholder="Enter Keywords..." defaultValue />
                      <button className="button"><i className="fa fa-search" /> Search</button>
                    </div>
                  </div>
                </div>
                {/* Row With Forms / End */}                                
              </div>              
            </form>            
          </div>
        </div>
      </div>
    </div>
    {/* Main Search Container / End */}
    {/* Featured */}
    <div className="container">
      <div className="row">
        <div className="col-md-12 margin-top-55">	
          <div className="utf-section-headline-item centered margin-bottom-30 margin-top-0">
            <h3 className="headline"><span>Most Featured Properties</span> Featured Properties</h3>
            <p className="utf-slogan-text">Lorem Ipsum is simply dummy text printing and type setting industry Lorem Ipsum been industry standard dummy text ever since when unknown printer took a galley.</p>
          </div>  
        </div>
        {/* Carousel */}
        <div className="col-md-12">
          <div className="carousel"> 
            {/* Listing Item */}
            <div className="utf-carousel-item-area">
              <div className="utf-listing-item compact"> 
                <Link to="/single-property-page-1" className="utf-smt-listing-img-container">
                  <div className="utf-listing-badges-item"> <span className="for-rent">For Rent</span> </div> 
                  <div className="utf-listing-img-content-item">
                    <span className="utf-listing-compact-title-item">Renovated Luxury Apartment <i>$18,000/mo</i></span>
                  </div>
                  <img src="images/listing-01.jpg" alt="" />
                  <ul className="listing-hidden-content">
                    <li><i className="fa fa-bed" /> Beds <span>3</span></li>
                    <li><i className="icon-feather-codepen" /> Baths <span>2</span></li>
                    <li><i className="fa fa-car" /> Garages <span>2</span></li>
                    <li><i className="fa fa-arrows-alt" /> Sq Ft <span>780</span></li>
                  </ul>
                </Link> 
              </div>
            </div>
            {/* Listing Item / End */} 
            {/* Listing Item */}
            <div className="utf-carousel-item-area">
              <div className="utf-listing-item compact"> 
                <a href="single-property-page-1.html" className="utf-smt-listing-img-container">
                  <div className="utf-listing-badges-item"> <span className="for-sale">For Sale</span> </div>
                  <div className="utf-listing-img-content-item"> 
                    <span className="utf-listing-compact-title-item">Renovated Luxury Apartment <i>$18,000/mo</i></span>
                  </div>
                  <img src="images/listing-02.jpg" alt="" /> 
                  <ul className="listing-hidden-content">
                    <li><i className="fa fa-bed" />Beds<span>3</span></li>
                    <li><i className="icon-feather-codepen" /> Baths <span>2</span></li>
                    <li><i className="fa fa-car" /> Garages <span>2</span></li>
                    <li><i className="fa fa-arrows-alt" /> Sq Ft <span>780</span></li>
                  </ul>
                </a> 
              </div>
            </div>
            {/* Listing Item / End */} 
            {/* Listing Item */}
            <div className="utf-carousel-item-area">
              <div className="utf-listing-item compact"> 
                <a href="single-property-page-1.html" className="utf-smt-listing-img-container">
                  <div className="utf-listing-badges-item"> <span className="for-sale">For Sale</span> </div>
                  <div className="utf-listing-img-content-item"> 
                    <span className="utf-listing-compact-title-item">Renovated Luxury Apartment <i>18,000/mo</i></span>
                  </div>
                  <img src="images/listing-03.jpg" alt="" /> 
                  <ul className="listing-hidden-content">
                    <li><i className="fa fa-bed" /> Beds <span>3</span></li>
                    <li><i className="icon-feather-codepen" /> Baths <span>2</span></li>
                    <li><i className="fa fa-car" /> Garages <span>2</span></li>
                    <li><i className="fa fa-arrows-alt" /> Sq Ft <span>780</span></li>
                  </ul>
                </a> 
              </div>
            </div>
            {/* Listing Item / End */} 
            {/* Listing Item */}
            <div className="utf-carousel-item-area">
              <div className="utf-listing-item compact"> 
                <a href="single-property-page-1.html" className="utf-smt-listing-img-container">
                  <div className="utf-listing-badges-item"> <span className="for-rent">For Rent</span></div>
                  <div className="utf-listing-img-content-item"> 
                    <span className="utf-listing-compact-title-item">Renovated Luxury Apartment <i>$18,000/mo</i></span>
                  </div>
                  <img src="images/listing-04.jpg" alt="" /> 
                  <ul className="listing-hidden-content">
                    <li><i className="fa fa-bed" /> Beds <span>3</span></li>
                    <li><i className="icon-feather-codepen" /> Baths <span>2</span></li>
                    <li><i className="fa fa-car" /> Garages <span>2</span></li>
                    <li><i className="fa fa-arrows-alt" /> Sq Ft <span>780</span></li>
                  </ul>
                </a> 
              </div>
            </div>
            {/* Listing Item / End */} 
            {/* Listing Item */}
            <div className="utf-carousel-item-area">
              <div className="utf-listing-item compact"> 
                <a href="single-property-page-1.html" className="utf-smt-listing-img-container">
                  <div className="utf-listing-badges-item"> <span className="for-sale">For Sale</span> </div>
                  <div className="utf-listing-img-content-item"> 
                    <span className="utf-listing-compact-title-item">Renovated Luxury Apartment <i>$18,000/mo</i></span>
                  </div>
                  <img src="images/listing-05.jpg" alt="" /> 
                  <ul className="listing-hidden-content">
                    <li><i className="fa fa-bed" /> Beds <span>3</span></li>
                    <li><i className="icon-feather-codepen" /> Baths <span>2</span></li>
                    <li><i className="fa fa-car" /> Garages <span>2</span></li>
                    <li><i className="fa fa-arrows-alt" /> Sq Ft <span>780</span></li>
                  </ul>
                </a> 
              </div>
            </div>
            {/* Listing Item / End */} 
            {/* Listing Item */}
            <div className="utf-carousel-item-area">
              <div className="utf-listing-item compact"> 
                <a href="single-property-page-1.html" className="utf-smt-listing-img-container">
                  <div className="utf-listing-badges-item"> <span className="for-sale">For Sale</span> </div>
                  <div className="utf-listing-img-content-item"> 
                    <span className="utf-listing-compact-title-item">Renovated Luxury Apartment <i>$18,000/mo</i></span>
                  </div>
                  <img src="images/listing-06.jpg" alt="" /> 
                  <ul className="listing-hidden-content">
                    <li><i className="fa fa-bed" /> Beds <span>3</span></li>
                    <li><i className="icon-feather-codepen" /> Baths <span>2</span></li>
                    <li><i className="fa fa-car" /> Garages <span>2</span></li>
                    <li><i className="fa fa-arrows-alt" /> Sq Ft <span>780</span></li>
                  </ul>
                </a> 
              </div>
            </div>          
          </div>
        </div>      
      </div>
    </div>
    {/* Featured / End */} 
    {/* For Sale */}
    <section className="fullwidth margin-top-70 padding-top-75 padding-bottom-70">
      <div className="container">
        <div className="row">
          <div className="col-md-12">	
            <div className="utf-section-headline-item centered margin-bottom-30 margin-top-0">
              <h3 className="headline"><span>Most Popular For Sale Properties</span> For Sale Properties</h3>
              <p className="utf-slogan-text">Lorem Ipsum is simply dummy text printing and type setting industry Lorem Ipsum been industry standard dummy text ever since when unknown printer took a galley.</p>
            </div>  
          </div>
          {/* Carousel */}
          <div className="col-md-12">
            <div className="carousel"> 
              <div className="utf-carousel-item-area">
                <div className="utf-listing-item"> 
                  <a href="single-property-page-1.html" className="utf-smt-listing-img-container">
                    <div className="utf-listing-badges-item"> 
                    </div>				  
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
                      <h4><a href="single-property-page-1.html">Renovated Luxury Apartment</a></h4>
                      <span className="utf-listing-address"><i className="icon-material-outline-location-on" /> 2021 San Pedro, Los Angeles 90015</span>
                    </div>				
                    <ul className="utf-listing-features">
                      <li><i className="fa fa-bed" />Beds<span>3</span></li>
                      <li><i className="icon-feather-codepen" /> Baths<span>2</span></li>
                      <li><i className="fa fa-car" /> Garages<span>2</span></li>					  					 
                      <li><i className="icon-line-awesome-arrows" /> Sq Ft<span>1530</span></li>
                    </ul>
                    <div className="utf-listing-user-info"><a href="agents-profile.html"><i className="icon-line-awesome-user" /> John Williams</a> <span>1 Days Ago</span></div> 					
                  </div>
                </div>
              </div>
              <div className="utf-carousel-item-area">
                <div className="utf-listing-item"> <a href="single-property-page-1.html" className="utf-smt-listing-img-container">
                    <div className="utf-listing-badges-item"> 
                    </div>
                    <div className="utf-listing-img-content-item"> 
                      <img className="utf-user-picture" src="images/user_1.jpg" alt="user_1" />
                      <span className="like-icon with-tip" data-tip-content="Bookmark" /> 
                    </div>
                    <img src="images/listing-02.jpg" alt="" /> </a>
                  <div className="utf-listing-content">
                    <div className="utf-listing-title">
                      <span className="utf-listing-price">$20,000/mo</span>	
                      <h4><a href="single-property-page-1.html">Renovated Luxury Apartment</a></h4>
                      <span className="utf-listing-address"><i className="icon-material-outline-location-on" /> 2021 San Pedro, Los Angeles 90015</span> 
                    </div>				
                    <ul className="utf-listing-features">
                      <li><i className="fa fa-bed" /> Beds<span>3</span></li>
                      <li><i className="icon-feather-codepen" /> Baths<span>2</span></li>
                      <li><i className="fa fa-car" /> Garages<span>2</span></li>					  					 
                      <li><i className="icon-line-awesome-arrows" /> Sq Ft<span>1530</span></li>
                    </ul>
                    <div className="utf-listing-user-info"><a href="agents-profile.html"><i className="icon-line-awesome-user" /> John Williams</a> <span>1 Days Ago</span></div>					
                  </div>
                </div>
              </div>
              <div className="utf-carousel-item-area">
                <div className="utf-listing-item"> <a href="single-property-page-1.html" className="utf-smt-listing-img-container">
                    <div className="utf-listing-badges-item"> 
                    </div>
                    <div className="utf-listing-img-content-item"> 
                      <img className="utf-user-picture" src="images/user_1.jpg" alt="user_1" />
                      <span className="like-icon with-tip" data-tip-content="Bookmark" /> 
                    </div>
                    <img src="images/listing-03.jpg" alt="" /> </a>
                  <div className="utf-listing-content">
                    <div className="utf-listing-title">
                      <span className="utf-listing-price">$18,000/mo</span>
                      <h4><a href="single-property-page-1.html">Renovated Luxury Apartment</a></h4>
                      <span className="utf-listing-address"><i className="icon-material-outline-location-on" /> 2021 San Pedro, Los Angeles 90015</span> 
                    </div>				
                    <ul className="utf-listing-features">
                      <li><i className="fa fa-bed" /> Beds<span>3</span></li>
                      <li><i className="icon-feather-codepen" /> Baths<span>2</span></li>
                      <li><i className="fa fa-car" /> Garages<span>2</span></li>					  					 
                      <li><i className="icon-line-awesome-arrows" /> Sq Ft<span>1530</span></li>
                    </ul>
                    <div className="utf-listing-user-info"><a href="agents-profile.html"><i className="icon-line-awesome-user" /> John Williams</a> <span>1 Days Ago</span></div>				
                  </div>              
                </div>
              </div>
              <div className="utf-carousel-item-area">
                <div className="utf-listing-item"> <a href="single-property-page-1.html" className="utf-smt-listing-img-container">
                    <div className="utf-listing-badges-item"> 
                    </div>
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
                      <span className="utf-listing-price">$16,000/mo</span>
                      <h4><a href="single-property-page-1.html">Renovated Luxury Apartment</a></h4>
                      <span className="utf-listing-address"><i className="icon-material-outline-location-on" /> 2021 San Pedro, Los Angeles 90015</span> 
                    </div>
                    <ul className="utf-listing-features">
                      <li><i className="fa fa-bed" /> Beds<span>3</span></li>
                      <li><i className="icon-feather-codepen" /> Baths<span>2</span></li>
                      <li><i className="fa fa-car" /> Garages<span>2</span></li>					  					 
                      <li><i className="icon-line-awesome-arrows" /> Sq Ft<span>1530</span></li>
                    </ul>
                    <div className="utf-listing-user-info"><a href="agents-profile.html"><i className="icon-line-awesome-user" /> John Williams</a> <span>1 Days Ago</span></div>					
                  </div>              
                </div>
              </div>
              <div className="utf-carousel-item-area">
                <div className="utf-listing-item"> <a href="single-property-page-1.html" className="utf-smt-listing-img-container">
                    <div className="utf-listing-badges-item"> 
                    </div>
                    <div className="utf-listing-img-content-item"> 
                      <img className="utf-user-picture" src="images/user_1.jpg" alt="user_1" />
                      <span className="like-icon with-tip" data-tip-content="Bookmark" /> 
                    </div>
                    <img src="images/listing-05.jpg" alt="" /> </a>
                  <div className="utf-listing-content">
                    <div className="utf-listing-title">
                      <span className="utf-listing-price">$14,000/mo</span>
                      <h4><a href="single-property-page-1.html">Renovated Luxury Apartment</a></h4>
                      <span className="utf-listing-address"><i className="icon-material-outline-location-on" /> 2021 San Pedro, Los Angeles 90015</span> 
                    </div>				
                    <ul className="utf-listing-features">
                      <li><i className="fa fa-bed" /> Beds<span>3</span></li>
                      <li><i className="icon-feather-codepen" /> Baths<span>2</span></li>
                      <li><i className="fa fa-car" /> Garages<span>2</span></li>					  					 
                      <li><i className="icon-line-awesome-arrows" /> Sq Ft<span>1530</span></li>
                    </ul>
                    <div className="utf-listing-user-info"><a href="agents-profile.html"><i className="icon-line-awesome-user" /> John Williams</a> <span>1 Days Ago</span></div> 					
                  </div>              
                </div>
              </div>          
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* For Rent */}
    <section className="padding-top-75 padding-bottom-70">
      <div className="container">
        <div className="row">
          <div className="col-md-12">	
            <div className="utf-section-headline-item centered margin-bottom-30 margin-top-0">
              <h3 className="headline"><span>Most Popular Rental Properties</span> For Rent Properties</h3>
              <p className="utf-slogan-text">Lorem Ipsum is simply dummy text printing and type setting industry Lorem Ipsum been industry standard dummy text ever since when unknown printer took a galley.</p>
            </div>  
          </div>
          {/* Carousel */}
          <div className="col-md-12">
            <div className="carousel"> 
              <div className="utf-carousel-item-area">
                <div className="utf-listing-item"> 
                  <a href="single-property-page-1.html" className="utf-smt-listing-img-container">
                    <div className="utf-listing-badges-item"> 
                    </div>				  
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
                      <h4><a href="single-property-page-1.html">Renovated Luxury Apartment</a></h4>
                      <span className="utf-listing-address"><i className="icon-material-outline-location-on" /> 2021 San Pedro, Los Angeles 90015</span>
                    </div>				
                    <ul className="utf-listing-features">
                      <li><i className="fa fa-bed" /> Beds<span>3</span></li>
                      <li><i className="icon-feather-codepen" /> Baths<span>2</span></li>
                      <li><i className="fa fa-car" /> Garages<span>2</span></li>					  					 
                      <li><i className="icon-line-awesome-arrows" /> Sq Ft<span>1530</span></li>
                    </ul>
                    <div className="utf-listing-user-info"><a href="agents-profile.html"><i className="icon-line-awesome-user" /> John Williams</a> <span>1 Days Ago</span></div> 					
                  </div>
                </div>
              </div>
              <div className="utf-carousel-item-area">
                <div className="utf-listing-item"> <a href="single-property-page-1.html" className="utf-smt-listing-img-container">
                    <div className="utf-listing-badges-item"> 
                    </div>
                    <div className="utf-listing-img-content-item"> 
                      <img className="utf-user-picture" src="images/user_1.jpg" alt="user_1" />
                      <span className="like-icon with-tip" data-tip-content="Bookmark" /> 
                    </div>
                    <img src="images/listing-02.jpg" alt="" /> </a>
                  <div className="utf-listing-content">
                    <div className="utf-listing-title">
                      <span className="utf-listing-price">$20,000/mo</span>	
                      <h4><a href="single-property-page-1.html">Renovated Luxury Apartment</a></h4>
                      <span className="utf-listing-address"><i className="icon-material-outline-location-on" /> 2021 San Pedro, Los Angeles 90015</span> 
                    </div>				
                    <ul className="utf-listing-features">
                      <li><i className="fa fa-bed" /> Beds<span>3</span></li>
                      <li><i className="icon-feather-codepen" /> Baths<span>2</span></li>
                      <li><i className="fa fa-car" /> Garages<span>2</span></li>					  					 
                      <li><i className="icon-line-awesome-arrows" /> Sq Ft<span>1530</span></li>
                    </ul>
                    <div className="utf-listing-user-info"><a href="agents-profile.html"><i className="icon-line-awesome-user" /> John Williams</a> <span>1 Days Ago</span></div>					
                  </div>
                </div>
              </div>
              <div className="utf-carousel-item-area">
                <div className="utf-listing-item"> <a href="single-property-page-1.html" className="utf-smt-listing-img-container">
                    <div className="utf-listing-badges-item"> 
                    </div>
                    <div className="utf-listing-img-content-item"> 
                      <img className="utf-user-picture" src="images/user_1.jpg" alt="user_1" />
                      <span className="like-icon with-tip" data-tip-content="Bookmark" /> 
                    </div>
                    <img src="images/listing-03.jpg" alt="" /> </a>
                  <div className="utf-listing-content">
                    <div className="utf-listing-title">
                      <span className="utf-listing-price">$18,000/mo</span>
                      <h4><a href="single-property-page-1.html">Renovated Luxury Apartment</a></h4>
                      <span className="utf-listing-address"><i className="icon-material-outline-location-on" /> 2021 San Pedro, Los Angeles 90015</span> 
                    </div>				
                    <ul className="utf-listing-features">
                      <li><i className="fa fa-bed" /> Beds<span>3</span></li>
                      <li><i className="icon-feather-codepen" /> Baths<span>2</span></li>
                      <li><i className="fa fa-car" /> Garages<span>2</span></li>					  					 
                      <li><i className="icon-line-awesome-arrows" /> Sq Ft<span>1530</span></li>
                    </ul>
                    <div className="utf-listing-user-info"><a href="agents-profile.html"><i className="icon-line-awesome-user" /> John Williams</a> <span>1 Days Ago</span></div>				
                  </div>              
                </div>
              </div>
              <div className="utf-carousel-item-area">
                <div className="utf-listing-item"> <a href="single-property-page-1.html" className="utf-smt-listing-img-container">
                    <div className="utf-listing-badges-item"> 
                    </div>
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
                      <span className="utf-listing-price">$16,000/mo</span>
                      <h4><a href="single-property-page-1.html">Renovated Luxury Apartment</a></h4>
                      <span className="utf-listing-address"><i className="icon-material-outline-location-on" /> 2021 San Pedro, Los Angeles 90015</span> 
                    </div>
                    <ul className="utf-listing-features">
                      <li><i className="fa fa-bed" /> Beds<span>3</span></li>
                      <li><i className="icon-feather-codepen" /> Baths<span>2</span></li>
                      <li><i className="fa fa-car" /> Garages<span>2</span></li>					  					 
                      <li><i className="icon-line-awesome-arrows" /> Sq Ft<span>1530</span></li>
                    </ul>
                    <div className="utf-listing-user-info"><a href="agents-profile.html"><i className="icon-line-awesome-user" /> John Williams</a> <span>1 Days Ago</span></div>					
                  </div>              
                </div>
              </div>
              <div className="utf-carousel-item-area">
                <div className="utf-listing-item"> <a href="single-property-page-1.html" className="utf-smt-listing-img-container">
                    <div className="utf-listing-badges-item"> 
                    </div>
                    <div className="utf-listing-img-content-item"> 
                      <img className="utf-user-picture" src="images/user_1.jpg" alt="user_1" />
                      <span className="like-icon with-tip" data-tip-content="Bookmark" /> 
                    </div>
                    <img src="images/listing-05.jpg" alt="" /> </a>
                  <div className="utf-listing-content">
                    <div className="utf-listing-title">
                      <span className="utf-listing-price">$14,000/mo</span>
                      <h4><a href="single-property-page-1.html">Renovated Luxury Apartment</a></h4>
                      <span className="utf-listing-address"><i className="icon-material-outline-location-on" /> 2021 San Pedro, Los Angeles 90015</span> 
                    </div>				
                    <ul className="utf-listing-features">
                      <li><i className="fa fa-bed" /> Beds<span>3</span></li>
                      <li><i className="icon-feather-codepen" /> Baths<span>2</span></li>
                      <li><i className="fa fa-car" /> Garages<span>2</span></li>					  					 
                      <li><i className="icon-line-awesome-arrows" /> Sq Ft<span>1530</span></li>
                    </ul>
                    <div className="utf-listing-user-info"><a href="agents-profile.html"><i className="icon-line-awesome-user" /> John Williams</a> <span>1 Days Ago</span></div> 					
                  </div>              
                </div>
              </div>          
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Start Section Callout */}
    {/* End Section Callout */}
    {/* Fullwidth Section */}
    <section className="fullwidth margin-bottom-0 padding-bottom-70 padding-top-75"> 
      {/* Container */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">	
            <div className="utf-section-headline-item centered margin-bottom-30 margin-top-0">
              <h3 className="headline"><span>Most Popular Places</span> Most Popular Property Places</h3>
              <p className="utf-slogan-text">Lorem Ipsum is simply dummy text printing and type setting industry Lorem Ipsum been industry standard dummy text ever since when unknown printer took a galley.</p>
            </div>  
          </div>
          <div className="col-md-4 col-sm-6"> 
            <a href="listings-list-with-map.html" className="img-box">
              <div className="utf-listing-badges-item"> </div>
              <img src="images/popular-location-01.jpg" alt="" />
              <div className="utf-cat-img-box-content visible">
                <h4>Afghanistan</h4>
                <span>14 Properties</span> 
              </div>
            </a> 
          </div>
          <div className="col-md-3 col-sm-6"> 
            <a href="listings-list-with-map.html" className="img-box">
              <img src="images/popular-location-02.jpg" alt="" /> 
              <div className="utf-cat-img-box-content visible">
                <h4>Australia</h4>
                <span>24 Properties</span> 
              </div>
            </a> 
          </div>
          <div className="col-md-5 col-sm-6"> 
            <a href="listings-list-with-map.html" className="img-box">
              <img src="images/popular-location-03.jpg" alt="" />
              <div className="utf-cat-img-box-content visible">
                <h4>Bangladesh</h4>
                <span>12 Properties</span> 
              </div>
            </a> 
          </div>
          <div className="col-md-5 col-sm-6"> 
            <a href="listings-list-with-map.html" className="img-box">
              <img src="images/popular-location-04.jpg" alt="" /> 
              <div className="utf-cat-img-box-content visible">
                <h4>Miami</h4>
                <span>9 Properties</span> 
              </div>
            </a> 
          </div>
          <div className="col-md-4 col-sm-6"> 
            <a href="listings-list-with-map.html" className="img-box"> 
              <img src="images/popular-location-05.jpg" alt="" /> 
              <div className="utf-cat-img-box-content visible">
                <h4>Belize</h4>
                <span>14 Properties</span> 
              </div>
            </a> 
          </div>
          <div className="col-md-3 col-sm-6"> 
            <a href="listings-list-with-map.html" className="img-box">
              <img src="images/popular-location-06.jpg" alt="" />
              <div className="utf-cat-img-box-content visible">
                <h4>Cambodia</h4>
                <span>24 Properties</span> 
              </div>
            </a> 
          </div>		  
        </div>
        <div className="utf-centered-button margin-top-10">
          <a href="all-categories.html" className="button">View All Categories</a> 
        </div>
      </div>
      {/* Container / End */}  
    </section>
    {/* Fullwidth Section / End */} 
    <section className="fullwidth padding-bottom-80 padding-top-75">
      {/* Container */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">	
            <div className="utf-section-headline-item centered margin-bottom-30 margin-top-0">
              <h3 className="headline"><span>Pricing Plan</span> Pay For What You Use</h3>
              <p className="utf-slogan-text">Lorem Ipsum is simply dummy text printing and type setting industry Lorem Ipsum been industry standard dummy text ever since when unknown printer took a galley.</p>
            </div>  
          </div>
          <div className="col-md-12">
            <div className="utf-pricing-container-area margin-top-5"> 
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="plan">
                  <div className="utf-plan-price">
                    <h3>Private</h3>
                    <span className="value">$0<sub>/Per Year</sub></span> <span className="period">Private User Membership for 90 days</span> 
                  </div>
                  <div className="utf-plan-features">
                    <ul>
                      <li>Free</li>
                      <li>Three Listings</li>
                      <li>10 Property Images </li>
                      <li>90 Days Availability</li>
                      <li>Not Featured</li>
                      <li>Limited Support </li> 
                    </ul>
                    <a className="button border" href="register.html">Register Now</a> 
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="plan">
                  <div className="utf-plan-price">
                    <h3>Business</h3>
                    <span className="value">€120<sub>/Per Year</sub></span> <span className="period">Business User Membership for one year</span> 
                  </div>
                  <div className="utf-plan-features">
                    <ul>
                      <li>Yearly Fee</li>
                      <li>3(Plus) Listings</li>
                      <li>10 Property Images </li>
                      <li>One Year Availability</li>
                      <li>Featured In Search Results</li>
                      <li>24/7 Support</li>
                    </ul>
                    <a className="button border" href="payment.html">Purchase Now</a> 
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="plan featured">
                  <div className="utf-listing-badges-item"> <span className="featured">Featured</span> </div>
                  <div className="utf-plan-price">
                    <h3>Premium</h3>
                    <span className="value">€200<sub>/Per Year</sub></span> <span className="period">Premium User Membership for One Year</span> 
                  </div>
                  <div className="utf-plan-features">
                    <ul>
                      <li>Yearly Fee</li>
                      <li>Unlimited Listings</li>
                      <li>10 Property Images </li>
                      <li>One Year Availability</li>
                      <li>Featured In Search Results</li>
                      <li>24/7 Support</li>
                    </ul>
                    <a className="button border" href="payment.html">Purchase Now</a> 
                  </div>
                </div>
              </div>	  
              {/* Container / End */}
            </div></div></div></div></section>
    {/* Start Need Any Help */}
    <section className="section padding-top-75 padding-bottom-75">
      <div className="container">
        <div className="col-md-12">	
          <div className="utf-section-headline-item centered margin-bottom-30 margin-top-0">
            <h3 className="headline"><span>Business Help Service</span> Need Any Help?</h3>
            <p className="utf-slogan-text">Lorem Ipsum is simply dummy text printing and type setting industry Lorem Ipsum been industry standard dummy text ever since when unknown printer took a galley.</p>
          </div>  
        </div>
        <div className="row need-help-area justify-content-center">
          <div className="col-md-4 col-sm-4 col-xs-12">
            <div className="info-box-1">
              <div className="utf-icon-box-circle">
                <div className="utf-icon-box-circle-inner"> <i className="icon-brand-rocketchat" /></div>
              </div>	
              <h4>Chat With Us Online</h4>
              <p>Chat to us online if you have any question.</p>
              <a href="javascript:void(0);" className="button margin-top-10">Online Chat</a> 
            </div>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-12">
            <div className="info-box-1">
              <div className="utf-icon-box-circle">
                <div className="utf-icon-box-circle-inner"> <i className="icon-feather-phone" /></div>
              </div>	
              <h4>Our Support Agent</h4>
              <p>Our support agent will work with you to meet your lending needs.</p>
              <a href="contact.html" className="button margin-top-10">Contact Us</a> 
            </div>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-12">
            <div className="info-box-1">
              <div className="utf-icon-box-circle">
                <div className="utf-icon-box-circle-inner"> <i className="icon-brand-bimobject" /></div>
              </div> 
              <h4>Read Latest Blog Post</h4>
              <p>Visit our Blog page and know more about news and career tips</p>
              <a href="blog_detail_left_sidebar.html" className="button margin-top-10">Read Blog Post</a> 
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Need Any Help */}
    {/* Agents Section */}
    <section className="fullwidth">
      <div className="container">
        <div className="row">
          <div className="col-md-12">	
            <div className="utf-section-headline-item centered margin-bottom-30 margin-top-0">
              <h3 className="headline"><span>Our Agents</span> Our Agents</h3>
              <p className="utf-slogan-text">Lorem Ipsum is simply dummy text printing and type setting industry Lorem Ipsum been industry standard dummy text ever since when unknown printer took a galley.</p>
            </div>  
          </div>
        </div>
        <div className="row"> 
          <div className="utf-agents-container-area"> 
            <div className="grid-item col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <div className="agent">
                <div className="utf-agent-avatar"> <a href="agents-profile.html"> <img src="images/agent-01.jpg" alt="" /> <span className="view-profile-btn">View Profile</span> </a> </div>
                <div className="utf-agent-content">
                  <div className="utf-agent-name">
                    <h4><a href="agents-profile.html">Marcus Millard</a></h4>
                    <span>Agent In Belize</span> 
                  </div>              
                </div>
              </div>
            </div>
            <div className="grid-item col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <div className="agent">
                <div className="utf-agent-avatar"> <a href="agents-profile.html"> <img src="images/agent-02.jpg" alt="" /> <span className="view-profile-btn">View Profile</span> </a> </div>
                <div className="utf-agent-content">
                  <div className="utf-agent-name">
                    <h4><a href="agents-profile.html">Myron Gains</a></h4>
                    <span>Agent In Rome</span> 
                  </div>              
                </div>
              </div>
            </div>
            <div className="grid-item col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <div className="agent">
                <div className="utf-agent-avatar"> <a href="agents-profile.html"> <img src="images/agent-03.jpg" alt="" /> <span className="view-profile-btn">View Profile</span> </a> </div>
                <div className="utf-agent-content">
                  <div className="utf-agent-name">
                    <h4><a href="agents-profile.html">Julez Minow</a></h4>
                    <span>Agent In Bologna</span> 
                  </div>              
                </div>
              </div>
            </div>
            <div className="grid-item col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <div className="agent">
                <div className="utf-agent-avatar"> <a href="agents-profile.html"> <img src="images/agent-04.jpg" alt="" /> <span className="view-profile-btn">View Profile</span> </a> </div>
                <div className="utf-agent-content">
                  <div className="utf-agent-name">
                    <h4><a href="agents-profile.html">Nathalie Njuguma</a></h4>
                    <span>Agent In Belize</span> 
                  </div>              
                </div>
              </div>
            </div> 
          </div>
          <div className="utf-centered-button margin-top-10">
            <a href="agents-list.html" className="button">View All Agent</a> 
          </div>
          {/* Agents Container / End */} 
        </div>
      </div>
    </section>	  
    {/* Agents Section / End */}
    {/* Counters Container */}
    <div className="parallax" data-background="images/listings-parallax.jpg" data-color="#252529" data-color-opacity="0.85" data-img-width={800} data-img-height={505}> 
      <div id="counters">
        <div className="container">
          <div className="row">
            <div className="counter-boxes-inside-parallax">
              <div className="col-md-3 col-sm-6 col-xs-6">
                <div className="counter-box">
                  <div className="counter-box-icon"> <i className="icon-feather-home" /> <span className="counter">2242</span>
                    <p>For Sale Listing</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-6">
                <div className="counter-box">
                  <div className="counter-box-icon"> <i className="icon-material-outline-business" /> <span className="counter">1876</span>
                    <p>For Rent Listing</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-6">
                <div className="counter-box">
                  <div className="counter-box-icon"> <i className="icon-feather-users" /> <span className="counter">1270</span>
                    <p>User Agents</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-6">
                <div className="counter-box last">
                  <div className="counter-box-icon"> <i className="sl sl-icon-briefcase" /> <span className="counter">1120</span>
                    <p>Booking Properties</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Counters Container / End */}
    <section className="fullwidth margin-bottom-0 padding-top-60 padding-bottom-65" data-background-color="linear-gradient(to bottom,rgba(0,0,0,0.03) 0%,rgba(255,255,255,0))"> 
      {/* Logo Carousel */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">	
            <div className="utf-section-headline-item centered margin-bottom-30 margin-top-10">
              <h3 className="headline"><span>Popular Companies</span> Our Best Partners</h3>
              <p className="utf-slogan-text">Lorem Ipsum is simply dummy text printing and type setting industry Lorem Ipsum been industry standard dummy text ever since when unknown printer took a galley.</p>
            </div>  
          </div>        
          {/* Carousel */}
          <div className="col-md-12">
            <div className="utf-logo-carousel-item dot-navigation">
              <div className="item"><a href="#"><img src="images/brand_logo_01.png" alt="" /></a></div>
              <div className="item"><a href="#"><img src="images/brand_logo_02.png" alt="" /></a></div>
              <div className="item"><a href="#"><img src="images/brand_logo_03.png" alt="" /></a></div>
              <div className="item"><a href="#"><img src="images/brand_logo_04.png" alt="" /></a></div>
              <div className="item"><a href="#"><img src="images/brand_logo_05.png" alt="" /></a></div>
              <div className="item"><a href="#"><img src="images/brand_logo_06.png" alt="" /></a></div>
              <div className="item"><a href="#"><img src="images/brand_logo_07.png" alt="" /></a></div>
            </div>
          </div>
          {/* Carousel / End */}         
        </div>
      </div>
      {/* Logo Carousel / End */} 
    </section>

            
        </Layout>
    )
}

export default Home