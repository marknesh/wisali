import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from './Layout'

function Payment() {
    return (
        <Layout>
          <Helmet>
          <link rel="stylesheet" href="styles/payment.css"/>
          </Helmet>
           
  
  <div class="parallax titlebar" data-background="images/listings-parallax.jpg" data-color="rgba(48, 48, 48, 1)" data-color-opacity="0.8" data-img-width="800" data-img-height="505">
    <div id="titlebar">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2>Payments</h2>
            
            <nav id="breadcrumbs">
              <ul>
                <li><a href="index.html">Home</a></li>
                <li>Subscriptions</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>

  

<div class="container">

<div class="row">
  <div class="col-75">   
    <div class="container1">
      <form action="/action_page.php">
        <div class="row">

          <div class="col-50">
            <h3>Billing Address</h3>

            <label for="fname"><i class="fa fa-user"></i> Full Name</label>
            <input type="text" id="fname" name="firstname" placeholder="John M. Doe"/>
            <label for="email"><i class="fa fa-envelope"></i> Email</label>
            <input type="text" id="email" name="email" placeholder="john@example.com"/>
            <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
            <input type="text" id="adr" name="address" placeholder="542 W. 15th Street"/>
            <label for="city"><i class="fa fa-institution"></i> City</label>
            <input type="text" id="city" name="city" placeholder="New York"/>

            <div class="row">
                <div class="col-50">
                <label for="state">State</label>
                <input type="text" id="state" name="state" placeholder="NY"/>
            </div>

                <div class="col-50">
                <label for="zip">Zip</label>
                <input type="text" id="zip" name="zip" placeholder="10001"/>
              </div>
            </div>
          </div>


          <div class="col-50">
            <h3>Payment</h3>
            <label for="fname">Accepted Cards</label>
            <div class="icon-container">
              <i class="fa fa-cc-visa" style={{color:"navy"}}></i>
              <i class="fa fa-cc-amex" style={{color:"blue"}}></i>
              <i class="fa fa-cc-mastercard" style={{color:"red"}}></i>
              <i class="fa fa-cc-discover" style={{color:"orange"}}></i>
            </div>

            <label for="cname">Name on Card</label>
            <input type="text" id="cname" name="cardname" placeholder="John More Doe"/>
            <label for="ccnum">Credit card number</label>
            <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"/>
            <label for="expmonth">Exp Month</label>
            <input type="text" id="expmonth" name="expmonth" placeholder="September"/>

            <div class="row">
              <div class="col-50">
                <label for="expyear">Exp Year</label>
                <input type="text" id="expyear" name="expyear" placeholder="2018"/>
              </div>

              <div class="col-50">
                <label for="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv" placeholder="352"/>
              </div>
            </div>
          </div>     
        </div>



      <div class="checkbox margin-top-0">
      <input type="checkbox" id="two-step0"/>
      <label for="two-step0"><span class="checkbox-icon"></span>Shipping address same as billing?</label>
      </div>
      <button class="checkout-btn" type="submit" > Continue to checkout </button>


      </form>
    </div>
  </div>


  <div class="col-25">
    <div class="container1">
      <h4>Cart <span class="price" style={{color:"black"}}><i class="fa fa-shopping-cart"></i> <b>1</b></span></h4>
      <p><a href="pricing-tables.html">Business</a> <span class="price">£120</span></p>
      <hr/>
      <p>Total <span class="price" style={{color:"#00d464"}}><b>£120</b></span></p>


    </div>
  </div>
</div>


</div>  

     
  <div class="margin-top-65"></div>


            
        </Layout>
    )
}

export default Payment
