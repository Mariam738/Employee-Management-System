from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import *
from rest_framework.permissions import AllowAny, IsAuthenticated,  DjangoModelPermissions
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Note, Company
from django.contrib.auth.models import Group
from .permissions import IsAdminUser, IsEmployeeUser, IsHrManagerUser

# ----- Me -----
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView

class CurrentUserView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        # print("user here: " + request.user)
        if(request.user.is_superuser):
            role = 'admin'
        elif(request.user.is_staff):
            role = 'hr'
        else:
            role = 'employee'
        return Response({
            "id": request.user.id,
            "username": request.user.username,
            "email": request.user.email,
            "role": role
        })


# ----- Groups -----
def addToHrGroup(request):
    group = Group.objects.get(name="Hr")
    request.user.groups.add(group)
    return 

def addToEmployeeGroup(request):
    group = Group.objects.get(name="Employee")
    request.user.groups.add(group)
    return 


# ----- Company -----
class CompanyListCreate(generics.ListCreateAPIView):
    serializer_class = CompanySerializer
    permission_classes = [IsAuthenticated, IsAdminUser] 
    queryset = Company.objects.all()


class CompanyDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CompanySerializer
    permission_classes = [AllowAny] # add permission group admin
    queryset = Company.objects.all()

# Department
class DepartmentListCreate(generics.ListCreateAPIView):
    serializer_class = DepartmentSerializer
    permission_classes = [AllowAny] # add permission group admin
    queryset = Department.objects.all()
    # def get_queryset(self):
    #     company_id = self.kwargs.get("company_id")
    #     return Department.objects.filter(company_id=company_id)


class DepartmentDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = DepartmentSerializer
    permission_classes = [AllowAny] # add permission group admin
    queryset = Department.objects.all()

    # def get_queryset(self):
    #     company_id = self.kwargs.get("company_id")
    #     return Department.objects.filter(company_id=company_id)

# Employee
class EmployeeByCIDListCreate(generics.ListCreateAPIView):
    serializer_class = EmployeeSerializer
    permission_classes = [AllowAny] # add permission group admin
    
    def get_queryset(self):
        company_id = self.kwargs.get("company_id")
        return Employee.objects.filter(company_id=company_id)
    
class EmployeeByDIDListCreate(generics.ListCreateAPIView):
    serializer_class = EmployeeSerializer
    permission_classes = [AllowAny] # add permission group admin
    
    def get_queryset(self):
        department_id = self.kwargs.get("department_id")
        return Employee.objects.filter(department_id=department_id)

class EmployeeDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = EmployeeSerializer
    permission_classes = [IsAuthenticated] # add permission group admin
    queryset = Employee.objects.all()
    # def get_queryset(self):
    #     id = self.kwargs.get("id")
    #     return Employee.objects.filter(user=id)
    
class EmployeeListCreate(generics.ListCreateAPIView):
    serializer_class = EmployeeSerializer
    permission_classes = [AllowAny] # add permission group admin
    queryset = Employee.objects.all()
    


class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = UserSerializer
    permission_classes = [AllowAny] # add permission group admin
    queryset = User.objects.all()