// Copyright (c) 2024, Ragavan and contributors
// For license information, please see license.txt

frappe.ui.form.on("Ride Order", {
	refresh(frm) {
        if(frm.doc.status == "New" || frm.doc.status == "Rejected" ){
        frm.add_custom_button("Accept",() => {
            
            frm.set_value("status","Accepted");
            frm.save();
        },"Actions")}
        if(frm.doc.status == "New" || frm.doc.status == "Accepted" ){
            frm.add_custom_button("Reject",() => {
                
                frm.set_value("status","Rejected");
                frm.save();
            },"Actions")}
	},
    status(frm){
        console.log("Status Changed ")
    }
});
