import frappe

def execute():
    vehicle=frappe.db.get_all('Vehicle1',pluck="name")
    for v in vehicle:
        vehicles=frappe.get_doc("Vehicle1",v)
        vehicles.make_title()
        vehicles.save()

    frappe.db.commit()