document.getElementById('message-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var messageInput = document.getElementById('message-input');
    var message = messageInput.value.trim();
    if (message !== '') {
        sendMessage(message);
        messageInput.value = '';
    }
});

function sendMessage(message) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/send', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('message=' + encodeURIComponent(message));
}
