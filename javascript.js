function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomColor() {
  $(".bottom").css("background-color", getRandomColor());
}

// RP rewards
function chooseRPBonus() {
  var randNum = Math.floor(Math.random() * (roleplayChoose.length));
  document.getElementById('updateRoll').innerHTML = roleplayChoose[randNum];
}

var roleplayChoose = ["Pokemon","Item"];

// RP rewards
function randomRoleplayItem() {
  var randNum = Math.floor(Math.random() * (roleplayItems.length));
  document.getElementById('updateItem').innerHTML = roleplayItems[randNum];
}

//Array of RP rewards
var roleplayItems = ["Additional Character Voucher","Evolution Item Voucher","13K Salon Voucher","13K Voucher","13K Voucher!","Great Ballin","Ultra Ball!","Ultra Ball.","Ultra Ball :o","A sweet Ultra Ball","Pinkan Berry","Pinkan Berry","Pinkan Berry","Pinkan Berry","Pinkan Berry","Apple","Apple","Masterball","Great Ball!","Great Ball.","Great Ball :o","A really Great Ball",];


// First BB RP bonus
function randomBBItem() {
  var randNum = Math.floor(Math.random() * (bonusItems.length));
  document.getElementById('BBItem').innerHTML = bonusItems[randNum];
}

var bonusItems = ["15 K PD","15 K PD","15 K PD","15 K PD","15 K PD","15 K PD","15 K PD","15 K PD","15 K PD","20 K PD","20 K PD","20 K PD","20 K PD","20 K PD","20 K PD","Pinkan Berry","Pinkan Berry","Pinkan Berry","Pinkan Berry","Pinkan Berry","Pinkan Berry","Pinkan Berry","Pinkan Berry","30 K Voucher","30 K Voucher","30 K Voucher","Shiny Potion","Shiny Potion","Shiny Potion","Celeb Potion","Tiny Crystal"];

// Second BB RP Bonus: look with your special eyes

function randomBB() {
  var randNum = Math.floor(Math.random() * (secondOption.length));
  document.getElementById('BBTier').innerHTML = secondOption[randNum];
}

var secondOption = ["SPECIAL","SHINY","SHINY","SHINY","REGULAR","REGULAR","REGULAR","REGULAR","REGULAR",];

function pokemonRoll() {
  var randNum = Math.floor(Math.random() * (unevolvedPokemon.length));
  document.getElementById('Pokemon').innerHTML = unevolvedPokemon[randNum];
}

// first stage pokes for rewards
var unevolvedPokemon = ["Bulbasaur","Charmander","Squirtle","Caterpie","Weedle","Pidgey","Rattata","Spearow","Ekans","Pichu","Sandshrew","Nidoran♀","Nidoran♂","Cleffa","Vulpix","Igglybuff","Zubat","Oddish","Paras","Venonat","Diglett","Meowth","Psyduck","Mankey","Growlithe","Poliwag","Abra","Machop","Bellsprout","Tentacool","Geodude","Ponyta","Slowpoke","Magnemite","Farfetch'd","Doduo","Seel","Grimer","Shellder","Gastly","Onix","Drowzee","Krabby","Voltorb","Exeggcute","Cubone","Tyrogue","Lickitung","Koffing","Rhyhorn","Happiny","Tangela","Kangaskhan","Horsea","Goldeen","Staryu","Mime Jr.","Scyther","Smoochum","Elekid","Magby","Pinsir","Tauros","Magikarp","Lapras","Ditto","Eevee","Porygon","Omanyte","Kabuto","Aerodactyl","Munchlax","Chikorita","Cyndaquil","Totodile","Sentret","Hoothoot","Ledyba","Spinarak","Chinchou","Togepi","Natu","Mareep","Azurill","Bonsly","Hoppip","Aipom","Sunkern","Yanma","Wooper","Murkrow","Misdreavus","Unown","Wynaut","Girafarig","Pineco","Dunsparce","Gligar","Snubbull","Qwilfish","Shuckle","Heracross","Sneasel","Teddiursa","Slugma","Swinub","Corsola","Remoraid","Delibird","Mantyke","Skarmory","Houndour","Phanpy","Stantler","Smeargle","Miltank","Treecko","Torchic","Mudkip","Poochyena","Zigzagoon","Wurmple","Lotad","Seedot","Taillow","Wingull","Ralts","Surskit","Shroomish","Slakoth","Nincada","Whismur","Makuhita","Nosepass","Skitty","Sableye","Mawile","Aron","Meditite","Electrike","Plusle","Minun","Volbeat","Illumise","Budew","Gulpin","Carvanha","Wailmer","Numel","Torkoal","Spoink","Spinda","Trapinch","Cacnea","Swablu","Zangoose","Seviper","Lunatone","Solrock","Barboach","Corphish","Baltoy","Lileep","Anorith","Feebas","Castform","Kecleon","Shuppet","Duskull","Tropius","Chingling","Absol","Snorunt","Spheal","Clamperl","Relicanth","Luvdisc","Bagon","Beldum","Turtwig","Chimchar","Piplup","Starly","Bidoof","Kricketot","Shinx","Cranidos","Shieldon","Burmy","Combee","Pachirisu","Buizel","Cherubi","Shellos","Drifloon","Buneary","Glameow","Stunky","Bronzor","Chatot","Spiritomb","Gible","Riolu","Hippopotas","Skorupi","Croagunk","Carnivine","Finneon","Snover","Rotom","Snivy","Tepig","Oshawott","Patrat","Lillipup","Purrloin","Pansage","Pansear","Panpour","Munna","Pidove","Blitzle","Roggenrola","Woobat","Drilbur","Audino","Timburr","Tympole","Throh","Sawk","Sewaddle","Venipede","Cottonee","Petilil","Basculin","Sandile","Darumaka","Maractus","Dwebble","Scraggy","Sigilyph","Yamask","Tirtouga","Archen","Trubbish","Zorua","Minccino","Gothita","Solosis","Ducklett","Vanillite","Deerling","Emolga","Karrablast","Foongus","Frillish","Alomomola","Joltik","Ferroseed","Klink","Tynamo","Elgyem","Litwick","Axew","Cubchoo","Cryogonal","Shelmet","Stunfisk","Mienfoo","Druddigon","Golett","Pawniard","Bouffalant","Rufflet","Vullaby","Heatmor","Durant","Deino","Larvesta",];




