🍴 Meal Express – Food Delivery App

Meal Express is a MERN stack food delivery application where users can browse meals, add them to cart, and place orders. The project is divided into Frontend (React), Backend (Express + MongoDB), and Admin Panel for managing orders.

**Technologies Used**


**Frontend**

HTML


CSS


JavaScript (JSX)


React: A JavaScript library for building user interfaces.


React Router DOM: For managing routes in React.


Axios: For making network requests.


React Toastify: For creating toast notifications easily.


**Backend**



Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine.


Express: A minimal and flexible Node.js web application framework.


MongoDB: A NoSQL database for storing user and order data.


Mongoose: An ODM (Object Data Modeling) library for MongoDB and Node.js.


jsonwebtoken: For authentication using JSON Web Tokens.


bcrypt: For encrypting user data.


CORS: For enabling cross-origin resource sharing between frontend and backend.


dotenv: For managing environment variables.


body-parser: For parsing incoming request bodies.


Multer: For handling file uploads.


Stripe: For processing payments.


Validator: For validating email and password formats.


Nodemon: For automatically restarting the server during development.


ThunderClient: For API testing.


Version Control


Git: For version control.


Git Bash: For using Git in the command line.


**Features**


User Features


User Authentication: Secure login and registration using JSON Web Tokens (JWT).


Food Ordering: Users can browse the menu, add items to their cart, and place orders.


Payment Processing: Secure payments via Stripe.


Profile Management: Users can view and update their profile information.


Order Tracking: Users can track their order status in real-time.


**Admin Panel**


Dashboard: Overview of key metrics and system status.


User Management: View and manage user accounts.


Order Management: View and update order statuses.


Menu Management: Add, edit, and remove menu items.


Notifications: Admins can receive and send notifications.


**Technical Features**


API Endpoints: Built using Express to handle CRUD operations.


Database Connectivity: Managed using Mongoose to connect with MongoDB.


Data Encryption: Sensitive data is encrypted using bcrypt.


Environment Configuration: Managed using dotenv.


Image Uploads: Handled by Multer for storing images.


Form Validation: Ensured using Validator.


Cross-Origin Resource Sharing: Enabled using CORS.


Live Server Reloading: Implemented using Nodemon for efficient development.


API Testing: Conducted using ThunderClient for robust backend development.

1.Setup Backend:-

cd backend

npm install

Create .env file inside backend/

PORT=4000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

Run Backend Server:-

npm start

2. Setup Frontend
3. 
cd frontend

npm install

Create .env file inside frontend/

REACT_APP_API_URL=http://localhost:4000

Run Frontend:-

npm start

3.Setup Admin Panel

cd admin

npm install

Create .env file inside admin/

REACT_APP_API_URL=http://localhost:4000

Run Admin Panel

npm start



![image](https://github.com/Prabh7170/Meal_Express_Food_App/blob/06d221a4c5c39e91dede70d7e079b1171861bf10/Screenshot%20(166).png)
![imge](https://github.com/Prabh7170/Meal_Express_Food_App/blob/372ce66fa4c3f0792cf5a20d9ce1323d03279201/Screenshot%20(167).png)
![imge]()

# Meal_Express_Food_App
