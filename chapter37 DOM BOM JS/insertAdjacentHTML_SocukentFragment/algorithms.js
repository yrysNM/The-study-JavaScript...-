function makeTable()
  	{
  		let tableHolder = document.getElementById("table-holder");

  		let contents = '<thead><th>Имя</th><th>Фамилия</th><th>Отчество</th><th>Возраст</th></thead>';

  		contents += "<tbody>";

  		 for (var i = 0; i < 100; i++) {
        contents += "<tr><td> ... </td><td>Разные</td><td>Данные</td><td>" + ((i + 50) % 30) + "</td></tr>";
     	 }
     	 contents += '</tbody>';

  		tableHolder.innerHTML = "<table>" + contents + "</table>";   

  	}

  	/* перенести элементы в массив, отсортировать его и перевставить */
  	function sort1()
  	{
  		let tbody = document.getElementsByTagName("tbody")[0];
  		let rows = [];

  		for(let i = tbody.children.length  - 1; i >= 0; i--)
  		{
  			let child  = tbody.removeChild(tbody.children[i]);
  			rows.push(child);
  		}

  		rows.sort(function(a, b)
  			{
  				return a.lastChild.innerHTML - b.lastChild.innerHTML;
  			});


  		for(let i = 0; i < rows.length; i++)
  		{
  			tbody.appendChild(rows[i]);
  		}
  	}	

  	 /* скопировать ссылки в массив, отсортировать его и перевставить */
  	 function sort2()
  	 {
  	 	let tbody = document.getElementsByTagName("tbody")[0];
  	 	let rows = [];

  	 	for(let i =0; i < tbody.children.length; i++)
  	 	{
  	 		rows.push(tbody.children[i]);
  	 	}

  	 	rows.sort(function(a, b)
  	 	{
  	 		return a.lastChild.innerHTML - b.lastChild.innerHTML;
  	 	});

  	 	for(let i = 0; i < rows.length; i++)
  	 	{
  	 		tbody.appendChild(rows[i]);
  	 	}

  	 }

  	 /* создать массив из значений и ссылок, отсортировать, перевставить
      doRemove = предварительно вынуть из документа
    */

    function sortOpt(doRemove)
    {
    	let tbody = document.getElementsByTagName("tbody")[0];
    	let table = tbody.parentNode;

    	if(doRemove)
    	{
    		table.removeChild(tbody);
    	}

    	let rows = [];
    	for(let i = 0;  i < tbody.children.legnth; i++)
    	{
    		let elem = tbody.children[i];
    		rows.push({
    			value: elem.lastChild.innerHMTL,
    			elem: elem
    		});
    	}

    	rows.sort(function(a,b )
    	{
    		return a.value - b.value; 
    	});

    	for(let i = 0; i < rows.length; i++)
    	{
    		tbody.appendChild(rows[i].elem);
    	}

    	if(doRemove) table.appendChild(tbody);
    }

    function bench(f, elem)
    {
    	let sum = 0;
    	for(let i = 0; i < 100; i++)
    	{
    		makeTable();
    		let d = new Date;
    		f();
    		sum += new  Date - d;
    	}

    	elem.innerHTML = sum  + "mc";
    }

    function benchMake(elem)
    {
    	let sum = 0;
    	for(let i = 0; i < 100; i++)
    	{
    		let d = new Date;
    		makeTable();
    		sum  += new Date - d;
    	}

    	elem.innerHTML = sum  + "mc";
    }