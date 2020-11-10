//////////////////////////////////////////////////////////////////////////////////////
/////////////////////////// Autor: ///////////////////////////////////////////////////
// -|Quadric equation|-                                           					//
//                                                                					//
// @XxxdimooonxxX 2020                                            					//
//////////////////////////////////////////////////////////////////////////////////////
///////////////////// Global variables: //////////////////////////////////////////////
var inp		= document.querySelector("#inp_user");		//"data" from input			//
var bt		= document.querySelector("#add");			//batton result				//
var p		= document.querySelector("p");				//output result data		//
var canvas	= document.getElementById("fun");			//canvas					//
var ctx		= canvas.getContext('2d');					//get context from canvas	//
var ix_1, ix_2;											//positions "x"				//
var a = 1, b = 1, c = 1;								//"koof"					//
var D, x1, x2;											//"discrimination" and x1,x2//
//////////////////////////////////////////////////////////////////////////////////////
////////////////////// Programm: /////////////////////////////////////////////////////

bt.onclick = () => {
	var data	= inp.value;	//data from inp in "data"
	var d_len	= data.length;	//length data
	
	//delete all " "
	for(i = 0; i < d_len; i++){
		if(data[i] == " "){
			data = data.slice(0, i) + data.slice(i + 1);
			i--;
		}
	}
	d_len	= data.length;		//update length data
	
	//"global for" for search "a" and "b"
	for(i = 0; i < d_len; i++){
		//ix_1
		if(data[i] == "x" && data[i + 1] == "^"){
			ix_1 = i;	//save a position
			
			//save "koof" in "a"
			for(j = 0; j < ix_1; j++){
				if(j == 0) a = data[j];
				else a += data[j];
			}
			
			if(a == "-" && data[1] == "x") a = -1;
		}
		
		//ix_2
		if(data[i] == "x" && data[i + 1] != "^"){
			ix_2 = i;	//save a position
			
			//save "koof" in "b"
			for(j = ix_1 + 3; j < ix_2; j++){
				if(j == ix_1 + 3) b = data[j];
				else b += data[j];
			}
			
			if(b == "+") b = 1;
			if(b == "-") b = -1;
		}
	}
	
	//search "c" and save "koof" in "c"
	for(i = ix_2 + 1; i < d_len; i++){
		if(c == 1) c = data[i];
		else c += data[i];
	}
	
	//from string in number
	a = +a;
	b = +b;
	c = +c;
	
	//search D, x1 and x2
	D	= (b * b) + 4 * a * c;
	x1	= (-b - Math.sqrt(D)) / 2 * a;
	x2	= (-b + Math.sqrt(D)) / 2 * a;
	
	//add result data in "p"
	p.innerHTML = "";
	p.innerHTML += "D = " + D + "</br>";
	p.innerHTML += "x1 = " + x1 + "</br>";
	p.innerHTML += "x2 = " + x2 + "</br>";

	var size = 300;
	if(D > 0){
		p.innerHTML += "Имеются два корня</br>";
	}else if(D == 0){
		p.innerHTML += "Имеется только один корень</br>";
	}else{
		p.innerHTML += "Нет корней</br>";
		size = 0;
	}
	
	//show function in graphic
	var x, y;
	//var size = 300;
	for(i = -size; i < size; i++){
		x = i/5;
		y = (a * (x * x) + b * x + c)/5;
		ctx.fillRect(x+300, -y+300, 10, 10);
	}
	
	//without comment
	a = b = c = 1;
}
