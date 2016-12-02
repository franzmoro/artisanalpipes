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
#### Templating framework
**[Riot.js](https://github.com/riot/riot)** due to:
  - very small size of the minified bundle (meaning low loading times)
  - component-based code

#### App state management
- Cache basket items as session data? (**TBC**)

#### Styling
**[SASS](http://sass-lang.com/)** due to:
  - allowed use of variables (e.g. mobile screen sizes, breakpoints)
  - neat syntax

#### Routing
A combination of Hapi.js, hapi's **[vision](https://github.com/hapijs/vision)** and **[hapi-riot](https://github.com/dwyl/hapi-riot)**. Very simple indeed!

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

#### Building / Pre-compiling
- *Transpiling TBC*
- ```.tag``` files are built by Riot
- ```.scss``` files are compiled with node-sass

#### Online deployment
**[Heroku](https://www.heroku.com/)** due to its simplicity, and to prior experience in using it.

#### Online Continuous-Integration
[Travis-CI](https://travis-ci.org/)
