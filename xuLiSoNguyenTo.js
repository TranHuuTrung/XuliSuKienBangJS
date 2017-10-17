        function SoNT(n){
	    	if(n < 2){
	    		return false;
	    	} 
	    	else{
	    		for(i = 2; i < n; i++){
                      if (n % i === 0) {
                      	return false;
                    }
	    		}
	    	}
	    	return true;
	    }

		function XuLi(){
             console.log("Goi xu ly");
			 a = document.form1.txt1.value;
			  n = +a;
			 // n  = paseInt(a);
			 str = ' ';
             console.log(a);
			 for(var i = 2; i <= n; i++)
			 	if(SoNT(i)) str += i + ' ';	 
			  document.form1.txt2.value = str;
 		}

		function ReSet(){
			document.form1.txt1.value = ' ';
			document.form1.txt2.value = ' ';
			document.form1.txt1.focus();

		}