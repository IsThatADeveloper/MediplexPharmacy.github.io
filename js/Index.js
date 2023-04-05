    (function (i, s, o, g, r, a, m) { // Google Analytics code
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

     /*Drugs array */
	
      const drugs = [
        { name: "Abilify", type: "Brand", description: "a medication used to treat schizophrenia, bipolar disorder, and depression. It works by affecting the activity of certain neurotransmitters in the brain, including dopamine and serotonin. It is also sometimes used to treat irritability associated with autism spectrum disorder." },
        { name: "Adderall", type: "Brand",  description: "a stimulant medication used to treat ADHD and narcolepsy. It works by increasing the activity of certain chemicals in the brain. "},
        { name: "Adderall XR", type: "Brand", description: "an extended-release version of Adderall that provides a longer duration of action than regular Adderall. " },
        { name: "Adrenaline", type: "Brand", description: "also known as epinephrine, a hormone and medication used to treat severe allergic reactions and cardiac arrest. It works by increasing heart rate, constricting blood vessels, and relaxing smooth muscles. "},
        { name: "Albuterol Sulfate", type: "Brand", description: "a bronchodilator medication used to treat asthma and other breathing disorders. It works by relaxing the muscles in the airways, making it easier to breathe. " },
        { name: "Aldactone", type: "Brand", description: "a diuretic medication used to treat high blood pressure and heart failure. It works by blocking the action of aldosterone, a hormone that promotes salt and water retention in the body. " },
        { name: "Allegra", type: "Brand", description: "an antihistamine medication used to treat allergies. It works by blocking the action of histamine, a chemical that is released during an allergic reaction. " },
        { name: "Ambien", type: "Brand", description: "a sedative medication used to treat insomnia. It works by slowing down brain activity to help you fall asleep and stay asleep. " },
        { name: "Amikin", type: "Brand", description: "an antibiotic medication used to treat serious bacterial infections. It works by interfering with the production of bacterial proteins necessary for their growth and reproduction. " },
        { name: "Amoxicillin", type: "Brand", description: "an antibiotic medication used to treat a variety of bacterial infections. It works by interfering with the production of bacterial cell walls, causing the bacteria to die. " },
        { name: "Antivert", type: "Brand", description: "an antihistamine medication used to treat vertigo and motion sickness. It works by blocking the action of histamine in the inner ear, reducing dizziness and nausea. " },
        { name: "Aricept", type: "Brand", description: "a medication used to treat Alzheimer's disease. It works by increasing the level of a chemical called acetylcholine in the brain, which is important for memory and learning. " },
        { name: "Armour Thyroid", type: "Brand", description: "a medication used to treat an underactive thyroid gland. It contains thyroid hormone, which is important for regulating metabolism and energy levels. " },
        { name: "Atarax", type: "Brand", description: "an antihistamine medication used to treat anxiety and itching. It works by blocking the action of histamine in the body, reducing allergic reactions and anxiety symptoms. " },
        { name: "Atenolol", type: "Brand", description: "a beta blocker medication used to treat high blood pressure and angina. It works by blocking the action of adrenaline and other stress hormones, reducing heart rate and blood pressure. " },
        { name: "Ativan", type: "Brand", description: "a medication used to treat anxiety and seizure disorders. It works by enhancing the activity of a chemical called GABA in the brain, which helps to calm nerve activity. " },
        { name: "Bacolfen", type: "Brand", description: "a medication used to treat Alzheimer's disease. It works by increasing the level of a chemical called acetylcholine in the brain, which is important for memory and learning. " },
        { name: "Bacitrim", type: "Brand", description: "a medication used to treat an underactive thyroid gland. It contains thyroid hormone, which is important for regulating metabolism and energy levels. " },
        { name: "Benadryl", type: "Brand", description: "an antihistamine medication used to treat anxiety and itching. It works by blocking the action of histamine in the body, reducing allergic reactions and anxiety symptoms. " },
        { name: "Bentyl", type: "Brand", description: "a beta blocker medication used to treat high blood pressure and angina. It works by blocking the action of adrenaline and other stress hormones, reducing heart rate and blood pressure. " },
        { name: "Benzonatate", type: "Brand", description: "a medication used to treat anxiety and seizure disorders. It works by enhancing the activity of a chemical called GABA in the brain, which helps to calm nerve activity. " },
        { name: "Bumex", type: "Brand", description: "a medication used to treat Alzheimer's disease. It works by increasing the level of a chemical called acetylcholine in the brain, which is important for memory and learning. " },
        { name: "Buspar", type: "Brand", description: "a medication used to treat an underactive thyroid gland. It contains thyroid hormone, which is important for regulating metabolism and energy levels. " },
        { name: "Carafate", type: "Brand", description: "an antihistamine medication used to treat anxiety and itching. It works by blocking the action of histamine in the body, reducing allergic reactions and anxiety symptoms. " },
        { name: "Catapres", type: "Brand", description: "a beta blocker medication used to treat high blood pressure and angina. It works by blocking the action of adrenaline and other stress hormones, reducing heart rate and blood pressure. " },
        { name: "Ceftin", type: "Brand", description: "a medication used to treat anxiety and seizure disorders. It works by enhancing the activity of a chemical called GABA in the brain, which helps to calm nerve activity. " },
        { name: "Celebrex", type: "Brand", description: "a medication used to treat Alzheimer's disease. It works by increasing the level of a chemical called acetylcholine in the brain, which is important for memory and learning. " },
        { name: "Celexa", type: "Brand", description: "a medication used to treat an underactive thyroid gland. It contains thyroid hormone, which is important for regulating metabolism and energy levels. " },
        { name: "Cialis", type: "Brand", description: "an antihistamine medication used to treat anxiety and itching. It works by blocking the action of histamine in the body, reducing allergic reactions and anxiety symptoms. " },
        { name: "Cipro", type: "Generic", description: "a beta blocker medication used to treat high blood pressure and angina. It works by blocking the action of adrenaline and other stress hormones, reducing heart rate and blood pressure. " },
        { name: "Claritin", type: "Brand", description: "a medication used to treat anxiety and seizure disorders. It works by enhancing the activity of a chemical called GABA in the brain, which helps to calm nerve activity. " },
        { name: "Clindamycin", type: "Generic", description: "a medication used to treat Alzheimer's disease. It works by increasing the level of a chemical called acetylcholine in the brain, which is important for memory and learning. " },
        { name: "Colchicine", type: "Generic", description: "a medication used to treat an underactive thyroid gland. It contains thyroid hormone, which is important for regulating metabolism and energy levels. " },
        { name: "Concerta", type: "Brand - Narcotic", description: "an antihistamine medication used to treat anxiety and itching. It works by blocking the action of histamine in the body, reducing allergic reactions and anxiety symptoms. " },
        { name: "Coreg", type: "Brand", description: "a beta blocker medication used to treat high blood pressure and angina. It works by blocking the action of adrenaline and other stress hormones, reducing heart rate and blood pressure. " },
        { name: "Coumadin", type: "Brand", description: "a medication used to treat anxiety and seizure disorders. It works by enhancing the activity of a chemical called GABA in the brain, which helps to calm nerve activity. " },
        { name: "Cozaar", type: "Brand", description: "a beta blocker medication used to treat high blood pressure and angina. It works by blocking the action of adrenaline and other stress hormones, reducing heart rate and blood pressure. " },
        { name: "Crestor", type: "Brand", description: "a medication used to treat anxiety and seizure disorders. It works by enhancing the activity of a chemical called GABA in the brain, which helps to calm nerve activity. " },
        { name: "Cymbalta", type: "Brand", description: "a medication used to treat Alzheimer's disease. It works by increasing the level of a chemical called acetylcholine in the brain, which is important for memory and learning. " },
        { name: "Cytomel", type: "Brand", description: "a medication used to treat an underactive thyroid gland. It contains thyroid hormone, which is important for regulating metabolism and energy levels. " },
        { name: "Cytotec", type: "Brand", description: "an antihistamine medication used to treat anxiety and itching. It works by blocking the action of histamine in the body, reducing allergic reactions and anxiety symptoms. " },
        { name: "Depakote", type: "Brand", description: "a beta blocker medication used to treat high blood pressure and angina. It works by blocking the action of adrenaline and other stress hormones, reducing heart rate and blood pressure. " },
        { name: "Desoxyn", type: "Brand", description: "a medication used to treat anxiety and seizure disorders. It works by enhancing the activity of a chemical called GABA in the brain, which helps to calm nerve activity. " },
        { name: "Desyrel", type: "Brand", description: "a medication used to treat Alzheimer's disease. It works by increasing the level of a chemical called acetylcholine in the brain, which is important for memory and learning. " },
        { name: "Dexamethasone", type: "Brand", description: "a medication used to treat an underactive thyroid gland. It contains thyroid hormone, which is important for regulating metabolism and energy levels. " },
        { name: "Diflucan", type: "Brand", description: "an antihistamine medication used to treat anxiety and itching. It works by blocking the action of histamine in the body, reducing allergic reactions and anxiety symptoms. " },
        { name: "Dilaudid", type: "Generic", description: "a beta blocker medication used to treat high blood pressure and angina. It works by blocking the action of adrenaline and other stress hormones, reducing heart rate and blood pressure. " }
     ];

     /*drug list define*/
	
      const drugList = document.getElementById("drug-list");
      const drugDropdown = document.getElementById("drug-dropdown");
      const drugSearchInput = document.getElementById("search-input");
      const searchButton = document.getElementById("search-btn");
      const outputDiv = document.getElementById('output');

      function showDrugList() {
        // Clear previous suggestions
        drugList.innerHTML = "";

        // Create a new list item for each drug that matches the search term
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

        // Show the drug list
        drugDropdown.style.display = "block";
      }

      function hideDrugList() {
        // Hide the drug list
        drugDropdown.style.display = "none";
      }

      function searchDrugs(searchText) {
        // Filter the drugs array based on the search text
        const filteredDrugs = drugs.filter(drug => drug.name.toLowerCase().includes(searchText.toLowerCase()));

        // Limit the number of results to 20
        const limitedResults = filteredDrugs.slice(0, 20);

        // Show the search results
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

        // Show/hide the drug list based on whether the search term is empty or not
        if (searchTerm.length === 0) {
          hideDrugList();
        } else {
          showDrugList();
        }

        // Update the search results based on the search term
        searchDrugs(searchTerm);
      });

      drugList.addEventListener("click", event => {
        // Fill the search bar with the clicked drug name
        drugSearchInput.value = event.target.textContent;

        // Hide the drug list
        hideDrugList();
      });

      searchButton.addEventListener("click", () => {
        const selectedDrug = drugSearchInput.value.trim();
        const foundDrug = drugs.find(drug => drug.name.toLowerCase() === selectedDrug.toLowerCase());

        if (foundDrug) {
          outputDiv.innerHTML = "<br>Found drug: " + foundDrug.name + "<br>Description: " + foundDrug.description + "<br>Type: " + foundDrug.type;
        } else {
          outputDiv.innerHTML = "Drug not found: " + selectedDrug + " please try again.";
        }

        // Hide the drug list
        hideDrugList();
      });
	    
      /*Use enter button to use as (click event)*/
      
      drugSearchInput.addEventListener("keyup", function(event) {
	  if (event.keyCode === 13) { 
	    event.preventDefault(); 
	    searchButton.click();
	    }
});
