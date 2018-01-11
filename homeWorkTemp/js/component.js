
function Component(){
	this.elem = null;

	this.init = function(sSelector){
		this.elem = $(sSelector);
	}
	this.findObject = function(sSelector){
		return this.elem.find(sSelector);

	}
}
	