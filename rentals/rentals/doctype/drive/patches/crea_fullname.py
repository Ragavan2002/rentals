import frappe

def execute():
    driver=frappe.db.get_all('Drive',pluck="name")
    for v in driver:
        vehicles=frappe.get_doc("Drive",v)
        vehicles.make_fullname()
        vehicles.save()

    frappe.db.commit()