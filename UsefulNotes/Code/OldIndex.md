```
<!doctype>
<html>

  <head>
  <title>Pharmaceutical Library Home</title>
  <meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1">
  <link href="css/frame.css" media="screen" rel="stylesheet" type="text/css" />
  <link href="css/controls.css" media="screen" rel="stylesheet" type="text/css" />
  <link href="css/custom.css" media="screen" rel="stylesheet" type="text/css" />
  <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,700' rel='stylesheet' type='text/css'>
  <link href='https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700' rel='stylesheet' type='text/css'>
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700" rel="stylesheet">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="js/menu.js"></script>
  <script src="js/drug_info.js"></script>
  </head>
	
  <style>
    .menu-index { /*main pharmacy index*/
      color: rgb(255, 255, 255) !important;
      opacity: 1 !important;
      font-weight: 700 !important;
    }
	  
    * {
      box-sizing: border-box;
    }
	  
    /* Style the header */
    .header {
      grid-area: header;
      background-color: #f1f1f1;
      padding: 30px;
      text-align: center;
      font-size: 35px;
      opacity: 0;    
    }
	  
    .div { 
      margin: auto;
    }
	 
  }

  </style>
	
  <body>

  <div class="menu-container"></div>
  <div class="content-container">
	  
   <!---------------------------------banner--------------------------------->
	  
   <div class="bannerImage" style="background: url('img/pillindex_banner.jpg') no-repeat center; background-size: cover; height: 300px;">
    <div class="banner-table flex-column"></div>
   </div>
	  
   <!---------------------------------banner end---------------------------------> 
	 
   <!---------------------------------input bar--------------------------------->
	    
   <div class="bannerImage banner-table" style="text-align:center; background-size: cover; height: 500px;">
      <form onsubmit="openDrugs(); return false;">
        <label for="search-input" class="search-label"></label>
        <div class="search-container">
          <input type="text" placeholder="Drug Name" value="" id="search-input" name="search-input" autocomplete="on" class="search-input">
          <button type="submit" id="search-btn" class="search-button">Search</button>
        </div>
      </form>
      <div id="drug-dropdown" class="drug-dropdown"> <!add formatting>
        <ul id="drug-list" class="drug-list"></ul>
      </div>
        <div id="output" class="output"></div>
   </div>
	 
   <!---------------------------------input bar end--------------------------------->
	 
   <!---------------------------------Socials--------------------------------->
   
   <div style="text-align:center;">
     <h2>About Us</h2>
   </div>
	    
   <div style="text-align:\;">
     <b>Social media:</b>
   </div>
							
   <div class="footer">
      <div style="text-align:left; background-color:#ffffff; padding: 5px;">
        <u><b>Instagram</b></u>
      </div>
      <div style="text-align:left; background-color:#ffffff; margin-top: 10px;">
        <div class="control-group" style="margin-left: 10px;">
          <a href="https://www.instagram.com/" target="_blank" class="custom-image-button">
            <img src="img/instagram.png" width="50" style="border-radius: 15px;">
          </a>
        </div>
      </div>
   </div>
   
   <div class="footer">
      <div style="text-align:left; background-color:#ffffff; padding: 5px;">
        <u><b>LinkedIn</b></u>
      </div>
      <div style="text-align:left; background-color:#ffffff; margin-top: 10px;">
        <div class="control-group" style="margin-left: 10px;">
          <a href="https://www.linkedin.com/" target="_blank" class="custom-image-button">
            <img src="img/linkedin.png" width="50" style="border-radius: 15px;">
          </a>
        </div>
      </div>
   </div>
	   
   <!---------------------------------Socials End--------------------------------->
	    
   </body>


   <script>
      // Google Analytics code
      (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function () {
          (i[r].q = i[r].q || []).push(arguments);
        }, i[r].l = 1 * new Date();
        a = s.createElement(o),
          m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m);
      })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

      ga('create', 'UA-10682694-20', 'auto');
      ga('send', 'pageview');

      // Create custom tabs
      function init() {
        widgets = new edaplotjs.Widgets();

        $(".custom-tab").each(function (i, element) {
          widgets.createCustomTab({
            selector: element,
          });
        });
      }

      $(document).ready(function() {
        init();
      });
	   
     /*drug list define*/
	   
  const drugList = document.getElementById("drug-list");
  const drugDropdown = document.getElementById("drug-dropdown");
  const drugSearchInput = document.getElementById("search-input");
  const searchButton = document.getElementById("search-btn");
  const outputDiv = document.getElementById('output');

  function showDrugList() {
    drugList.innerHTML = "";

    const searchTerm = drugSearchInput.value.trim().toLowerCase();
    drugs.forEach(drug => {
      if (drug.name.toLowerCase().includes(searchTerm)) {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.textContent = drug.name;
        listItem.appendChild(link);
        drugList.appendChild(listItem);
      }
    });

    drugDropdown.style.display = "block";
  }

  function hideDrugList() {
    drugDropdown.style.display = "none";
  }

  function searchDrugs(searchText) {
    const filteredDrugs = drugs.filter(drug => drug.name.toLowerCase().includes(searchText.toLowerCase()));
    const limitedResults = filteredDrugs.slice(0, 20);

    if (limitedResults.length === 0) {
      outputDiv.textContent = "No results found.";
    } else if (filteredDrugs.length > 20) {
      outputDiv.textContent = "More than 20 results found.\nShowing the first 20 results:\n";
      let resultsString = "";
      limitedResults.forEach(drug => {
        resultsString += drug.name + ", ";
      });
      resultsString = resultsString.slice(0, -2); // Remove the final comma and space
      outputDiv.textContent += resultsString;
    } else {
      let resultsString = "";
      limitedResults.forEach(drug => {
        resultsString += drug.name + ", ";
      });
      resultsString = resultsString.slice(0, -2); // Remove the final comma and space
      if (limitedResults.length === 1) {
        outputDiv.innerHTML = "1 result found: <span style='color: red'>" + resultsString + "</span>";
      } else {
        outputDiv.textContent = limitedResults.length + " results found: " + resultsString;
      }
    }
  }

  drugSearchInput.addEventListener("input", event => {
    const searchTerm = event.target.value.trim().toLowerCase();

    if (searchTerm.length === 0) {
      hideDrugList();
    } else {
      showDrugList();
    }

    searchDrugs(searchTerm);
  });

  drugList.addEventListener("click", event => {
    drugSearchInput.value = event.target.textContent;
    hideDrugList();
  });
	   
searchButton.addEventListener("click", () => {
  const selectedDrug = drugSearchInput.value.trim().toLowerCase();
  const foundDrug = drugs.find(drug => drug.name.toLowerCase() === selectedDrug);

  if (foundDrug) {
    const outputDiv = document.getElementById('output');

    // Store the selected drug and its info in local storage
    localStorage.setItem('selected-drug', selectedDrug);
    localStorage.setItem('found-drug', JSON.stringify(foundDrug));
    localStorage.setItem('output-value', outputDiv.innerHTML);

    // Open drugs.html
    openDrugs();
  }

  // Hide the drug list
  hideDrugList();
});

function openDrugs() {
  const searchTerm = drugSearchInput.value.trim().toLowerCase();
  const foundDrug = drugs.find(drug => drug.name.toLowerCase() === searchTerm.toLowerCase());
  if (foundDrug) {
    window.location.href = "drugs.html";
  } else {
    alert("Drug not found: " + searchTerm + " please try again.");
  }
  return false;
}

</script>

</html>
 ```
