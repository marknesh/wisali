import React from 'react'
import Layout from './Layout'

function Listings() {
    return (
        <Layout>
            
  
  <div id="map-container">
    <div id="map"> </div>
    
    <a href="#" id="scrollEnabling" title="Enable Disable Scrolling Map">Enable Scrolling</a>
    <ul id="mapnav-buttons">
      <li><a href="#" id="prevpoint" title="Previous point on map">Prev</a></li>
      <li><a href="#" id="nextpoint" title="Next point on mp">Next</a></li>
    </ul>
  </div>
  
  
    <div class="utf-main-search-container-area inner-map-search-block inner-search-item">
      <div class="container">
        <div class="row">
          <div class="col-md-12">             
            <form class="utf-main-search-form-item">              
              
              <div class="utf-search-type-block-area margin-top-35">
				<div class="search-type">
				  <label class="active">
					<input class="first-tab" name="tab" checked="checked" type="radio"/>Buy</label>
				  <label>
					<input name="tab" type="radio"/>Rent</label>
				  <label>
					<input name="tab" type="radio"/>Sale</label>
					<div class="utf-search-type-arrow"></div>
				</div>
			  </div>
              
              
              <div class="utf-main-search-box-area"> 
                
                <div class="row with-forms"> 
                  
                  <div class="col-md-2 col-sm-4">
                      <select data-placeholder="Select City" title="Select City" class="utf-chosen-select-single-item">
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
                  
                  
                  <div class="col-md-2 col-sm-4">
                    <select data-placeholder="Property Type" class="utf-chosen-select-single-item">
					  <option>Property Type</option>
					  <option>Residential</option>
					  <option>Apartments</option>
					  <option>Houses</option>
					  <option>Commercial</option>
					  <option>Land</option>
					</select>
                  </div>
				  
				  
                  <div class="col-md-2 col-sm-4">
                    <select data-placeholder="Any Status" class="utf-chosen-select-single-item">
					  <option>Any Status</option>
					  <option>For Sale</option>
					  <option>For Rent</option>
					</select>
                  </div>
                  
                  
                  <div class="col-md-6">
                    <div class="utf-main-search-input-item">
                      <input type="text" placeholder="Enter Keywords..." value=""/>
                      <button class="button"><i class="fa fa-search"></i> Search</button>
                    </div>
                  </div>
                </div>
                
              </div>              
            </form>            
          </div>
        </div>
      </div>
    </div>
  
  
  
  <div class="container">
    <div class="row sticky-wrapper">
      <div class="col-md-8"> 
        
        <div class="utf-sort-box-aera">
            <div class="sort-by">
              <label>Sort By:</label>
              <div class="sort-by-select">
                <select data-placeholder="Default Properties" class="utf-chosen-select-single-item" >
                  <option>Default Properties</option>
                  <option>Low to High Price</option>
                  <option>High to Low Price</option>
                  <option>Newest Properties</option>
                  <option>Oldest Properties</option>
                </select>
              </div>
            </div>
            <div class="utf-layout-switcher"> 
				<a href="#" class="list"><i class="sl sl-icon-list"></i></a> 
				<a href="#" class="grid"><i class="sl sl-icon-grid"></i></a> 
			</div>
        </div>
        
        
        <div class="utf-listings-container-area list-layout"> 
          <div class="utf-listing-item"> <a href="single-property-page-1.html" class="utf-smt-listing-img-container">
            <div class="utf-listing-badges-item"><span class="for-sale">For Sale</span></div>
            <div class="utf-listing-img-content-item">
				<img class="utf-user-picture" src="images/user_1.jpg" alt="user_1" />
				<span class="like-icon with-tip" data-tip-content="Bookmark"></span> 

			</div>
            <div class="utf-listing-carousel-item">
              <div><img src="images/listing-01.jpg" alt=""/></div>
              <div><img src="images/listing-01.jpg" alt=""/></div>
              <div><img src="images/listing-01.jpg" alt=""/></div>
            </div>
            </a>
            <div class="utf-listing-content">
              <div class="utf-listing-title">
			    <span class="utf-listing-price">$22,000/mo</span>
                <h4><a href="single-property-page-1.html">Renovated Luxury Apartment</a></h4>
                <span class="utf-listing-address"><i class="icon-material-outline-location-on"></i> 2021 San Pedro, Los Angeles 90015</span>
			  </div>
			  <ul class="utf-listing-features">
				<li><i class="fa fa-bed"></i> Beds<span>3</span></li>
				<li><i class="icon-feather-codepen"></i> Baths<span>2</span></li>
				<li><i class="fa fa-car"></i> Garages<span>2</span></li>					  					 
				<li><i class="icon-line-awesome-arrows"></i> Sq Ft<span>1530</span></li>
			  </ul>
			  <div class="utf-listing-user-info"><a href="agents-profile.html"><i class="icon-line-awesome-user"></i>Magdalene Orange</a> <span>11 Days Ago</span></div>              
            </div>
          </div>
          
          
          
          <div class="utf-listing-item"> <a href="single-property-page-1.html" class="utf-smt-listing-img-container">
            <div class="utf-listing-badges-item"> <span class="for-rent">For Rent</span> </div>
            <div class="utf-listing-img-content-item">
				<img class="utf-user-picture" src="images/user_1.jpg" alt="user_1" />
				<span class="like-icon with-tip" data-tip-content="Bookmark"></span> 

			</div>
            <img src="images/listing-02.jpg" alt=""/> </a>
            <div class="utf-listing-content">
              <div class="utf-listing-title">
			    <span class="utf-listing-price">$20,000/mo</span>
                <h4><a href="single-property-page-1.html">Renovated Luxury Apartment</a></h4>
                <span class="utf-listing-address"><i class="icon-material-outline-location-on"></i> 2021 San Pedro, Los Angeles 90015</span>
			  </div>
              <ul class="utf-listing-features">
				<li><i class="fa fa-bed"></i> Beds<span>3</span></li>
				<li><i class="icon-feather-codepen"></i> Baths<span>2</span></li>
				<li><i class="fa fa-car"></i> Garages<span>2</span></li>					  					 
				<li><i class="icon-line-awesome-arrows"></i> Sq Ft<span>1530</span></li>
			  </ul>
			  <div class="utf-listing-user-info"><a href="agents-profile.html"><i class="icon-line-awesome-user"></i>Mel Gibson</a> <span>11 Days Ago</span></div>              
            </div>
          </div>
          
          
          
          <div class="utf-listing-item"> <a href="single-property-page-1.html" class="utf-smt-listing-img-container">
            <div class="utf-listing-badges-item"> <span class="for-rent">For Rent</span> </div>
            <div class="utf-listing-img-content-item">
				<img class="utf-user-picture" src="images/user_1.jpg" alt="user_1" />
				<span class="like-icon with-tip" data-tip-content="Bookmark"></span> 

			</div>
            <img src="images/listing-03.jpg" alt="" /> </a>
            <div class="utf-listing-content">
              <div class="utf-listing-title">
			    <span class="utf-listing-price">$18,000/mo</span>
                <h4><a href="single-property-page-1.html">Renovated Luxury Apartment</a></h4>
                <span class="utf-listing-address"><i class="icon-material-outline-location-on"></i> 2021 San Pedro, Los Angeles 90015</span>
			  </div>
              <ul class="utf-listing-features">
				<li><i class="fa fa-bed"></i> Beds<span>3</span></li>
				<li><i class="icon-feather-codepen"></i> Baths<span>2</span></li>
				<li><i class="fa fa-car"></i> Garages<span>2</span></li>					  					 
				<li><i class="icon-line-awesome-arrows"></i> Sq Ft<span>1530</span></li>
			  </ul>
			  <div class="utf-listing-user-info"><a href="agents-profile.html"><i class="icon-line-awesome-user"></i> Julius Ceasar</a> <span>16 Days Ago</span></div>
            </div>
          </div>
          
          
          
          <div class="utf-listing-item"> <a href="single-property-page-1.html" class="utf-smt-listing-img-container">
            <div class="utf-listing-badges-item"> <span class="for-sale">For Sale</span> </div>
            <div class="utf-listing-img-content-item">
				<img class="utf-user-picture" src="images/user_1.jpg" alt="user_1" />
				<span class="like-icon with-tip" data-tip-content="Bookmark"></span> 

			</div>
            <div class="utf-listing-carousel-item">
              <div><img src="images/listing-04.jpg" alt=""/></div>
              <div><img src="images/listing-04.jpg" alt=""/></div>
            </div>
            </a>
            <div class="utf-listing-content">
              <div class="utf-listing-title">
			    <span class="utf-listing-price">$16,000/mo</span>
                <h4><a href="single-property-page-1.html">Renovated Luxury Apartment</a></h4>
                <span class="utf-listing-address"><i class="icon-material-outline-location-on"></i> 2021 San Pedro, Los Angeles 90015</span>
			  </div>
              <ul class="utf-listing-features">
				<li><i class="fa fa-bed"></i> Beds<span>3</span></li>
				<li><i class="icon-feather-codepen"></i> Baths<span>2</span></li>
				<li><i class="fa fa-car"></i> Garages<span>2</span></li>					  					 
				<li><i class="icon-line-awesome-arrows"></i> Sq Ft<span>1530</span></li>
			  </ul>
			  <div class="utf-listing-user-info"><a href="agents-profile.html"><i class="icon-line-awesome-user"></i> Bildad Kagia</a> <span>21 Days Ago</span></div>
            </div>
          </div>
          
          
          
          <div class="utf-listing-item"> <a href="single-property-page-1.html" class="utf-smt-listing-img-container">
            <div class="utf-listing-badges-item"> <span class="for-sale">For Sale</span> </div>
            <div class="utf-listing-img-content-item">
				<img class="utf-user-picture" src="images/user_1.jpg" alt="user_1" />
				<span class="like-icon with-tip" data-tip-content="Bookmark"></span> 

			</div>
            <img src="images/listing-05.jpg" alt=""/> </a>
            <div class="utf-listing-content">
              <div class="utf-listing-title">
			    <span class="utf-listing-price">$18,000/mo</span>
                <h4><a href="single-property-page-1.html">Renovated Luxury Apartment</a></h4>
                <span class="utf-listing-address"><i class="icon-material-outline-location-on"></i> 2021 San Pedro, Los Angeles 90015</span>
			  </div>
              <ul class="utf-listing-features">
				<li><i class="fa fa-bed"></i> Beds<span>3</span></li>
				<li><i class="icon-feather-codepen"></i> Baths<span>2</span></li>
				<li><i class="fa fa-car"></i> Garages<span>2</span></li>					  					 
				<li><i class="icon-line-awesome-arrows"></i> Sq Ft<span>1530</span></li>
			  </ul>
			  <div class="utf-listing-user-info"><a href="agents-profile.html"><i class="icon-line-awesome-user"></i> Wax Charlamagne</a> <span>19 Days Ago</span></div>
            </div>
          </div>
          
          
          
          <div class="utf-listing-item"> <a href="single-property-page-1.html" class="utf-smt-listing-img-container">
            <div class="utf-listing-badges-item"> <span class="for-rent">For Rent</span> </div>
            <div class="utf-listing-img-content-item">
				<img class="utf-user-picture" src="images/user_1.jpg" alt="user_1" />
				<span class="like-icon with-tip" data-tip-content="Bookmark"></span> 

			</div>
            <img src="images/listing-06.jpg" alt=""/> </a>
            <div class="utf-listing-content">
              <div class="utf-listing-title">
			    <span class="utf-listing-price">$15,000/mo</span>
                <h4><a href="single-property-page-1.html">Old Town Manchester</a></h4>
                <span class="utf-listing-address"><i class="icon-material-outline-location-on"></i> 2021 San Pedro, Los Angeles 90015</span>
			  </div>
              <ul class="utf-listing-features">
				<li><i class="fa fa-bed"></i> Beds<span>3</span></li>
				<li><i class="icon-feather-codepen"></i> Baths<span>2</span></li>
				<li><i class="fa fa-car"></i> Garages<span>2</span></li>					  					 
				<li><i class="icon-line-awesome-arrows"></i> Sq Ft<span>1530</span></li>
			  </ul>
			  <div class="utf-listing-user-info"><a href="agents-profile.html"><i class="icon-line-awesome-user"></i>Johanson Mildred</a> <span>13 Days Ago</span></div>
            </div>
          </div>
		  
		  
          <div class="utf-listing-item"> <a href="single-property-page-1.html" class="utf-smt-listing-img-container">
            <div class="utf-listing-badges-item"> <span class="for-sale">For Sale</span> </div>
            <div class="utf-listing-img-content-item">
				<img class="utf-user-picture" src="images/user_1.jpg" alt="user_1" />
				<span class="like-icon with-tip" data-tip-content="Bookmark"></span> 

			</div>
            <img src="images/listing-05.jpg" alt=""/> </a>
            <div class="utf-listing-content">
              <div class="utf-listing-title">
			    <span class="utf-listing-price">$18,000/mo</span>
                <h4><a href="single-property-page-1.html">Renovated Luxury Apartment</a></h4>
                <span class="utf-listing-address"><i class="icon-material-outline-location-on"></i> 2021 San Pedro, Los Angeles 90015</span>
			  </div>
              <ul class="utf-listing-features">
				<li><i class="fa fa-bed"></i> Beds<span>3</span></li>
				<li><i class="icon-feather-codepen"></i> Baths<span>2</span></li>
				<li><i class="fa fa-car"></i> Garages<span>2</span></li>					  					 
				<li><i class="icon-line-awesome-arrows"></i> Sq Ft<span>1530</span></li>
			  </ul>
			  <div class="utf-listing-user-info"><a href="agents-profile.html"><i class="icon-line-awesome-user"></i>Melody June</a> <span>17 Days Ago</span></div>
            </div>
          </div>
          
          
          
          <div class="utf-listing-item"> <a href="single-property-page-1.html" class="utf-smt-listing-img-container">
            <div class="utf-listing-badges-item"> <span class="for-rent">For Rent</span> </div>
            <div class="utf-listing-img-content-item">
				<img class="utf-user-picture" src="images/user_1.jpg" alt="user_1" />
				<span class="like-icon with-tip" data-tip-content="Bookmark"></span> 

			</div>
            <img src="images/listing-06.jpg" alt=""/> </a>
            <div class="utf-listing-content">
              <div class="utf-listing-title">
			    <span class="utf-listing-price">$15,000/mo</span>
                <h4><a href="single-property-page-1.html">Old Town Manchester</a></h4>
                <span class="utf-listing-address"><i class="icon-material-outline-location-on"></i> 2021 San Pedro, Los Angeles 90015</span>
			  </div>
              <ul class="utf-listing-features">
				<li><i class="fa fa-bed"></i> Beds<span>3</span></li>
				<li><i class="icon-feather-codepen"></i> Baths<span>2</span></li>
				<li><i class="fa fa-car"></i> Garages<span>2</span></li>					  					 
				<li><i class="icon-line-awesome-arrows"></i> Sq Ft<span>1530</span></li>
			  </ul>
			  <div class="utf-listing-user-info"><a href="agents-profile.html"><i class="icon-line-awesome-user"></i> John Williams</a> <span>10 Days Ago</span></div>
            </div>
          </div>
        </div>
        
        
        
        <div class="utf-pagination-container margin-top-20">
          <nav class="pagination">
            <ul>
              <li><a href="#"><i class="fa fa-angle-left"></i></a></li>
			  <li><a href="#" class="current-page">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li class="blank">...</li>
              <li><a href="#">10</a></li>
			  <li><a href="#"><i class="fa fa-angle-right"></i></a></li>
            </ul>
          </nav>          
        </div>
        
      </div>
      
      
      <div class="col-md-4">
        <div class="sidebar"> 
		  
            <div class="widget utf-sidebar-widget-item">
			  <div class="utf-detail-banner-add-section">
				 <a href="#"><img src="images/banner-add-2.jpg" alt="banner-add-2"/></a>
			  </div>             
            </div>
          
			
          
		  <div class="widget utf-sidebar-widget-item">
            <div class="utf-boxed-list-headline-item">
				<h3>Find New Home</h3>
			</div>
			<div class="row with-forms"> 
              <div class="col-md-6 col-sm-6 col-xs-6">
                <select data-placeholder="Any Status" class="utf-chosen-select-single-item">
                  <option>Any Status</option>
                  <option>For Sale</option>
                  <option>For Rent</option>
                </select>
              </div>
			  <div class="col-md-6 col-sm-6 col-xs-6">
                <select data-placeholder="Any Type" class="utf-chosen-select-single-item">
                  <option>Any Type</option>
                  <option>Apartments</option>
                  <option>Houses</option>
                  <option>Commercial</option>
                  <option>Garages</option>
                  <option>Lots</option>
                </select>
              </div>
            </div>
            
            
			
            <div class="row with-forms"> 
              <div class="col-md-6">
                <select data-placeholder="Beds" class="utf-chosen-select-single-item">
                  <option label="blank"></option>
                  <option>Beds (Any)</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              
              <div class="col-md-6">
                <select data-placeholder="Baths" class="utf-chosen-select-single-item">
                  <option label="blank"></option>
                  <option>Baths (Any)</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
            
			
            
            <div class="row with-forms"> 
              <div class="col-md-12">
                <select data-placeholder="All States" class="chosen-select">
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
            
            
            
            <div class="row with-forms"> 
              <div class="col-md-12">
                <select data-placeholder="All Cities" class="chosen-select">
                  <option>All Cities</option>
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
            
            
            
            <div class="utf-range-slider-item margin-top-10 margin-bottom-25">
              <label>Area Range</label>
              <div id="utf-area-range-item" data-min="0" data-max="1500" data-unit="sq ft"></div>
              <div class="clearfix"></div>
            </div>
            
            
            <div class="utf-range-slider-item margin-bottom-10">
              <label>Price Range</label>
              <div id="utf-price-range-item" data-min="0" data-max="400000" data-unit="$"></div>
              <div class="clearfix"></div>
            </div>
            
            
            <a href="#" class="utf-utf-more-search-options-area-button margin-bottom-10 margin-top-20" data-open-title="More Search Option" data-close-title="Less Search Option"></a>
            <div class="utf-more-search-options-area relative"> 
              <div class="checkboxes one-in-row margin-bottom-10">
                <input id="check-2" type="checkbox" name="check"/>
                <label for="check-2">Air Conditioning</label>
                <input id="check-3" type="checkbox" name="check"/>
                <label for="check-3">Swimming Pool</label>
                <input id="check-4" type="checkbox" name="check"/>
                <label for="check-4">Central Heating</label>
                <input id="check-5" type="checkbox" name="check"/>
                <label for="check-5">Laundry Room</label>
                <input id="check-6" type="checkbox" name="check"/>
                <label for="check-6">Gym</label>
                <input id="check-7" type="checkbox" name="check"/>
                <label for="check-7">Alarm</label>
                <input id="check-8" type="checkbox" name="check"/>
                <label for="check-8">Window Covering</label>
              </div>
              
            </div>
            
            <button class="button fullwidth margin-top-10">Search</button>
          </div>
          
			
		  
            <div class="widget utf-sidebar-widget-item">
			  <div class="utf-boxed-list-headline-item">
				  <h3>Recently Viewed</h3>
			  </div>
              <ul class="widget-tabs">
                
                <li>
                  <div class="widget-content">
                    <div class="widget-thumb"> <a href="blog-full-width-single-post.html"><img src="images/blog-widget-03.jpg" alt=""/></a> </div>
                    <div class="widget-text">
                      <h5><a href="blog-full-width-single-post.html">How to Woo a Recruiter and Land Your Dream.</a></h5>
                      <span>$22,000/mo</span> 
					</div>
                    <div class="clearfix"></div>
                  </div>
                </li>
                
                
                <li>
                  <div class="widget-content">
                    <div class="widget-thumb"> <a href="blog-full-width-single-post.html"><img src="images/blog-widget-02.jpg" alt=""/></a> </div>
                    <div class="widget-text">
                      <h5><a href="blog-full-width-single-post.html">Hey Its Time To Get Up And Get Hired.</a></h5>
                      <span>$22,000/mo</span> 
					</div>
                    <div class="clearfix"></div>
                  </div>
                </li>
                
                
                <li>
                  <div class="widget-content">
                    <div class="widget-thumb"> <a href="blog-full-width-single-post.html"><img src="images/blog-widget-01.jpg" alt=""/></a> </div>
                    <div class="widget-text">
                      <h5><a href="blog-full-width-single-post.html">The Best Canadian Merchant Account Providers.</a></h5>
                      <span>$22,000/mo</span> 
					</div>
                    <div class="clearfix"></div>
                  </div>
                </li>
              </ul>
            </div>
            
            
			
            <div class="widget utf-sidebar-widget-item">
			  <div class="utf-boxed-list-headline-item">
				  <h3>Property Categories</h3>
				  <div class="utf-sidebar-categorie"> 
					<ul>
					  <li><a href="#">Apartment</a><span>10 Property</span></li> 
					  <li><a href="#">Condo</a><span>14 Property</span></li> 
					  <li><a href="#">Family House</a><span>18 Property</span></li> 
					  <li><a href="#">Modern Villa</a><span>12 Property</span></li> 
					  <li><a href="#">Town House</a><span>10 Property</span></li> 					  
					</ul>
				  </div>
			  </div>              
            </div>
            

			
            <div class="widget utf-sidebar-widget-item">
			  <div class="utf-boxed-list-headline-item">
				  <h3>Property Tags Cloud</h3>
				  <div class="task-tags"> 
					  <a href="#"><span>Apartment</span></a> 
					  <a href="#"><span>Family House</span></a> 
					  <a href="#"><span>Modern Villa</span></a> 
					  <a href="#"><span>Town House</span></a> 	
					  <a href="#"><span>Condo</span></a> 					  
				  </div>
			  </div>              
            </div>
            

			
            <div class="widget utf-sidebar-widget-item">
			  <div class="utf-boxed-list-headline-item">
				  <h3>Social Sharing</h3>
			  </div>
              <ul class="utf-social-icons rounded">
                <li><a class="facebook" href="#"><i class="icon-facebook"></i></a></li>
                <li><a class="twitter" href="#"><i class="icon-twitter"></i></a></li>
                <li><a class="linkedin" href="#"><i class="icon-linkedin"></i></a></li>
				<li><a class="instagram" href="#"><i class="icon-instagram"></i></a></li>
				<li><a class="gplus" href="#"><i class="icon-gplus"></i></a></li>
              </ul>
			  <div class="clearfix"></div>
            </div>
            
          <div class="clearfix"></div>	
        </div>
      </div>
      
    </div>
  </div>
  <div class="margin-top-65"></div>
        </Layout>
    )
}

export default Listings
