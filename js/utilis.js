function get(item) {
    if(document.querySelector(item)){
        return document.querySelector(item)
    } else{
        return (`${item} is not found!`)
    }
}


const parfolioArray = [
    {
        id: 1,
        image: "../assets/images/Component1.jpg"
    },
    {
        id: 2,
        image: "../assets/images/Component2.jpg"
    },
    {
        id: 3,
        image: "../assets/images/Component3.jpg"
    },
    {
        id: 4,
        image: "../assets/images/Component4.jpg"
    },
    {
        id: 5,
        image: "../assets/images/Component5.jpg"
    },
    {
        id: 6,
        image: "../assets/images/Component6.jpg"
    },
    {
        id: 7,
        image: "../assets/images/Component7.jpg"
    },
     {
        id: 8,
        image: "../assets/images/Component8.jpg"
    }
]

export {get, parfolioArray}