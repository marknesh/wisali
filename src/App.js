import "./styles/stylesheet.css"
import {Helmet} from "react-helmet";
import Home from "./components/Home";
import SingleProperty from "./components/SingleProperty";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
function App() {
  return (
    <div>
         {/* <Helmet>
         
           
           
         <script src="scripts/jquery-3.3.1.min.js"></script> 
<script src="scripts/chosen.min.js"></script> 
<script src="scripts/magnific-popup.min.js"></script> 
<script src="scripts/owl.carousel.min.js"></script> 
<script src="scripts/rangeSlider.js"></script> 
<script src="scripts/sticky-kit.min.js"></script> 
<script src="scripts/slick.min.js"></script> 
<script src="scripts/mmenu.min.js"></script> 
<script src="scripts/tooltips.min.js"></script> 
<script src="scripts/masonry.min.js"></script> 
<script src="scripts/jquery.counterup.min.js"></script> 
<script src="scripts/custom_jquery.js"></script> 


<script src="http://maps.google.com/maps/api/js?sensor=false&amp;language=en"></script> 
<script src="scripts/infobox.min.js"></script> 
<script src="scripts/markerclusterer.js"></script> 
<script src="scripts/maps.js"></script>
            </Helmet> */}
            <Router>


        <div class="vfx-loader">
<div class="loader-wrapper">
	<div class="loader-content">
		<div class="loader-dot dot-1"></div>
		<div class="loader-dot dot-2"></div>
		<div class="loader-dot dot-3"></div>
		<div class="loader-dot dot-4"></div>
		<div class="loader-dot dot-5"></div>
		<div class="loader-dot dot-6"></div>
		<div class="loader-dot dot-7"></div>
		<div class="loader-dot dot-8"></div>
		<div class="loader-dot dot-center"></div>
	</div>
</div>
</div>


   
    </Router>
    </div>
  );
}

export default App;
