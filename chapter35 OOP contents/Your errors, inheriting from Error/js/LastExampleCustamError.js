//error our
function CustomError(message)
{
	this.name = "CustomError";
	this.message = message;

	if(Error.captureStackTrace)
	{
		Error.captureStackTrace(this, this.constructor);
	}else
	{
		this.stack = (new Error()).stack;
	}
}

CustomError.prototype = Object.create(Error.prototype);

CustomError.prototype.constructor = CustomError;

//Inheritor
function PropertyError(property)
{
	CustomError.call(this, "GOne property " + property);
	this.name = "PropertyError";

	this.property = property;
}

PropertyError.prototype = Object.create(CustomError.prototype);
PropertyError.prototype.constructor = PropertyError;

//and another level
function PropertyRequiredError(property)
{
	PropertyError.call(this, property);
	this.name = "PropertyRequiredError";
	this.message = "Gone property " + property;
}

PropertyRequiredError.prototype = Object.create(PropertyError.prototype);
PropertyRequiredError.prototype.constructor = PropertyRequiredError;

//use
var err = new PropertyRequiredError("age");
//test
alert(err instanceof  PropertyRequiredError); //true
alert( err instanceof PropertyError ); // true
alert( err instanceof CustomError ); // true
alert( err instanceof Error ); // true
