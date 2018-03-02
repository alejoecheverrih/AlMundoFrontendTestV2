var app = angular.module("AppHotel",[]);

app.controller("HotelController",["$scope","$http","$sce",function(s,h,e) 
{
	s.searchTriangUp = false;
	s.searchTriangDown = true;

	s.starsTriangUp = false;
	s.starsTriangDown = true;

	s.hotels = [];
	s.imgStars = '11';
	h({method: 'GET',url: 'http://localhost/api/hotels'}).  // Mostrar la lista al cargar la pagina
	then(function (respuesta)
	{
   		s.hotels = respuesta.data;

    },function (error)
	{
   		console.log(error);
    });

	s.hotelsFiltered = []; // Arreglo dinamico para el filtrado por nombre

	 

	s.searchHotel = function()
	{
		s.ocultarListaPorNombre = false; // Oculto el array inicial con todos los hoteles, a partir de aqui se maneja el hotelFiltered para listar los hoteles.
		var v1 = 'http://localhost/api/hotel/?filter=';
		var v2 =  s.filtroHotel ;		
		s.ocultarListaPrincipal = true;
		if (s.filtroHotel==="") {var apiUrl = 'http://localhost/api/hotels';} else {var apiUrl = v1.concat(v2);}

		// Valido si el input del nombre del hotel esta vacio, si es vacio hace GET a todos los hoteles, si tiene un valor, hace GET por nombre = a lo que halla escrito.

		h({method: 'GET',url: apiUrl}).
		then(function (respuesta)
		{
	   		s.hotelsFiltered = respuesta.data;
	   		console.log(respuesta);

	    },function (error)
		{
	   		console.log(error);
	    });
	}

	
	// Checkbox para filtrado por estrellas
	s.hotelsFilteredByStar = [];
	s.searchBy1Star = function()
	{
		
		if (s.cb1Stars==true) 
		{
			s.ocultarListaPorNombre = true;
			s.ocultarListaPrincipal = true;
			h({method: 'GET',url: 'http://localhost/api/hotels/stars/1'}).  // GET a la API para hoteles de 1 estrella
			then(function (respuesta)
			{
		   		s.hotelsFilteredByStar = respuesta.data;

		    },function (error)
			{
		   		console.log(error);
		    });
		} 
		else
		{
			s.ocultarListaPrincipal = false;			
		}
	}


	s.searchBy2Star = function()
	{
		
		if (s.cb2Stars==true) 
		{
			s.ocultarListaPorNombre = true;
			s.ocultarListaPrincipal = true;
			h({method: 'GET',url: 'http://localhost/api/hotels/stars/2'}).  // GET a la API para hoteles de 2 estrellas
			then(function (respuesta)
			{
		   		s.hotelsFilteredByStar = respuesta.data;

		    },function (error)
			{
		   		console.log(error);
		    });
		} 
		else
		{
			s.ocultarListaPrincipal = false;			
		}
	}

	s.searchBy3Star = function()
	{
		
		if (s.cb3Stars==true) 
		{
			s.ocultarListaPorNombre = true;
			s.ocultarListaPrincipal = true;
			h({method: 'GET',url: 'http://localhost/api/hotels/stars/3'}).  // GET a la API para hoteles de 3 estrellas
			then(function (respuesta)
			{
		   		s.hotelsFilteredByStar = respuesta.data;

		    },function (error)
			{
		   		console.log(error);
		    });
		} 
		else
		{
			s.ocultarListaPrincipal = false;			
		}
	}


	s.searchBy4Star = function()
	{
		
		if (s.cb4Stars==true) 
		{
			s.ocultarListaPorNombre = true;
			s.ocultarListaPrincipal = true;
			h({method: 'GET',url: 'http://localhost/api/hotels/stars/4'}).  // GET a la API para hoteles de 4 estrellas
			then(function (respuesta)
			{
		   		s.hotelsFilteredByStar = respuesta.data;

		    },function (error)
			{
		   		console.log(error);
		    });
		} 
		else
		{
			s.ocultarListaPrincipal = false;			
		}
	}

	s.searchBy5Star = function()
	{
		
		if (s.cb5Stars==true) 
		{
			s.ocultarListaPorNombre = true;
			s.ocultarListaPrincipal = true;
			h({method: 'GET',url: 'http://localhost/api/hotels/stars/5'}).  // GET a la API para hoteles de 5 estrellas
			then(function (respuesta)
			{
		   		s.hotelsFilteredByStar = respuesta.data;

		    },function (error)
			{
		   		console.log(error);
		    });
		} 
		else
		{
			s.ocultarListaPrincipal = false;			
		}
	}

	//Funcion para ocultar - mostrar los filtros

	s.hideSearchFilter1 = function()
	{
		if (s.searchTriangUp==false) 
		{
			s.searchTriangUp=true;
			s.searchTriangDown=false;
			s.hideSearchForm=true;
		} 
		
	}

	s.hideSearchFilter2 = function()
	{
		if (s.searchTriangUp==true) 
		{
			s.searchTriangUp=false;
			s.searchTriangDown=true;
			s.hideSearchForm=false;
		} 
		
	}

	s.hideStarsFilter1 = function()
	{
		if (s.starsTriangUp==false) 
		{
			s.starsTriangUp=true;
			s.starsTriangDown=false;
			s.hideStarsForm=true;
		} 
		
	}

	s.hideStarsFilter2 = function()
	{
		if (s.starsTriangUp==true) 
		{
			s.starsTriangUp=false;
			s.starsTriangDown=true;
			s.hideStarsForm=false;
		} 
		
	}
	
	s.buildStarsView = function(a)
	{
		switch(a) 
		{
		    case 1:
		        s.estrella = '<img src="/images/icons/filters/star_yellow.svg" width="2%" height="2%">';
		        break;
		    case 2:
		        s.estrella = '<img src="/images/icons/filters/star_yellow.svg" width="2%" height="2%"><img src="/images/icons/filters/star_yellow.svg" width="2%" height="2%">';
		        break;
		    case 3:
		        s.estrella = '<img src="/images/icons/filters/star_yellow.svg" width="2%" height="2%"><img src="/images/icons/filters/star_yellow.svg" width="2%" height="2%"><img src="/images/icons/filters/star_yellow.svg" width="2%" height="2%">';
		        break;
		    case 4:
		        s.estrella = '<img src="/images/icons/filters/star_yellow.svg" width="2%" height="2%"><img src="/images/icons/filters/star_yellow.svg" width="2%" height="2%"><img src="/images/icons/filters/star_yellow.svg" width="2%" height="2%"><img src="/images/icons/filters/star_yellow.svg" width="2%" height="2%">';
		        break;
		    case 5:
		        s.estrella = '<img src="/images/icons/filters/star_yellow.svg" width="2%" height="2%"><img src="/images/icons/filters/star_yellow.svg" width="2%" height="2%"><img src="/images/icons/filters/star_yellow.svg" width="2%" height="2%"><img src="/images/icons/filters/star_yellow.svg" width="2%" height="2%"><img src="/images/icons/filters/star_yellow.svg" width="2%" height="2%">';
		        break;
		}

		return s.estrella;

	}


	s.renderHtml = function(code)
	{
	    return e.trustAsHtml(code); // renderizado del texto de la funcion buildStarView a html para mostrarlo en la vista
	};


}]);



