import {
    getLoggedInEmployee,
    logoff
} from './identityClient.js';

class northwindUserPanel extends HTMLElement {

    async connectedCallback() {

        // const employee = await getLoggedInEmployee();
        const employee = 1;

        if (!employee) {

            logoff();

        } 
        // else {

        //     logoff();
        //     // this.innerHTML = `<div class="userPanel">
        //     //     <hr />
        //     //     <button id="logout">Log out</button>
        //     // </div>
        //     // `;

        //     // const logoutButton = document.getElementById('logout');
        //     // logoutButton.addEventListener('click', async ev => {
        //     //     logoff();
        //     // });
        // }
    }
}

{/* <img src="data:image/bmp;base64,${employee.photo}"></img>
<p>${employee.displayName}</p>
<p>${employee.jobTitle}</p>
 */}

// Define the web component and insert an instance at the top of the page
customElements.define('northwind-user-panel', northwindUserPanel);
const panel = document.createElement('northwind-user-panel');
document.body.insertBefore(panel, document.body.firstChild);
