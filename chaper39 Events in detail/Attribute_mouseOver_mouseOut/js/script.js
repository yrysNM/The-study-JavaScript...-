table.onmouseover = function(event)
	{
		let target = event.target;
		target.style.background = "pink";
	};

	table.onmouseout = function(event)
	{
		let target = event.target;
		target.style.background = "";
	};