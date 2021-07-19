import React from 'react'
import Layout from './Layout'

function BlogFullWidth() {
    return (
        <Layout>
            <div>
  <div className="parallax titlebar" data-background="images/listings-parallax.jpg" data-color="rgba(48, 48, 48, 1)" data-color-opacity="0.8" data-img-width={800} data-img-height={505}>
    <div id="titlebar">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>Blog</h2>
            {/* Breadcrumbs */}
            <nav id="breadcrumbs">
              <ul>
                <li><a href="/">Home</a></li>
                <li>Main Story</li>
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
        <div className="col-md-12">
          <h2> The Best Canadian Merchant Account Providers.</h2>
          <ul className="post-meta">             
            <li>By, Bill Burr</li>
            <li>13 June, 2021</li>
            <li><a href="#">5 Comments</a></li>
          </ul>
          <div className="widget utf-sidebar-widget-item">
            <div className="utf-boxed-list-headline-item"> 
              <div className="property-slider default"> 
                <a href data-background-image="images/blog-post-02.jpg" className="item mfp-gallery" />
                <ul className="utf-social-icons rounded">
                  <li><a className="facebook" href="#"><i className="icon-facebook" /></a></li>
                  <li><a className="twitter" href="#"><i className="icon-twitter" /></a></li>
                  <li><a className="linkedin" href="#"><i className="icon-linkedin" /></a></li>
                  <li><a className="instagram" href="#"><i className="icon-instagram" /></a></li>
                  <li><a className="gplus" href="#"><i className="icon-gplus" /></a></li>
                </ul>
                <div className="clearfix" />
              </div>
            </div>
          </div>
        </div>
        <p>Lorem Ipsum is simply dummy text of printing and type setting industry. Lorem Ipsum been industry standard dummy text ever since, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions.</p>
        <blockquote className="margin-top-20 margin-bottom-20">Lorem Ipsum is simply dummy text of printing and type setting industry. Lorem Ipsum been industry standard dummy text ever since, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the with the release of Letraset sheets containing Lorem Ipsum passages.</blockquote>
        <p>Lorem Ipsum is simply dummy text of printing and type setting industry. Lorem Ipsum been industry standard dummy text ever since, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the with the release of Letraset sheets containing Lorem Ipsum passages</p>
        <ul className="list-3">
          <li>Morbi mattis ullamcorper velit. Phasellus gravida semper nisi nullam vel sem.</li>
          <li>Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.</li>
          <li>Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.</li>
          <p>Lorem Ipsum is simply dummy text of printing and type setting industry. Lorem Ipsum been industry standard dummy text ever since, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the with the release of Letraset sheets containing Lorem Ipsum passages</p>
        </ul>
      </div>
    </div>
  </div>
  {/* Container / End */}
  {/* Reviews Begining */}
  <section className="comments">
    <div className="col-md-8 col-md-offset-2">
      <div className="utf-inner-blog-section-title">
        <h4><i className="icon-line-awesome-commenting-o" /> Comments (5)</h4>
      </div>
      <ul>
        <li>
          <div className="avatar"><img src="images/coumment-user-1.jpg" alt="" /></div>
          <div className="comment-content">
            <div className="arrow-comment" />
            <div className="comment-by">Benjamin Israel<span className="date">15th, Dec 2021</span> <a href="#" className="reply"><i className="fa fa-reply" /> Reply</a> </div>
            <p>Lorem Ipsum is simply dummy text of printing and type setting industry. Lorem Ipsum been industry standard dummy text ever since, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <ul>
            <li>
              <div className="avatar"><img src="images/coumment-user-2.jpg" alt="" /></div>
              <div className="comment-content">
                <div className="arrow-comment" />
                <div className="comment-by">Roman Chelsea<span className="date">20th, May 2021</span> <a href="#" className="reply"><i className="fa fa-reply" /> Reply</a> </div>
                <p>Lorem Ipsum is simply dummy text of printing and type setting industry. Lorem Ipsum been industry standard dummy text ever since, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            </li>
            <li>
              <div className="avatar"><img src="images/coumment-user-2.jpg" alt="" /></div>
              <div className="comment-content">
                <div className="arrow-comment" />
                <div className="comment-by">August Smith<span className="date">15th, Jan 2021</span> <a href="#" className="reply"><i className="fa fa-reply" /> Reply</a> </div>
                <p>Lorem Ipsum is simply dummy text of printing and type setting industry. Lorem Ipsum been industry standard dummy text ever since, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
              <ul>
                <li>
                  <div className="avatar"><img src="images/coumment-user-1.jpg" alt="" /></div>
                  <div className="comment-content">
                    <div className="arrow-comment" />
                    <div className="comment-by">Daniel Olson<span className="date">19th, Feb 2021</span> <a href="#" className="reply"><i className="fa fa-reply" /> Reply</a> </div>
                    <p>Lorem Ipsum is simply dummy text of printing and type setting industry. Lorem Ipsum been industry standard dummy text ever since, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <div className="avatar"><img src="images/coumment-user-3.jpg" alt="" /> </div>
          <div className="comment-content">
            <div className="arrow-comment" />
            <div className="comment-by">Nathalie Trump<span className="date">19th, Feb 2021</span> <a href="#" className="reply"><i className="fa fa-reply" /> Reply</a> </div>
            <p>Lorem Ipsum is simply dummy text of printing and type setting industry. Lorem Ipsum been industry standard dummy text ever since, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
  <div className="clearfix" />
  <div className="margin-top-35" />
  {/* Add Comment */}
  <div className="col-md-8 col-md-offset-2"> 
    <div className="utf-inner-blog-section-title">
      <h4><i className="icon-line-awesome-comments-o" /> Leave Your Comment</h4>
    </div>
    <div className="margin-top-15" />
    {/* Add Comment Form */}
    <form id="add-comment" className="add-comment">
      <fieldset>
        <div className="row">
          <div className="col-md-6">
            <input type="text" placeholder="Name *" />
          </div>
          <div className="col-md-6">
            <input type="text" placeholder="Email Address *" />
          </div>
          <div className="col-md-6">
            <input type="text" placeholder="Phone Number *" />
          </div>
          <div className="col-md-6">
            <input type="text" placeholder="Subject"/>
          </div>
          <div className="col-md-12">
            <textarea cols={30} placeholder="Comment..." rows={2}  />
          </div>
        </div>
      </fieldset></form></div>
  <div className="utf-centered-button">
    <div className="col-md-8 col-md-offset-2">
      <a href="#" className="button">Submit Comment</a>
    </div>
    <div className="clearfix" />
  </div>
  <div class="margin-top-65"></div>
</div>

            
        </Layout>
    )
}

export default BlogFullWidth
