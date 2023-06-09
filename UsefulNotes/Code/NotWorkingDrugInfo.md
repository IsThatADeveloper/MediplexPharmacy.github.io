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
	    
    	<p><div><i class='fa-solid fa-angles-right'></i> <b>You searched for</b>: <span id="searched_drug_name"></span></div></p>
    	<p><div><i class='fa-solid fa-angles-right'></i> <b>You searched for</b>: <span id="searched_drug_name_original"></span></div></p>
    	<p><div><i class='fa-solid fa-angles-right'></i> <b>You searched for</b>: <span id="generic_name"></span></div></p>
    	<p><div><i class='fa-solid fa-angles-right'></i> <b>You searched for</b>: <span id="brand_name"></span></div></p>

    </section>
    

    <!---------------------------------Drugs End--------------------------------->
    
    <!---------------------------------About--------------------------------->
    
    <section>
    
	<hr class="left-aligned">
	    
	<h1>What does the drug do (and treat) (pictures and all)</h1>
    
    	<div id="drug-info"></div>
	
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
  function addUnderscores(str) {
    return str.replace(/(?<!\(.*) (?!\(.*\))|(?<=\([^)]*) (?=\w)/g, '_');
  }
  
  $(document).ready(function() {
    var searchedDrugName = localStorage.getItem('searched_drug_name');
    searchedDrugName = addUnderscores(searchedDrugName.replace(/\s+\(.*\)/, ''));
    var drugName = searchedDrugName ? searchedDrugName.split(" ")[0] : '';

    var apiKey = 'AIzaSyD0vQjjfejlI1ztfnf-IOqgnlPSQsvXJKg';
    var url = 'https://kgsearch.googleapis.com/v1/entities:search';
    url += '?query=' + encodeURIComponent(drugName);
    url += '&types=Drug';
    url += '&limit=1';
    url += '&key=' + apiKey;

    $.getJSON(url, function(data) {
      if (data.itemListElement.length > 0) {
        var description = data.itemListElement[0].result.detailedDescription.articleBody;
        $('#drug-info').html('<p>' + description + '</p>');
      } else {
           getDrugInformation();
      }
    });
  });

  function toggleDropdown(event) {
    event.preventDefault();
    var dropdown = document.getElementById("dropdown-menu");
    dropdown.classList.toggle("show");
  }

  const searchedDrugName = localStorage.getItem('searched_drug_name');
  const searchedDrugNameOriginal = localStorage.getItem('searched_drug_name');

  // Set the searched drug name and synonyms as text content of the span element
  if (searchedDrugName) {
    var cleanedDrugName = searchedDrugName.split(" ")[0];
    document.getElementById('searched_drug_name').textContent = cleanedDrugName;
  }

  if (searchedDrugNameOriginal) {
    document.getElementById('searched_drug_name_original').textContent = searchedDrugNameOriginal;
  }
  
function getDrugInformation() {
  var searchedDrugName = localStorage.getItem('searched_drug_name');
  searchedDrugName = addUnderscores(searchedDrugName.replace(/\s+\(.*\)/, ''));
  var drugName = searchedDrugName ? searchedDrugName.split(" ")[0] : '';

  // Use RxNorm API to get the generic name of the drug
  var rxNormUrl = 'https://rxnav.nlm.nih.gov/REST/rxcui.json?name=' + encodeURIComponent(drugName);
  fetch(rxNormUrl)
    .then(response => response.json())
    .then(rxData => {
      if (rxData.idGroup.rxnormId.length > 0) {
        var rxNormId = rxData.idGroup.rxnormId[0];
        var rxInfoUrl = 'https://rxnav.nlm.nih.gov/REST/rxcui/' + rxNormId + '/related.json?tty=IN';
        fetch(rxInfoUrl)
          .then(response => response.json())
          .then(rxInfoData => {
            var genericName = '';
            var brandName = '';
            if (rxInfoData.relatedGroup.conceptGroup) {
              for (var i = 0; i < rxInfoData.relatedGroup.conceptGroup.length; i++) {
                var conceptGroup = rxInfoData.relatedGroup.conceptGroup[i];
                if (conceptGroup.tty === 'IN') { // IN = Ingredient
                  genericName = conceptGroup.conceptProperties[0].name;
                } else if (conceptGroup.tty === 'BN') { // BN = Brand Name
                  brandName = conceptGroup.conceptProperties[0].name;
                }
              }
            }
            var nameToSearch = genericName !== '' ? genericName : brandName !== '' ? brandName : drugName;
            var apiKey = 'AIzaSyD0vQjjfejlI1ztfnf-IOqgnlPSQsvXJKg';
            var url = 'https://kgsearch.googleapis.com/v1/entities:search';
            url += '?query=' + encodeURIComponent(nameToSearch);
            url += '&types=Drug';
            url += '&limit=1';
            url += '&key=' + apiKey;
            fetch(url)
              .then(response => response.json())
              .then(data => {
                if (data.itemListElement.length > 0) {
                  var description = data.itemListElement[0].result.detailedDescription.articleBody;
                  $('#drug-info').html('<p>' + description + '</p>');

                  document.getElementById('generic_name').textContent = "generic name: " + nameToSearch;

                } else {
                  $('#drug-info').html('<p>No information found for ' + nameToSearch + '</p>');
                }
              });
          });
      }
    });
}
</script>


</html>
