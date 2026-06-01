from rest_framework.permissions import BasePermission, SAFE_METHODS

class IsAdminUser(BasePermission):
    # Allows access only to admins
    def has_permission(self, request, view):
        return bool(request.user and request.user.is_superuser)

# Admin only CRUD, Others Read
class IsAdminOrReadOnlyOther(BasePermission):
    # Allows access to admins or read-only access for others
    def has_permission(self, request, view):
        if request.method in SAFE_METHODS:
            return True
        return bool(request.user and request.user.is_superuser)

# Admin and HR  CRUD, Others Read    
class IsAdminHROrReadOnlyOther(BasePermission):
    # Allows access to admins or read-only access for others
    def has_permission(self, request, view):
        if request.method in SAFE_METHODS:
            return True
        return bool(request.user and ( request.user.is_superuser or request.user.is_staff)) 

class IsHrManagerUser(BasePermission):
    # Allows access only to hr managers 
    def has_permission(self, request, view):
        return bool(request.user and request.user.is_staff)
class IsEmployeeUser(BasePermission):
    # Allows access only to employees 
    def has_permission(self, request, view):
        return bool(request.user and not request.user.is_superuser 
                    and not request.user.is_superuser)