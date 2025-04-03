const books = [
  {
    id: 1,
    title: 'Dom Casmurro',
    author: 'Machado de Assis',
    year: 1899,
    genre: 'Romance',
    coverUrl: 'https://images.tcdn.com.br/img/img_prod/450529/dom_casmurro_machado_de_assis_6170_1_20201211172423.jpg'
  },
  {
    id: 2,
    title: 'O Cortiço',
    author: 'Aluísio Azevedo',
    year: 1890,
    genre: 'Naturalismo',
    coverUrl: 'https://images.tcdn.com.br/img/img_prod/450529/o_cortico_aluisio_azevedo_texto_integral_capa_dura_7022_1_20201211202139.jpg'
  },
  {
    id: 3,
    title: 'Grande Sertão: Veredas',
    author: 'João Guimarães Rosa',
    year: 1956,
    genre: 'Romance',
    coverUrl: 'https://images.tcdn.com.br/img/img_prod/450529/grande_sertao_veredas_guimaraes_rosa_5906_1_20201211171622.jpg'
  },
  {
    id: 4,
    title: 'Memórias Póstumas de Brás Cubas',
    author: 'Machado de Assis',
    year: 1881,
    genre: 'Romance',
    coverUrl: 'https://images.tcdn.com.br/img/img_prod/450529/memorias_postumas_de_bras_cubas_texto_integral_capa_dura_27172_1_81cf7c54b15f64fb15f9ea94162c77ff.jpg'
  },
  {
    id: 5,
    title: 'Vidas Secas',
    author: 'Graciliano Ramos',
    year: 1938,
    genre: 'Romance',
    coverUrl: 'https://images.tcdn.com.br/img/img_prod/450529/vidas_secas_graciliano_ramos_capa_dura_7098_1_20210611203226.jpg'
  },
  {
    id: 6,
    title: 'O Guarani',
    author: 'José de Alencar',
    year: 1857,
    genre: 'Indianismo',
    coverUrl: 'https://images.tcdn.com.br/img/img_prod/450529/o_guarani_jose_de_alencar_8407_1_20201211204139.jpg'
  },
  {
    id: 7,
    title: 'Capitães da Areia',
    author: 'Jorge Amado',
    year: 1937,
    genre: 'Romance',
    coverUrl: 'https://images.tcdn.com.br/img/img_prod/450529/capitaes_da_areia_jorge_amado_3995_1_20201211162514.jpg'
  },
  {
    id: 8,
    title: 'A Hora da Estrela',
    author: 'Clarice Lispector',
    year: 1977,
    genre: 'Romance',
    coverUrl: 'https://images.tcdn.com.br/img/img_prod/450529/a_hora_da_estrela_clarice_lispector_3934_1_20201211162257.jpg'
  },
  {
    id: 9,
    title: 'Macunaíma',
    author: 'Mário de Andrade',
    year: 1928,
    genre: 'Modernismo',
    coverUrl: 'https://images.tcdn.com.br/img/img_prod/450529/macunaima_mario_de_andrade_edicao_comemorativa_90_anos_6345_1_20201211173353.jpg'
  },
  {
    id: 10,
    title: 'Quincas Borba',
    author: 'Machado de Assis',
    year: 1891,
    genre: 'Romance',
    coverUrl: 'https://images.tcdn.com.br/img/img_prod/450529/quincas_borba_machado_de_assis_texto_integral_capa_dura_7048_1_19f9d9ace5f1fd86a28b8a7485db7775.jpg'
  },
  {
    id: 11,
    title: 'Sagarana',
    author: 'João Guimarães Rosa',
    year: 1946,
    genre: 'Contos',
    coverUrl: 'https://images.tcdn.com.br/img/img_prod/450529/sagarana_guimaraes_rosa_6673_1_20201211184511.jpg'
  },
  {
    id: 12,
    title: 'Iracema',
    author: 'José de Alencar',
    year: 1865,
    genre: 'Indianismo',
    coverUrl: 'https://images.tcdn.com.br/img/img_prod/450529/iracema_jose_de_alencar_texto_integral_capa_dura_27177_1_5da5f8d7b00f88e20d31a9bf3db28a27.jpg'
  },
  {
    id: 13,
    title: 'O Primo Basílio',
    author: 'Eça de Queirós',
    year: 1878,
    genre: 'Realismo',
    coverUrl: 'https://images.tcdn.com.br/img/img_prod/450529/o_primo_basilio_eca_de_queiros_8494_1_20201211204506.jpg'
  },
  {
    id: 14,
    title: 'Senhora',
    author: 'José de Alencar',
    year: 1875,
    genre: 'Romance',
    coverUrl: 'https://images.tcdn.com.br/img/img_prod/450529/senhora_jose_de_alencar_texto_integral_capa_dura_7041_1_c2aa69d1be9a893a31ef9c92da5c0e0e.jpg'
  },
  {
    id: 15,
    title: 'Os Sertões',
    author: 'Euclides da Cunha',
    year: 1902,
    genre: 'Literatura Brasileira',
    coverUrl: 'https://images.tcdn.com.br/img/img_prod/450529/os_sertoes_euclides_da_cunha_capa_dura_6444_1_20201211174657.jpg'
  },
  {
    id: 16,
    title: 'O Alienista',
    author: 'Machado de Assis',
    year: 1882,
    genre: 'Conto',
    coverUrl: 'https://images.tcdn.com.br/img/img_prod/450529/o_alienista_machado_de_assis_6388_1_20201211173605.jpg'
  },
  {
    id: 17,
    title: 'O Quinze',
    author: 'Rachel de Queiroz',
    year: 1930,
    genre: 'Romance',
    coverUrl: 'https://images.tcdn.com.br/img/img_prod/450529/o_quinze_rachel_de_queiroz_6458_1_20201211175015.jpg'
  },
  {
    id: 18,
    title: 'Laços de Família',
    author: 'Clarice Lispector',
    year: 1960,
    genre: 'Contos',
    coverUrl: 'https://images.tcdn.com.br/img/img_prod/450529/lacos_de_familia_clarice_lispector_4048_1_20201211163142.jpg'
  },
  {
    id: 19,
    title: 'O Continente',
    author: 'Érico Veríssimo',
    year: 1949,
    genre: 'Romance Histórico',
    coverUrl: 'https://images.tcdn.com.br/img/img_prod/450529/o_tempo_e_o_vento_o_continente_vol_1_erico_verissimo_4297_1_2c46582e9bd151da02c27d4134f2c49b.jpg'
  },
  {
    id: 20,
    title: 'São Bernardo',
    author: 'Graciliano Ramos',
    year: 1934,
    genre: 'Romance',
    coverUrl: 'https://images.tcdn.com.br/img/img_prod/450529/sao_bernardo_graciliano_ramos_5897_1_20201211171538.jpg'
  },
  {
    id: 21,
    title: 'Lucíola',
    author: 'José de Alencar',
    year: 1862,
    genre: 'Romance',
    coverUrl: 'https://images.tcdn.com.br/img/img_prod/450529/luciola_jose_de_alencar_6349_1_20201211173408.jpg'
  },
  {
    id: 22,
    title: 'Triste Fim de Policarpo Quaresma',
    author: 'Lima Barreto',
    year: 1915,
    genre: 'Romance',
    coverUrl: 'https://images.tcdn.com.br/img/img_prod/450529/triste_fim_de_policarpo_quaresma_lima_barreto_4300_1_20201211163701.jpg'
  },
  {
    id: 23,
    title: 'A Paixão Segundo G.H.',
    author: 'Clarice Lispector',
    year: 1964,
    genre: 'Romance',
    coverUrl: 'https://images.tcdn.com.br/img/img_prod/450529/a_paixao_segundo_g_h_clarice_lispector_3932_1_20201211162254.jpg'
  },
  {
    id: 24,
    title: 'Primeiras Estórias',
    author: 'João Guimarães Rosa',
    year: 1962,
    genre: 'Contos',
    coverUrl: 'https://images.tcdn.com.br/img/img_prod/450529/primeiras_estorias_guimaraes_rosa_6591_1_20201211180801.jpg'
  },
  {
    id: 25,
    title: 'Gabriela, Cravo e Canela',
    author: 'Jorge Amado',
    year: 1958,
    genre: 'Romance',
    coverUrl: 'https://images.tcdn.com.br/img/img_prod/450529/gabriela_cravo_e_canela_jorge_amado_capa_dura_em_tecido_94118_1_20201218132551.jpg'
  },
  {
    id: 26,
    title: 'Helena',
    author: 'Machado de Assis',
    year: 1876,
    genre: 'Romance',
    coverUrl: 'https://images.tcdn.com.br/img/img_prod/450529/helena_machado_de_assis_texto_integral_capa_dura_7036_1_8db6deef91e6b18e4654a8149a6ca0c7.jpg'
  },
  
  {
    id: 27,
    title: 'Harry Potter e a Pedra Filosofal',
    author: 'J.K. Rowling',
    year: 1997,
    genre: 'Fantasia',
    coverUrl: 'https://images-na.ssl-images-amazon.com/images/I/81ibfYk4qmL.jpg'
  },
  {
    id: 28,
    title: 'Harry Potter e a Câmara Secreta',
    author: 'J.K. Rowling',
    year: 1998,
    genre: 'Fantasia',
    coverUrl: 'https://images-na.ssl-images-amazon.com/images/I/91HHqVTAJQL.jpg'
  },
  {
    id: 29,
    title: 'Harry Potter e o Prisioneiro de Azkaban',
    author: 'J.K. Rowling',
    year: 1999,
    genre: 'Fantasia',
    coverUrl: 'https://images-na.ssl-images-amazon.com/images/I/91M9xrP0-9L.jpg'
  },
 
  {
    id: 30,
    title: 'O Senhor dos Anéis: A Sociedade do Anel',
    author: 'J.R.R. Tolkien',
    year: 1954,
    genre: 'Fantasia',
    coverUrl: 'https://images-na.ssl-images-amazon.com/images/I/71ZLavBjpRL.jpg'
  },
  {
    id: 31,
    title: 'O Senhor dos Anéis: As Duas Torres',
    author: 'J.R.R. Tolkien',
    year: 1954,
    genre: 'Fantasia',
    coverUrl: 'https://images-na.ssl-images-amazon.com/images/I/71XB8iBML5L.jpg'
  },
  {
    id: 32,
    title: 'O Senhor dos Anéis: O Retorno do Rei',
    author: 'J.R.R. Tolkien',
    year: 1955,
    genre: 'Fantasia',
    coverUrl: 'https://images-na.ssl-images-amazon.com/images/I/71DL2FJA2iL.jpg'
  },
  {
    id: 33,
    title: 'O Hobbit',
    author: 'J.R.R. Tolkien',
    year: 1937,
    genre: 'Fantasia',
    coverUrl: 'https://images-na.ssl-images-amazon.com/images/I/91M9xrP0-9L.jpg'
  },
 
  {
    id: 34,
    title: 'As Crônicas de Nárnia: O Leão, a Feiticeira e o Guarda-Roupa',
    author: 'C.S. Lewis',
    year: 1950,
    genre: 'Fantasia',
    coverUrl: 'https://images-na.ssl-images-amazon.com/images/I/71qOaHyQFWL.jpg'
  },
  
  {
    id: 35,
    title: 'Percy Jackson e o Ladrão de Raios',
    author: 'Rick Riordan',
    year: 2005,
    genre: 'Fantasia',
    coverUrl: 'https://images-na.ssl-images-amazon.com/images/I/71QS8qhVC-L.jpg'
  },
  
  {
    id: 36,
    title: 'A Guerra dos Tronos',
    author: 'George R.R. Martin',
    year: 1996,
    genre: 'Fantasia',
    coverUrl: 'https://images-na.ssl-images-amazon.com/images/I/91wlkwerZ3L.jpg'
  },

  {
    id: 37,
    title: '1984',
    author: 'George Orwell',
    year: 1949,
    genre: 'Distopia',
    coverUrl: 'https://images-na.ssl-images-amazon.com/images/I/91SZSW8qSsL.jpg'
  },
  {
    id: 38,
    title: 'O Pequeno Príncipe',
    author: 'Antoine de Saint-Exupéry',
    year: 1943,
    genre: 'Fábula',
    coverUrl: 'https://images-na.ssl-images-amazon.com/images/I/81NF+tzC1GL.jpg'
  },
  {
    id: 39,
    title: 'Duna',
    author: 'Frank Herbert',
    year: 1965,
    genre: 'Ficção Científica',
    coverUrl: 'https://images-na.ssl-images-amazon.com/images/I/A1u+34wFerL.jpg'
  },
  {
    id: 40,
    title: 'Cem Anos de Solidão',
    author: 'Gabriel García Márquez',
    year: 1967,
    genre: 'Realismo Mágico',
    coverUrl: 'https://images-na.ssl-images-amazon.com/images/I/81G+o7OH+ML.jpg'
  },
  {
    id: 32,
    title: 'Dom Quixote',
    author: 'Miguel de Cervantes',
    year: 1605,
    genre: 'Romance',
    coverUrl: 'https://m.media-amazon.com/images/I/81wZNPF+GpL._SL1500_.jpg'
  },
  {
    id: 33,
    title: 'Os Miseráveis',
    author: 'Victor Hugo',
    year: 1862,
    genre: 'Romance Histórico',
    coverUrl: 'https://m.media-amazon.com/images/I/61Xnb9fR7pL._SL1200_.jpg'
  },
  {
    id: 34,
    title: 'Crime e Castigo',
    author: 'Fiódor Dostoiévski',
    year: 1866,
    genre: 'Romance Psicológico',
    coverUrl: 'https://m.media-amazon.com/images/I/71cy+o94QyL._SL1500_.jpg'
  },
  {
    id: 35,
    title: 'Orgulho e Preconceito',
    author: 'Jane Austen',
    year: 1813,
    genre: 'Romance',
    coverUrl: 'https://m.media-amazon.com/images/I/71Q1tPupKjL._SL1360_.jpg'
  }
];

export default books; 