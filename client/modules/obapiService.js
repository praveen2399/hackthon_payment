import { getFetchHeadersAuth } from "../identity/identityClient.js";

export async function getToken(invid, acctno, routno)
{
    console.log('in get Token()', invid, routno);
    const response = await fetch (`/api/rtpfundtransfer`, {
        "method": "post",
        "cache": "default",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        "body": JSON.stringify({id: invid, acctno: acctno, routno: routno})
    });
    if (response.ok) {
        const invoices = await response.json();
        return invoices;
    } else {
        const error = await response.json();
        console.log (`ERROR: ${error}`);
        throw (error);
    }    
}

export async function getInvoices(){
    console.log("in objServices");

    const response = await fetch(`/api/getinvoices`, {
        "method": "get",
        "headers": await getFetchHeadersAuth(),
        "cache": "default"
    });

    if (response.ok){
        const invoices = await response.json();
        console.log(invoices, "in objServices");
        return invoices;
    } else {
        const error = await response.json();
        console.log(`ERROR: ${error}`);
        throw (error);
    }
}

export async function getInvoiceItems(){
    console.log("in objServices");

    const response = await fetch(`/api/getinvoiceitems`, {
        "method": "get",
        "headers": await getFetchHeadersAuth(),
        "cache": "default"
    });

    if (response.ok){
        const invoices = await response.json();
        console.log(invoices, "in objServices");
        return invoices;
    } else {
        const error = await response.json();
        console.log(`ERROR: ${error}`);
        throw (error);
    }
}




// export async function getTxnDetails(transactionId){
    
// }
