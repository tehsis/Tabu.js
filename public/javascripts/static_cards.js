define(function() {
	var static_cards;

	static_cards = [
		{
		  "word": "NAVIDAD",
		  "tabues": ["Diciembre","Papa Noel","Villancicos","Arbolito","Nacimiento"]
		},
		{
		  "word": "PICTIONARY",
		  "tabues": ["Juego","Dibujar","Lápiz","Marca","Tablero"]
		},
		{
		  "word": "GUARDAPOLVO",
		  "tabues": ["Blanco","Escuela","Primaria","Maestra","Alumno"]
		},
		{
		  "word": "PALMERA",
		  "tabues": ["Datil","Coco","Árbol","Mono","Trópico"]
		},
		{
		  "word": "MOSQUITO",
		  "tabues": ["Picadura","Rascarse","Raid","Espiral","Insecto"]
		},
		{
		  "word": "CARGA",
		  "tabues": ["Bultos","Pesada","Camión","Barco","Tren"]
		},
		{
		  "word": "CUNA",
		  "tabues": ["Dormir","Bebe","Canción","Barrotes","Muebles"]
		},
		{
		  "word": "RONCAR",
		  "tabues": ["Noche","Ruido","Nariz","Dormir","Molestar"]
		},
		{
		  "word": "CASTIGO",
		  "tabues": ["Diciembre","Papa Noel","Villancicos","Arbolito","Nacimiento"]
		},
		{
		  "word": "MICRO ESCOLAR",
		  "tabues": ["Colegio","Niño","Vehiculo","Chicos","Naranja"]
		},
		{
		  "word": "TENIS",
		  "tabues": ["Deporte","Pelota","Cancha","Raqueta","Red"]
		},
		{
		  "word": "ANGEL",
		  "tabues": ["Paraíso","Diablo","Demonio","Cielo","Alas"]
		},
		{
		  "word": "CORPIÑO",
		  "tabues": ["Ropa","Sostén","Pechos","Mujer","Bombacha"]
		},
		{
		  "word": "CINE",
		  "tabues": ["Película","Pantalla","Filmar","Proyectar","Cámara"]
		},
		{
		  "word": "NIDO",
		  "tabues": ["Pájaro","Pichones","Huevos","Casa","Árbol"]
		},
		{
		  "word": "BANDONEON",
		  "tabues": ["Música","Acordeón","Instrumento","Tango","Piazzola"]
		},
		{
		  "word": "RISA",
		  "tabues": ["Ridículo","Cómico","Carcajada","Chiste","Broma"]
		},
		{
		  "word": "ESPOSAS",
		  "tabues": ["Arresto","Policía","Mano","Preso","Muñeca"]
		},
		{
		  "word": "CENIZAS",
		  "tabues": ["Fuego","Fumar","Polvo","Quemar","Cigarrillo"]
		},
		{
		  "word": "BOTIQUIN",
		  "tabues": ["Baño","Espejo","Remedios","Guardar","Armario"]
		},
		{
		  "word": "PASAPORTE",
		  "tabues": ["Documento","Extranjero","Viajar","Aduana","Visa"]
		},
		{
		  "word": "ANTIFAZ",
		  "tabues": ["Ojos","Tapar","Mascara","Carnaval","Cara"]
		},
		{
		  "word": "RADIADOR",
		  "tabues": ["Anticongelante","Enfriar","Coche","Agua","Motor"]
		},
		{
		  "word": "PINOCHO",
		  "tabues": ["Mentira","Nariz","Gepetto","Muñeco","Cuento"]
		},
		{
		  "word": "LAGRIMA",
		  "tabues": ["Ojos","Llorar","Agua","Gotas","Triste"]
		},
		{
		  "word": "GRUA",
		  "tabues": ["Levantar","Auto","Avería","Estacionamiento","Auxilio"]
		},
		{
		  "word": "PAIS",
		  "tabues": ["Estado","Nación","Gobierno","Frontera","Bandera"]
		},
		{
		  "word": "BILLIKEN",
		  "tabues": ["Anteojito","Revista","Infantil","Quiosco","Niños"]
		},
		{
		  "word": "CONVENTO",
		  "tabues": ["Iglesia","Habito","Religión","Monja","Cura"]
		},
		{
		  "word": "NUBE",
		  "tabues": ["Cielo","Despejado","Lluvia","Sol","Trueno"]
		},
		{
		  "word": "CARPA",
		  "tabues": ["Campamento","Tienda","Dormir","Camping","Circo"]
		},
		{
		  "word": "UNIFORME",
		  "tabues": ["Vestido","Igual","Colegio","Ejercito","Policía"]
		},
		{
		  "word": "PIMPOLLO",
		  "tabues": ["Capullo","Botón","Flor","Rosa","Cerrado"]
		},
		{
		  "word": "MONJA",
		  "tabues": ["Habito","Religión","Hermana","Convento","Novicia"]
		},
		{
		  "word": "LAVARROPAS",
		  "tabues": ["Maquina","Electrodoméstico","Tambor","Centrifugar","Jabón"]
		},
		{
		  "word": "TERREMOTO",
		  "tabues": ["Derrumbe","Sismo","Temblor","Tierra","Movimiento"]
		},
		{
		  "word": "KREMLIN",
		  "tabues": ["Moscu","URSS","Palacio","Rusia","Plaza Roja"]
		},
		{
		  "word": "DIA",
		  "tabues": ["Noche","Sol","Horas","Semana","Despierto"]
		},
		{
		  "word": "RELOJ",
		  "tabues": ["Hora","Tiempo","Despertador","Muñeca","Agujas"]
		},
		{
		  "word": "CONFUCIO",
		  "tabues": ["Filosofo","Chino","Proverbio","Religión","Sabio"]
		},
		{
		  "word": "HIPNOTIZAR",
		  "tabues": ["Dormir","Mirada","Mago","Despertar","Sueño"]
		},
		{
		  "word": "INCENDIO",
		  "tabues": ["Quemar","Apagar","Fuego","Llama","Bomberos"]
		},
		{
		  "word": "QUIOSCO",
		  "tabues": ["Golosinas","Negocio","Caramelos","Cigarrillos","Vender"]
		},
		{
		  "word": "SUERTE",
		  "tabues": ["Buena","Yeta","Amuleto","Mala","Culo"]
		},
		{
		  "word": "ROSA",
		  "tabues": ["Espinas","Flor","Pantera","Color","Rojo"]
		},
		{
		  "word": "ARQUITECTO",
		  "tabues": ["Obra","Planos","Dibujo","Diseño","Construcción"]
		},
		{
		  "word": "ESTOMAGO",
		  "tabues": ["Panza","Tripa","Comida","Cuerpo","Digestión"]
		},
		{
		  "word": "PLOMERO",
		  "tabues": ["Gotera","Agua","Caños","Arreglar","Canillas"]
		},
		{
		  "word": "POLVO",
		  "tabues": ["Limpio","Sucio","Tierra","Plumero","Muebles"]
		},
		{
		  "word": "MUSEO",
		  "tabues": ["Arte","Edificio","Pinturas","Exhibición","Colecciones"]
		},
		{
		  "word": "BARRO",
		  "tabues": ["Lluvia","Tierra","Lodo","Agua","Fango"]
		},
		{
		  "word": "PIMIENTA",
		  "tabues": ["Cocina","Picante","Sabor","Condimento","Sal"]
		},
		{
		  "word": "MANEJAR",
		  "tabues": ["Auto","Volante","Coche","Conductor","Vehiculo"]
		},
		{
		  "word": "CUCHILLO",
		  "tabues": ["Cuchara","Tenedor","Cortar","Cubierto","Afilado"]
		},
		{
		  "word": "COWBOY",
		  "tabues": ["Pistola","Sombrero","Caballo","Indios","Oeste"]
		},
		{
		  "word": "CERDO",
		  "tabues": ["Animal","Embutido","Jamón","Chancho","Fiambre"]
		},
		{
		  "word": "FECHA",
		  "tabues": ["Mes","Año","Almanaque","Día","Calendario"]
		},
		{
		  "word": "PONCHO",
		  "tabues": ["Gaucho","Cubrir","Ropa","Cabeza","Capa"]
		},
		{
		  "word": "ARENA",
		  "tabues": ["Playa","Fina","Piedra","Rocas","Erosión"]
		},
		{
		  "word": "FUTBOL",
		  "tabues": ["Maradona","Deporte","Arco","Gol","Pelota"]
		},
		{
		  "word": "ALBAÑIL",
		  "tabues": ["Construcción","Ladrillo","Casa","Obra","Cemento"]
		},
		{
		  "word": "CALENDARIO",
		  "tabues": ["Mes","Almanaque","Fecha","Días","Año"]
		},
		{
		  "word": "PODIO",
		  "tabues": ["Campeón","Ganador","Pedestal","Triunfador","Subir"]
		},
		{
		  "word": "DEDAL",
		  "tabues": ["Aguja","Pinchar","Metal","Protección","Coser"]
		},
		{
		  "word": "CIRCULO",
		  "tabues": ["Anillo","Redondo","Compás","Línea","Curva"]
		},
		{
		  "word": "PESCADOR",
		  "tabues": ["Pez","Caña","Anzuelo","Carnada","Lombriz"]
		},
		{
		  "word": "FLAN",
		  "tabues": ["Leche","Molde","Postre","Huevos","Caramelo"]
		},
		{
		  "word": "SKATE",
		  "tabues": ["Patineta","Monopatín","Cuatro","Ruedas","Tabla"]
		},
		{
		  "word": "IZQUIERDA",
		  "tabues": ["Lado","Derecha","Zurdo","Comunista","Dirección"]
		},
		{
		  "word": "GAS",
		  "tabues": ["Estufa","Cocinar","Envasado","Calefón","Termotanque"]
		},
		{
		  "word": "CAMELLO",
		  "tabues": ["Animal","Desierto","Joroba","Arena","Dromedario"]
		},
		{
		  "word": "COMPACT DISC",
		  "tabues": ["Escuchar","Láser","Canción","Casette","Música"]
		},
		{
		  "word": "CARREFOUR",
		  "tabues": ["Supermercado","Caja","Carrito","Comprar","Góndolas"]
		},
		{
		  "word": "POCHOCLO",
		  "tabues": ["Maíz","Dulce","Salado","Cine","Blanco"]
		},
		{
		  "word": "ALUMINIO",
		  "tabues": ["Metal","Cacerola","Avión","Acero","Liviano"]
		},
		{
		  "word": "POLLO",
		  "tabues": ["Ave","Plumas","Comer","Gallina","Pavo"]
		},
		{
		  "word": "CONTRATO",
		  "tabues": ["Papel","Firmar","Acuerdo","Alquiler","Escritorio"]
		},
		{
		  "word": "MUÑECO",
		  "tabues": ["Niñas","Bebote","Juguete","Mama","Regalo"]
		},
		{
		  "word": "AGENDA",
		  "tabues": ["Abecedario","Días","Direcciones","Teléfonos","Morgan"]
		},
		{
		  "word": "FARMACIA",
		  "tabues": ["Medico","Inyección","Remedios","Receta","Turno"]
		},
		{
		  "word": "ESTACION",
		  "tabues": ["Terminal","Tren","Parada","Anden","Bonetería"]
		},
		{
		  "word": "CARNE",
		  "tabues": ["Vaca","Asado","Comer","Milanesa","Hamburguesa"]
		},
		{
		  "word": "COSQUILLAS",
		  "tabues": ["Dedos","Hacer","Pies","Sensación","Risa"]
		},
		{
		  "word": "FUEGO",
		  "tabues": ["Fósforo","Llamas","Hoguera","Quemar","Leña"]
		},
		{
		  "word": "OFICIAL DE POLICIA",
		  "tabues": ["Esposas","Agente","Patrullero","Comisaría","Arrestar"]
		},
		{
		  "word": "IDIOMA",
		  "tabues": ["Lengua","País","Diccionario","Traducir","Estudiar"]
		},
		{
		  "word": "HERIDA",
		  "tabues": ["Sangre","Corte","Curita","Coser","Puntos"]
		},
		{
		  "word": "ARROZ",
		  "tabues": ["Cereal","Comida","Grano","Chino","Integral"]
		},
		{
		  "word": "LEVADURA",
		  "tabues": ["Masa","Pan","Harina","Cocinar","Royal"]
		},
		{
		  "word": "HUMOR",
		  "tabues": ["Alegría","Animo","Broma","Risa","Comedia"]
		},
		{
		  "word": "COSTILLAS",
		  "tabues": ["Esqueleto","Espalda","Huesos","Pecho","Cuerpo"]
		},
		{
		  "word": "HOJA",
		  "tabues": ["Verde","Caer","Árbol","Planta","Rama"]
		},
		{
		  "word": "BASQUET",
		  "tabues": ["Deporte","Pelota","Equipo","Aro","Cancha"]
		},
		{
		  "word": "TELEFONO PUBLICO",
		  "tabues": ["Llamar","Calle","Hablar","Cospeles","Fichas"]
		},
		{
		  "word": "PIZZA",
		  "tabues": ["Napolitana","Mozzarella","Queso","Faina","Fugaza"]
		},
		{
		  "word": "ALGODÓN",
		  "tabues": ["Cura","Sangre","Herida","Rama","Farmacia"]
		},
		{
		  "word": "OSTRA",
		  "tabues": ["Perla","Mar","Bivalvo","Marisco","Comer"]
		},
		{
		  "word": "RECREO",
		  "tabues": ["Patio","Escuela","Jugar","Campana","Tiempo"]
		},
		{
		  "word": "ANCHOA",
		  "tabues": ["Sardina","Pescado","Lata","Comida","Salado"]
		},
		{
		  "word": "FANTASMA",
		  "tabues": ["Sabana","Miedo","Cadenas","Castillo","Espíritu"]
		},
		{
		  "word": "CUADRO",
		  "tabues": ["Museo","Pintor","Óleo","Caballete","Tela"]
		},
		{
		  "word": "GOL",
		  "tabues": ["Pelota","Hacer","Puntuación","Futbol","Arco"]
		},
		{
		  "word": "CIRCO",
		  "tabues": ["Pista","Carpa","Payasos","Trapecista","Domador"]
		},
		{
		  "word": "PINTAR",
		  "tabues": ["Artista","Cuadro","Colores","Pincel","Pared"]
		},
		{
		  "word": "NOCHE",
		  "tabues": ["Día","Oscuridad","Luna","Estrellas","Sol"]
		},
		{
		  "word": "HAMSTER",
		  "tabues": ["Animal","Jaula","Mascota","Rata","Roedor"]
		},
		{
		  "word": "COLCHON",
		  "tabues": ["Cama","Almohada","Acostarse ","Sabanas","Dormir"]
		},
		{
		  "word": "SALA DE ESPERA",
		  "tabues": ["Consultorio","Revistas","Paciente","Medico","Asientos"]
		},
		{
		  "word": "CHINA",
		  "tabues": ["Oriental","Amarillo","País","Asia","Muralla"]
		},
		{
		  "word": "FOTOGRAFIA",
		  "tabues": ["Revelar","Rollo","Film","Álbum","Cámara"]
		},
		{
		  "word": "ESPIA",
		  "tabues": ["CIA","Side","Traidor","Secreto","James Bond"]
		},
		{
		  "word": "BRUJULA",
		  "tabues": ["Orientarse","Norte","Aguja","Imantada","Cardinales"]
		},
		{
		  "word": "CALEFACCION",
		  "tabues": ["Invierno","Estufa","Aire","Caldera","Frío"]
		},
		{
		  "word": "RIMMEL",
		  "tabues": ["Ojos","Maquillaje","Cepillo","Cosmético","Pestaña"]
		},
		{
		  "word": "GIRASOL",
		  "tabues": ["Planta","Semillas","Aceite","Flor","Amarillo"]
		},
		{
		  "word": "NASHUA",
		  "tabues": ["Japonesa","Fotocopiadora","Marca","Librería","Maquina"]
		},
		{
		  "word": "LENTES DE CONTACTO",
		  "tabues": ["Duras","Blandas","Anteojos","Colores","Vista"]
		},
		{
		  "word": "GRANERO",
		  "tabues": ["Trigo","Edificio","Silo","Cereales","Campo"]
		},
		{
		  "word": "BEBIDA",
		  "tabues": ["Liquido","Tomar","Agua","Sed","Brindar"]
		},
		{
		  "word": "CIUDAD",
		  "tabues": ["Municipio","Capital","Población","Edificios","Intendente"]
		},
		{
		  "word": "DINERO",
		  "tabues": ["Comprar","Plata","Moneda","Billetes","Guita"]
		},
		{
		  "word": "PELOTA",
		  "tabues": ["Balón","Redonda","Futbol","Bola","Patear"]
		},
		{
		  "word": "BOTELLA",
		  "tabues": ["Tapón","Envase","Recipiente","Vidrio","Frasco"]
		},
		{
		  "word": "ARTISTA",
		  "tabues": ["Pintor","Escultor","Actor","Fama","Premio"]
		},
		{
		  "word": "PAÑUELO",
		  "tabues": ["Nariz","Sonarse","Tela","Mocos","Resfrió"]
		},
		{
		  "word": "DIABLO",
		  "tabues": ["Lucifer","Ángel","Demonio","Infierno","Satanás"]
		},
		{
		  "word": "CUPIDO",
		  "tabues": ["Arco","Flechazo","Amor","Dios","Corazón"]
		},
		{
		  "word": "AZULEJO",
		  "tabues": ["Cerámica","Pared","Baño","Cocina","Decoración"]
		},
		{
		  "word": "MANZANA",
		  "tabues": ["Comer","Sidra","Verde","Rojo","Fruta"]
		},
		{
		  "word": "NIEVE",
		  "tabues": ["Blanca","Agua","Invierno","Esquiar","Frío"]
		},
		{
		  "word": "TELEFONO",
		  "tabues": ["Numero","Llamar","Movicom","Tomo","Ocupado"]
		},
		{
		  "word": "ERUCTO",
		  "tabues": ["Ruido","Bebe","Comer","Boca","Provechito"]
		},
		{
		  "word": "CABALLO",
		  "tabues": ["Estribos","Ensillar","Jinete","Montar","Carrera"]
		},
		{
		  "word": "ESTRIBOS",
		  "tabues": ["Montura","Ensillar","Pies","Espuelas","Caballo"]
		},
		{
		  "word": "BOLEADORAS",
		  "tabues": ["Cazar","Caballo","Lanzar","Indios","Avestruz"]
		},
		{
		  "word": "PARQUIMETRO",
		  "tabues": ["Ficha","Coche","Estacionar","Tiempo","Reloj"]
		},
		{
		  "word": "SURF",
		  "tabues": ["Playa","Tabla","Mar","Olas","Equilibrio"]
		},
		{
		  "word": "EDAD",
		  "tabues": ["Años","Vida","Nacer","Fecha","Tiempo"]
		},
		{
		  "word": "COLUMNA VERTEBRAL",
		  "tabues": ["Esqueleto","Cuerpo","Costillas","Huesos","Sostener"]
		},
		{
		  "word": "GORILA",
		  "tabues": ["Mono","Chimpance","Orangutan","Kingkong","Zoológico"]
		},
		{
		  "word": "PIRAMIDE",
		  "tabues": ["Tumba","Momia","Egipto","Keops","Faraón"]
		},
		{
		  "word": "BATERIA",
		  "tabues": ["Platillos","Instrumento","Música","Ritmo","Bombo"]
		},
		{
		  "word": "PRONOSTICO",
		  "tabues": ["Predicción","Nublado","Lluvia","Temperatura","Tiempo"]
		},
		{
		  "word": "ANDEN",
		  "tabues": ["Tren","Estación","Esperar","Subir","Bajar"]
		},
		{
		  "word": "MATE",
		  "tabues": ["Yerba","Bombilla","Agua","Amargo","Azúcar"]
		},
		{
		  "word": "CIRUJANO",
		  "tabues": ["Hospital","Anestesia","Operación","Doctor","Escalpelo"]
		},
		{
		  "word": "CRITICO",
		  "tabues": ["Película","Opinión","Teatro","Arte","Comentar"]
		},
		{
		  "word": "ANGULO",
		  "tabues": ["Recta","Grado","Geometría","Polígono","Lado"]
		},
		{
		  "word": "BANCO",
		  "tabues": ["Cheque","Cuenta","Cajero","Dinero","Cambio"]
		},
		{
		  "word": "GENIOL",
		  "tabues": ["Aspirina","Dolor","Farmacia","Remedio","Marca"]
		},
		{
		  "word": "PAN",
		  "tabues": ["Harina","Levadura","Galletitas","Sándwich","Tostadas"]
		},
		{
		  "word": "FIESTA",
		  "tabues": ["Cumpleaños","Celebración","Regalos","Amigos","Invitaciones"]
		},
		{
		  "word": "SUGUS",
		  "tabues": ["Caramelo","Masticar","Quiosco","Marca","Golosina"]
		},
		{
		  "word": "FIRMA",
		  "tabues": ["Nombre","Apellido","Rubrica","Autógrafo","Contrato"]
		},
		{
		  "word": "PIJAMA",
		  "tabues": ["Dormir","Cama","Ponerse","Ropa","Camisón"]
		},
		{
		  "word": "ALFOMBRA",
		  "tabues": ["Carpeta","Kalpakian","Piso","Moqueta","Suelo"]
		},
		{
		  "word": "DULCE",
		  "tabues": ["Chocolate","Caramelo","Sabor","Galletitas","Bombón"]
		},
		{
		  "word": "ALMOHADA",
		  "tabues": ["Cama","Dormir","Pluma","Acostarse","Cabeza"]
		},
		{
		  "word": "LUNA",
		  "tabues": ["Noche","Sol","Satélite","Espacio","Estrellas"]
		},
		{
		  "word": "CICATRIZ",
		  "tabues": ["Señal","Marca","Herida","Piel","Huella"]
		},
		{
		  "word": "REPASADOR",
		  "tabues": ["Trapo","Secar","Platos","Cocina","Tela"]
		},
		{
		  "word": "PAYASO",
		  "tabues": ["Circo","Nariz","Zapatones","Bofetada","Reír"]
		},
		{
		  "word": "ALBINO",
		  "tabues": ["Blanco","Ojos","Cara","Piel","Color"]
		},
		{
		  "word": "GELATINA",
		  "tabues": ["Flan","Comer","Postre","Helado","Transparente"]
		},
		{
		  "word": "HUELLA",
		  "tabues": ["Digital","Rastro","Pisada","Señal","Mano"]
		},
		{
		  "word": "OXIGENO",
		  "tabues": ["Respirar","Aire","Atmosfera","Hidrogeno","Gas"]
		},
		{
		  "word": "NAFTA",
		  "tabues": ["Combustible","Surtidor","Auto","Tanque","Estación"]
		},
		{
		  "word": "OLIMPICO",
		  "tabues": ["Atletas","Medallas","Juegos","Competición","Países"]
		},
		{
		  "word": "INODORO",
		  "tabues": ["Caca","Pis","Baño","Agua","Sentarse"]
		},
		{
		  "word": "MEDIALUNA",
		  "tabues": ["Panadería","Factura","Comer","Grasa","Croissant"]
		},
		{
		  "word": "COLOR",
		  "tabues": ["Amarillo","Tojo","Verde","Azul","Marrón"]
		},
		{
		  "word": "ANALISIS",
		  "tabues": ["Sangre","Orina","Laboratorio","Medico","Enfermo"]
		},
		{
		  "word": "ANIMAL",
		  "tabues": ["Vivo","Salvaje","Domestico","Veterinario","Irracional"]
		},
		{
		  "word": "INOCENTE",
		  "tabues": ["Absuelto","Niño","Culpable","Ingenuo","Veredicto"]
		},
		{
		  "word": "MERCENARIO",
		  "tabues": ["Soldado","Guerra","Pago","Extranjero","Militar"]
		},
		{
		  "word": "CORONA",
		  "tabues": ["Rey","Cabeza","Oro","Redonda","Símbolo"]
		},
		{
		  "word": "COCKTAIL",
		  "tabues": ["Alcohol","Trago","Copa","Mezcla","Bebida"]
		},
		{
		  "word": "OBELISCO",
		  "tabues": ["Monumento","Buenos Aires","Corrientes","Símbolo","República"]
		},
		{
		  "word": "SEMANA",
		  "tabues": ["Mes","Cuatro","Tiempo","Siete","Días"]
		},
		{
		  "word": "HELICOPTERO",
		  "tabues": ["Avión","Volar","Rotor","Vertical","Hélice"]
		},
		{
		  "word": "MONSTRUO",
		  "tabues": ["Miedo","Criatura","Asustar","Horrible","Feo"]
		},
		{
		  "word": "CONGRESO",
		  "tabues": ["Cámara","Senado","Gobierno","Diputados","Poder Legislativo"]
		},
		{
		  "word": "TESORO",
		  "tabues": ["Piratas","Mapa","Cofre","Oro","Isla"]
		},
		{
		  "word": "ASADO",
		  "tabues": ["Fuego","Parrilla","Carbón","Carne","Cocinar"]
		},
		{
		  "word": "SUBMARINO",
		  "tabues": ["Barco","Periscopio","Torpedo","Inmersión","Guerra"]
		},
		{
		  "word": "AGUIJON",
		  "tabues": ["Clavar","Abeja","Veneno","Mosquito","Avispa"]
		},
		{
		  "word": "HOSPITAL",
		  "tabues": ["Doctor","Medico","Curar","Internar","Enfermo"]
		},
		{
		  "word": "PUÑAL",
		  "tabues": ["Arma","Mano","Cuchillo","Espada","Daga"]
		},
		{
		  "word": "CAMISA DE FUERZA",
		  "tabues": ["Mangas","Atar","Manicomio","Loco","Demente"]
		},
		{
		  "word": "VOTO",
		  "tabues": ["Sufragio","Presidente","Cuarto Oscuro","Urna","Elecciones"]
		},
		{
		  "word": "ANILLO",
		  "tabues": ["Dedos","Mano","Sortija","Compromiso","Alianza"]
		},
		{
		  "word": "ANESTESIA",
		  "tabues": ["Dolor","Operación","Dormir","Sentir","Medico"]
		},
		{
		  "word": "SILLON",
		  "tabues": ["Respaldo","Cómodo","Asiento","Sentarse","Sofá"]
		},
		{
		  "word": "XUXA",
		  "tabues": ["Brasil","TV","Niños","Paquitas","Pele"]
		},
		{
		  "word": "LAGARTO",
		  "tabues": ["Cocodrilo","Animal","Sol","Reptil","Pequeño"]
		},
		{
		  "word": "LACOSTE",
		  "tabues": ["Chomba","Marca","Ropa","Cocodrilo","Lagarto"]
		},
		{
		  "word": "FLECHA",
		  "tabues": ["Arco","Punta","Lanzar","Ballesta","Indios"]
		},
		{
		  "word": "AIWA",
		  "tabues": ["Grabador","Música","Minicomponente","Marca","Parlantes"]
		},
		{
		  "word": "SHOPPING",
		  "tabues": ["Alto Palermo","Comprar","Unicenter","Negocios","Galería"]
		},
		{
		  "word": "INSOMNIO",
		  "tabues": ["Cama","Dormir","Desvelo","Sueño","Noche"]
		},
		{
		  "word": "VENTANA",
		  "tabues": ["Casa","Pared","Vidrio","Mirar","Luz"]
		},
		{
		  "word": "LANZAR",
		  "tabues": ["Pelota","Jabalina","Tirar","Echar","Arrojar"]
		},
		{
		  "word": "ALMIBAR",
		  "tabues": ["Azúcar","Dulce","Fruta","Lata","Liquido"]
		},
		{
		  "word": "COLADOR",
		  "tabues": ["Te","Agujeros","Filtro","Fideos","Agua"]
		},
		{
		  "word": "MASTIL",
		  "tabues": ["Bandera","Palo","Poste","Izar","Velas"]
		},
		{
		  "word": "DUCHA",
		  "tabues": ["Baño","Canilla","Toallon","Agua","Cuerpo"]
		},
		{
		  "word": "ESTAMPILLA",
		  "tabues": ["Carta","Sobre","Correo","Lamer","Sello"]
		},
		{
		  "word": "BALA",
		  "tabues": ["Cartucho","Pistola","Disparar","Proyectil","Escopeta"]
		},
		{
		  "word": "BOSQUE",
		  "tabues": ["Plantas","Árboles","Animales","Madera","Selva"]
		},
		{
		  "word": "HOGUERA",
		  "tabues": ["Madera","Quemar","Leña","Fuego","Campamento"]
		},
		{
		  "word": "ALARMA",
		  "tabues": ["Robo","Casa","Banco","Atraco","Ladrón"]
		},
		{
		  "word": "HAVANNA",
		  "tabues": ["Alfajor","Marca","Golosina","Mar del Plata","Chocolate"]
		},
		{
		  "word": "HORMIGA",
		  "tabues": ["Insecto","Comer","Jardín","Fila","Plantas"]
		},
		{
		  "word": "SOFTWARE",
		  "tabues": ["Computadora","Programa","Disquette","Lenguaje","Hardware"]
		},
		{
		  "word": "CORBATA",
		  "tabues": ["Vestir","Seda","Camisa","Cuello","Nudo"]
		},
		{
		  "word": "GATILLO",
		  "tabues": ["Dedo","Tirar","Apretar","Disparar","Pistola"]
		},
		{
		  "word": "MARATON",
		  "tabues": ["Carrera","Competencia","Kilómetros","Olimpiadas","Grecia"]
		},
		{
		  "word": "ESCARBADIENTES",
		  "tabues": ["Madera","Palito","Aperitivo","Boca","Hilo dental"]
		},
		{
		  "word": "FLORERO",
		  "tabues": ["Planta","Recipiente","Ramo","Pote","Agua"]
		},
		{
		  "word": "ANZUELO",
		  "tabues": ["Caña","Pescador","Tirar","Cebo","Lombriz"]
		},
		{
		  "word": "ELECTRICIDAD",
		  "tabues": ["Luz","Corriente","Energía","Enchufe","Lámpara"]
		},
		{
		  "word": "UVA",
		  "tabues": ["Vid","Fruta","Parra","Racimo","Vino"]
		},
		{
		  "word": "POKER",
		  "tabues": ["Apostar","Naipes","Juego","Baraja","Cartas"]
		},
		{
		  "word": "SOMBRERO",
		  "tabues": ["Gorra","Casco","Poner","Cabeza","Ala"]
		},
		{
		  "word": "VALIENTE",
		  "tabues": ["Cobarde","Miedo","Defender","Héroe","Salvar"]
		},
		{
		  "word": "CHATARRA",
		  "tabues": ["Autos","Coche","Hierro","Basura","Metal"]
		},
		{
		  "word": "MOCHILA",
		  "tabues": ["Bolso","Hombro","Caminata","Llevar","Espalda"]
		},
		{
		  "word": "MAMADERA",
		  "tabues": ["Leche","Tetina","Comer","Bebe","Chupar"]
		},
		{
		  "word": "DOLAR",
		  "tabues": ["Verde","Dinero","Moneda","EE UU","Plata"]
		},
		{
		  "word": "ADUANA",
		  "tabues": ["Control","Frontera","Pasaporte","Declarar","Contrabando"]
		},
		{
		  "word": "PLAYA",
		  "tabues": ["Arena","Costa","Verano","Mar","Olas"]
		}
		];

	return static_cards;	
});