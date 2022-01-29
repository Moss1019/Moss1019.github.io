
let original = null;

function main() {
    original = document.getElementById('content').innerHTML;
}

function reset() {
    document.getElementById('content').innerHTML = original;
}

