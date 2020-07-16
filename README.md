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
  3. Requirements
  4. Development

## Usage
1. From the root directory:
npm install

2. If the database has not yet been seeded:
From within the root directory:
npm run seed

3. To start the server:
From the root directory:
npm start

4. Please note: This service makes GET requests to the descriptions_directions_attributes_ service and to the reviews service. Both of those services' servers must be running, and both of their databases must be seeded, in order for the mainTitle_price service to function correctly. Both of those services will also need to have CORS permissions set to allow requests from the 3005 port. See this service's server.js file (starting at line 11) for an example of how to setup these headers if needed.

5. In the browser, navigate to http://127.0.0.1:3005 to see the service. For development purposes it has been hardcoded to display information for item 100.

6. To use this service with a proxy server, go to index.jsx and uncomment line 35, then comment out line 32.

## Endpoints
This service has one endpoint (/itemPrice/:itemId) which can be used to retrieve a JSON object with that item's price and currency. Valid itemIds are from 100-199 inclusive.

Endpoint: /itemPrice/###
JSON response format:
{
  itemId: "a string with the item's id",
  price: “a number representing the item’s price”,
  currency: “a string representing the symbol of the item’s currency, ie $”
}


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