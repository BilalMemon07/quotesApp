const quotes = document.getElementById('quotes')
const author = document.getElementById('author')

let realData = "";
let quotData = "";

const tweetNow = () => {
    let tweetPost = `https://twitter.com/intent/tweet?text=${quotData.text}`;
    window.open(tweetPost)
}

const getNewquotes = () => {
    let rnum = Math.floor(Math.random() * 30);
    console.log(realData[rnum])
    const quotData = realData[rnum]
    quotes.innerText = `${quotData.text}`
    quotData.author == null
        ? (author.innerText = 'Unkwon')
        : author.innerText = `Author =>  ${quotData.author}`



    //  author.innerText= realData[rnum].author
}



const getQuotes = async () => {
    const api = ' https://type.fit/api/quotes';
    try {
        let data = await fetch(api)
        realData = await data.json()
        getNewquotes()
    } catch (error) {
        const errorquotes = `404 Error ${error} Connection Error Please check Your internet `
        document.write(errorquotes)
    }
}

newq = () => {
    getQuotes()
}
