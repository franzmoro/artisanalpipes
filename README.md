# artisanalpipes
E-commerce website for [artisanalpipes](www.artisanalpipes.com).

## Requirements
- Display all available pipes:
  - Image
  - Info:
    - Name
    - Description
    - Price
    - Status:
      - sold
      - in stock
      - in production
      - available on request (?)
- Order/Filter available pipes by:
  - Availability
  - Price
  - Material / Manufacturing technique (?)
- Basket for items
- Checkout + shipment info / options
- Manage payments
- Confirm order via email
- Include a **Contact** section
- Include an **About** section with our values
- Provide analytics on user behaviour
- Admin page:
  - add blog posts
  - add pipe to db
  - update pipe status

## Technical choices
#### Front-end framework
**[Riot.js](https://github.com/riot/riot)** due to:
  - very small size of the minified bundle (meaning low loading times)
  - re-usability and central store
  - trying out this technology

#### App state management
**[Redux.js](https://redux.js.org/)** (**TBC**)
Store shall be cached to keep track of items in basket.

#### Styling
**[SASS](http://sass-lang.com/)** due to:
  - allowed use of variables (e.g. mobile screen sizes, breakpoints)
  - neat syntax

#### Routing
**[Riot Router](http://riotjs.com/api/route/)** (**TBC**)

#### Server framework
**[Hapi.js](http://hapijs.com/)**, node-based

#### DB
**[PostgreSQL](https://www.postgresql.org/)** due to:
  - relations for pipe data (SQL is ideal)
  - large Postgres community
  - prior knowledge

#### Image hosting
Images will be hosted on a CDN folder and served by http requests
<!-- TODO to consider admin adding photo functionality -->

#### Testing
- **[Tape](https://github.com/substack/tape)** for front-end (**TBC**) / back-end unit tests
- **[Nightwatch](http://nightwatchjs.org/)** for integration tests

#### Building
- *Transpiling TBC*
- **[webpack](https://webpack.github.io/docs/)** with **[hot-reloading](https://webpack.github.io/docs/hot-module-replacement-with-webpack.html)**

#### Online deployment
**[Heroku](https://www.heroku.com/)** due to its simplicity, and to prior experience in using it.

#### Online Continuous-Integration
[Travis-CI](https://travis-ci.org/)
