main.js

const carrousel=document.querySelector(".carrousel-items");
let maxscrollleft=carrousel.scrollwidth-carrousel.width;
let step=5;
let intervalo=null;


const start=()=>{
	intervalo=setinterval(function()){
	carrousel.scrollleft=carrousel.scrollleft+step;
	if(carrousel.scrollleft===maxscrollleft){
	step=-1;}
	else if(carrousel.scrollleft===0){
	step=step-1;
	}
	}
},10);

const stop=()=>{
	clear inteval(intervalo);
};

carrousel.addeventlistener(".mouseout",())=>{
	start();
};

carrousel.addeventlistener(".mouseout",())=>{
	start();
};

