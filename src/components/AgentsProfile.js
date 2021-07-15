import React from 'react'
import Layout from './Layout'

function AgentsProfile() {
    return (
        <Layout>
            <div>
  <div className="parallax titlebar" data-background="images/listings-parallax.jpg" data-color="rgba(48, 48, 48, 1)" data-color-opacity="0.8" data-img-width={800} data-img-height={505}>
    <div id="titlebar">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>John Williams</h2>
            {/* Breadcrumbs */}
            <nav id="breadcrumbs">
              <ul>
                <li><a href="/">Home</a></li>
                <li>Agent Profile</li>
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
        <div className="agent agents-profile agency margin-bottom-40"> <a href="/agency-profile" className="utf-agent-avatar"> <img src="images/agent-01.jpg" alt="" /> </a>
          <div className="utf-agent-content">
            <div className="utf-agent-name">
              <h4><a href="/agency-profile">John Williams</a></h4>
              <span>Agent In Italy</span>
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
        <div className="utf-desc-headline-item margin-top-0">
          <h3><i className="icon-material-outline-description" /> My Listings</h3>
        </div>
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
              <div className="utf-listing-user-info"><a href="/agents-profile"><i className="icon-line-awesome-user" /> John Williams</a> <span>1 Days Ago</span></div>
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
              <div className="utf-listing-user-info"><a href="/agents-profile"><i className="icon-line-awesome-user" /> John Williams</a> <span>1 Days Ago</span></div>
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
              <div className="utf-listing-user-info"><a href="/agents-profile"><i className="icon-line-awesome-user" /> John Williams</a> <span>1 Days Ago</span></div>
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
              <div className="utf-listing-user-info"><a href="/agents-profile"><i className="icon-line-awesome-user" /> John Williams</a> <span>1 Days Ago</span></div>
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
      {/* Sidebar */}
      <div className="col-lg-4 col-md-4">
        <div className="sidebar"> 
          {/* Widget */}
          <div className="widget utf-sidebar-widget-item">
            <div className="utf-detail-banner-add-section">
              <a href="#"><img src="images/banner-add-2.jpg" alt="banner-add-2" /></a>
            </div>             
          </div>
          {/* Widget / End*/}
          {/* Widget */}
          <div className="widget utf-sidebar-widget-item">
            <div className="utf-boxed-list-headline-item">
              <h3>Find New Home</h3>
            </div>
            <div className="row with-forms"> 
              <div className="col-md-6 col-sm-6 col-xs-6">
                <select data-placeholder="Any Status" className="utf-chosen-select-single-item">
                  <option>Any Status</option>
                  <option>For Sale</option>
                  <option>For Rent</option>
                </select>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-6">
                <select data-placeholder="Any Type" className="utf-chosen-select-single-item">
                  <option>Any Type</option>
                  <option>Apartments</option>
                  <option>Houses</option>
                  <option>Commercial</option>
                  <option>Garages</option>
                  <option>Lots</option>
                </select>
              </div>
            </div>
            {/* Row / End */} 
            {/* Row */}
            <div className="row with-forms"> 
              <div className="col-md-6">
                <select data-placeholder="Beds" className="utf-chosen-select-single-item">
                  <option label="blank" />
                  <option>Beds (Any)</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div className="col-md-6">
                <select data-placeholder="Baths" className="utf-chosen-select-single-item">
                  <option label="blank" />
                  <option>Baths (Any)</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
            {/* Row / End */}
            {/* Row */}
            <div className="row with-forms"> 
              <div className="col-md-12">
                <select data-placeholder="All States" className="chosen-select">
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
            </div>
            {/* Row / End */} 
            {/* Row */}
            <div className="row with-forms"> 
              <div className="col-md-12">
                <select data-placeholder="All Cities" className="chosen-select">
                  <option>Select City</option>
                  <option>Alicante</option>
                  <option>Albacete</option>
                  <option>Almería</option>
                  <option>Asturien</option>
                  <option>Ávila</option>
                  <option>Araba/Álava</option>
                  <option>Barcelona</option>
                  <option>Badajoz</option>
                  <option>Bizkaia/Vizcaja</option>
                  <option>Burgos</option>
                  <option>A Coruña</option>
                  <option>Cádiz</option>
                  <option>Cáceres</option>
                  <option>Ceuta</option>
                  <option>Córdoba</option>
                  <option>Ciudad Real</option>
                  <option>Castellón</option>
                  <option>Cuenca</option>
                  <option>Las Palmas</option>
                  <option>Girona</option>
                  <option>Granada</option>
                  <option>Guadalajara</option>
                  <option>Huelva</option>
                  <option>Huesca</option>
                  <option>Jaén</option>
                  <option>Lleida</option>
                  <option>León</option>
                  <option>La Rioja</option>
                  <option>Lugo</option>
                  <option>Madrid</option>
                  <option>Málaga</option>
                  <option>Melilla</option>
                  <option>Murcia</option>
                  <option>Navarra</option>
                  <option>Ourense</option>
                  <option>Palencia</option>
                  <option>Balearen</option>
                  <option>Pontevedra</option>
                  <option>Kantabrien</option>
                  <option>Salamanca</option>
                  <option>Sevilla</option>
                  <option>Segovia</option>
                  <option>Soria</option>
                  <option>Gipuzkoa/Guipúzcoa</option>
                  <option>Tarragona</option>
                  <option>Teruel</option>
                  <option>Santa Cruz de Tenerife</option>
                  <option>Valencia</option>
                  <option>Valladolid</option>
                  <option>Saragossa</option>
                  <option>Zamora</option>
                </select>
              </div>
            </div>
            {/* Row / End */} 
            {/* Area Range */}
            <div className="utf-range-slider-item margin-top-10 margin-bottom-25">
              <label>Area Range</label>
              <div id="utf-area-range-item" data-min={0} data-max={1500} data-unit="sq ft" />
              <div className="clearfix" />
            </div>
            {/* Price Range */}
            <div className="utf-range-slider-item margin-bottom-10">
              <label>Price Range</label>
              <div id="utf-price-range-item" data-min={0} data-max={400000} data-unit="$" />
              <div className="clearfix" />
            </div>
            {/* More Search Options */} 
            <a href="#" className="utf-utf-more-search-options-area-button margin-bottom-10 margin-top-20" data-open-title="More Search Option" data-close-title="Less Search Option" />
            <div className="utf-more-search-options-area relative"> 
              <div className="checkboxes one-in-row margin-bottom-10">
                <input id="check-2" type="checkbox" name="check" />
                <label htmlFor="check-2">Air Conditioning</label>
                <input id="check-3" type="checkbox" name="check" />
                <label htmlFor="check-3">Swimming Pool</label>
                <input id="check-4" type="checkbox" name="check" />
                <label htmlFor="check-4">Central Heating</label>
                <input id="check-5" type="checkbox" name="check" />
                <label htmlFor="check-5">Laundry Room</label>
                <input id="check-6" type="checkbox" name="check" />
                <label htmlFor="check-6">Gym</label>
                <input id="check-7" type="checkbox" name="check" />
                <label htmlFor="check-7">Alarm</label>
                <input id="check-8" type="checkbox" name="check" />
                <label htmlFor="check-8">Window Covering</label>
              </div>
              {/* Checkboxes / End */}               
            </div>
            {/* More Search Options / End */}
            <button className="button fullwidth margin-top-10">Search</button>
          </div>
          {/* Widget / End */} 
          {/* Widget */}
          <div className="widget utf-sidebar-widget-item">
            <div className="utf-boxed-list-headline-item">
              <h3>Featured Properties</h3>
            </div>          
            <div className="utf-listing-carousel-item outer"> 
              {/* Item */}
              <div className="item">
                <div className="utf-listing-item compact"> 
                  <a href="/single-property-page-1" className="utf-smt-listing-img-container">
                    <div className="utf-listing-badges-item"> <span className="for-sale">For Sale</span> </div>
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
                  </a> 
                </div>
              </div>
              {/* Item / End */} 
              {/* Item */}
              <div className="item">
                <div className="utf-listing-item compact"> 
                  <a href="/single-property-page-1" className="utf-smt-listing-img-container">
                    <div className="utf-listing-badges-item"> <span className="for-sale">For Sale</span> </div>
                    <div className="utf-listing-img-content-item"> 
                      <span className="utf-listing-compact-title-item">Renovated Luxury Apartment <i>$18,000/mo</i></span>
                    </div>
                    <img src="images/listing-02.jpg" alt="" /> 
                    <ul className="listing-hidden-content">
                      <li><i className="fa fa-bed" /> Beds <span>3</span></li>
                      <li><i className="icon-feather-codepen" /> Baths <span>2</span></li>
                      <li><i className="fa fa-car" /> Garages <span>2</span></li>
                      <li><i className="fa fa-arrows-alt" /> Sq Ft <span>780</span></li>
                    </ul>
                  </a> 
                </div>
              </div>
              {/* Item / End */} 
              {/* Item */}
              <div className="item">
                <div className="utf-listing-item compact"> 
                  <a href="/single-property-page-1" className="utf-smt-listing-img-container">
                    <div className="utf-listing-badges-item"> <span className="for-sale">For Sale</span> </div>
                    <div className="utf-listing-img-content-item"> 
                      <span className="utf-listing-compact-title-item">Renovated Luxury Apartment <i>$18,000/mo</i></span>
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
              {/* Item / End */} 
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

export default AgentsProfile
