// Initialize Firebase
firebase.initializeApp(configs['firebaseConfig']);

// Get a reference to the database service
var database = firebase.database();

document.getElementById('title').innerText = chrome.i18n.getMessage('title');
document.getElementById('loading').innerText = chrome.i18n.getMessage('loading');

const pages = firebase.database().ref('/pages').once('value').then(function(pages) {
    const list = document.querySelector('#pages');
    const listItems = pages.val().map((page) => {
        return `<li><a href='${page.url}' target='_blank' />${page.title}</li>`;
    });
    
    if(listItems != undefined) {
        document.getElementById('loading').style.visibility = "hidden";
        list.innerHTML = listItems.join('');
    }
});
