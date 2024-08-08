# Olamaps Web app

## Installation

Clone the repository
```
git clone https://github.com/sanjaykohli/Olamaps
```

Navigate to project directory
```
cd Olamaps
```

## Create an Account and Obtain an API Key

1. Go to the [Olamaps Dashboard](https://maps.olakrutrim.com/dashboard) and sign up for an account.
2. Once registered and logged in, navigate to the API key section in the dashboard.
3. Create a new API key and copy it.

## Configure API Key

1. Open the `src/App.js` file in your project.

2. Replace the placeholder API key in the `transformRequest` function with your newly created API key:

   ```javascript
   transformRequest={(url, resourceType) => {
     if (!url.includes('?')) {
       url = url + '?api_key=YOUR_API_KEY';
     } else {
       url = url + '&api_key=YOUR_API_KEY';
     }
     return { url, resourceType };
   }}



## Install dependencies

```
npm install
```

## Run the Application

```
npm start
```


The application should now be running at http://localhost:3000
