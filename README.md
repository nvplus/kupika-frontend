# Kupika (476 Final Project)

Created by Vincent Nguyen (nguy2112@mylaurier.ca), Eric Tran (tran9350@mylaurier.ca) and Adam Katt (abdu8270@mylaurier.ca)

Link to the backend project: https://github.com/adamkatt

## Requirements
- Node.js
- npm
- MongoDB

## How to run
Kupika requires you to run both the Express server and React frontend for full functionality.

### Running the Express Backend (https://github.com/adamkatt)
1. ``npm install`` in the Kupika folder to install the dependencies
2. Specify the PORT and REACT_SERVER_URL in Server.js. (By default, they are 3001 and http://localhost:3000
respectively.
3. ``npm run devStart`` to start the Express server on http://localhost:3001/

### Running the React Frontend (https://github.com/nvplus/kupika-frontend)
1. Run ``npm install`` to install all required dependencies
2. Create a file in kupika-frontend called ``.env``
3. Populate it with REACT_APP_SERVER_URL=http://localhost:3001/ (or wherever you have the Express server running)
4. Start the frontend using ``npm run`` in this folder
5. The frontend should running be on http://localhost:3000/
