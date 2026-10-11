# Todo App
A simple task management application built with Node.js, Express, MongoDB, and Firebase for authentication.  
## Available Endpoints
### Task Endpoints
### GET /api/todos/tasks 
Retrieves all tasks for the authenticated user.  
### POST /api/todos/tasks 
Creates a new task. 
Body:  
`{
"title": "Task Title",
"description": "Task Description"
}`
### PUT /api/todos/tasks/:id 
Updates an existing task. Body:  
{
"title": "Updated Title",
"description": "Updated Description",
"status": "pending | in progress | completed"
}
### DELETE /api/todos/tasks/:id 
Deletes a task by ID.  
## Setting Up the Development Environment
### Prerequisites
- Node.js (v18 or later)
- npm (v8 or later)
- Docker and Docker Compose
## Steps
- Clone the repository:  
- cd <repository-folder>
- Install dependencies:  
`npm install`
- 
- Create a .env file in the root directory and add the following:  
  - PORT=3000
  - DATABASE_URI=mongodb+srv://<username>:<password>@<cluster-url>/todo-app
- Ensure the Firebase service account JSON file is in the root directory and update the path in src/configs/firebaseConfig.js if necessary.  
- Start the development server:  
  `npm start`
- Access the app at http://localhost:3000.  
## Running the App with Docker Compose
- Ensure docker-compose.yml and Dockerfile are in the root directory.  
- Build and start the containers:  
`docker-compose up --build`
- Access the app at http://localhost:4000. MongoDB will be available at localhost:27017.  
- To stop the containers:
`docker-compose down`

## Deploying to Google Cloud Platform (GCP)
### Prerequisites
- installed Google Cloud SDK
#### Steps
- Authenticate with Google Cloud:  
`gcloud auth login`
- Set your project:  
`gcloud config set project project_id`
- Create an app.yaml file in the root directory:  
### Enable App Engine:  
```gcloud app create```
### Deploy the app:  
```gcloud app deploy```
### Access the app at:  
https://project_id.appspot.com
## Using the To-Do List Application
- Access the Application Open the app in your browser at the specified URL (e.g., http://localhost:3000 for local or the GCP URL for deployment).  
- Authentication Log in using the todo-app user interface.  
### Create a Task  
- click to the "Create Task" button.
- Enter the task title and description.
- Click "Save" to save the task.
### Update a Task  
- Click on the edit button on the task to edit its details.
- Update the title, description, or status.
- Save the changes.
### Delete a Task  
- Click the "Delete" button next to a task to remove it.

