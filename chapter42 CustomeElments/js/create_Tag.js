let MyTimerProto = Object.create(HTMLElement.prototype);
MyTimerProto.tick = function() 
{
	this.innerHTML++;
};

//regis new element in browser
document.registerElement("my-timer", {
	prototype: MyTimerProto
});


