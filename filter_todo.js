var demo = document.getElementById("list_container");
var s_inp=document.getElementById("search_inp");
    
        const filter_list=()=>
        {
              var l=demo.children.length;

              for(let i=0;i<l;i++)
              {
                 let val=demo.children[i].children[0].childNodes[0].textContent;
       
//comapring each value with s_inp  
                 if((val.indexOf(s_inp.value)==-1))
                 {
                    demo.children[i].style.display="none";
                 }
                 else{
                     
                    demo.children[i].style.display="block";
                 }
              }    
        }

