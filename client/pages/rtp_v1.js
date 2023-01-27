import {
    getToken
  } from '../modules/obapiService.js';
  
  async function displayUI() {
  
    var messageDiv = document.getElementById('message');
  
    try {

        var invid = document.getElementById("txt_tid").innerHTML;
        var acctno = document.getElementById("txt_accno").value;
        var routno = document.getElementById("txt_routno").value;
        var json_response =  await getToken(invid, acctno, routno);

        console.log(json_response);
     }
    catch (error) {            // If here, we had some other error
        messageDiv.innerText = `Error: ${JSON.stringify(error)}`;
    }
  }
  
  document.getElementById("btn-send").addEventListener("click", () => {
    displayUI();
  });