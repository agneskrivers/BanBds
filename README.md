# BanBds

BanBds is a web application for buying and selling real estate properties in Vietnam.

## Demo

You can check out a live demo of this application [here](https://banbds.claimether.com).

## Installation

1. Clone my repo

```bash
git clone https://github.com/agneskrivers/BanBds.git
cd BanBds
```

2. Install the required packages:

```bash
npm install
```

3. Set up the database:

-   Download the MongoDB image from [docker hub](https://chat.openai.com/chat#:~:text=MongoDB%20image%20from-,docker%20hub,-.)
-   Run the following command to start the MongoDB container:

```bash
docker run --name mongodb -p 27017:27017 -d mongo:your-version
```

Replace `your-version` with the version of MongoDB you're using (e.g. `4.4`).

4. Load demo:

-   Download the demo data from [Demo](https://drive.google.com/file/d/1qTyVxODtaJok9nK1gmBHJTBybnNS59Ou/view?usp=sharing)
-   Unzip file banbds.zip
-   Copy folder `public` to folder project
-   Run the following command to import the demo data into the database:

```bash
    mongoimport --host localhost:27017 --db your-db-name --collection districts --drop --file path/to/MongoDB/district.json
    mongoimport --host localhost:27017 --db your-db-name --collection images --drop --file path/to/MongoDB/images.json
    mongoimport --host localhost:27017 --db your-db-name --collection investor --drop --file path/to/MongoDB/investor.json
    mongoimport --host localhost:27017 --db your-db-name --collection news --drop --file path/to/MongoDB/news.json
    mongoimport --host localhost:27017 --db your-db-name --collection posts --drop --file path/to/MongoDB/posts.json
    mongoimport --host localhost:27017 --db your-db-name --collection projects --drop --file path/to/MongoDB/projects.json
    mongoimport --host localhost:27017 --db your-db-name --collection regions --drop --file path/to/MongoDB/regions.json
    mongoimport --host localhost:27017 --db your-db-name --collection requests --drop --file path/to/MongoDB/requests.json
    mongoimport --host localhost:27017 --db your-db-name --collection wards --drop --file path/to/MongoDB/wards.json
```

Replace `your-db-name` with the appropriate values for your setup

5. Build the application:

```bash
npm run build
```

6. Start the development server:

```bash
npm run dev
```

7. Open your web browser and navigate to [http://localhost:1998](http://localhost:1998)

## Features

This web application has the following features:

-   User authentication and authorization
-   Ability to post new property listings
-   Search for properties by location, price, and other criteria
-   View detailed information about individual properties
-   Contact the seller of a property through the website

## Configuration

This application uses a few environment variables that you'll need to set:

-   `PORT`: The port to run the application on (default is `1998`)
-   `MONGO_URI`: The URL of your MongoDB database
-   `MONGO_STORE_URI`: The URL of your MongoDB database session (If you do not define this environment variable, the application will use the `MONGO_URI` variable to store sessions)
-   `SECRET_JWT`: A secret key used to sign JSON Web Tokens for user authentication
-   `SECRET_COOKIE`: A secret key used to sign Cookie
-   `SECRET_SESSION`:A secret key used to sign Session
-   `NEXT_PUBLIC_LIMIT_RENEW_OTP`: Limit the number of times the user verification code is sent
-   `NEXT_PUBLIC_LIMIT_FAILED_OTP`: Limit the number of times you enter the wrong confirmation code
-   `NEXT_PUBLIC_GOOGLE_API`: The API key for Google Map, a service of google maps
-   `NEXT_PUBLIC_HOME_PAGE`: The URL of home page
-   `ESMS_API_KEY`: The API key for ESMS, a service used to send confirmation codes through the application
-   `ESMS_SECRET_KEY`: The Secret key for ESMS, a service used to send confirmation codes through the application

You can set these environment variables in a .env file in the root directory of your project.

Note: If you are running on the development environment, there is no need to set the variable `ESMS_API_KEY`, `ESMS_SECRET_KEY`. The verification code will be logged on terminal

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your changes.
3. Make your changes and commit them with descriptive messages.
4. Push your changes to your forked repository.
5. Open a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Acknowledgements

This project was inspired by similar real estate applications like [BatDongSan](https://batdongsan.com.vn/) and [Meey Land](https://meeyland.com/).

## Task

-   [] Fix bug
-   [] Create RESTful API for Admins
-   [] Create admin page
