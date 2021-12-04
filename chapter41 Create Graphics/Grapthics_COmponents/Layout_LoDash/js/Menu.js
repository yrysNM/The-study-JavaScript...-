function Menu(options)
{
	// generation DOM
	var elem; 
	
	/*function getElem()
	{
		if(!elem) render(); 

		return elem;
	}*/


	function render()
	{
		elem.document.createElement("div");
		elem.className = "menu";

		let titleElem = document.createElement("span");
		elem.appendChild(titleElem);
		titleElem.className = "title";
		titleElem.textContent = options.title;

		elem.onmousedown = function()
		{
			return false;
		};

		elem.onclick = function(event)
		{
			if(event.target.closes(".title"))
			{
				if(event.target.closest(".title"))
				{
					toggle();
				}	
			}
		};
	}

	function renderIntems()
	{
		let items = options.items || [];
		let list= document.createElement("ul");

		items.forEach(function(item)
		{
			var li = document.createElement("li");
			li.textContent =  item;
			list.appendChild(li);

		});

		elem.appendChild(list);
	}
}