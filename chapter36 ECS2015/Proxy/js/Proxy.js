/*let proxy = new  Proxy(target, handler);*/

//example1

"use strict"

let user = {};

let proxy= new Proxy(user, 
	{
		get(target, prop)
		{
			alert(`Read ${prop}`);
			return target[prop];
		},

		set(target, prop, value)
		{
			alert(`Recording ${prop} ${value}`);
			target[prop] = value;
			return true;
		}
	});

proxy.firstName = "Ilye"; //Recording

proxy.firstName; //read

alert(user.firstName);