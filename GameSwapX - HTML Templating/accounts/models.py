from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    email = models.EmailField(unique=True)
    is_email_verified = models.BooleanField(default=False)
    date_joined = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.username

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    location = models.CharField(max_length=100)
    bio = models.TextField(blank=True)
    rating = models.DecimalField(max_digits=3, decimal_places=2, default=5.0)
    
    def __str__(self):
        return self.user.username

class Game(models.Model):
    PLATFORM_CHOICES = [
        ('PS5', 'PlayStation 5'),
        ('XBX', 'Xbox Series X'),
        ('NSW', 'Nintendo Switch'),
        ('PC', 'PC'),
    ]

    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='games')
    title = models.CharField(max_length=100)
    platform = models.CharField(max_length=3, choices=PLATFORM_CHOICES)
    condition = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to='game_images/', blank=True)
    is_available = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.title} ({self.platform}) - {self.owner.username}"

class Trade(models.Model):
    initiator = models.ForeignKey(User, on_delete=models.CASCADE, related_name='initiated_trades')
    responder = models.ForeignKey(User, on_delete=models.CASCADE, related_name='received_trades')
    offered_game = models.ForeignKey(Game, on_delete=models.CASCADE, related_name='offered_in_trades')
    requested_game = models.ForeignKey(Game, on_delete=models.CASCADE, related_name='requested_in_trades')
    is_accepted = models.BooleanField(default=False)
    is_completed = models.BooleanField(default=False)
    initiated_at = models.DateTimeField(auto_now_add=True)
    completed_at = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return f"{self.initiator} ↔ {self.responder}"

class EscrowPayment(models.Model):
    trade = models.OneToOneField(Trade, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=8, decimal_places=2)
    is_paid = models.BooleanField(default=False)
    is_released = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Escrow for Trade {self.trade.id}"
