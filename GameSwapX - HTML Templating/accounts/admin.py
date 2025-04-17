from django.contrib import admin

# Register your models here.
from . import models

admin.site.register(models.User)
admin.site.register(models.UserProfile)
admin.site.register(models.Game)
admin.site.register(models.Trade)
admin.site.register(models.EscrowPayment)
