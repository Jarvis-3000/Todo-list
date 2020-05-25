
          const add=(e)=>
        {
            var Add=document.getElementById("add");
            var Search=document.getElementById("search");
            Add.style.display="block";    
            Search.style.display="none";
            // btn1 ADD styling
            e.style.backgroundColor="rgba(100, 100, 30, .5)";
            // btn2 SEARCH styling
            e.nextElementSibling.style.backgroundColor="rgba(100, 100, 30, 0)";
        }

        const search=(e)=>
        {
            var Add=document.getElementById("add");
            var Search=document.getElementById("search");
            Add.style.display="none";
            Search.style.display="block"; 
            // btn2 SEARCH styling
            e.style.backgroundColor="rgba(100, 100, 30, .5)";
            // btn1 ADD styling
            e.previousElementSibling.style.backgroundColor="rgba(100, 100, 30, 0)";
        }
        // search through letters
      