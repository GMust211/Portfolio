function equation(val) {
    document.getElementById("result").value += val;
}

function calculation() {
    var a = document.getElementById("result").value;
    try {
        var result = new Function('return ' + a)();
        document.getElementById("result").value = result;
    } catch (error) {
        document.getElementById("result").value = 'Error';
    }
}

function clearInput() {
    document.getElementById("result").value = "";
}
