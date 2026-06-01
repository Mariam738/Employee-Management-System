# Employee Management Systme
## Architecture design
### Approach and Implmentation Details
* Local Storage ➡️ JWT Token + User's Role
* RBAC 
  * Backend using **permission groups**
  * <img width="1152" height="545" alt="image" src="https://github.com/user-attachments/assets/5d5454a5-7f3d-4f92-9149-5919f71b8d34" />

  * Frontend using **role based protected routes**
  *  <img width="1050" height="575" alt="image" src="https://github.com/user-attachments/assets/51552e64-2a15-44b8-aa6f-973731996499" />
### Architecture
* <img width="891" height="335" alt="image" src="https://github.com/user-attachments/assets/e3e549a6-8a36-46b7-b5e0-dbea16a8e4b0" />
### ERD
* <img width="876" height="672" alt="image" src="https://github.com/user-attachments/assets/461f30cd-397d-4bf9-a040-00d93f1b922c" />

## Local Development Setup
### Prerequisites
* Ensure Node.js (v16+ recommended), Python (3.10+ recommended) are installed

### Backend Setup
* Open a terminal and navigate to the backend folder:

```bash
cd ./backend
```
* Install backend requirements:
```bash
pip install -r requirements.txt
```
* Start the Django server:
```bash
python manage.py runserver
```
### Frontend Setup
* Open a second terminal and navigate to the frontend folder:
```bash
cd ./frontend
```
* Install frontend dependencies:
```bash
npm install
```
* Start the frontend development server:
```bash
npm run dev
```
### Running the Project
* Keep both terminals running t
* Access the app in your browser at the frontend’s dev server URL (usually http://localhost:5173 or similar).

## API Documentation
### Tokens
* api/token/ 📬
* api/token/refresh/ 📬
* api-auth/login 📬
* api-auth/logout📬
### Auth User (Django's Users)
* api/user/register/ 📬
* api/user/{<int:pk>}/ 📩📬✏️❌
### Companies
* api/companies/ 📩
  * <img width="557" height="251" alt="image" src="https://github.com/user-attachments/assets/be0d1bf1-83cb-4509-813f-fb5d859202df" />
   
* api/companies/{<int:pk>}/ 📩📬✏️❌
### Departments
* api/departments/ 📩
  * <img width="272" height="400" alt="image" src="https://github.com/user-attachments/assets/93132e70-db83-475c-a55f-e580fe54d9ab" />
* api/departments/{<int:pk>}/ 📩📬✏️❌
### Employees
* api/employees/ 📩
  * <img width="292" height="622" alt="image" src="https://github.com/user-attachments/assets/91325552-8696-473d-af8a-69d5cbfb81c5" />

* api/employeesByCompany/{<int:company_id>}/ 📩
* api/employeesByDepartment/{<int:department_id>}/📩
* api/ employees/{<int:pk>}/ 📩📬✏️❌
### Me
* api/me/ 📩
  * <img width="397" height="50" alt="image" src="https://github.com/user-attachments/assets/393b5626-4338-4bf4-ac9b-ee5828e4424b" />
  
### Symbols and Meanings
* Methods:
  * GET: 📩
  * POST: 📬
  * PATCH: ✏️
  * DELETE: ❌
*  parameters to be provided
  ➡️ {<int:pk>}

