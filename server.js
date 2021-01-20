const express = require('express');
const fs = require('fs')
const app = express();



app.use(express.static("resto"));
app.get('/', function(req, res){
    var rawdata = fs.readFileSync('information.json');
    var jsonData = JSON.parse(rawdata);
    var isEldenRingOut = jsonData.isEldenRingOut? "Yes":"No";
    var isNewInformation = jsonData.isNewInformation? "Yes":"No";
    var DateLastInfo = new Date(jsonData.lastUpdateDate);
    var now = new Date();
    var DaysBetween = parseInt((now.getTime()-DateLastInfo.getTime())/(1000 * 3600 * 24));
    var DateLastInfoStr = (DateLastInfo.getUTCDate())+ '/' + (DateLastInfo.getUTCMonth()+1) + '/' + DateLastInfo.getUTCFullYear();
    
    
    var sendvalue =`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Is Elden Ring Out Yet?</title>
    <meta name="description" content="Website for checking up if there is any news from Elden Ring">
    <meta name="keywords" content="Elden Ring, From Software, Dark Souls, Hidetaka Miyazaki, George R.R. Martin, Sekiro">
    
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700|Pinyon+Script" rel="stylesheet">
    <link rel="stylesheet" href="css/styles-merged.css">
    <link rel="stylesheet" href="css/style.css">

    <!--[if lt IE 9]>
      <script src="js/vendor/html5shiv.min.js"></script>
      <script src="js/vendor/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    
    <!-- Fixed navbar -->
    
    <nav class="navbar navbar-default navbar-fixed-top probootstrap-navbar">
      <div class="container">
          <a class="navbar-brand" href="#" title="uiCookies:FineOak"></a>

        <!--<div id="navbar-collapse" class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
            <li class="active"><a href="#" data-nav-section="welcome">Welcome</a></li>
            <li><a href="#" data-nav-section="specialties">Specialties</a></li>
            <li><a href="#" data-nav-section="menu">Menu</a></li>
            <li><a href="#" data-nav-section="reservation">Reservation</a></li>
            <li><a href="#" data-nav-section="events">Events</a></li>
            <li><a href="#" data-nav-section="contact">Contact</a></li>
          </ul>
        </div> -->
      </div>
    </nav>

    <section class="flexslider" data-section="welcome">
      <ul class="slides">
        <li style="background-image: url(img/eldenring.jpg)" class="overlay" data-stellar-background-ratio="0.5">
          <div class="container">
            <div class="row">
              <div class="col-md-8 col-md-offset-2">
                <div class="probootstrap-slider-text text-center probootstrap-animate probootstrap-heading">
                  <h1 class="primary-heading">Is Elden Ring</h1>
                  <br>
                  
                  <h3 class="secondary-heading">Out Yet?</h3>
                  <p class="sub-heading" id="isEldenRingOut">`+isEldenRingOut+`</p>
                </div>
              </div>
            </div>
          </div>
        </li>
        
      </ul>
    </section>

    <section class="probootstrap-section probootstrap-bg-black">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center probootstrap-animate">
            <div class="probootstrap-heading">
              <h1 class="primary-heading">Is There</h1>
                <br>
              <h3 class="secondary-heading">Any New Information</h3>
              <h3 class="secondary-heading">Today?</h3>
              <span class="seperator">* * *</span>
            </div>
              <div id="isThereNewInformation" class="h1 text-center">
                  `+isNewInformation+`
              </div>
          </div>
        </div>
        <!-- END row -->
      </div>
    </section>
      
    <section class="probootstrap-section probootstrap-bg-dark">
        <div class="container">
            <div class="col-md-12 text-center probootstrap-animate">
              <div class="probootstrap-heading">
                <h3 class="secondary-heading">Days Since Last Update:</h3>
                <span class="seperator">* * *</span>
              </div>
                
              <div class="h1 text-center" id="daysSinceLastUpdate" style="color: white">
                  `+DaysBetween+`
              </div>
            </div>
        </div>
    </section>
      
    <section class="probootstrap-section probootstrap-bg-black">
        <div class="container">
            <div class="col-md-12 text-center probootstrap-animate">
              <div class="probootstrap-heading">
                <h3 class="secondary-heading">Last Update:</h3>
                <span class="seperator">* * *</span>
              </div>
              <div class="h1 text-center" id="latUpdateDate">
                  `+DateLastInfoStr+`
              </div>
              <div class="h1 text-center" id="daysSinceLastUpdate">
                <div class="video-responsive">
                  <iframe width="560" height="315" src="`+jsonData.lastUpdateLink+`" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen id="eldenRingVideo">
                  </iframe>
                </div>
                <br>          
                <script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="lamythegoat" data-color="#FF5F5F" data-emoji=""  data-font="Cookie" data-text="Buy me a coffee" data-outline-color="#000000" data-font-color="#ffffff" data-coffee-color="#FFDD00" ></script>
              </div>
            </div>
        </div>
    </section>






    
    <section class="probootstrap-copyright">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <p class="copyright-text">&copy; 2017 <a href="https://uicookies.com/">Template by: uiCookies:Resto</a>. All Rights Reserved. Images by <a href="https://graphicburger.com/">GraphicBurger</a> &amp; <a href="https://unsplash.com/">Unsplash</a></p>
          </div>

        </div>
        <div class="row">
          <div class="col-md-12">
            <p class="copyright-text">&copy; 2020 <a href="https://github.com/LamyTheGoat">LamTheGoat:IsEldenRingOutYet</a>. All Rights Reserved. &amp; 
          </div>

        </div>
      </div>
    </section>


    <script data-name="BMC-Widget" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="lamythegoat" data-description="Support me on Buy me a coffee!" data-message="Thank you for visiting. You can now buy me a coffee!" data-color="#FF5F5F" data-position="Right" data-x_margin="18" data-y_margin="18"></script>

    <script src="js/scripts.min.js"></script>
    <script src="js/custom.min.js"></script>

  </body>
</html>`
    
    
    res.send(sendvalue);
});

var server = app.listen(process.env.PORT);