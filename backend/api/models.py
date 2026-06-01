from django.db import models
from django.contrib.auth.models import User
from django.core.validators import RegexValidator
from django.utils import timezone



class Note(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='notes')

    def __str__(self):
        return self.title

# ----- Companies -----
class Company(models.Model):
    name = models.CharField(max_length=100)
    about = models.TextField()
    industry = models.CharField(max_length=100)

    def __str__(self):
        return self.name
    
# ----- Departments -----
class Department(models.Model):
    company_id = models.ForeignKey(Company, on_delete=models.CASCADE, related_name='departments')
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

# ----- Employee and HR Manager -----
class Employee(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    company_id = models.ForeignKey(Company, on_delete=models.CASCADE)
    department_id = models.ForeignKey(Department, on_delete=models.CASCADE)
    phone_regex = RegexValidator( regex = r'^\d{10}$',message = "phone number should exactly be in 10 digits")
    phone = models.CharField(max_length=255, validators=[phone_regex], blank = True, null=True) 
    address = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    hire_date = models.DateField(default=timezone.now)
    status = models.BooleanField(default=True) # Active


    def __str__(self):
        return self.name
