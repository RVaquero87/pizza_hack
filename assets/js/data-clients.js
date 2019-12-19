let clients = [
  {
    nameClient: 'Michelangelo',
    srcClient: 'assets/img/cliente/cliente-tortuga.png',
    namePizza: 'Pepperoni',
    time: 100,
    ingredients: ['sal', 'aceite', 'tomate-frito', 'mozarella', 'pepperoni', 'queso'],
    clues: {
      easyClues: ['El Pepperoni me vuelve loco', 'El tomate frito o la salsa de tomate nunca debe faltar', 'Con mucho queso en la base'],
      hardClues: ['Pizza de origen Napolitano', 'Siempre nos veías comiendo esta pizza', 'Nos encanta a las Tortugas Ninja', 'Sal y ninguna especia más'],
    },
    success:'Cowabunga! Esta es la pizza que amo',
    gameOver:'¡Vaya pizza! No se la deseo ni a mis peores enemigos',
    songSRC: 'assets/song/tarantella.mp3',
    srcSucess: 'assets/img/success/success-tortuga.jpg',
    srcGameOver: 'assets/img/game-over/game-over-tortuga.jpg',
    
  },
  {
    nameClient: 'Moana',
    srcClient: 'assets/img/cliente/cliente-moana.png',
    namePizza: 'Hawaiana',
    time: 90,
    ingredients: ['sal', 'aceite', 'tomate-frito', 'pina', 'queso-rallado', 'jamon', 'oregano'],
    clues: {
      easyClues: ['Hawaiana como yo', 'El jamón le va muy bien', 'Queso pero queso rallado', 'Un toque de orégano le es Perfecto',],
      hardClues: ['Muy odiada o muy querida, no deja indiferente a nadie', 'No se te olvide la sal y el aceite', 'Se creo en Canadá pero todos piensan que es de mi tierra'],
    },
    success:'¡Por esta pizza me iría más allá del arrecife!',
    gameOver:'Yo soy Moana de Motunui, ¡y está no es mi pizza!',
    songSRC: 'assets/song/mezzo-mare.mp3',
    srcSucess: 'assets/img/success/success-moana.jpg',
    srcGameOver: 'assets/img/game-over/game-over-moana.jpg',
  },
  {
    nameClient: 'Daisy',
    srcClient: 'assets/img/cliente/cliente-daisy.png',
    namePizza: 'Margherita',
    time: 90,
    ingredients: ['sal', 'aceite', 'tomate-frito', 'tomate', 'ajo', 'mozarella', 'albahaca', 'pimienta-negra', 'oregano'],
    clues: {
      easyClues: ['Lleva tomate en sus distintas formas', 'Sus ingredientes representan los colores de la bandera italiana', 'Margherita es su nombre', 'Sin especias no me convences', 'No te la pediría nunca un vampiro'],
      hardClues: ['Es la pizza de las reinas', 'Surgió en 1889 en el Palacio de Capodimonte', 'La favorita de los niños', 'Se llama así por la reina Margherita di Savoia'],
    },
    success:'¡Perfecta! Seguro que mi amor Donald la comparte conmigo',
    gameOver:'¿Crees que me voy a comer esto? La respuesta es ¡NO!',
    songSRC: 'assets/song/funiculi.mp3',
    srcSucess: 'assets/img/success/success-daisy.jpg',
    srcGameOver: 'assets/img/game-over/game-over-daisy.jpg',
  },
  {
    nameClient: 'Mario Bros',
    srcClient: 'assets/img/cliente/cliente-mario.png',
    namePizza: 'Funghi',
    time: 80,
    ingredients: ['sal', 'aceite', 'tomate-frito', 'queso', 'setas', 'jamon', 'mozarella', 'oregano'],
    clues: {
      easyClues: ['La llaman Funghi', 'Si la comiese Toad sería un caníval', 'Queso, mozarella y jamón me gustan mogollón', 'Para terminar una pizca de oregano'],
      hardClues: ['Me recuerda a Otoño', 'Su nombre significa hongos', 'Para paladares con devoción por los sabores auténticos', 'No es 100% vegetariana', 'Su ingrediente especial me hace crecer mucho más'],
    },
    success:'¡Mamma Mia! ¡Así, cómo la hacía la mia Mamma!',
    gameOver:'¡Puagh! Bueno... lo que no te mata, te hace más pequeño',
    songSRC: 'assets/song/tarantella.mp3',
    srcSucess: 'assets/img/success/success-mario.jpg',
    srcGameOver: 'assets/img/game-over/game-over-mario.jpg',
  },
  {
    nameClient: 'Heidi',
    srcClient: 'assets/img/cliente/cliente-heidi.png',
    namePizza: 'Primavera',
    time: 80,
    ingredients: ['sal', 'aceite', 'tomate-frito', 'pimiento', 'maiz', 'queso', 'tomate', 'oregano', 'huevo-duro'],
    clues: {
      easyClues: ['Las gallinas nos ayudan con un ingrediente', 'Un ingrediente amarillo encaja en está Pizza muy bien', 'Además del orégano no se te olvide otro ingrediente verde', 'Tomate y queso no debe faltar'],
      hardClues: ['Muy tradicional', 'Evoca los colores primaverales', 'Verano, Otoño, Invierno y...', 'La sal y el aceite no debe faltar', 'Sin duda, una pizca de oregano'],
    },
    success:'¡Mmmm! ¡Qué rica! La compartiré con Clara y Pedro',
    gameOver:'¡Oh vaya! ¡Está no es mi Pizza! Sé la daré a Niebla',
    songSRC: 'assets/song/funiculi.mp3',
    srcSucess: 'assets/img/success/success-heidi.jpg',
    srcGameOver: 'assets/img/game-over/game-over-heidi.jpg',
  },
  {
    nameClient: 'Speedy Gonzales',
    srcClient: 'assets/img/cliente/cliente-gonzalez.png',
    namePizza: 'Diavola',
    time: 80,
    ingredients: ['sal', 'aceite', 'mozarella', 'salami', 'tomate-frito', 'tomate', 'albahaca', 'oregano'],
    clues: {
      easyClues: ['A veces se usa Chorizo en vez de otro ingrediente pero muy picante', 'No te olvides del sazón', 'Tomate en sus distintas formas'],
      hardClues: ['No es apta para todo el mundo', 'Nos gusta a los Méxicanos', 'El picante es su toque especial', 'Diavola es su nombre'],
    },
    success:'¡Padrísimo! La Pizza que preparaste está chingona',
    gameOver:'¡Ándale! ¡ándale! ¡Se te quemó el horno güey!',
    songSRC: 'assets/song/mezzo-mare.mp3',
    srcSucess: 'assets/img/success/success-gonzalez.jpg',
    srcGameOver: 'assets/img/game-over/game-over-gonzalez.jpg',
  },
  {
    nameClient: 'Vivaldi',
    srcClient: 'assets/img/cliente/cliente-vivaldi.png',
    namePizza: 'Cuatro Estaciones',
    time: 80,
    ingredients: ['sal', 'aceite', 'tomate-frito', 'tomate', 'mozarella', 'alcachofas', 'aceitunas-negras', 'jamon', 'setas', 'pimienta-negra'],
    clues:{
      easyClues: ['Ni pescado ni fruta por favor', 'Como buena Pizza hay que empezar con los básicos', 'Las aceitunas verdes no le pegan demasiado', 'Tomate en sus distintas formas', 'Las Alcachofas le dan un toque'],
      hardClues: ['Si estás indeciso, está es tu pizza', 'Es perfecta para cualquier estación', 'No te olvides de darle un poco de sazón', 'Tiene alimentos de las 4 estaciones'],
    },
    success:'¡Perfecto, esto es una Pizza 4 Estaciones a mi altura!',
    gameOver:'¡Esta pizza desentona! Me voy con la música a otra parte',
    songSRC: 'assets/song/tarantella.mp3',
    srcSucess: 'assets/img/success/success-vivaldi.jpg',
    srcGameOver: 'assets/img/game-over/game-over-vivaldi.jpg',
  },
  {
    nameClient: 'Paris Hilton',
    srcClient: 'assets/img/cliente/cliente-hilton.png',
    namePizza: 'Caprichosa',
    time: 60,
    ingredients: ['sal', 'aceite', 'mozarella', 'huevo-duro', 'anchoas','aceitunas-negras', 'albahaca', 'setas', 'alcachofas'],
    clues: {
      easyClues: ['Un ingrediente viene del mar', 'Que fue antes el huevo o la gallina', 'Rica, rica Mozarella'],
      hardClues: ['Pizza para gente exigente','Es una explosión de sabores', 'Es una pizza Caprichosa, como yo'],
    },
    success:'¡Perfecta! Tan perfecta como yo',
    gameOver:'No mereces un minuto más de mi tiempo ¡Adiós!',
    songSRC: 'assets/song/mezzo-mare.mp3',
    srcSucess: 'assets/img/success/success-hilton.jpg',
    srcGameOver: 'assets/img/game-over/game-over-hilton.jpg',
  },
]