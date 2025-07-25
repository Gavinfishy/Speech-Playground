export const KEYWORDS = {
    COLORS: [
        'aqua', /*'aquamarine',*/ 'azure', 'beige', 'bisque', 'black', 'blue', 'brown', 'chocolate', 'coral', 'crimson', 'cyan', 
        'fuchsia', /*'ghostwhite',*/ 'gold', 'goldenrod', 'gray', 'green', 'indigo', 'ivory', 'khaki', 'lavender', 'lime', 'linen', 
        'magenta', 'maroon', 'moccasin', 'navy', 'olive', 'orange', 'orchid','peru', 'pink', 'plum', 'purple', 'red', 'salmon', 
        'sienna', 'silver', 'snow', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'white', 'yellow'
    ],

    COMMANDS: [
        'close', 'color', 'help', 'navigate', 'record', 'reset', 'search', 'stop'
    ],

    PAGES: [
        'home', 'transcribe'
    ],

    SEARCH_FIELDS: [
        'birthday', 'city', 'first', 'last', 'middle', 'state'
    ],

    TEXTBOXES: [
        'birthday', 'city', 'first', 'last', 'middle', 'notes', 'state', 'street', 'zip'
    ],
};

export const MONTHS: Record<string, string> = {
    january: "01", one: "01", "1": "01",
    february: "02", two: "02", "2": "02",
    march: "03", three: "03", "3": "03",
    april: "04", four: "04", "4": "04",
    may: "05", five: "05", "5": "05",
    june: "06", six: "06", "6": "06",
    july: "07", seven: "07", "7": "07",
    august: "08", eight: "08", "8": "08",
    september: "09", nine: "09", "9": "09",
    october: "10", ten: "10", "10": "10",
    november: "11", eleven: "11", "11": "11",
    december: "12", twelve: "12", "12": "12"
};

export const ORDINAL_DAYS: Record<string, string> = {
    first: "01", "1st": "01", one: "01", "1": "01",
    second: "02", "2nd": "02", two: "02", "2": "02",
    third: "03", "3rd": "03", three: "03", "3": "03",
    fourth: "04", "4th": "04", four: "04", "4": "04",
    fifth: "05", "5th": "05", five: "05", "5": "05",
    sixth: "06", "6th": "06", six: "06", "6": "06",
    seventh: "07", "7th": "07", seven: "07", "7": "07",
    eighth: "08", "8th": "08", eight: "08", "8": "08",
    ninth: "09", "9th": "09", nine: "09", "9": "09",
    tenth: "10", "10th": "10", ten: "10", "10": "10",
    eleventh: "11", "11th": "11", eleven: "11", "11": "11",
    twelfth: "12", "12th": "12", twelve: "12", "12": "12",
    thirteenth: "13", "13th": "13", thirteen: "13", "13": "13",
    fourteenth: "14", "14th": "14", fourteen: "14", "14": "14",
    fifteenth: "15", "15th": "15", fifteen: "15", "15": "15",
    sixteenth: "16", "16th": "16", sixteen: "16", "16": "16",
    seventeenth: "17", "17th": "17", seventeen: "17", "17": "17",
    eighteenth: "18", "18th": "18", eighteen: "18", "18": "18",
    nineteenth: "19", "19th": "19", nineteen: "19", "19": "19",
    twentieth: "20", "20th": "20", twenty: "20", "20": "20",
    "twenty first": "21", "21st": "21", "twenty one": "21", "21": "21",
    "twenty second": "22", "22nd": "22", "twenty two": "22", "22": "22",
    "twenty third": "23", "23rd": "23", "twenty three": "23", "23": "23",
    "twenty fourth": "24", "24th": "24", "twenty four": "24", "24": "24",
    "twenty fifth": "25", "25th": "25", "twenty five": "25", "25": "25",
    "twenty sixth": "26", "26th": "26", "twenty six": "26", "26": "26",
    "twenty seventh": "27", "27th": "27", "twenty seven": "27", "27": "27",
    "twenty eighth": "28", "28th": "28", "twenty eight": "28", "28": "28",
    "twenty ninth": "29", "29th": "29", "twenty nine": "29", "29": "29",
    thirtieth: "30", "30th": "30", thirty: "30", "30": "30",
    "thirty first": "31", "31st": "31", "thirty one": "31", "31": "31"
};



export const DUMMY_USERS = [
    { birthday: '12-12-1999', firstName: 'Lia', lastName: 'Noah', middleName: 'Oli', state: 'KY', city: 'Louisville', address: '6007 Applegate Lane', zip: '40219' },
    { birthday: '01-01-2001', firstName: 'Liam', lastName: 'Noah', middleName: 'Oliver', state: 'KY', city: 'Louisville', address: '6007 Applegate Lane', zip: '40219' },
    { birthday: '02-02-2002', firstName: 'Theodore', lastName: 'James', middleName: 'Henry', state: 'CA', city: 'Grass Valley', address: '560 Penstock Drive', zip: '95945' },
    { birthday: '03-03-2003', firstName: 'Olivia', lastName: 'Emma', middleName: 'Amelia', state: 'CT', city: 'Manchester', address: '150 Carter Street', zip: '06040' },
    { birthday: '04-04-2004', firstName: 'Charlotte', lastName: 'Mia', middleName: 'Sophia', state: 'VT', city: 'Essex', address: '18 Densmore Drive', zip: '05452' },
    { birthday: '05-05-2005', firstName: 'Mateo', lastName: 'Elijah', middleName: 'Lucas', state: 'AZ', city: 'Glendale', address: '5601 West Crocus Drive', zip: '85306' },
    { birthday: '06-06-2006', firstName: 'Ava', lastName: 'Isabella', middleName: 'Grace', state: 'TX', city: 'San Antonio', address: '432 Sunset Ridge', zip: '78233' },
    { birthday: '07-07-2007', firstName: 'Sebastian', lastName: 'Daniel', middleName: 'Alexander', state: 'FL', city: 'Sarasota', address: '1029 Bay Shore Road', zip: '34234' },
    { birthday: '08-08-2008', firstName: 'Emma', lastName: 'Avery', middleName: 'Harper', state: 'OH', city: 'Dayton', address: '88 Hickory Lane', zip: '45424' },
    { birthday: '09-09-2009', firstName: 'Ethan', lastName: 'Jackson', middleName: 'David', state: 'CO', city: 'Aurora', address: '725 Holly Street', zip: '80010' },
    { birthday: '10-10-2010', firstName: 'Isla', lastName: 'Scarlett', middleName: 'Luna', state: 'NC', city: 'Raleigh', address: '58 Meadowview Drive', zip: '27604' },
    { birthday: '11-11-2011', firstName: 'Benjamin', lastName: 'Wyatt', middleName: 'Julian', state: 'OR', city: 'Eugene', address: '2300 Riverview St', zip: '97401' },
    { birthday: '12-12-2012', firstName: 'Sophia', lastName: 'Zoe', middleName: 'Penelope', state: 'WA', city: 'Spokane', address: '814 Birchwood Lane', zip: '99208' },
    { birthday: '01-13-2013', firstName: 'Logan', lastName: 'Carter', middleName: 'Jaxon', state: 'IL', city: 'Peoria', address: '47 Maplewood Drive', zip: '61604' },
    { birthday: '02-14-2014', firstName: 'Aria', lastName: 'Layla', middleName: 'Violet', state: 'WI', city: 'Madison', address: '317 Hillcrest Avenue', zip: '53705' },
    { birthday: '03-15-2015', firstName: 'Jacob', lastName: 'Levi', middleName: 'Ryan', state: 'GA', city: 'Augusta', address: '1100 Whispering Pines', zip: '30909' },
    { birthday: '04-16-2016', firstName: 'Camila', lastName: 'Eleanor', middleName: 'Hazel', state: 'PA', city: 'Erie', address: '2600 Elmwood Street', zip: '16508' },
    { birthday: '05-17-2017', firstName: 'William', lastName: 'Luke', middleName: 'Nathan', state: 'MO', city: 'Columbia', address: '901 Prairie View Road', zip: '65201' },
    { birthday: '06-18-2018', firstName: 'Luna', lastName: 'Chloe', middleName: 'Stella', state: 'NE', city: 'Lincoln', address: '112 Cardinal Lane', zip: '68502' },
    { birthday: '07-19-2019', firstName: 'Jameson', lastName: 'Grayson', middleName: 'Colton', state: 'MN', city: 'Minnetonka', address: '152 Lakeview Terrace', zip: '55345' },
    { birthday: '08-20-2020', firstName: 'Nora', lastName: 'Brooklyn', middleName: 'Sadie', state: 'IN', city: 'Bloomington', address: '79 Walnut Street', zip: '47401' },
    { birthday: '01-21-2000', firstName: 'Grace', lastName: 'Lily', middleName: 'Claire', state: 'OH', city: 'Cincinnati', address: '512 Bluebird Lane', zip: '45245' },
    { birthday: '02-22-2001', firstName: 'Jackson', lastName: 'Miles', middleName: 'Eli', state: 'TX', city: 'Dallas', address: '310 Evergreen Ave', zip: '75238' },
    { birthday: '03-23-2002', firstName: 'Ella', lastName: 'Nova', middleName: 'Mae', state: 'FL', city: 'Tampa', address: '109 Pine Ridge Drive', zip: '33610' },
    { birthday: '04-24-2003', firstName: 'David', lastName: 'Ezra', middleName: 'Joseph', state: 'KY', city: 'Lexington', address: '44 Cherry Blossom Way', zip: '40517' },
    { birthday: '05-25-2004', firstName: 'Scarlett', lastName: 'Paisley', middleName: 'June', state: 'CA', city: 'Sacramento', address: '209 Maple Court', zip: '95825' },
    { birthday: '06-26-2005', firstName: 'Henry', lastName: 'Asher', middleName: 'Caleb', state: 'NC', city: 'Charlotte', address: '71 Sunset Cove', zip: '28269' },
    { birthday: '07-27-2006', firstName: 'Zoe', lastName: 'Lucy', middleName: 'Ivy', state: 'PA', city: 'Pittsburgh', address: '399 Valley View Drive', zip: '15212' },
    { birthday: '08-28-2007', firstName: 'Levi', lastName: 'Isaac', middleName: 'Micah', state: 'WA', city: 'Tacoma', address: '220 Ashwood Place', zip: '98444' },
    { birthday: '09-29-2008', firstName: 'Chloe', lastName: 'Anna', middleName: 'Rose', state: 'AZ', city: 'Mesa', address: '198 Juniper Street', zip: '85204' },
    { birthday: '10-30-2009', firstName: 'Daniel', lastName: 'Jayden', middleName: 'Robert', state: 'IN', city: 'Fort Wayne', address: '625 Forest Hill Dr', zip: '46815' },
];

export const US_STATES = [
    { name: 'Alabama', abbreviation: 'AL' },
    { name: 'Alaska', abbreviation: 'AK' },
    { name: 'Arizona', abbreviation: 'AZ' },
    { name: 'Arkansas', abbreviation: 'AR' },
    { name: 'California', abbreviation: 'CA' },
    { name: 'Colorado', abbreviation: 'CO' },
    { name: 'Connecticut', abbreviation: 'CT' },
    { name: 'Delaware', abbreviation: 'DE' },
    { name: 'Florida', abbreviation: 'FL' },
    { name: 'Georgia', abbreviation: 'GA' },
    { name: 'Hawaii', abbreviation: 'HI' },
    { name: 'Idaho', abbreviation: 'ID' },
    { name: 'Illinois', abbreviation: 'IL' },
    { name: 'Indiana', abbreviation: 'IN' },
    { name: 'Iowa', abbreviation: 'IA' },
    { name: 'Kansas', abbreviation: 'KS' },
    { name: 'Kentucky', abbreviation: 'KY' },
    { name: 'Louisiana', abbreviation: 'LA' },
    { name: 'Maine', abbreviation: 'ME' },
    { name: 'Maryland', abbreviation: 'MD' },
    { name: 'Massachusetts', abbreviation: 'MA' },
    { name: 'Michigan', abbreviation: 'MI' },
    { name: 'Minnesota', abbreviation: 'MN' },
    { name: 'Mississippi', abbreviation: 'MS' },
    { name: 'Missouri', abbreviation: 'MO' },
    { name: 'Montana', abbreviation: 'MT' },
    { name: 'Nebraska', abbreviation: 'NE' },
    { name: 'Nevada', abbreviation: 'NV' },
    { name: 'New Hampshire', abbreviation: 'NH' },
    { name: 'New Jersey', abbreviation: 'NJ' },
    { name: 'New Mexico', abbreviation: 'NM' },
    { name: 'New York', abbreviation: 'NY' },
    { name: 'North Carolina', abbreviation: 'NC' },
    { name: 'North Dakota', abbreviation: 'ND' },
    { name: 'Ohio', abbreviation: 'OH' },
    { name: 'Oklahoma', abbreviation: 'OK' },
    { name: 'Oregon', abbreviation: 'OR' },
    { name: 'Pennsylvania', abbreviation: 'PA' },
    { name: 'Rhode Island', abbreviation: 'RI' },
    { name: 'South Carolina', abbreviation: 'SC' },
    { name: 'South Dakota', abbreviation: 'SD' },
    { name: 'Tennessee', abbreviation: 'TN' },
    { name: 'Texas', abbreviation: 'TX' },
    { name: 'Utah', abbreviation: 'UT' },
    { name: 'Vermont', abbreviation: 'VT' },
    { name: 'Virginia', abbreviation: 'VA' },
    { name: 'Washington', abbreviation: 'WA' },
    { name: 'West Virginia', abbreviation: 'WV' },
    { name: 'Wisconsin', abbreviation: 'WI' },
    { name: 'Wyoming', abbreviation: 'WY' }
];
