# Workasana App

A full-stack recipe management app where you can create project ,team , task and work on it.  
Built with a React frontend, Express/Node backend, MongoDB database, and JWT-based authentication.

---

## Demo Link

[Live Demo](https://stunning-figolla-da6116.netlify.app/)  

---

## Login

> **Guest**  
> Username: `test@gmail.com`  
> Password: `12345678`

---

## Quick Start

```
git clone https://github.com/lav1706/workasana_Backend.git
cd main
npm install
npm run dev      # or `npm start` / `yarn dev`
```

## Technologies
- Node.js
- Express
- MongoDB
- JWT

## API Reference

### **POST /api/v1/user/login**<br>	 
Login <br>	 
Sample Response:<br>
```{
    {"token": "...","user": { "id": "...","name": "...","email": "..." }}
}
```
### **POST	/api/v1/user/register**<br>	 	
Register <br>		
Sample Response:<br>
```{
    "token": "...","user": { "id": "...","name": "...","email": "..." }}
}
```

### **GET	/api/user**<br> 	
All User (protected)<br>	
Sample Response:<br>
```[
    {"_id": "...","name": "...", "email": "...", "password": "...", "__v": 0 }, ...
] 
```

### **GET	/api/user/:id**<br> 	
GET User by Id (protected)<br>	
Sample Response:<br>
```
    {"_id": "...","name": "...", "email": "...", "password": "...", "__v": 0 }

```
### **DELETE	/api/user/:id**<br> 	
Delete User by Id (protected)<br>	
Sample Response:<br>
```
    {"_id": "...","name": "...", "email": "...", "password": "...", "__v": 0 }

```
### **PUT	/api/user/:id**<br> 	
Update User by Id (protected)<br>	
Sample Response:<br>
```
    {"_id": "...","name": "...", "email": "...", "password": "...", "__v": 0 },data

```
### **GET /api/v1/Project**<br>	 
ALL Project (Protected)<br>	 
Sample Response:<br>
```
[ {"_id": "...", "name": "...","description": "...","createdAt": "...", "__v": 0,"status": "To Do" },...]
```
 	
### **GET /api/v1/Project/:id**<br>	 
Get Project By Id (Protected)<br>	 
Sample Response:<br>
```
 {"_id": "...", "name": "...","description": "...","createdAt": "...", "__v": 0,"status": "To Do" }
```

### **DELETE /api/v1/Project/:id**<br>	 
Delete Project By Id (Protected)<br>	 
Sample Response:<br>
```
 {"_id": "...", "name": "...","description": "...","createdAt": "...", "__v": 0,"status": "To Do" }
```

### **Update	/api/user/:id**<br> 	
Update User by Id (protected)<br>	
Sample Response:<br>
```
    {"_id": "...","name": "...", "email": "...", "password": "...", "__v": 0 },data

```


## Contact
For bugs or feature requests, please reach out to lavnish.raghav1706@gmail.com
