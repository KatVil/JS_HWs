const input = document.querySelector('#comment');
const container = document.querySelector('.cont_messages');

input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        sendComment();
    }
})

function sendComment() {
    const message = input.value;
    const finalMessage = checkSpam(message);
    showComment(finalMessage);
    input.value = '';
}

function checkSpam(str) {
   return str.replace(/xxx|viagra/ig, "***")

}

function showComment(str) {
    container.insertAdjacentHTML("beforeend", `<div class="message">${str}</div>`);
}