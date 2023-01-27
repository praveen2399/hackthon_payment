import {
    getInvoiceItems
} from '../modules/obapiService.js';

async function displayUI() {

    // const displayElement = document.getElementById('content');
    const invoicesElement = document.getElementById('inv-table');
    const payElement = document.getElementById('pay-panel');
    const messageDiv = document.getElementById('message');
    const statusElement = document.getElementById('txt_status');
    const btidElement = document.getElementById('txt_btid');
    
    try {
        const invoices = await getInvoiceItems();
        var grd_total = 0;
        var inv_id = '';
        var vend_inv = '';
        var inv_dt = '';
        var vend_nm = '';
        var inv_status = '';
        var bank_trid = '';
        invoices.forEach(invoice => {
            const invoiceRow = document.createElement('tr');
            invoiceRow.innerHTML = `<tr>  
            <td>${invoice.item_description}</td>
            <td>$ ${invoice.price_per_unit}</td>
            <td>${invoice.no_of_units}</td>
            <td>$ ${invoice.total_cost}</td>`;

            inv_id = (invoice.invoice_no);
            vend_inv = (invoice.vendor_invoice_no);
            inv_dt = (invoice.invoice_dt);
            vend_nm = (invoice.vendor_name);
            inv_status = (invoice.invoice_status);
            grd_total += (invoice.total_cost);
            bank_trid = (invoice.bank_transaction_id);
            
            invoiceRow.innerHTML += `</tr>`;            
            invoicesElement.append(invoiceRow);
        });

        statusElement.innerHTML = `${inv_status}`;
        btidElement.innerHTML = `${bank_trid}`;
        if ((inv_status) == 'UnPaid'){
            payElement.innerHTML = `<button class='btn-pay' id='btn-pay' onclick='pay(\"${inv_id}",\"${inv_dt}",\"${vend_nm}",${grd_total},\"${inv_status}",\"${bank_trid}")'>Click To Pay</button>`;
        }
    }
    catch (error) {            // If here, we had some other error
        messageDiv.innerText = `Error: ${JSON.stringify(error)}`;
    }
}

displayUI();
