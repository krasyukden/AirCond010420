"use strict";

class AirConditioning {
	constructor(name){
		this._name = name;
		this._status = false;
		this._temperature = 28;
		this._modes = ["tropics", "pole", "dry", "fan"];
		this._currentMode = 0;
		
	}
	get name(){ 
		return this._name;
	}
	
	get status(){ 
		return this._status
	}
	on(){ 
		this._status = true;
	} 
	off(){ 
		this._status = false;
	}
	increaseTemperature(){
		if(this._temperature < 35){// добавить проверку в зависим от режимов ?
			this._temperature++;
		}
	}
	decreaseTemperature(){
		if(this._temperature > 15){// добавить проверку в зависим от режимов ?
			this._temperature--;
		}
	}
	/*set temperature(value){ //  1й вар, упрощенный
		if(value <= 35 && value >= 15 && typeof value == "number" && !isNaN(value)){
		this._temperature = value;
		}
		else{
			console.log("does not correspond to temperature conditions")
		}	
	}*/
	set temperature(value){ //  2й вар
		if(this._isCorrectTemperature(value)){
			this._temperature = value;
		}
		else{
			console.log("does not correspond to temperature conditions")
		}	
	}
	_isCorrectTemperature(value){ 
		if(typeof value == "number" && !isNaN(value)){
				if(value <= 35 && value >= 27 && this._modes[this._currentMode] == "tropics"){
					return true;
				};
				
				if(value <= 26 && value >= 20 && this._modes[this._currentMode] == "temperate"){//добавить как пользовательский || сразу внести в _modes ?? 
					return true;
				};
				
				if(value <= 19 && value >= 15 && this._modes[this._currentMode] == "pole"){
					return true;
				};
				if(value <= 35 && value >= 15 && this._modes[this._currentMode] == "fan"){
					return true;
				};
				if(value <= 35 && value >= 15 && this._modes[this._currentMode] == "dry"){
					return true;
				};					
		}
		else{
			return false;
		}
	}
	
	get temperature(){
		return this._temperature;
	}
	getMode (){
		for(let i = 0; i < this._modes.length; i++){
			var	currentModeString = this._modes[this._currentMode];//с let - раб  только в пределах {} !!
		}
		return currentModeString; 
	}
	getModes (){
		return this._modes;
	}	
	setMode (value){
		for(let i = 0; i < this._modes.length; i++){
			if(value == this._modes[i]){
				this._currentMode = i;
			}
				
		}	
	}
	addMode (value){// добавить х-ку каждому новому пользовательскому св-ву ??
		if(typeof value == "string" && value.length <= 12){
			this._modes.push(value);
		}
		else{
			console.log("Please enter a string no more 12 symbols");
		}
	}
	nextMode(){
		if(this._currentMode < this._modes.length - 1){
			this._currentMode++;
		}
		else{
			console.log("Please choose mode from available");
		}
	}
	previousMode(){
		if(this._currentMode > 0){
			this._currentMode--;
		}
		else{
			console.log("Please choose mode from available");
		}
	}
	
	
	/*controlTemperature(){ //  допол установить ??
		switch(this._modes[this._currentMode]){
				case "tropics": 
					if(this._temperature < 27){
						this._temperature = 30;
					};	
					break;
				case "temperate":
					if(this._temperature > 26 || this._temperature < 20){
						this._temperature = 22;
					};	
					break;
				case "pole":
				if(this._temperature > 19){
						this._temperature = 18;
					};	
					break;
				default:
				  console.log("Error");
		};			
	}*/
}	
let airBedroom = new AirConditioning("airBedroom");
console.log(airBedroom.name);
console.log(airBedroom.status);
airBedroom.on();
console.log(airBedroom.status);
airBedroom.increaseTemperature();
console.log(airBedroom.temperature);
airBedroom.decreaseTemperature();
console.log(airBedroom.temperature);
airBedroom.temperature = 10;//36 уже не ставит
console.log(airBedroom._temperature);
console.log(airBedroom.getMode());
console.log(airBedroom.getModes());
airBedroom.setMode("pole");
console.log(airBedroom.getMode());
airBedroom.addMode("temperate");//"temperate123456" - не добавил
airBedroom.setMode("temperate");
console.log(airBedroom.getMode());
console.log(airBedroom.getModes());
//airBedroom.nextMode();
airBedroom.previousMode();
airBedroom.previousMode();
//airBedroom.previousMode();
console.log(airBedroom.getMode());
airBedroom.temperature = 35;
console.log(airBedroom._temperature);


/*_isCorrectTemperature(value){ //  protected
		if(typeof value == "number" && !isNaN(value)){
				if(value <= 35 && value >= 15 ){ //+ && this._temperatureMode == "tropics"
					return true;
				};
				
		}
		else{
			return false;
		}
	}*/	
/*let i;// 2 й вар
		i = this._modes.indexOf(this._currentMode);
								
		if (i < this._modes.length - 1){	
			i++;
			this._currentMode = this._modes[i];
		}*/	