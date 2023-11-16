
// document.write('<img src=' + nomeVar + '>' ) => criando elementos com HTML. TAG img src do HTML concatenado com a function do js

//          ** POSSIBILIDADE 1  **          //
/*CRIANDO A ARRAY COM OS ELEMENTOS E AS VARIÁVEIS
var listaFilmes = [];
//listaFilmes[0] = "https://i.pinimg.com/originals/4a/71/da/4a71daa369a5f423c82007a7428c37c3.png";
//listaFilmes[1] = "https://m.media-amazon.com/images/I/81UcD17TMrL._AC_UF1000,1000_QL80_.jpg";
//listaFilmes[2] = "https://img.elo7.com.br/product/original/26A852A/big-poster-serie-bojack-horseman-lo06-tamanho-90x60-cm-serie.jpg";*/
//*obs: aqui as variáveis são separadas por ponto e vírgula


//          **POSSIBILIDADE 2   **         //
//ATRIBUINDO A VAR DENTRO DO ARRAY
var listaFilmes = [
    "https://i.pinimg.com/originals/4a/71/da/4a71daa369a5f423c82007a7428c37c3.png",
    "https://m.media-amazon.com/images/I/81UcD17TMrL._AC_UF1000,1000_QL80_.jpg",
    "https://img.elo7.com.br/product/original/26A852A/big-poster-serie-bojack-horseman-lo06-tamanho-90x60-cm-serie.jpg",
    "https://uauposters.com.br/media/catalog/product/3/8/380020211103-uau-posters-loki-filmes.jpeg.jpg",
    "https://m.media-amazon.com/images/I/81NK3yCvMJL._AC_UF1000,1000_QL80_.jpg",
    "https://mir-s3-cdn-cf.behance.net/project_modules/hd/6e04e4104134375.5f5c010ef323a.jpg",
    "https://www.tallengestore.com/cdn/shop/products/HowIMetYourMother-ClassicTVShowPoster6_5163c6d1-e0e5-4102-9021-95298fad5b9a.jpg?v=1596545748"
];
//*obs: aqui as variáveis são separadas por vírgula

var nomeFilmes = [
    "DARK",
    "BLACK MIRROR",
    "BOJACK HORSEMAN",
    "LOKI",
    "THE OFFICE",
    "BREAKING BAD",
    "HOW I MEET YOUR MOTHER"
];

//CRIANDO O LAÇO DE REPETIÇÃO
for (var i=0; i < listaFilmes.length; i++) {
    document.write('<img src=' + listaFilmes[i] + '>');
    document.write(nomeFilmes[i]);
    }
//foi criada uma variável de índice, depois foi determinado a condição para que ela fique repetindo, depois foi determinado que a cada repetição é somado 1 ao índice

