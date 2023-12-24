// Date features
let currentDate = document.getElementById('currentDate');
let dayType = document.getElementById('dayType');

let options = { weekday: 'long', month: 'long', day: 'numeric' };
let formattedDate = new Date().toLocaleDateString('en-US', options);

// Add the ordinal suffix for the day of the month
let dayOfMonth = new Date().getDate();
let ordinalSuffix = getOrdinalSuffix(dayOfMonth);
formattedDate += ordinalSuffix;

currentDate.textContent = formattedDate;

// Set the day type based on the day of the week
let dayOfWeek = new Date().getDay();
switch (dayOfWeek) {
    case 0: // Sunday
    case 1: // Monday
    case 3: // Wednesday
    case 5: // Friday
        dayType.textContent = 'truck';
        break;
    case 2: // Tuesday
    case 4: // Thursday
    case 6: // Saturday
        dayType.textContent = 'backstock';
        break;
    default:
        dayType.textContent = 'unknown day';
}

// Function to get the ordinal suffix for the day of the month
function getOrdinalSuffix(number) {
    if (number >= 11 && number <= 13) {
        return 'th';
    }
    const lastDigit = number % 10;
    switch (lastDigit) {
        case 1:
            return 'st';
        case 2:
            return 'nd';
        case 3:
            return 'rd';
        default:
            return 'th';
    }
}
