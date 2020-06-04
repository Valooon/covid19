function por()
 {
   var r1= document.quizcovid.p1.value;
   var r2= document.quizcovid.p2.value;
   var r3= document.quizcovid.p3.value;
   var r4= document.quizcovid.p4.value;
   var r5= document.quizcovid.p5.value;
   var r6= document.quizcovid.p6.value;
   var r7= document.quizcovid.p7.value;
   var r8= document.quizcovid.p8.value;
   var r9= document.quizcovid.p9.value;
   var r10= document.quizcovid.p10.value;
   var r11= document.quizcovid.p11.value;
   var r12= document.quizcovid.p12.value;
   var r13= document.quizcovid.p13.value;
   var r14= document.quizcovid.p14.value;
   var r15= document.quizcovid.p15.value;
   var r16= document.quizcovid.p16.value;
   var r17= document.quizcovid.p17.value;
   
   var contador=0;
   var porcentaje;

   if(r1 == 'A')
   {
       contador++;
   }
   if(r2 == 'A')
   {
       contador++;
   }
   if(r3 == 'A')
   {
       contador++;
   }
   if(r4 == 'C')
   {
       contador++;
   }
   if(r5 == 'A')
   {
       contador++;
   }
   if(r6 == 'A')
   {
       contador++;
   }
   if(r7 == 'B')
   {
       contador++;
   }
   if(r8 == 'A')
   {
       contador++;
   }
   if(r9 == 'C')
   {
       contador++;
   }
   if(r10 == 'B')
   {
       contador++;
   }
   if(r11 == 'A')
   {
       contador++;
   }
   if(r12 == 'A')
   {
       contador++;
   }
   if(r13 == 'B')
   {
       contador++;
   }
   if(r14 == 'B')
   {
       contador++;
   }
   if(r15 == 'B')
   {
       contador++;
   }
   if(r16== 'C')
   {
       contador++;
   }
   if(r17 == 'A')
   {
       contador++;
   }

   porcentaje = contador *100/17;
   porcentaje=parseInt(porcentaje);
   var res="";
   if (porcentaje<41)
    {
     res="Desastroso "+porcentaje+" %"; 
    }
   if (porcentaje>=41 && porcentaje<=69)
    {
     res="Está bien pero debe estudiar más "+porcentaje+" %"; 
    }
   if (porcentaje==70)
    {
     res="Buenas respuestas "+porcentaje+" %"; 
    }
   if (porcentaje>70)
    {
     res="Muy buenas respuestas "+porcentaje+" %"; 
    }

   return res;
}