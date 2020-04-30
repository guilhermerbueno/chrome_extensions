const INTERVAL_TO_REFRESH = 4; //hours

// loading texts from i18n
document.getElementById('title').innerText = chrome.i18n.getMessage('title');
document.getElementById('loading').innerText = chrome.i18n.getMessage('loading');

document.getElementById('filter').addEventListener('keyup', filter)

load();
var pages;

async function load() {
    const lastUpdate = await getLastUpdate();
    pages = await getPages();
    const refresh = shouldRefresh(lastUpdate);
    
    if(pages && !refresh) {
        populateList(pages);
    } else {
        loadFromFirebase();
    }
}

function loadFromFirebase() {
    // Initialize Firebase
    firebase.initializeApp(configs['firebaseConfig']);
    
    firebase.database().ref('/pages').once('value').then(function(result) {
        pages = result.val();
        populateList(pages);

        const datetime = new Date().getTime();
        savePages(pages);
        saveLastUpdate(datetime);
    });    
}

function populateList(pages) {
    const list = document.querySelector('#pages');
    pages.sort((a, b) => {
        if (a.tag > b.tag)
          return -1;
        if (a.tag < b.tag)
          return 1;
        return 0;
    });
    const listItems = pages.map((page) => {
        return `<li><a href='${page.url}' target='_blank' />${page.title} - ${page.tag.toUpperCase()}</li>`;
    });
    
    if(listItems != undefined) {
        document.getElementById('loading').style.visibility = "hidden";
        list.innerHTML = listItems.join('');
    }
}

function shouldRefresh(lastUpdate) {
    const hours = hoursBetween(lastUpdate, new Date().getTime());
    return hours > INTERVAL_TO_REFRESH;
}

function filter() {
    const filterTerm = document.getElementById('filter').value;
    var filteredPages = pages.filter((page) => page.title.toUpperCase().includes(filterTerm.toUpperCase())
        || page.tag.toUpperCase().includes(filterTerm.toUpperCase()));
    populateList(filteredPages);
}