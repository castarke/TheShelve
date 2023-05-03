const { Movie } = require("../models");

const movieData = [
    {
        title:"The Dark Knight Rises",
        genre:"Action",
        format:"Bluray",
        watched:true,
        img:"https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_.jpg",
    },
    {
        title:"Twister",
        genre:"Action",
        format:"Bluray",
        watched:true,
        img:"https://m.media-amazon.com/images/I/419yEFYK7NL._AC_UF894,1000_QL80_.jpg",
    },
    {
        title:"Driven",
        genre:"Drama",
        format:"Bluray",
        watched:true,
        img:"https://m.media-amazon.com/images/I/51E-ux4ft8L.jpg",
    },
    {
        title:"Groundhog Day",
        genre:"Comedy",
        format:"Bluray",
        watched:true,
        img:"https://m.media-amazon.com/images/I/51CN5dPdwrL._AC_UF894,1000_QL80_.jpg",
    },
    {
        title:"Catch Me If You Can",
        genre:"Drama",
        format:"Bluray",
        watched:false,
        img:"https://i.ebayimg.com/images/g/z7sAAOSwo4pYffZj/s-l1600.jpg",
    },
    {
        title:"Big Hero 6",
        genre:"Family",
        format:"Bluray",
        watched:true,
        img:"https://m.media-amazon.com/images/I/91neoLOIftL._AC_UF894,1000_QL80_.jpg",
    },
    {
        title:"O Brother, Where Art Thou?",
        genre:"Comedy",
        format:"Bluray",
        watched:true,
        img:"https://m.media-amazon.com/images/I/51aH-k+lcVL._AC_UF894,1000_QL80_.jpg",
    },
    {
        title:"John Wick",
        genre:"Action",
        format:"Bluray",
        watched:false,
        img:"https://m.media-amazon.com/images/I/81F5PF9oHhL.jpg",
    },
    {
        title:"Ferris Bueller's Day Off",
        genre:"Comedy",
        format:"Bluray",
        watched:true,
        img:"https://m.media-amazon.com/images/I/61azmcuN4mL._AC_UF894,1000_QL80_.jpg",
    },
    {
        title:"An Extremely Goofy Movie",
        genre:"Family",
        format:"DVD",
        watched:true,
        img:"https://m.media-amazon.com/images/I/51L0m3OHfJL._AC_UF894,1000_QL80_.jpg",
    },
    {
        title:"Tarzan",
        genre:"Family",
        format:"DVD",
        watched:true,
        img:"https://m.media-amazon.com/images/I/81lLuEoTMDL._AC_UF894,1000_QL80_.jpg",
    },
    {
        title:"The Shining",
        genre:"Thriller",
        format:"DVD",
        watched:false,
        img:"https://m.media-amazon.com/images/I/51g-8R5FOhL._AC_UF894,1000_QL80_.jpg",
    },
    {
        title:"The Incredibles",
        genre:"Family",
        format:"DVD",
        watched:false,
        img:"https://m.media-amazon.com/images/I/71kod5t-q9L.jpg",
    },
    {
        title:"Wind River",
        genre:"Drama",
        format:"Bluray",
        watched:true,
        img:"https://m.media-amazon.com/images/M/MV5BMTUyMjU1OTUwM15BMl5BanBnXkFtZTgwMDg1NDQ2MjI@._V1_.jpg",
    },
    {
        title:"The Meg",
        genre:"Thriller",
        format:"Bluray",
        watched:true,
        img:"https://m.media-amazon.com/images/M/MV5BMTAxMGRmODYtM2NkYS00ZGRlLWE1MWItYjI1MzIwNjQwN2RiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    },
    {
        title:"October Sky",
        genre:"Drama",
        format:"Bluray",
        watched:false,
        img:"https://m.media-amazon.com/images/I/514Sp7aks5L._AC_UF894,1000_QL80_.jpg",
    },
    {
        title:"Deep Blue Sea",
        genre:"Thriller",
        format:"DVD",
        watched:false,
        img:"https://m.media-amazon.com/images/I/51qH1I4w9YL._AC_UF894,1000_QL80_.jpg",
    },
    {
        title:"Shaun of the Dead",
        genre:"Comedy",
        format:"Bluray",
        watched:true,
        img:"https://m.media-amazon.com/images/M/MV5BMTg5Mjk2NDMtZTk0Ny00YTQ0LWIzYWEtMWI5MGQ0Mjg1OTNkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    },
    {
        title:"Secondhand Lions",
        genre:"Drama",
        format:"DVD",
        watched:false,
        img: "https://m.media-amazon.com/images/M/MV5BMTg5Mjk2NDMtZTk0Ny00YTQ0LWIzYWEtMWI5MGQ0Mjg1OTNkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    },
    {
        title:"The Breakfast Club",
        genre:"Drama",
        format:"DVD",
        watched:true,
        img:"https://m.media-amazon.com/images/I/516steLXBbL._AC_UF894,1000_QL80_.jpg",
    },
]

const seedMovie = () => Movie.bulkCreate(movieData)

module.exports = seedMovie;