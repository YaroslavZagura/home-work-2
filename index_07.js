const YEAR_OF_BIRTH = prompt("Якого Ви року народження?");
const CITY_OF_RESIDENCE = prompt("В якому місті Ви проживаєте?");
const FAVORITE_SPORT = prompt("Який Ваш улюблений вид спорту?");

let todayDate = new Date(); //поточна дата
let todayYear = todayDate.getFullYear(); // поточний рік
console.log(todayYear);
let userAge = todayYear - Number(YEAR_OF_BIRTH); //рахуємо вік користувача
console.log(userAge);

const CITIES = ["Київ", "Вашингтон", "Лондон"];
const COUNTRIES = ["України", "США", "Великобританії"];
let capitalCountry;
if (CITY_OF_RESIDENCE === CITIES[0]) {
    capitalCountry = "столиці "+COUNTRIES[0]
} else if (CITY_OF_RESIDENCE === CITIES[1]) {
    capitalCountry = "столиці "+COUNTRIES[1]
} else if (CITY_OF_RESIDENCE === CITIES[2]) {
    capitalCountry = "столиці "+COUNTRIES[2]
} else {
    capitalCountry = "місті "+CITY_OF_RESIDENCE
}
console.log(capitalCountry);

const KINDS_OF_SPORT = ["футбол", "теніс", "бокс"];
const CHAMPIONS_IN_SPORTS = ["Ліонелем Мессі", "Рафаелем Надалем", "Олександром Усиком"];
let championPlayer;
if (FAVORITE_SPORT === KINDS_OF_SPORT[0]) {
    championPlayer = CHAMPIONS_IN_SPORTS[0]
} else if (FAVORITE_SPORT === KINDS_OF_SPORT[1]) {
    championPlayer = CHAMPIONS_IN_SPORTS[1]
} else if (FAVORITE_SPORT === KINDS_OF_SPORT[2]) {
    championPlayer = CHAMPIONS_IN_SPORTS[2]
} else {
    championPlayer = "чемпіоном у такому виді спорту: "+FAVORITE_SPORT
}
console.log(championPlayer);

if (YEAR_OF_BIRTH === null) {
    alert ("Шкода, що Ви не захотіли ввести свій рік народження")
} else if (CITY_OF_RESIDENCE === null) {
    alert ("Шкода, що Ви не захотіли ввести своє місто")
} else if (FAVORITE_SPORT === null) {
    alert ("Шкода, що Ви не захотіли ввести свій улюблений вид спорту")
} else {
    alert ("Ваш вік - "+userAge+" р. "+"Ви живете у "+capitalCountry+"! Круто! Хочете стати "+championPlayer+"?")
}