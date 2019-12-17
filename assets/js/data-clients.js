let clients = [
  {
    nameClient: 'Michelangelo',
    srcClient: 'assets/img/cliente/cliente-tortuga.png',
    namePizza: 'Pepperonni',
    time: 100,
    ingredients: ['sal', 'aceite', 'tomate-frito', 'mozarella', 'salami'],
    clues: {
      easyClues: ['A falta de Pepperonni siempre es bueno el salami picante', 'El tomate frito o la salsa de tomate nunca debe faltar'],
      hardClues: ['Origen Napolitano', 'Siempre nos veías comiendo esta pizza', 'Nos encanta a las Tortugas Ninja', 'Sal y ninguna especia más'],
    },
  },
  {
    nameClient: 'Moana',
    srcClient: 'assets/img/cliente/cliente-moana.png',
    namePizza: 'Hawaiana',
    time: 90,
    ingredients: ['sal', 'aceite', 'tomate-frito', 'pina', 'queso-rallado', 'jamon', 'oregano'],
    clues: {
      easyClues: ['Hawaiana como yo', 'El jamón le va muy bien', 'Queso pero queso rallado', 'Un toque de oregano le es Perfecto',],
      hardClues: ['Se creó en Satelli Restaurant en Ontario, Canadá', 'Muy odiada o muy querida, no deja indiferente a nadie', 'No se te olvide la sal y el aceite', 'Se creo en Canadá pero todos piensan que es de mi tierra'],
    },
  },
  {
    nameClient: 'Daisy',
    srcClient: 'assets/img/cliente/cliente-daisy.png',
    namePizza: 'Margherita',
    time: 90,
    ingredients: ['sal', 'aceite', 'tomate-frito', 'tomate', 'ajo', 'mozarella', 'albahaca', 'pimienta-negra', 'oregano'],
    clues: {
      easyClues: ['Lleva tomate en sus distintas formas', 'Sus ingredientes representan los colores de la bandera italiana', 'Margherita es su nombre', 'Sin especias no me convences', 'No te la pediría nunca un vámpiro'],
      hardClues: ['Es la pizza de las reinas', 'Surgio en 1889 en el Palacio de Capodimonte', 'Se le atribuye al cocinero Raffaele Esposito', 'La favorita de los niños', 'Se llama así por la reina Margherita di Savoia'],
    },
  },
  {
    nameClient: 'Mario Bros',
    srcClient: 'assets/img/cliente/cliente-mario.png',
    namePizza: 'Funghi',
    time: 80,
    ingredients: ['sal', 'aceite', 'tomate-frito', 'queso', 'setas', 'jamon', 'mozarella', 'oregano'],
    clues: {
      easyClues: ['La llaman Funghi', 'Si la comiese Toad sería un caníval', 'Queso, mozarella y jamón me gustan mogollón', 'Y para terminar una pizca de oregano'],
      hardClues: ['Me recuerda a Otoño', 'Su nombre significa hongos', 'Para paladares con devoción por los sabores auténticos', 'No es 100% vegetariana', 'Su ingrediente especial me hace crecer mucho más'],
    },
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
  },
  {
    nameClient: 'Heidi',
    srcClient: 'assets/img/cliente/cliente-heidi.png',
    namePizza: 'Primavera',
    time: 80,
    ingredients: ['sal', 'aceite', 'tomate-frito', 'pimiento', 'maiz', 'queso', 'tomate', 'oregano', 'huevo-duro'],
    clues: {
      easyClues: ['Las gallinas nos ayudan con un ingrediente', 'Un ingrediente amarillo encaja en está Pizza muy bien', 'Además de el oregano no se te olvide otro ingrediente verde', 'Tomate y queso no debe faltar'],
      hardClues: ['Muy tradicional', 'Evoca los colores primaverales', 'Verano, Otoño, Invierno y...', 'La sal y el aceite no debe faltar', 'Tambén una pizca de oregano'],
    },
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
  },
]