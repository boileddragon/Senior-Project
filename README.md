# Cunection Mobile App
###### Created by Faith Brown and Neal Patron, 2022
---

### Compiling and Running the Code
This project was developed using npm and expo, so to create the expo QR Code and URL, run `npx expo start` (`yarn expo start` can also be used).

## Overview
### Purpose
who fuckin knows

### App Components

#### Components

#### Screens

#### Stacks

#### Assets

#### Core
##### Models
These models are meant to provide structure for how the rest of the app should interact with data. The only model we currently have implemented is event, which stores the title, associated club name, time, location, and any details for an event.

##### Repos
These are implementations of the Repository design pattern, which is a layer that abstracts how the data is stored in the database from the rest of the app. Using repositories allows anyone working on the frontend to ignore any details about database the implementation. We currently have one repository, defined in *eventRepo.js*, which corresponds to our event model. The repository class *EventRepo* has functions to retrieve all events, today's events, and upcoming events from the database, all of which will return the events as instances of our event model. *EventRepo* also has a function to add an event to the database, which takes an instance of our event model as the argument.

##### Firebase
This app uses Google Firebase as the backend. The main feature of this backend that we are currently using is the Firestore database. The *firebaseConfig.js* file is where we connect our app to our Firebase project. This file exports an instance of our Firebase app and a reference to our Firestore database. We use the database reference inside of *eventRepo.js* to interact with the database. Firebase allows you to define custom coverters to that can map database queries to and from your custom models. Inside of *eventRepo.js* we define *eventConverter* to map between the database and our event model.