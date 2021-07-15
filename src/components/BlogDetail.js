import React from 'react'
import Layout from './Layout'

function BlogDetail() {
    return (
        <Layout>
            <div>
  <div className="parallax titlebar" data-background="images/listings-parallax.jpg" data-color="rgba(48, 48, 48, 1)" data-color-opacity="0.8" data-img-width={800} data-img-height={505}>
    <div id="titlebar">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>Blog Posts</h2>
            {/* Breadcrumbs */}
            <nav id="breadcrumbs">
              <ul>
                <li><a href="/">Home</a></li>
                <li>Our Blog</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Content */}
  <div className="container"> 
    {/* Blog Posts */}
    <div className="blog-page">
      <div className="row"> 
        {/* Sidebar */} 
        <div className="col-md-4">
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
              <div className="utf-quote-box">
                <div className="utf-quote-info">
                  <h4>Make a Difference with Your Online Property!</h4>
                  <p>Lorem Ipsum is simply dummy text of printing and type industry.</p>
                  <a href="/register" className="button utf-ripple-effect-dark utf-button-sliding-icon margin-top-10">Create an Account <i className="icon-feather-chevrons-right" /></a>
                </div>
              </div>
            </div>
            {/* Widget / End */}
            {/* Widget */}
            <div className="widget utf-sidebar-widget-item">
              <div className="utf-boxed-list-headline-item">
                <h3>Search Blog</h3>
              </div>
              <div className="utf-search-blog-input">
                <div className="input">
                  <input className="search-field" type="text" placeholder="Type and hit enter" defaultValue />
                </div>
              </div>
              <div className="clearfix" />
            </div>
            {/* Widget / End */} 
            {/* Widget */}
            <div className="widget utf-sidebar-widget-item">
              <div className="utf-boxed-list-headline-item">
                <h3>Recently Posts</h3>
              </div>
              <ul className="widget-tabs">
                {/* Post #1 */}
                <li>
                  <div className="widget-content">
                    <div className="widget-thumb"> <a href="/blog-detail"><img src="images/blog-widget-03.jpg" alt="" /></a> </div>
                    <div className="widget-text">
                      <h5><a href="/blog-detail">How to Woo a Recruiter and Land Your Dream.</a></h5>
                      <span>15 May, 2021</span> 
                    </div>
                    <div className="clearfix" />
                  </div>
                </li>
                {/* Post #2 */}
                <li>
                  <div className="widget-content">
                    <div className="widget-thumb"> <a href="/blog-detail"><img src="images/blog-widget-02.jpg" alt="" /></a> </div>
                    <div className="widget-text">
                      <h5><a href="/blog-detail">Hey Its Time To Get Up And Get Hired.</a></h5>
                      <span>17 June, 2021</span> 
                    </div>
                    <div className="clearfix" />
                  </div>
                </li>
                {/* Post #3 */}
                <li>
                  <div className="widget-content">
                    <div className="widget-thumb"> <a href="/blog-detail"><img src="images/blog-widget-01.jpg" alt="" /></a> </div>
                    <div className="widget-text">
                      <h5><a href="/blog-detail">The Best Canadian Merchant Account Providers.</a></h5>
                      <span>22 May, 2021</span> 
                    </div>
                    <div className="clearfix" />
                  </div>
                </li>
              </ul>
            </div>
            {/* Widget / End*/} 
            {/* Widget */}
            <div className="widget utf-sidebar-widget-item">
              <div className="utf-boxed-list-headline-item">
                <h3>Property Categories</h3>
                <div className="utf-sidebar-categorie"> 
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
            {/* Widget / End*/}
            {/* Widget */}
            <div className="widget utf-sidebar-widget-item">
              <div className="utf-boxed-list-headline-item">
                <h3>Property Tags Cloud</h3>
                <div className="task-tags"> 
                  <a href="#"><span>Apartment</span></a> 
                  <a href="#"><span>Family House</span></a> 
                  <a href="#"><span>Modern Villa</span></a> 
                  <a href="#"><span>Town House</span></a> 	
                  <a href="#"><span>Condo</span></a> 					  
                </div>
              </div>              
            </div>
            {/* Widget / End*/}
            {/* Widget */}
            <div className="widget utf-sidebar-widget-item">
              <div className="utf-boxed-list-headline-item">
                <h3>Social Sharing</h3>
              </div>
              <ul className="utf-social-icons rounded">
                <li><a className="facebook" href="#"><i className="icon-facebook" /></a></li>
                <li><a className="twitter" href="#"><i className="icon-twitter" /></a></li>
                <li><a className="linkedin" href="#"><i className="icon-linkedin" /></a></li>
                <li><a className="instagram" href="#"><i className="icon-instagram" /></a></li>
                <li><a className="gplus" href="#"><i className="icon-gplus" /></a></li>
              </ul>
              <div className="clearfix" />
            </div>
            {/* Widget / End*/}
            {/* Widget */}
            <div className="widget utf-sidebar-widget-item">
              <div className="utf-detail-banner-add-section">
                <a href="#"><img src="images/banner-add-2.jpg" alt="banner-add-2" /></a>
              </div>             
            </div>
            {/* Widget / End*/}	
            <div className="clearfix" />
            <div className="margin-bottom-40" />
          </div>
        </div>
        <div className="col-md-8"> 
          <div className="blog-post single-post"> 
            <img className="post-img" src="images/blog-post-02.jpg" alt="" /> 
            <div className="utf-post-content-area">
              <h3>The Best (and Worst) Canadian Merchant Account Providers.</h3>
              <ul className="post-meta">
                <li>By, Bill Burr</li>
                <li>13 June, 2021</li>
                <li><a href="#">5 Comments</a></li>
              </ul>
              <p>Lorem Ipsum is simply dummy text of printing and type setting industry. Lorem Ipsum been industry standard dummy text ever since, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions.</p>
              <div className="post-quote"> <span className="icon" />
                <blockquote>Lorem Ipsum is simply dummy text of printing and type setting industry. Lorem Ipsum been industry standard dummy text ever since, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions.</blockquote>
              </div>
              <p>Lorem Ipsum is simply dummy text of printing and type setting industry. Lorem Ipsum been industry standard dummy text ever since, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions.</p>
              <p>Lorem Ipsum is simply dummy text of printing and type setting industry. Lorem Ipsum been industry standard dummy text ever since, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions.</p>
              {/* Share Buttons */}
              <div className="utf-detail-social-sharing margin-top-25">
                <span><strong>Social Sharing:-</strong></span>
                <ul>
                  <li><a href="#" className="tooltip top" title="Facebook"><i className="icon-brand-facebook-f" /></a></li>
                  <li><a href="#" className="tooltip top" title="Twitter"><i className="icon-brand-twitter" /></a></li>
                  <li><a href="#" className="tooltip top" title="Linkedin"><i className="icon-brand-linkedin-in" /></a></li>
                  <li><a href="#" className="tooltip top" title="Google Plus"><i className="icon-brand-google-plus-g" /></a></li>					
                  <li><a href="#" className="tooltip top" title="Whatsapp"><i className="icon-brand-whatsapp" /></a></li>
                  <li><a href="#" className="tooltip top" title="Pinterest"><i className="icon-brand-pinterest-p" /></a></li>
                </ul>
              </div>
              <div className="clearfix" />
            </div>
          </div>
          {/* Blog Post / End */} 
          {/* Post Navigation */}
          <ul id="posts-nav" className="margin-top-0 margin-bottom-0">
            <li className="next-post"> <a href="#"><span>Next Post <i className="fa fa-angle-right" /></span> <strong>The Best Canadian Merchant Account Providers.</strong></a> </li>
            <li className="prev-post"> <a href="#"><span><i className="fa fa-angle-left" /> Previous Post</span> <strong>How to “Woo” a Recruiter and Land Your Dream Job.</strong></a> </li>
          </ul>
          {/* Related Posts */}
          <div className="utf-inner-blog-section-title">
            <h4><i className="icon-brand-bimobject" /> Related Blog Posts</h4>
          </div>
          <div className="row">
            <div className="col-md-6"> 
              <div className="blog-post"> 
                <a href="/blog-detail" className="post-img"> <img src="images/blog-post-01.jpg" alt="" /> </a> 
                <div className="utf-post-content-area">
                  <h3><a href="/blog-detail">What It Really Takes to Make $100k Before You Turn 30</a></h3>
                  <ul className="utf-blog-item-post-list">
                    <li>By, Maxwell Juma</li>	
                    <li>20 Jan, 2020</li>
                  </ul>
                  <p>Lorem Ipsum is simply dummy text of printing industry Lorem Ipsum been industry standard dummy text since book.</p>
                </div>
              </div>              
            </div>
            <div className="col-md-6"> 
              <div className="blog-post"> 
                <a href="/blog-detail" className="post-img"> <img src="images/blog-post-02.jpg" alt="" /> </a> 
                <div className="utf-post-content-area">
                  <h3><a href="/blog-detail">The Best Canadian Merchant Account Providers.</a></h3>
                  <ul className="utf-blog-item-post-list">
                    <li>By, Jay Zeus</li>	
                    <li>15 May, 2021</li>
                  </ul>
                  <p>Lorem Ipsum is simply dummy text of printing industry Lorem Ipsum been industry standard dummy text since book.</p>
                </div>
              </div>              
            </div>
          </div>
          {/* Related Posts / End */}
          {/* Reviews */}
          <section className="comments">
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
          </section>
          <div className="clearfix" />
          <div className="margin-top-35" />
          {/* Add Comment */}
          <div className="utf-inner-blog-section-title">
            <h4><i className="icon-line-awesome-comments-o" />Leave Your Comment</h4>
          </div>
          <div className="margin-top-15" />
          {/* Add Comment Form */}
          <form id="add-comment" className="add-comment">
            <fieldset>
              <div className="row">
                <div className="col-md-6">
                  <input type="text" placeholder="Name *" defaultValue />
                </div>
                <div className="col-md-6">
                  <input type="text" placeholder="Email Address *" defaultValue />
                </div>
                <div className="col-md-6">
                  <input type="text" placeholder="Phone Number *" defaultValue />
                </div>
                <div className="col-md-6">
                  <input type="text" placeholder="Subject" defaultValue />
                </div>
                <div className="col-md-12">
                  <textarea cols={30} placeholder="Comment..." rows={2} defaultValue={""} />
                </div>
              </div>
            </fieldset>
            <div className="utf-centered-button">
              <a href="#" className="button">Submit Comment</a>
            </div>
            <div className="clearfix" />
          </form>
        </div>
        {/* Content / End */}
      </div>      
    </div>
  </div>

  <div class="margin-top-65"></div>
</div>

            
        </Layout>
    )
}

export default BlogDetail
