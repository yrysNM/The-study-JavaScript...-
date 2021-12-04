if(elem.addEeventListener)
{
	if("onwheel" in document)
	{
		elem.addEventListener("wheel", onWheel);

	}else if("onmousewheel" in document)
	{
		elem.addEventListener("mousehweel", onwheel);
	}else
	{
		elem.addEventListener("MozMousePixelScroll", onWheel);
	}
}/*else
{
	elem.attachEvent("onmousewheel", onWheel);
}*/

function onWheel(e)
{
	e = e || window.event;

	let  data = e.deltaY || e.detail || e.wheelDelta;

	let info = document.getElementById("delta");

	info.innerHTML = +info.innerHTML + delta;

	e.preventDefault ? e.preventDefault() : (e.returnValue = false);
}