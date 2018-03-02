module.exports = function(app) 
{
	var express = require('express');
    var hotel_controller = require('../controllers/hotel_controller');


	app.get('/api/hotels', hotel_controller.getAllHotels); // Lista todos los hoteles
	app.get('/api/hotels/names', hotel_controller.getHotelNames); // lista todos los nombres de los hoteles
	app.get('/api/hotels/:id', hotel_controller.getHotelById); // Listo un hotel por ID

	app.get('/api/hotels/stars/5', hotel_controller.getHotel5Stars); // Lista los hoteles 5 estrellas
	app.get('/api/hotels/stars/4', hotel_controller.getHotel4Stars); // Lista los hoteles 4 estrellas
	app.get('/api/hotels/stars/3', hotel_controller.getHotel3Stars); // Lista los hoteles 3 estrellas
	app.get('/api/hotels/stars/2', hotel_controller.getHotel2Stars); // Lista los hoteles 2 estrellas
	app.get('/api/hotels/stars/1', hotel_controller.getHotel1Stars); // Lista los hoteles 1 estrellas

	app.get('/api/hotel', hotel_controller.getNamesByFilter); // Lista los hoteles por filtro


	app.post('/api/hotels', hotel_controller.addHotel); // Añade un hotel
	app.put('/api/hotels/:id', hotel_controller.updateHotel); // Actualiza un hotel
	app.delete('/api/hotels/:id', hotel_controller.deleteHotel); // Borra un hotel

};