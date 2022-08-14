function myFunction(){

    let a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, r, s;
     
    a =Number(document.getElementById('maths').value);
    b =Number(document.getElementById('phy').value);
    c =Number(document.getElementById('bio').value);
    d =Number(document.getElementById('chem').value);
    e =Number(document.getElementById('geog').value);
    f =Number(document.getElementById('eng').value);
    g =Number(document.getElementById('com').value);
     
       let total;

      total = a + b + c + d +e + f + g;
      document.getElementById('tot').value =total;

      


     if(a >= 80 && a <= 100){
        i ="A"; 

     }else if(a >= 75 && a <= 79){
         i = "B+";
     }else if(a >= 70 && a <= 74){
         i = "B";
     }else if(a >= 65 && a <= 69){
         i = "C+";
     }else if(a >= 60 && a <= 64){
         i ="C";
     }else if(a >=55 && a <= 59){
         i = "D+";
     }else if(a >= 50 && a <= 54){
        i= "D";
     }else
       i = "E";
    document.getElementById('mat').value = i;
 
     
    if(b >= 80 && b <= 100){
        j ="A"; 

     }else if(b >= 75 && b <= 79){
         j = "B+";
     }else if(b >= 70 && b <= 74){
         j = "B";
     }else if(b >= 65 && b <= 69){
         j = "C+";
     }else if(b >= 60 && b <= 64){
         j ="C";
     }else if(b >=55 && b <= 59){
         j = "D+";
     }else if(b >= 50 && b <= 54){
        j = "D";
     }else
       j = "E";
       document.getElementById('ph').value = j;

      

         
    if(c >= 80 && c <= 100){
        j ="A"; 

     }else if(c >= 75 && c <= 79){
         j = "B+";
     }else if(c >= 70 && c <= 74){
         j = "B";
     }else if(c >= 65 && c <= 69){
         j = "C+";
     }else if(c >= 60 && c <= 64){
         j ="C";
     }else if(c >=55 && c <= 59){
         j = "D+";
     }else if(c >= 50 && c <= 54){
        j = "D";
     }else
       j = "E";
       document.getElementById('bi').value = j;

// 
    if(d >= 80 && d <= 100){
        j ="A"; 
     }else if(d >= 75 && d <= 79){
         j = "B+";
     }else if(d >= 70 && d <= 74){
         j = "B";
     }else if(d >= 65 && d <= 69){
         j = "C+";
     }else if(d >= 60 && d <= 64){
         j ="C";
     }else if(d >=55 && d <= 59){
         j = "D+";
     }else if(d >= 50 && d <= 54){
        j = "D";
     }else
       j = "E";
       document.getElementById('ch').value = j;


       if(e >= 80 && e <= 100){
        j ="A"; 
     }else if(e >= 75 && e <= 79){
         j = "B+";
     }else if(e >= 70 && e <= 74){
         j = "B";
     }else if(e >= 65 && e <= 69){
         j = "C+";
     }else if(e >= 60 && e <= 64){
         j ="C";
     }else if(e >=55 && e <= 59){
         j = "D+";
     }else if(e >= 50 && e <= 54){
        j = "D";
     }else
       j = "E";
       document.getElementById('ge').value = j;

       

       if(f >= 80 && f <= 100){
        j ="A"; 
     }else if(f >= 75 && f <= 79){
         j = "B+";
     }else if(f >= 70 && f <= 74){
         j = "B";
     }else if(f >= 65 && f <= 69){
         j = "C+";
     }else if(f >= 60 && f <= 64){
         j ="C";
     }else if(f >=55 && f <= 59){
         j = "D+";
     }else if(f >= 50 && f <= 54){
        j = "D";
     }else
       j = "E";
       document.getElementById('en').value = j;
      

       
       if(g >= 80 && g <= 100){
        j ="A"; 
     }else if(g >= 75 && g <= 79){
         j = "B+";
     }else if(g >= 70 && g <= 74){
         j = "B";
     }else if(g >= 65 && g <= 69){
         j = "C+";
     }else if(g >= 60 && g <= 64){
         j ="C";
     }else if(g >=55 && g <= 59){
         j = "D+";
     }else if(g >= 50 && g <= 54){
        j = "D";
     }else
       j = "E";
       document.getElementById('co').value = j;

     
       

//   This aspect is for REMARK....

       
       if(a >= 80 && a <= 100){
        k ="EXCELLENT"; 
     }else if(a >= 75 && a <= 79){
         k = "VERY GOOD";
     }else if(a >= 70 && a <= 74){
         k = "GOOD";
     }else if(a >= 65 && a <= 69){
         k = "GOOD";
     }else if(a >= 60 && a <= 64){
         k ="CREDIT";
     }else if(a >=55 && a <= 59){
         k = "PASS";
     }else if(a >= 50 && a <= 54){
        k = "WEAK PASS";
     }else
        k = "FAIL";
       document.getElementById('maR').value = k;
      


      
       
       if(b >= 80 && b <= 100){
        m ="EXCELLENT"; 
     }else if(b >= 75 && b <= 79){
         m = "VERY GOOD";
     }else if(b >= 70 && b <= 74){
         m = "GOOD";
     }else if(b >= 65 && b <= 69){
         m = "GOOD";
     }else if(b >= 60 && b <= 64){
         m ="CREDIT";
     }else if(b >=55 && b <= 59){
         m = "PASS";
     }else if(b >= 50 && b <= 54){
        m = "WEAK PASS";
     }else
        m = "FAIL";
       document.getElementById('phR').value = m;



           
       if(c >= 80 && c <= 100){
        n ="EXCELLENT"; 
     }else if(c >= 75 && c <= 79){
         n = "VERY GOOD";
     }else if(c >= 70 && c <= 74){
         n = "GOOD";
     }else if(c >= 65 && c <= 69){
         n = "GOOD";
     }else if(c >= 60 && c <= 64){
         n ="CREDIT";
     }else if(c >=55 && c <= 59){
         n = "PASS";
     }else if(c >= 50 && c <= 54){
        n = "WEAK PASS";
     }else
        n = "FAIL";
       document.getElementById('biR').value = n;



       
           
       if(d >= 80 && d <= 100){
        o ="EXCELLENT"; 
     }else if(d >= 75 && d <= 79){
         o = "VERY GOOD";
     }else if(d >= 70 && d <= 74){
         o = "GOOD";
     }else if(d >= 65 && d <= 69){
         o = "GOOD";
     }else if(d >= 60 && d <= 64){
         o ="CREDIT";
     }else if(d >=55 && d <= 59){
         o = "PASS";
     }else if(d >= 50 && d <= 54){
        o = "WEAK PASS";
     }else
        o = "FAIL";
       document.getElementById('chR').value = o;



        
           
       if(e >= 80 && e <= 100){
        q ="EXCELLENT"; 
     }else if(e >= 75 && e <= 79){
         q = "VERY GOOD";
     }else if(e >= 70 && e <= 74){
         q = "GOOD";
     }else if(e >= 65 && e <= 69){
         q = "GOOD";
     }else if(e >= 60 && e <= 64){
         q ="CREDIT";
     }else if(e >=55 && e <= 59){
         q = "PASS";
     }else if(e >= 50 && e <= 54){
        q = "WEAK PASS";
     }else
        q = "FAIL";
       document.getElementById('geR').value = n;

 


       
           
       if(f >= 80 && f <= 100){
        r ="EXCELLENT"; 
     }else if(f >= 75 && f <= 79){
         r = "VERY GOOD";
     }else if(f >= 70 && f <= 74){
         r = "GOOD";
     }else if(f >= 65 && f <= 69){
         r = "GOOD";
     }else if(f >= 60 && f <= 64){
         r ="CREDIT";
     }else if(f >=55 && f <= 59){
         r = "PASS";
     }else if(f >= 50 && f <= 54){
        r = "WEAK PASS";
     }else
        r = "FAIL";
       document.getElementById('enR').value = r;


       
           
       if(g >= 80 && g <= 100){
        s ="EXCELLENT"; 
     }else if(g >= 75 && g <= 79){
         s = "VERY GOOD";
     }else if(g >= 70 && g <= 74){
         s = "GOOD";
     }else if(g >= 65 && g <= 69){
         s = "GOOD";
     }else if(g >= 60 && g <= 64){
         s ="CREDIT";
     }else if(g >=55 && g <= 59){
         s = "PASS";
     }else if(g >= 50 && g <= 54){
        s = "WEAK PASS";
     }else
        s = "FAIL";
       document.getElementById('coR').value = s;

        // Blinking Text....
    }
    setInterval(() => odk.hidden =! odk.hidden ,1000);

    //   Dark or light mode aspect...

    function mode(){
        var element = document.body;
        element.classList.toggle('mode');
    }