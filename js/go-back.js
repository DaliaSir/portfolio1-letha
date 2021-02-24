const goBackButton = document.querySelector("#go-back");

goBackButton.onclick = goBack;

function goBack() {
    window.history.back();
}
