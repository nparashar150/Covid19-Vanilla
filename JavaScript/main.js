const $ = require("jquery");
const axios = require('axios').default;
const moment = require('moment');
const date = new Date();
console.log("Today is " + moment(date).format('LL'));
console.log("Main.js --> attached");
const button = require('./search');
const sort = require('./sort');

const getData = () => {
    axios.get('https://api.covid19india.org/data.json')
        .then(function (response) {
            // Function which runs on Resolve
            response.data.statewise.forEach(state => {
                // console.log(state);
                let cardMain = document.querySelector('#card-list');
                let cardStateData = `       
                    <div class="card-list" style="width: 18rem;">
                        <div class="card-header stateName-text">
                            ${state.state}
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item activeCases">Active: ${state.active}</li>
                            <li class="list-group-item recovered">Recovered: ${state.recovered}</li>
                            <li class="list-group-item deaths">Deaths: ${state.deaths}</li>
                            <li class="list-group-item totalCases">Total: ${state.confirmed}</li>
                        </ul>
                    </div>`

                cardMain.innerHTML += cardStateData;
            });
            // console.log(response.data.statewise);  
        })
        .catch(function (error) {
            // Function which runs on Reject 
            console.log(error);
        })
        .then(function () {
            // Function which run irrespective of Resolve or Reject
        })
}
getData();