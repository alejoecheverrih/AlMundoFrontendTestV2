var mongoose = require('mongoose');
var Hotel  = mongoose.model('Hotel');

//Obtener toda la lista de los hoteles --- GET
exports.getAllHotels = function(req, res) 
{
	Hotel.find(function(err, hotels) 
	{
		if (!err) 
		{
			res.send(hotels);
		} 
		else console.log('Error -> ' + err);
	});
};


//Obtener un hotel por id --- GET

exports.getHotelById = function(req, res) 
{
    Hotel.findById(req.params.id, function(err, hotel)
    {
    	if (!err) res.send(hotel);
    	else console.log('Error -> ' + err);
    });
	
};




//Insertar un nuevo hotel --- POST
exports.addHotel = function(req, res) 
{
	console.log('POST');
	console.log(req.body);

	var new_hotel = new Hotel(
	{
		name:    	req.body.name,
		stars: 	  	req.body.stars,
		price:  	req.body.price,
		image:   	req.body.image,
		amenities:  req.body.amenities
	});

	new_hotel.save(function(err)
	{
		if (!err) console.log('Hotel Almacenado Correctamente');
		else console.log('Error -> ' + err);
	});
	res.send(new_hotel);
};



//Actualiza un hotel existente, consultandolo primero por Id --- PUT

exports.updateHotel = function(req, res)
{
	Hotel.findById(req.params.id), function(err, hotel)
	{
		hotel.name  		= req.body.name;
		hotel.stars  		= req.body.stars;
		hotel.price  		= req.body.price;
		hotel.image  		= req.body.image;
		hotel.amenities 	= req.body.amenities;
	};

	Hotel.save(function(err)
	{
		if (!err) console.log('Hotel Actualizado Correctamente');
		else console.log('Error -> ' + err);
	});
}

//Borra un hotel existente, consultandolo primero por Id --- DELETE

exports.deleteHotel = function(req, res)
{
	Hotel.findById(req.params.id), function(err, hotel)
	{
		hotel.remove(function(err)
		{
			if (!err) console.log('Hotel Borrado Correctamente');
			else console.log('Error -> ' + err);
		})
	};
}

//Obtener toda la lista de los nombres de los hoteles --- GET
exports.getHotelNames = function(req, res, next) 
{
    var query = Hotel.find({}).select('name');

    query.exec(function (err, someValue) {
        if (err) return next(err);
        res.send(someValue);
    });
};


//Obtener solos los hoteles 5 estrellas --- GET
exports.getHotel5Stars = function(req, res, next) 
{
	var query = Hotel.find({stars:{$in:[5]}},{name:1,stars:1,price:1,image:1,amenities:1,_id:0})
    query.exec(function (err, someValue) 
    {
        if (err) return next(err);
        res.send(someValue);
    });
};


//Obtener solos los hoteles 4 estrellas --- GET
exports.getHotel4Stars = function(req, res, next) 
{
	var query = Hotel.find({stars:{$in:[4]}},{name:1,stars:1,price:1,image:1,amenities:1,_id:0})
    query.exec(function (err, someValue) 
    {
        if (err) return next(err);
        res.send(someValue);
    });
};

//Obtener solos los hoteles 3 estrellas --- GET
exports.getHotel3Stars = function(req, res, next) 
{
	var query = Hotel.find({stars:{$in:[3]}},{name:1,stars:1,price:1,image:1,amenities:1,_id:0})
    query.exec(function (err, someValue) 
    {
        if (err) return next(err);
        res.send(someValue);
    });
};

//Obtener solos los hoteles 2 estrellas --- GET
exports.getHotel2Stars = function(req, res, next) 
{
	var query = Hotel.find({stars:{$in:[2]}},{name:1,stars:1,price:1,image:1,amenities:1,_id:0})
    query.exec(function (err, someValue) 
    {
        if (err) return next(err);
        res.send(someValue);
    });
};

//Obtener solos los hoteles 1 estrella --- GET
exports.getHotel1Stars = function(req, res, next) 
{
	var query = Hotel.find({stars:{$in:[1]}},{name:1,stars:1,price:1,image:1,amenities:1,_id:0})
    query.exec(function (err, someValue) 
    {
        if (err) return next(err);
        res.send(someValue);
    });
};



//Obtener la lista de hoteles filtrado por un parámetro de texto
exports.getNamesByFilter = function(req, res, next) 
{
	var v1 = "";
	var v2 = req.query.filter;
	var vRegEx = v1.concat(v2);
	var query = Hotel.find({"name": {$regex:vRegEx,$options:"$i"}},{name:1,stars:1,price:1,image:1,amenities:1,_id:0})
    query.exec(function (err, someValue) 
    {
        if (err) return next(err);
        res.send(someValue);
    });
};