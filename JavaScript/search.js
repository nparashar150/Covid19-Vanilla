console.log('Search.js --> attached');
const search = () => {
    document.querySelector("#searchState").addEventListener("input", function () {
        let searchValue= this.value.toUpperCase();
        for (i = 0; i < document.querySelectorAll(".stateName-text").length; i++) {
            if(document.querySelectorAll(".stateName-text")[i].innerText.toUpperCase().indexOf(searchValue) > -1) {
                document.querySelectorAll("#cardStateData")[i].style.display = "";
            } else {
                document.querySelectorAll("#cardStateData")[i].style.display = "none";
            }
        }
    })
}

module.exports = search;