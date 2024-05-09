# iTunes Search App

## Description

The iTunes Search App allows users to search for various media types including music, movies, podcasts, and more, using the iTunes Search API. Users can also manage their favorite selections within the app.

## How to Use the App

To use the iTunes Search App, simply enter a search term in the search bar, select the media type from the dropdown menu, and click the "Search" button. The app will display search results based on your query. You can add items to your favorites or remove them by clicking the corresponding button in the favourites list.

## Installation

### Prerequisites

- Node.js installed on your local machine
- Access to the internet to fetch resources from the iTunes Search API

### Steps to Install and Run the App

    Using concurrently to install dependencies and start both server and frontend

1. **Clone the Repository**
   [GitHub Repository](https://github.com/Bjarga/ItunesFavApp)

2. **Install Dependencies**

   - Run the following command in the root directory:

     ```sh
     npm install

     ```

3. **Start the Server and Application**

   Run the following command in the root directory

   ```sh
   npm start

   ```

4. **Security Measures**

Helmet: The server uses Helmet to enhance security by setting various HTTP headers.
API Keys: All API keys are stored in environment variables.
CORS: Configured to accept requests only from domains that host the frontend.

5. ## Accessing the App

   The application is deployed and can be accessed online through Vercel at the following URL:

   [View Live App](https://itunes-fav-app-94zs.vercel.app/)
