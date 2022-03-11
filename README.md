<h1 align="center">Welcome to bank-rout 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
</p>

> You are a junior developer in the IT department of a banking brand called Bank Root.
> The main target of this bank was until now to offer banking services on site.
> It now wishes to diversify its clientele, enter fully into the digital era (kek …) and (FINALLY) offer its users a renewed online banking service in order to 
> attract new users and modernize its offer.
> The mission of your team is to design an application that allows your employer to manage their bank accounts online first and then to offer banking management 
> services to your customers (deposits, transfers, etc.) .

## On the command line

### 1️⃣ Project recovery
------
```sh
git@github.com:Simplon-hdf/bank-rout-garden-feeder.git
```
Enter the project folder : 
```sh
cd bank-rout-garden-feeder/bank-rout
```

### 2️⃣ Install missing dependencies
------
Those are the dependencies to note in file .gitignore

```sh
npm install
```

### 3️⃣ Create database 
------
You have to create the database on the command line so that the project can start

### 4️⃣ Create .env file in folder root of project and configure
------
It is necessary to create this file and to configure it in order to make the relation with the BDD otherwise the project will not work.
With file .env.example for make file .env

```sh
PORT=3333
HOST=0.0.0.0
NODE_ENV=development
APP_KEY=********************** (to note in file .env.example)
DRIVE_DISK=local
SESSION_DRIVER=cookie
CACHE_VIEWS=false

DB_CONNECTION=pg
PG_HOST=localhost
PG_PORT=5432
PG_USER=userOfDatabase
PG_PASSWORD=**********
PG_DB_NAME=nameOfDatabaseCreateJustBefore
```



### 5️⃣ Make migrations 
------

This allows you to create tables and columns in the database

```sh
node ace migration:run

```
### 6️⃣ Run the seed command
------

This allows you to add the data in the correponding tables.
The data of the tables is in the file seed with the name of the table corresponding.
The file MainSeeder decides the order of launching the seeds files.
```sh
node ace db:seed
```
### 7️⃣ last etape
------

You can run the project with the next command :

```sh
npm run dev
```
then go to the following address in your browser :

```sh
localhost:3333
```
------



## Conception

  * Usecase diagram: 
  
  ![Usecase diagram](uml/Screenshot%20from%202022-03-07%2010-29-02.png "Usecase diagram")

  * Class diagram:
  ![Class diagram](uml/bank_root_classdaigram.png "Class diagram")

  * Sequence diagram:
  ![Sequence diagram](uml/sequenceDiagram_BR.png "Sequence diagram")


  8️⃣ The project is run 🆗 ⭐, good fun 👍 .


## Authors

👤 [ **ReneRugaba**](https://github.com/ReneRugaba)
👤 [**MocquaisChristopher**](https://github.com/mocquaischristopher) 
👤 [**Layronne**](https://github.com/Layronne)


## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
