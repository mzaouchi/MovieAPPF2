import CardMovie from "./CardMovie"

const ListMovies=({movies,inpt,rate})=>{

    const x = movies.filter(movie => movie.title.toUpperCase().includes(inpt.toUpperCase()) && movie.rating >= rate).map(movie => <CardMovie key={movie.id} movie={movie}/> )
    return(
        <div className="listMovies">
            {
                x.length === 0 ? <img src='https://media.istockphoto.com/vectors/page-not-found-error-with-film-flap-design-vector-id1265221960?k=20&m=1265221960&s=170667a&w=0&h=jCITUlo5a7s5fue3XrX2WB8FOK9VnbaWeLCHB8Ovj-c='/> : x
            }
        </div>
    )
}

export default ListMovies