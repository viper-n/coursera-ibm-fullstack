function compute() {
    var principal = parseInt(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);
    var interest = principal * years * rate / 100;
    var amount = parseInt(principal) + parseFloat(interest);
    var result = document.getElementById("result");
    var year = new Date().getFullYear() + parseInt(years);

    if (principal <= 0) {
        alert("Please enter a positive number!"); // take the user back to the "Principal" input box
        document.getElementById("principal").focus();
    } else {
        document.getElementById("result").innerHTML = `If you deposit
    $${principal},<br>
    at an interest rate of $${rate}%.<br>
    You will receive an amount of $${amount},<br>
    in the year ${year}<br></br>`;
    }
}

// update rate span when changing range slider
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}