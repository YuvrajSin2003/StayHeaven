# Wonderlus - Airbnb Clone

A full-stack web application built with Node.js, Express, MongoDB, and EJS templates.

## Issues Fixed

### 1. Express Version Compatibility
- **Problem**: The application was using Express 5.1.0 which had compatibility issues with path-to-regexp
- **Solution**: Downgraded to Express 4.18.2 for stable routing

### 2. EJS Template Linter Errors
- **Problem**: JavaScript code in EJS templates was causing linter errors
- **Solution**: 
  - Added proper script type attribute
  - Created ESLint configuration to handle EJS files
  - Added eslint-disable comments where necessary

### 3. Development Setup
- **Problem**: Missing development scripts and nodemon configuration
- **Solution**: 
  - Added start and dev scripts to package.json
  - Installed nodemon as a dev dependency
  - Created proper ESLint configuration

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

### Development Mode (with auto-reload)
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The application will be available at `http://localhost:8080`

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
ATLASDB_URL=your_mongodb_connection_string
SECRET=your_session_secret
MAP_TOKEN=your_mapbox_token
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET=your_cloudinary_api_secret
```

## Features

- User authentication and authorization
- CRUD operations for listings
- Review system with ratings
- Image upload with Cloudinary
- Interactive maps with Mapbox
- Responsive design with Bootstrap

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: Passport.js with Local Strategy
- **Templates**: EJS with EJS-Mate
- **File Upload**: Multer with Cloudinary
- **Maps**: Mapbox API
- **Styling**: Bootstrap 5, Custom CSS
- **Development**: Nodemon, ESLint 