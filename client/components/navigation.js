import { inTeams } from '../modules/teamsHelpers.js';

const topNavLinks = [
    { "text": "Home", "url": "/index.html" },
    { "text": "Real-time Payment", "url": "/pages/invoiceitems.html"},
    { "text": "Generate Invoice", "url": "/pages/invoice.html"},
];

    
// { "text": "ACH", "url": "/pages/ach.html" },
// { "text": "Generate Checks", "url": "/pages/chk.html"},


export class topNavPanel extends HTMLElement {

    async connectedCallback() {

        if (!(await inTeams())) {
            let listItemHtml = "";
            topNavLinks.forEach(link => {
                if (window.location.href.indexOf(link.url) < 0) {
                    listItemHtml += '<li><a href="' + link.url + '">' + link.text + '</a></li>';
                } else {
                    return listItemHtml += '<li><a href="' + link.url + '" class="selected">' + link.text + '</a></li>';
                }
            });
            this.innerHTML = `
                <ul class="topnav">${listItemHtml}</ul>
            `;
        }

    }
}

// Define the web component
customElements.define('top-nav-panel', topNavPanel);
