<!doctype>
<html>

<head>
	
  <title>Mediplex Pharmacy Library Home</title>
  <meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1">
	
  <link href="css/frame.css" media="screen" rel="stylesheet" type="text/css" />
  <link href="css/index.css" media="screen" rel="stylesheet" type="text/css" />
	
  <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,700' rel='stylesheet' type='text/css'>
  <link href='https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700' rel='stylesheet' type='text/css'>
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700" rel="stylesheet">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="js/menu.js"></script>
  <script src="js/drug_info.js"></script>
  <script src="https://kit.fontawesome.com/de329c76bd.js" crossorigin="anonymous"></script>
  <script src="js/autocomplete.js"></script>

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
                <li style="display: block;"><a href="pages/medical.html">Mediplex Pharmacy</a></li>
                <li style="display: block;"><a href="pages/how_do_drugs_work.html">Information On Drugs</a></li>
                <li style="display: block;"><a href="pages/recentnews.html">Recent News</a></li>
              </ul>
            </li>
            <li style="position: absolute; left: 82px; top: -1.6%; transform: translateY(-3%);"><h2 style="color: black;"><a href="index.html">Mediplex Pharmacy</a></h2></li>
            <li style="position: absolute; right: 30px; top: 3%; transform: translateY(-3%);">
              <div style="display: inline-block; margin-left: 10px;">
                <a href="https://www.linkedin.com/" target="_blank" class="custom-image-button">
                  <i class="fa-brands fa-linkedin"></i>
                  <span class="hover-text">Follow us on LinkedIn</span>
                </a>
              </div>
              <div style="display: inline-block; margin-left: 10px;">
                <a href="https://www.instagram.com/" target="_blank" class="custom-image-button">
                  <i class="fa-brands fa-instagram"></i>
                  <span class="hover-text">Follow us on Instagram</span>
                </a>
              </div>
            </li>
          </ul>
        </nav>
     </header>
    
     <!---------------------------------Nav Bar End--------------------------------->
	  
     <!---------------------------------Banner--------------------------------->
    
    <section class="bannerImage" style="background: url('img/pillindex_banner.jpg') no-repeat center; background-size: cover; height: 300px;"></section>
	  
    <!---------------------------------Banner End---------------------------------> 
	 
    <!---------------------------------Input Bar--------------------------------->

    <section>
	<div class="bannerImage banner-table" style="text-align:center; background-size: cover; height: 50px; padding: 40px 0px 160px 2%;">
	    <form onsubmit="openDrugs(); return false;">
	    <label for="search-input" class="search-label"></label>
	    <div class="search-container">
		<div class="input-bubble">
			<input type="text" placeholder="Drug name, Medical condition, etc..." value="" id="search-input" name="search-input" autocomplete="off" class="search-input" spellcheck="false"></input>
			<button type="submit" id="search-btn" class="search-button"><i class="fa-solid fa-magnifying-glass"></i></button>
		</div>
			<div class="result-box">
		    
		    	</div>
		</div>
	    </form>
		<div id="drug-dropdown" class="drug-dropdown">
			<ul id="drug-list" class="drug-list"></ul>
		</div>
		<div id="output" class="output"></div>
	    </div>
    </section>

	
    <!---------------------------------Input Bar End--------------------------------->
    
    <!---------------------------------News--------------------------------->
    
    <footer>
      <hr style="border: none; height: 1px; background-color: grey;"></hr>
      
      <h3 style="padding: 5px; text-align: center; color: grey;"><u>Latest News</u></h3>
      
      <section style="padding: 50px 0 50px 0;">
          <div class="polaroid">
          <a href="http://www.example.com"><img src="img/NewsArticleTest.jpg" style="width:100%"></a>
            <div class="container">
            <p>News Article 1</p>
            </div>
          </div>
          
          <div class="polaroid">
          <a href="http://www.example.com"><img src="img/NewsArticleTest.jpg" style="width:100%;"></a>
            <div class="container">
            <p>News Article 2</p>
            </div>
          </div>
          
          <div class="polaroid">
          <a href="http://www.example.com"><img src="img/NewsArticleTest.jpg" style="width:100%"></a>
            <div class="container">
            <p>News Article 3</p>
            </div>
          </div>
      </section>
    </footer>
    
    <!---------------------------------News End--------------------------------->
	 
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

  const drugList = document.getElementById("drug-list");
  const drugDropdown = document.getElementById("drug-dropdown");
  const drugSearchInput = document.getElementById("search-input");
  const searchButton = document.getElementById("search-btn");
  const outputDiv = document.getElementById('output');
	   
  searchButton.addEventListener("click", () => {
    const selectedDrug = drugSearchInput.value.trim().toLowerCase();
    const foundDrug = drugs.find(drug => drug.name.toLowerCase() === selectedDrug);

    if (foundDrug) {
      const outputDiv = drugs.map(drug => drug.name);

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

  const inputBox = document.getElementById("search-input");
  const resultBox = document.querySelector(".result-box");

  inputBox.onkeyup = function() { 
    let result = [];
    let input = inputBox.value;
    if (input.length) {
        result = drugs.filter((drug) => {
            return (
                drug.name.toLowerCase().includes(input.toLowerCase()) ||
                drug.othernames.some((name) => name.toLowerCase().includes(input.toLowerCase())) ||
                drug.genericNames.some((name) => name.toLowerCase().includes(input.toLowerCase()))
            );
        }).map((drug) => {
            if (drug.name.toLowerCase().includes(input.toLowerCase())) {
                return drug.name;
            } else {
                let matchingOtherName = drug.othernames.find((name) =>
                    name.toLowerCase().includes(input.toLowerCase())
                );
                if (matchingOtherName) {
                    return matchingOtherName;
                } else {
                    let matchingGenericName = drug.genericNames.find((name) =>
                        name.toLowerCase().includes(input.toLowerCase())
                    );
                    if (matchingGenericName) {
                        return matchingGenericName;
                    } else {
                        return "";
                    }
                }
            }
        }).filter((name) => name !== "");
    }

    if(input.length >= 2) {
      display(result);
    }

    if(!result.length) {
      resultBox.innerHTML = '';
    }
  };

  function display(result){
    const content = result.map((list)=>{
      return "<li onclick=selectInput(this)>" + list + "</li>"
    });

    resultBox.innerHTML = "<ul>" + content.join('') + "</ul>";
  }  

  function selectInput(list) {
    inputBox.value = list.innerHTML;
    resultBox.innerHTML = '';
    openDrugs();
  }

  function openDrugs() {
    const searchTerm = inputBox.value.trim().toLowerCase();
    const foundDrug = drugs.find(drug => 
      drug.name.toLowerCase() === searchTerm || 
      drug.othernames.some(name => name.toLowerCase() === searchTerm)
    );
    if (foundDrug) {
      // Store the selected drug and its info in local storage
      localStorage.setItem('selected-drug', foundDrug.name);
      localStorage.setItem('found-drug', JSON.stringify(foundDrug));

      // Open drugs.html
      window.location.href = "drugs.html";
    } else {
      window.location.href = "pagenotfound.html";
    }
    return false;
}
</script>

</html>
