document.onwheel = function(e)
{
	if(e.target.tagName != "TEXTAREA") return;

	let area = e.target;

// wheelDelta не дает возможность узнать количество пикселей
	let delta = e.delatY || e.detail || e.wheelDelta;

	if(delta < 0 && area.scrollHeight - area.clientHeight  - area.scrollTop <= 1)
	{
		e.preventDefault();
	}
};