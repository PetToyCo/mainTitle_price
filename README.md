# mainTitle_price
This service provides a module that displays the item's title and price, as well as a quantity button.

## Related Projects
- https://github.com/PetToyCo/reviews
- https://github.com/PetToyCo/photo-gallery
- https://github.com/PetToyCo/description_directions_attributes_
- https://github.com/PetToyCo/elizabeth_ProxyServer
- https://github.com/PetToyCo/ProductRecommendations

## Table of Contents
  1. Usage
  2. Endpoints
  3. Proxy-Integration
  4. Requirements
  5. Development
  6. Deployment

## Usage
Note: This service is set up for deploment. If you need to change it back to Development mode, please follow the instructions in the Deployment section below before continuing.

1. From the root directory:
npm install

2. If the database has not yet been seeded:
From within the root directory:
npm run seed

3. Please note: This service makes GET requests to the descriptions_directions_attributes_ service and to the reviews service. Both of those services' servers must be running, and both of their databases must be seeded, in order for the mainTitle_price service to function correctly. Both of those services will also need to have CORS permissions set to allow requests from the 3005 port. See this service's server.js file (starting at line 11) for an example of how to setup these headers if needed.

For proxy-usage, skip to Proxy-Integration section below.

For development usage: 

4. Go to client/src/index.jsx and comment out line 35, then uncomment out line 32. Then, from the root directory in the terminal: npm run build

To start the server:
From the root directory:
npm start

5. In the browser, navigate to http://127.0.0.1:3005 to see the service. For development purposes it has been hardcoded to display information for item 100.

6. To use this service with a proxy server, go to client/src/index.jsx and uncomment line 35, then comment out line 32. Then, from the root directory in the terminal: npm run build 
Follow additional instructions in the Proxy-Integration section below.

## Endpoints
This service has one endpoint (/itemPrice/:itemId) which can be used to retrieve a JSON object with that item's price and currency. Valid itemIds are from 100-199 inclusive.

Note: It is possible to request multiple items at once using the format: /itemPrice/array###,###,###

Endpoint: /itemPrice/###
```
JSON response format:
{
  itemId: "a string with the item's id",
  price: “a number representing the item’s price”,
  currency: “a string representing the symbol of the item’s currency, ie $”
}
```

## Proxy-Integration
To use this service with a proxy server, please add `<div id="mainTitleMount"></div>` right below the "gallery" div in index.html of your proxy server, and please add `<script type="text/javascript" src="http://localhost:3005/bundle.js"></script>` near the bottom of the same file.

This service is currently set up to be used with a proxy, but if you have changed it to development mode, then follow step 6 of this service's Usage section to switch it back.


## Requirements
Node 10.15.3

## Development
### Installing Dependencies
From within the root directory:
npm install

### Running Tests
This service uses Jest for unit testing of the mongoose database schema and server endpoints, and Jest with Enzyme for testing of the React components.
From within the root directory:
npm run test

## Deployment
1. In server.js uncomment lines 14-27 and comment out lines 30-45
2. In database/index.js uncomment line 4 and comment out line 7
3. In client/src/index.jsx uncomment lines 45 and 82 and comment out lines 48 and 85
4. In client/src/style.js uncomment line 2 and comment out line 5

To restore the service to deployment mode, do the reverse of the above steps, and update any IP addresses that may have changed.