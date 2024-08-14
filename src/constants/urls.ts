const baseURL ='https://api.themoviedb.org/3'


const movie='/movie'
const genre='/genre'
const list ='/list'
const search='/search'
const discover='/discover'

//home page
const nowPlaying='/now_playing'
const popular='/popular'
const topRated='/top_rated'
const upcoming='/upcoming'





const urls = {
    movies:`${baseURL}${discover}${movie}`,
    info:{
        byId:(id:number)=>`${baseURL}${movie}/${id}`
    },
    genre:`${baseURL}${genre}${movie}${list}`,
    search:`${baseURL}${search}${movie}`,

    //home page
    nowPlaying:`${baseURL}${movie}${nowPlaying}`,
    popular:`${baseURL}${movie}${popular}`,
    topRated:`${baseURL}${movie}${topRated}`,
    upcoming:`${baseURL}${movie}${upcoming}`,

}

export {urls}