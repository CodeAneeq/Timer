const endDate = "27 February 2024 7:00 PM"
const inputs = document.querySelectorAll("input")

document.getElementById("end-date").innerText = "Website Launch On " + endDate;

function clock() {
    const end = new Date(endDate);
    const now = new Date()
    const diff = (end - now) / 1000;

    if (diff < 0) return;

    // convert into days
    inputs[0].value = (Math.floor(diff/3600/24));

    // convert into hours
    inputs[1].value = Math.floor(diff / 3600) % 24;
    
    //  convert into minutes
    inputs[2].value = (Math.floor(diff / 60) % 60)

    // convert into seconds
    inputs[3].value = (Math.floor(diff) % 60);
}

setInterval(() => {
    clock()
}, 1000)