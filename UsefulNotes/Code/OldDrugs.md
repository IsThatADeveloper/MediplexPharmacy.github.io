<!DOCTYPE html>
<html>

<head>

  <title>Mediplex Pharmacy Library Drug Information</title>
	
  <meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1">
	
  <link href="css/frame.css" media="screen" rel="stylesheet" type="text/css" />
  <link href="css/drugs.css" media="screen" rel="stylesheet" type="text/css" />
	
  <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,700' rel='stylesheet' type='text/css'>
  <link href='https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700' rel='stylesheet' type='text/css'>
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700" rel="stylesheet">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	
  <script src="https://kit.fontawesome.com/de329c76bd.js" crossorigin="anonymous"></script>
	
  <script src="js/drug_info.js"></script>
  <script src="index.html"></script>
  <script src="js/drug_info.js"></script>

</head>

<body>

    <!---------------------------------Nav Bar--------------------------------->

    <header>
        <nav>
          <ul style="height: 25px;">
            <li class="dropdown" style="position: relative; width: 200px; height: 50px;">
              <a href="#" class="dropdown-toggle">
                <img src="img/menu.png" onclick="toggleDropdown(event)" width="25" height="25">
              </a>
              <ul class="dropdown-menu" id="dropdown-menu">
                <li style="display: block;"><a href="pages/medical.html">Medical Index</a></li>
                <li style="display: block;"><a href="pages/how_do_drugs_work.html">Information On Drugs</a></li>
                <li style="display: block;"><a href="pages/recentnews.html">Recent News</a></li>
              </ul>
            </li>
            <li style="position: absolute; left: 82px; top: -1.6%; transform: translateY(-3%);"><h2 style="color: black;"><a href="index.html">Mediplex Pharmacy</a></h2></li>
            <li style="position: absolute; right: 30px; top: 3%; transform: translateY(-3%);">
              <divnav style="display: inline-block; margin-left: 10px;">
                <a href="https://www.linkedin.com/" target="_blank" class="custom-image-button">
                  <i class="fa-brands fa-linkedin"></i>
                  <span class="hover-text">Follow us on LinkedIn</span>
                </a>
              </divnav>
              <divnav style="display: inline-block; margin-left: 10px;">
                <a href="https://www.instagram.com/" target="_blank" class="custom-image-button">
                  <i class="fa-brands fa-instagram"></i>
                  <span class="hover-text">Follow us on Instagram</span>
                </a>
              </divnav>
            </li>
          </ul>
        </nav>
    </header>
    
    <!---------------------------------Nav Bar End--------------------------------->
    
    <!---------------------------------Drugs--------------------------------->
    
    <section>
    
    	<h1>General Layout (brands and drugs)</h1>
	    
	<p><div>You searched for: <span id="searched_drug_name"></span></p>
	    
    	<p id="othernames"></p>
    	<p id="genericnames"></p>
        
    </section>
    

    <!---------------------------------Drugs End--------------------------------->
    
    <!---------------------------------About--------------------------------->
    
    <section>
    
		<hr class="left-aligned">
	    
		<h1>What does the drug do (and treat) (pictures and all)</h1>
    
		<p><div id="description"></div></p>
    
    </section>
    
    <!---------------------------------About End--------------------------------->
    
    
    <!---------------------------------Usage--------------------------------->
    
    <section>
    
    	<hr class="left-aligned">
	    
		<h1>How is the drug used (dosage/extra info)</h1>
    
		<p>
        
        <div id="dosage" class="dose"></div>
        
        </p>
    
    </section>
    
    <!---------------------------------Usage End--------------------------------->
    
    
    <!---------------------------------Footer--------------------------------->
		
    <footer>
      <hr style="border: none; height: 1px; background-color: grey;"></hr>
      <section style="color: black; padding: 100px 0 100px 0; display: flex; align-items: stretch;">
        <div>
          <i class="fa-solid fa-address-card"></i>
          <p><a href="https://www.yourpharmacy.com/reviews">About Us</a></p>
          <p><a href="https://www.yourpharmacy.com/reviews">Privacy Policy</a></p>
          <p><a href="https://www.yourpharmacy.com/reviews">Social Media</a></p>
          <br> <! adjust height !>
        </div>
        <div>
          <i class="fa-solid fa-certificate"></i>
          <p><a href="https://www.yourpharmacy.com/reviews">Partnerships</a></p>
          <p><a href="https://www.yourpharmacy.com/reviews">Reviews</a></p>
          <p><a href="https://www.yourpharmacy.com/reviews">Hours of Operation</a></p>
          <p><a href="https://www.yourpharmacy.com/shipping">Customer Service</a></p>
        </div>
      </section>
    </footer>


    <footer>
    
    	<hr>
          <br>
	    Copyright © 2023 MediPlexPharmacy. All rights reserved.

    </footer>
	   
	   
    <!---------------------------------Footer End--------------------------------->
    
</body>

<script>

    function toggleDropdown(event) {
      event.preventDefault();
      var dropdown = document.getElementById("dropdown-menu");
      dropdown.classList.toggle("show");
    }

    const selectedDrug = localStorage.getItem('selected-drug');
    const foundDrug = JSON.parse(localStorage.getItem('found-drug'));
    const drugName = document.getElementById('drugname');
    const drugDescription = document.getElementById('description');
    const drugType = document.getElementById('type');
    const drugDoseage = document.getElementById('dosage');
    const drugOthernames = document.getElementById('othernames');
    const drugGenericnames = document.getElementById('genericnames');
    
    drugName.innerHTML = "<div> <i class='fa-solid fa-angles-right'></i> <b>" + foundDrug.type + " name: </b>" + foundDrug.name + "</div>";
    
    
    const description = foundDrug.description;
    const capitalizedDescription = description.charAt(0).toUpperCase() + description.slice(1);
    drugDescription.innerHTML = "<i class='fa-solid fa-angles-right'></i> " + capitalizedDescription;
	

    drugDoseage.innerHTML = "<i class='fa-solid fa-angles-right'></i> <b>Dosage:</b><br><br>" 
                       + "&nbsp;&nbsp;&nbsp;&nbsp;<i class='fa-solid fa-arrow-right'></i> " + foundDrug.dosage.strength + "<br>" 
                       + "&nbsp;&nbsp;&nbsp;&nbsp;<i class='fa-solid fa-arrow-right'></i> " + foundDrug.dosage.form + "<br>" 
                       + "&nbsp;&nbsp;&nbsp;&nbsp;<i class='fa-solid fa-arrow-right'></i> " + foundDrug.dosage.frequency + "<br>";


    var othernamesHtml = "";
    for (var i = 0; i < foundDrug.othernames.length; i++) {
      othernamesHtml += "<p><div> <i class='fa-solid fa-angles-right'></i> <b>Brand name:</b> " + foundDrug.othernames[i] + "</div></p>";
    }
    drugOthernames.innerHTML = othernamesHtml;
    
    var genericnamesHtml = "";
    for (var i = 0; i < foundDrug.genericNames.length; i++) {
      genericnamesHtml += "<p><div> <i class='fa-solid fa-angles-right'></i> <b>Generic name:</b> " + foundDrug.genericNames[i] + "</div></p>";
    }
    drugGenericnames.innerHTML = genericnamesHtml;

</script>

</html>
