console.info("my first js file");

var name = "Florin";
var employed = true;

console.warn("employed");
console.warn(employed);

console.info("Name:");
console.info(name);

name = "Florin";
console.info("Name:");
console.info(name);

function getWelcomeMsg() {
    console.log("inside wellcome message");
    return "Wellcome to my site!";
}

function getColor(){
    var date = new Date ();
    console.log(date.getMinutes());
    if (date.getMinutes() > 19) {
        return "green"
    }
    return "red";
}

var wellcome = getWelcomeMsg();
console.log("after wellcome message");

console.info(wellcome);

var summaryElement = document.getElementById("summary");
console.info("summaryElement", summaryElement);
var color = getColor();
summaryElement.style.color = color;


//first example 
function hideHomePage() {
    var el = document.getElementById('home-page');
    el.style.display = 'none';
}
function showSkillsPage() {
    document.getElementById('skills-page').style.display = 'block';
}
function clickOnSkills() {
    //hideHomePage();
    //showSkillsPage();
    hidePage('home-page');
    hidePage('languages-page');
    hidePage('about-page');
    showPage('skills-page');
}
//first example - end

function hidePage(page) {
    var el = document.getElementById(page);
    el.style.display = 'none';
}
function showPage(page) {
    document.getElementById(page).style.display = 'block';
}