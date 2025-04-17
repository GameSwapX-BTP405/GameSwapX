from django.views.generic import TemplateView

class HomePage(TemplateView):
    template_name = 'index.html'

class AboutPage(TemplateView):
    template_name = 'about.html'

class LoginPage(TemplateView):
    template_name = 'login.html'

class RegisterPage(TemplateView):
    template_name = 'register.html'

class MenuPage(TemplateView):
    template_name = 'menu.html'