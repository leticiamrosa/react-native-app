/*
    Do the first letter of word at toUpperCase

*/
const capitalizeFirstLetter = string => {
    return string[0].toUpperCase() + string.slice(1) 
}

export default capitalizeFirstLetter;
