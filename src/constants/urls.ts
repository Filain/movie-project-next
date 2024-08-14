const baseURL ='https://api.themoviedb.org/3'


const movie='/movie'
const genre='/genre'
const list ='/list'
const search='/search'
const discover='/discover'


const urls = {
    movies:`${baseURL}${discover}${movie}`,
    info:{
        byId:(id:number)=>`${baseURL}${movie}/${id}`
    },
    genre:`${baseURL}${genre}${movie}${list}`,
    search:`${baseURL}${search}${movie}`
}

export {urls}