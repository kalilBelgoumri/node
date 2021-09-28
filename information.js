const infos = {
    name: "kalil",
    campus: "Wild code Lyon"
}
var cowsay = require("cowsay");

module.exports = {
    name: infos.name,
    campus: infos.campus
}

console.log(cowsay.say({
    text: `Je m'apelle ${infos.name},Et je suis a la ${infos.campus}`,
    e: "oO",
    T: "U "
}));