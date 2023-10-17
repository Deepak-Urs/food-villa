export const IMG_CDN_URL = ""


export const restaurantList = [{
    name: 'Burger King',
    id: 1,
    image: IMG_CDN_URL,
    cuisines: ["Burger", "American"],
    rating: "4.5"
},
{
    name: 'McDonalds',
    id: 2,
    image: IMG_CDN_URL,
    cuisines: ["Burger", "American"],
    rating: "4.4"
},
{
    name: 'Dominos',
    id: 3,
    image: IMG_CDN_URL,
    cuisines: ["Pizza", "Italian"],
    rating: "4.4"
},
{
    name: 'Chipotle',
    id: 4,
    image: IMG_CDN_URL,
    cuisines: ["Healthy foods", "Mexican"],
    rating: "4.5"
}]

// Swiggy API to get Restaurant data with corsproxy
export const swiggy_api_URL =
  "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING";

//export const shimmer_card_unit = 20;