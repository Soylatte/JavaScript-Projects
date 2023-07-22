//Grab day of the week local computer
let date = new Date();
let dayOfWeekNumber = date.getDay();
let nameOfDay;
let quote;

switch(dayOfWeekNumber){
    case 0:
        nameOfDay = 'sunday';
        quote = 'Time to chillax!';
    break;
    case 1:
        nameOfDay = 'Monday';
        quote = 'Time to be motivate!';
    break;
    case 2:
        nameOfDay = 'Tuesday';
        quote = 'Time to be sleepy';
    break;
    case 3:
        nameOfDay = 'Wednesday';
        quote = 'Middle of the week';
        break;
        case 4:
            nameOfDay = 'Thursday';
            quote = 'tomorrow is friday';
            break;
            case 5: 
            nameOfDay = 'Friday';
            quote = 'Happy Friday';
            break;
            case 6:
            nameOfDay = 'Saturday';
            quote = 'Time to enjoy!';
            break;

}
//Display the day of the week
let weekdayDiv = document.getElementById('weekday');
weekdayDiv.innerHTML = `${nameOfDay}`;

//display quote
let quoteDiv = document.getElementById('phrase');
quote.innerHTML = `${quote}`;