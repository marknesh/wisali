import React from 'react'
import { Helmet } from 'react-helmet'
import { useAuth } from '../context/AuthContext'
import Footer from './Footer'

function Layout({children}) {
    const {user}=useAuth()
    return (
        <div style={{marginTop:user && "88px"}}>
                 {/* <Helmet>
         
           
         <script  src="/scripts/jquery-3.3.1.min.js"></script> 
<script src="/scripts/chosen.min.js"></script> 
<script src="/scripts/magnific-popup.min.js"></script> 
<script src="/scripts/owl.carousel.min.js"></script> 
<script src="/scripts/rangeSlider.js"></script> 
<script src="/scripts/sticky-kit.min.js"></script> 
<script src="/scripts/slick.min.js"></script> 
<script src="/scripts/mmenu.min.js"></script> 
<script src="/scripts/tooltips.min.js"></script> 
<script src="/scripts/masonry.min.js"></script> 
<script src="/scripts/jquery.counterup.min.js"></script> 
<script  src="/scripts/custom_jquery.js"></script> 



<script src="http://maps.google.com/maps/api/js?sensor=false&amp;language=en"></script> 
<script src="/scripts/infobox.min.js"></script> 
<script src="/scripts/markerclusterer.js"></script> 
<script src="/scripts/maps.js"></script>
            </Helmet> */}
        
            {children}
      <Footer/>
            
        </div>
    )
}

export default Layout
