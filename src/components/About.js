import React from 'react'
import Layout from './Layout'

function About() {
    return (
        <Layout>
            <div>
  <div className="parallax titlebar" data-background="images/listings-parallax.jpg" data-color="rgba(48, 48, 48, 1)" data-color-opacity="0.8" data-img-width={800} data-img-height={505}>
    <div id="titlebar">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>About Us</h2>
            {/* Breadcrumbs */}
            <nav id="breadcrumbs">
              <ul>
                <li><a href="/">Home</a></li>
                <li>About Us</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Contact */} 
  <div className="margin-top-65 padding-bottom-55">
    <div className="container">
      <div className="row">
        <div className="col-xl-12 col-md-12">
          <p>Lorem Ipsum is simply dummy text of printing and type setting industry. Lorem Ipsum been industry standard dummy text ever since, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions.</p>
          <blockquote className="margin-top-20 margin-bottom-20">Lorem Ipsum is simply dummy text of printing and type setting industry. Lorem Ipsum been industry standard dummy text ever since, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the with the release of Letraset sheets containing Lorem Ipsum passages.</blockquote>
          <p>Lorem Ipsum is simply dummy text of printing and type setting industry. Lorem Ipsum been industry standard dummy text ever since, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the with the release of Letraset sheets containing Lorem Ipsum passages</p>
          <ul className="list-2">
            <li>Morbi mattis ullamcorper velit. Phasellus gravida semper nisi nullam vel sem.</li>
            <li>Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.</li>
            <li>Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.</li>
            <li>Donec mollis hendrerit risus. Phasellus nec sem in justo pellentesque facilisis.</li>
            <li>Praesent congue erat at massa. Sed cursus turpis vitae tortor. Donec posuere vulputate arcu.</li>
            <li>Donec elit libero, sodales nec, volutpat a, suscipit non, turpis Nullam sagittis.</li>
            <li>Pellentesque auctor neque nec urna. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* Container / End */}
  {/* Fullwidth Section */}
  <section className="fullwidth" data-background-color="#fbfbfb"> 
    <div className="container">
      <div className="row">
        <div className="col-md-12">	
          <div className="utf-section-headline-item centered margin-bottom-30 margin-top-0">
            <h3 className="headline"><span>What are you looking for?</span> Properties In Most Popular Places</h3>
            <p className="utf-slogan-text">Lorem Ipsum is simply dummy text printing and type setting industry Lorem Ipsum been industry standard dummy text ever since when unknown printer took a galley.</p>
          </div>  
        </div>
        <div className="col-md-3 col-sm-6"> 
          <div className="utf-icon-box-item-area">
            <div className="icon-container"><i className="icon-line-awesome-building" /></div>
            <h3>Modern Villa</h3>
            <p>Lorem Ipsum is simply dummy text the printing and type setting industry Lorem Ipsum has been industry.</p>
          </div>
        </div>
        <div className="col-md-3 col-sm-6"> 
          <div className="utf-icon-box-item-area">
            <div className="icon-container"><i className="icon-line-awesome-institution" /></div>
            <h3>Family House</h3>
            <p>Lorem Ipsum is simply dummy text the printing and type setting industry Lorem Ipsum has been industry.</p>
          </div>
        </div>
        <div className="col-md-3 col-sm-6"> 
          <div className="utf-icon-box-item-area">
            <div className="icon-container"><i className="icon-material-outline-location-city" /></div>
            <h3>Town House</h3>
            <p>Lorem Ipsum is simply dummy text the printing and type setting industry Lorem Ipsum has been industry.</p>
          </div>
        </div>
        <div className="col-md-3 col-sm-6"> 
          <div className="utf-icon-box-item-area">
            <div className="icon-container"><i className="icon-material-outline-business" /></div>
            <h3>Apartment</h3>
            <p>Lorem Ipsum is simply dummy text the printing and type setting industry Lorem Ipsum has been industry.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="fullwidth margin-bottom-0 padding-top-60 padding-bottom-0" data-background-color="#ffffff"> 
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
  <div class="margin-top-65"></div>
</div>

            
        </Layout>
    )
}

export default About
