from rest_framework.permissions import BasePermission

class IsAdminUser(BasePermission):
    # Allows access only to admins
    def has_permission(self, request, view):
        return bool(request.user and request.user.is_superuser)
class IsHrManagerUser(BasePermission):
    # Allows access only to hr managers 
    def has_permission(self, request, view):
        return bool(request.user and request.user.is_staff)
class IsEmployeeUser(BasePermission):
    # Allows access only to employees 
    def has_permission(self, request, view):
        return bool(request.user and not request.user.is_superuser 
                    and not request.user.is_superuser)