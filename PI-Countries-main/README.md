# **COUNTRIES** | Project Description

## **📌 Project Idea**

-  Build a single page application using the technologies: **React**, **Redux**, **Node**, **Express** y **Sequelize**.
-  The main idea of this project was to build a web application using the restcountries API. The application allows users to perform the following tasks: Search for countries, View country information, Filter countries, Sort countries, Create tourist activities.

<br />

---

<br />

### **🖱 Database Models**

The project consists of two models: "User" and "Country". The "User" model is used for user authentication and management, while the "Country" model is used for storing country information and tourist activities. The relationship between the models is a many-to-many relationship.

<br />

---

<br />

### **🖱 Server Implementation**

The server was implemented using, **NodeJS**,  **Express** and **Sequelize**.
The server provides the following routes:

#### **📍 GET | /countries**

-  This route retrieves an array of objects, where each object represents a country with all its information..

#### **📍 GET | /countries/:idPais**

-  This route retrieves the details of a specific country. It returns an object with the requested country details, including the associated tourist activities. The country is identified by its three-letter ID..

#### **📍 GET | /countries/name?="..."**

-  This route retrieves all countries that match the provided name query. The search is case-insensitive and does not require an exact match. If no matching country is found, an appropriate message is returned.

#### **📍 POST | /activities**

-  This route receives all the necessary data to create a tourist activity and associate it with the specified countries. All information is sent in the request body. The route creates the tourist activity in the database and establishes the necessary associations with the countries.

#### **📍 GET | /activities**

-   This route retrieves an array of objects, where each object represents a tourist activity.

<br />

---

<br />

### **🖱 React and Redux Application**

The frontend application was developed using **React** and **Redux** . It includes the following views:

**📍 LANDING PAGE |** 

The landing page serves as the welcome page for the application. It contains the following elements:

-  A representative background image related to the project.
-  A button to enter the  **`home page`**.

<br />

**📍 HOME PAGE |**

The home page is the main page of the single-page application (SPA). It includes the following components:

-  SearchBar: An input field for searching countries by name.
-   A list of country cards. On initial load, it should display the first set of results obtained from the GET /countries route. Each card displays the following information:
   -  Flag name.
   -  Country Name.
   -  Continent.
-  Clicking on a country card should redirect the user to the detail page for that specific country.
-  Buttons/Options for **filtering** countries by continent and type of tourist activity.
-  Buttons/Options for **sorting** countries alphabetically and by population in ascending or descending order.
-  Pagination: The country list is divided into pages, with each page displaying 10 countries.

<br />

**📍 DETAIL PAGE |**

The detail page displays specific information about a country, including:

Name
Flag image
Continent
Capital
Subregion (if available)
Area (if available)
Population

-  ID (three-letter code)
-  Name
-  Flag image
-  Continent
-  Capital
-  Subregión (if avilable)
-  Área (if available)
-  Population

<br />

**📍 FORM PAGE |**: The form page contains a form for creating a tourist activity.

The form is fully **controlled with JavaScript** and does not rely on HTML validation or special libraries. The form includes the following fields:

-  Name
-  Difficulty
-  Length
-  Season
-  Option to select/add multiple countries simultaneously
-  Button to create the tourist activity.
ntener números, o que la duración no pueda exceder determinado valor, etc.

<br />

---
