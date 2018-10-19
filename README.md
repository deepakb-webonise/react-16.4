# Setup for Sport React
### Perequisites:
  #### NodeJS which includes NPM
  - For Ubuntu Follow this [guide](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-16-04.guide)

  - For Windows https://nodejs.org/en/

  #### Add some entries to the hosts file using the following command:
  - Entries to add in hosts file:
    ```sh
    127.0.0.1 sportlocal.drf.com
    ```
  - For Ubuntu command
    ```sh
    $ sudo gedit /etc/hosts
    ```
  - For Windows
    Get hosts file in `C:\Windows\System32\Drivers\etc`

### Steps To Run:
  - ```npm install``` - To install dependencies.
  - ```npm start``` - To start the application. The environment will be based on the hostname on the browser's address bar.

### Unit Testing:
  - ```npm test``` - This command will also run eslint. Make sure all eslint errors are fixed.

### Building The Application:
  - ```npm run build``` - This creates a build folder which is to be deployed.

### How to contribute:
  - Create a "Feature/Ticket" branch from the "Develop" branch.
    ```sh
    git checkout -b FEATURE_BRANCH_NAME develop
    ```
  - Implement the functionality and unit tests for it.
  - Run the unit tests using ```npm test```
  - Commit and Push the branch.
  - Create a Pull Request for the newly created "Feature/Ticket" branch against "Develop" branch.

### Fast Development:
  - Add react and redux devtools extensions to your browsers

### See test coverage
  - ```npm run jest-coverage``` - Open `coverage/lcov-report/index.html` file
