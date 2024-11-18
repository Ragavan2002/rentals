// Copyright (c) 2024, Ragavan and contributors
// For license information, please see license.txt

frappe.ui.form.on("Vehicle1", {
	refresh(frm) {

	},
    click(frm){
        frm.get_field("html_tag").$wrapper.append("<h1>Button Clicked</h1>")
    }
});
