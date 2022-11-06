require('dotenv').config()

const prevPage = (location,currentPage,totalPages,size) => {
    if(currentPage > 0 && currentPage < totalPages){
        return `${process.env.BASE_URL+location}?size=${size}&page=${currentPage-1}`
    }
}

const nextPage = (location,currentPage,totalPages,size) => {
    if(currentPage < (totalPages-1)){
        return `${process.env.BASE_URL+location}?size=${size}&page=${currentPage+1}`
    }
}

module.exports = { 
    prevPage,
    nextPage,
};