let largeImg = document.getElementById("largeImg");

let thumbs = document.getElementById('thumbs');


thumbs.onclick = function(e)
{
	let target = e.target;

	while(target != this)
	{
		if(target.nodeName == "A")
		{
			showThumbnail(target.href, target.title);
			return false;
		}


		target = target.parentNode;
	}
}

function showThumbnail(href, title)
{
	largeImg.src = href;
	largeImg.alt = title;

}

/* предзагрузка */
	let imgs = thumbs.getElementsByTagName('img');

	for(let i = 0;  i < imgs.length; i++)
	{
		let url = imgs[i].parentNode.href;

		let img = document.createElement('img');
		img.src = url;
	}