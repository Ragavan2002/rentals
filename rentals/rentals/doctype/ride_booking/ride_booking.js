// Copyright (c) 2024, Ragavan and contributors
// For license information, please see license.txt

frappe.ui.form.on("Ride Booking", {
	refresh(frm) {
        

	},
    rate(frm){
        frm.trigger("update_func")
    },
    update_func(frm){
        let d_total = 0;
        for(let item of frm.doc.items){
            d_total += item.distance}
        const amount= frm.doc.rate * d_total

        frm.set_value("total_amount",amount)
    }


});

frappe.ui.form.on('Ride Booking Item', {
	refresh(frm) {
		// your code here
	},
    distance(frm,cdt,cdn){
        frm.trigger("update_func")
        
    },
    items_remove(frm){
        frm.trigger("update_func")
    },
    items_add(frm){
        frm.trigger("update_func")
    }
})