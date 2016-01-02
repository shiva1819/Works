// JavaScript Document
		var $UL = document.getElementById("unorder_li");
		var li1 = document.getElementById("one");
		var li2 = document.getElementById("two");
		var li3 = document.getElementById("three");
		var li4 = document.getElementById("four");
		var li5 = document.getElementById("five");
		var li6 = document.getElementById("six");
		
		$UL.style.cssFloat ="left";
		li1.style.width = "141.5px";		
		li2.style.width = "141.5px";	
		li3.style.width = "141.5px";	
		li4.style.width = "141.5px";
		li5.style.width = "141.5px";
		li6.style.width = "141.5px";
		li6.style.cssFloat = "right";

		
li1.addEventListener("mouseover", function move(f){
		if(li1.style.width == "141.5px"){
				li1.style.width ="600px";
				li2.style.width = "50px";
				li3.style.width = "50px";
				li4.style.width = "50px";
				li5.style.width = "50px";
				li6.style.width = "50px";																
			}else{
				li1.style.width = "141.5px";					
				li2.style.width = "141.5px";	
				li3.style.width = "141.5px";	
				li4.style.width = "141.5px";
				li5.style.width = "141.5px";
				li6.style.width = "141.5px";
				}	
		console.log(li1);
	},false);	
li1.addEventListener("mouseout", function one(){
		li1.style.width = "141.5px";
		li2.style.width = "141.5px";
		li3.style.width = "141.5px";
		li4.style.width = "141.5px";
		li5.style.width = "141.5px";
		li6.style.width = "141.5px";
	},true);

//for li2	
li2.addEventListener("mouseover", function move(f){
		if(li2.style.width == "141.5px"){
				li1.style.width ="50px";
				li2.style.width = "600px";
				li3.style.width = "50px";
				li4.style.width = "50px";
				li5.style.width = "50px";
				li6.style.width = "50px";																
			}else{
				li1.style.width = "141.5px";
				li2.style.width = "141.5px";
				li3.style.width = "141.5px";
				li4.style.width = "141.5px";
				li5.style.width = "141.5px";
				li6.style.width = "141.5px";					
				}	
		console.log(li2);
	},false);
li2.addEventListener("mouseout", function two(){
		li1.style.width = "141.5px";
		li2.style.width = "141.5px";
		li3.style.width = "141.5px";
		li4.style.width = "141.5px";
		li5.style.width = "141.5px";
		li6.style.width = "141.5px";
	},true);


//for li3
li3.addEventListener("mouseover", function move(f){
		if(li3.style.width == "141.5px"){
				li1.style.width ="50px";
				li2.style.width = "50px";
				li3.style.width = "600px";
				li4.style.width = "50px";
				li5.style.width = "50px";
				li6.style.width = "50px";																
			}else{
				li1.style.width = "141.5px";
				li2.style.width = "141.5px";
				li3.style.width = "141.5px";
				li4.style.width = "141.5px";
				li5.style.width = "141.5px";
				li6.style.width = "141.5px";					
				}	
		console.log(li3);
	},false);
li3.addEventListener("mouseout", function three(){
		li1.style.width = "141.5px";
		li2.style.width = "141.5px";
		li3.style.width = "141.5px";
		li4.style.width = "141.5px";
		li5.style.width = "141.5px";
		li6.style.width = "141.5px";
	},true);	

// for li4	
li4.addEventListener("mouseover", function move(f){
		if(li4.style.width == "141.5px"){
				li1.style.width ="50px";
				li2.style.width = "50px";
				li3.style.width = "50px";
				li4.style.width = "600px";
				li5.style.width = "50px";
				li6.style.width = "50px";																
			}else{
				li1.style.width = "141.5px";
				li2.style.width = "141.5px";
				li3.style.width = "141.5px";
				li4.style.width = "141.5px";
				li5.style.width = "141.5px";
				li6.style.width = "141.5px";					
				}	
		console.log(li4);
	},false);
li4.addEventListener("mouseout", function four(){
		li1.style.width = "141.5px";
		li2.style.width = "141.5px";
		li3.style.width = "141.5px";
		li4.style.width = "141.5px";
		li5.style.width = "141.5px";
		li6.style.width = "141.5px";
	},true);


//for li5
li5.addEventListener("mouseover", function move(f){
		if(li5.style.width == "141.5px"){
				li1.style.width ="50px";
				li2.style.width = "50px";
				li3.style.width = "50px";
				li4.style.width = "50px";
				li5.style.width = "600px";
				li6.style.width = "50px";																
			}else{
				li1.style.width = "141.5px";
				li2.style.width = "141.5px";
				li3.style.width = "141.5px";
				li4.style.width = "141.5px";
				li5.style.width = "141.5px";
				li6.style.width = "141.5px";					
				}	
		console.log(li5);
	},false);
li5.addEventListener("mouseout", function five(){
		li1.style.width = "141.5px";
		li2.style.width = "141.5px";
		li3.style.width = "141.5px";
		li4.style.width = "141.5px";
		li5.style.width = "141.5px";
		li6.style.width = "141.5px";
	},true);

//for li6
li6.addEventListener("mouseover", function move(f){
		if(li6.style.width == "141.5px"){
				li1.style.width ="50px";
				li2.style.width = "50px";
				li3.style.width = "50px";
				li4.style.width = "50px";
				li5.style.width = "50px";
				li6.style.width = "600px";																
			}else{
				li1.style.width = "141.5px";
				li2.style.width = "141.5px";
				li3.style.width = "141.5px";
				li4.style.width = "141.5px";
				li5.style.width = "141.5px";
				li6.style.width = "141.5px";					
				}			
		console.log(li6);
	},false);	
li6.addEventListener("mouseout", function six(){
		li1.style.width = "141.5px";
		li2.style.width = "141.5px";
		li3.style.width = "141.5px";
		li4.style.width = "141.5px";
		li5.style.width = "141.5px";
		li6.style.width = "141.5px";
	},true);

	