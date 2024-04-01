
# Contacts App


## Table of Contents

-   [Introduction](#introduction)
-   [Installation](#installation)
-   [License](#license)


## Introduction
In this app, there are upcoming and recommended events. The website mis responsive to work in both desktop and mobile screen size. 

- ### Recommended shows:
There are only 8 recommended shows which will infinitely scroll horizontally. You can fetch the recommended events by calling the below API. The response also has img_url which should be used as the thumbnail image for the event.
 
- ### Upcoming events:
There are several upcoming events which scroll vertically as shown in the image. You can fetch the upcoming events by calling this API. 

## Installation

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/KhushiJukanti/GyanGrove-project.git
    ```

2. Navigate to the project directory:

    ```bash
    cd GyanGrove-project
    ```

3. Install the project dependencies:

    ```bash
    npm install
    ```

4. Create a .env file in GyanGrove-project directory and add the above mentioned urls in it, otherwise replace these urls in the fetch functions in Recommend.jsx and Upcoming.jsx

5. Start the application 

    ```bash
    npm start
    ```

## License

This project is licensed under the MIT License.

