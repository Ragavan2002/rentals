# Copyright (c) 2024, Ragavan and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class Drive(Document):
	def before_save(self):
		self.make_fullname()
	def make_fullname(self):
		self.full_name=f"{self.first_name} {self.last_name}"
