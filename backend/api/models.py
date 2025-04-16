from django.db import models
from django.contrib.auth.models import User


class Game(models.Model):
    PLATFORM_CHOICES = [
        ('PS5', 'PlayStation 5'),
        ('XBX', 'Xbox Series X'),
        ('NSW', 'Nintendo Switch'),
        ('PC', 'PC'),
    ]
        
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name="games")    
    title = models.CharField(max_length=100)
    platform = models.CharField(max_length=3, choices=PLATFORM_CHOICES)
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.title} ({self.platform}) - {self.owner.username}"
