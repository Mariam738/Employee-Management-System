from django.urls import path
from . import views

urlpatterns = [

    # ----- Companies -----
    path("companies/", views.CompanyListCreate.as_view(), name="company-list"), # GET, POST
    path("companies/<int:pk>/", views.CompanyDetail.as_view(), name="company-detail"), # GET, PUT, PATCH, DELETE
    
    # ----- Departments -----
    # path("companies/<int:company_id>/departments/", views.DepartmentListCreate.as_view(), name="department-list"), # GET, POST
    # path("companies/<int:company_id>/departments/<int:pk>/", views.DepartmentDetail.as_view(), name="department-detail"), # GET, PUT, PATCH, DELETE
    path("departments/", views.DepartmentListCreate.as_view(), name="department-list"), # GET, POST
    path("departmentsByCompany/<int:company_id>/", views.DepartmentByCompanyListCreate.as_view(), name="department-by-company-list"), # GET, POST
    path("departments/<int:pk>/", views.DepartmentDetail.as_view(), name="department-detail"), # GET, PUT, PATCH, DELETE

    # ----- Employee ----- (by company_id, department_id, id)
    path("employees/", views.EmployeeListCreate.as_view(), name="employee-list"), 
    path("employeesByCompany/<int:company_id>", views.EmployeeByCIDListCreate.as_view(), name="employee-by-company-list"), 
    path("employeesByDepartment/<int:department_id>/", views.EmployeeByDIDListCreate.as_view(), name="employee-by-department-list"), 
    path("employees/<int:pk>/", views.EmployeeDetail.as_view(), name="employee-detail"), # GET, POST

    # ----- Group -----
    # path('addToHr/', views.addToHrGroup, name="add-to-hr-group"),
    # path('addToEmployee/', views.addToEmployeeGroup, name="add-to-employee-group"),

    # ----- Me -----
    path('me/', views.CurrentUserView.as_view()),

]