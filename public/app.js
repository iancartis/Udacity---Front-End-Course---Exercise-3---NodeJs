// Personal API Key for OpenWeatherMap API
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip='
const apiKey = '&APPID=13634d27472f3340b4b9c814f243de70';


// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);
const date = new Date();
// console.log(date.getDate());
// console.log(date.getMonth() + 1);
// console.log(date.getFullYear());

const dateString = `${date.getDate()} / ${date.getMonth()+1} / ${date.getFullYear()}`;
// console.log(dateString);

/* Function called by event listener */
function performAction(e) {



    const newZip = document.getElementById('zip').value;
    const newFeeling = document.getElementById('feelings').value;



    /* Function to GET Web API Data*/
    const getTemp = async(baseURL, newZip, apiKey) => {

        const res = await fetch(baseURL + newZip + apiKey)
        const error = "Couldn't connect the API";
        try {

            const data = await res.json();
            return data;
        } catch (error) {
            console.log("error", error);
            // appropriately handle the error
        }
    }
    const getInfoUI = async() => {
        const result = await fetch("/data")
        const myData = await result.json();
        console.log(myData);
        document.getElementById('date').innerHTML = `Today is ${myData.date}`
        document.getElementById('temp').innerHTML = `The temperature is ${myData.temp}`
        document.getElementById('content').innerHTML = `Today I'm feeling ${myData.feeling}`


        // return myData;
    }

    /* Function to POST data */
    const postTemp = async(url = "", data = {}) => {

        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        });
        try {

            const data = await res.json();
            console.log(data)
            return data;
        } catch (error) {
            console.log("error", error);

            // appropriately handle the error
        }
    };
    getTemp(baseURL, newZip, apiKey)
        .then(data => {
            console.log(data.main.temp);

            postTemp('/api', {
                    date: dateString,
                    temp: data.main.temp,
                    feeling: newFeeling
                }

            )


        })
        .then(data => {
            getInfoUI()

        })
        // .then(res => console.log(res))
        // console.log(newFeeling);

    /* Function to GET Project Data */


}