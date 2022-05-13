

document.addEventListener("DOMContentLoaded",function(){
let inclusion = 0;
let eth = 0;
let gn = 0;
let ab = 0;
let inc = 0; 
let tr = 0;
let ch = 0;
    let radios1 = document.querySelectorAll("#ethnicity"); 
    for (var i = radios1.length - 1; i >= 0; i--) {
        radios1[i].addEventListener('change',function(){
            localStorage.setItem("ethnicity", this.value)
            if (this.value == "black"){
                eth= 5;
               
            }
            if (this.value == "asian"){
                eth= 10; 
              
            }
            if (this.value == "caucasian"){
                eth= 17;
               
            } 
            if (this.value == "latinx" || this.value == "native"){
             
                console.log("Oh no! THis group is unerrepresented! More info: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7896193/#:~:text=In%20adult%20trials%20reporting%20ethnicity,and%2018.5%25%20in%202018).");
            } 
            calculate();
        })

     }


     let radios2 = document.querySelectorAll("#gender"); 
     for (var i = radios2.length - 1; i >= 0; i--) {
         radios2[i].addEventListener('change',function(){
             localStorage.setItem("gender", this.value)
             if (this.value == "male"){
                gn= 16;
               
            }
            if (this.value == "female"){
                gn= 18; 
              
            }
            if (this.value == "nonbin"){
                gn= 6;
               
            } 
            calculate();
         })
 
      }

      let radios3 = document.querySelectorAll("#ability"); 
      for (var i = radios3.length - 1; i >= 0; i--) {
          radios3[i].addEventListener('change',function(){
              localStorage.setItem("ability", this.value)
              if (this.value == "disabled"){
                ab= 8;
               
            }
            if (this.value == "abled"){
                ab= 17; 
              
            }
            calculate();
          })
  
       }

       let radios4 = document.querySelectorAll("#income"); 
       for (var i = radios4.length - 1; i >= 0; i--) {
           radios4[i].addEventListener('change',function(){
               localStorage.setItem("income", this.value)
               if (this.value == "high"){
                inc= 17;
               
            }
            if (this.value == "medium"){
                inc= 10; 
              
            }
            
            if (this.value == "low"){
                inc= 6; 
              
            }
            calculate();
           })
   
        }

        let radios5 = document.querySelectorAll("#transport"); 
        for (var i = radios5.length - 1; i >= 0; i--) {
            radios5[i].addEventListener('change',function(){
                localStorage.setItem("transport", this.value)
                if (this.value == "car"){
                    tr= 16;
                   
                }
                if (this.value == "other"){
                    tr= 10; 
                  
                }
                
                if (this.value == "nope"){
                    tr= 6; 
                  
                }
                calculate();

            })
    
         }

         let radios6 = document.querySelectorAll("#children"); 
         for (var i = radios6.length - 1; i >= 0; i--) {
             radios6[i].addEventListener('change',function(){
                 localStorage.setItem("children", this.value)

                 if (this.value == "nop"){
                    ch= 17;
                   
                }
                if (this.value == "alone"){
                    ch= 10; 
                  
                }
                
                if (this.value == "babysit"){
                    ch= 6; 
                  
                }
                
calculate();
             })
     
          }
  
 

but = document.querySelector("button");
but.addEventListener("click", function(){




})


function calculate(){
    inclusion = eth + gn + ab+ inc + tr+ ch;
                console.log(inclusion);
                localStorage. setItem("inculsimeter", inclusion);
}

    })

