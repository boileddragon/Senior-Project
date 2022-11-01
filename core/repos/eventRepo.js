import { db } from "../firebaseConfig";
import { Event } from "../models/event";
import { Timestamp } from "firebase/firestore";

import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  addDoc,
} from "firebase/firestore";

export class EventRepo {
  static db = db;
  static collection = "Events";

  /**
   * Return all events a
   * @returns 
   */
  static async all() {
    let res = [];
    const docs = await getDocs(
      collection(db, EventRepo.collection).withConverter(eventConverter)
    );
    docs.forEach((doc) => {
      res.push(doc.data());
    });
    //console.log(res);
    return res;
  }

  /**
   * Add event as new document
   * @param {Event} event
   * @returns 
   */
   static async add(event) {
    return await addDoc(collection(db, EventRepo.collection).withConverter(eventConverter), event);
  }
}

const eventConverter = {
  toFirestore: (event) => {
    return {
      title: event.title,
      clubName: event.clubName,
      details: event.details,
      location: event.location,
      date: Timestamp.fromDate(event.date),
    };
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return new Event(
      data.title,
      data.clubName,
      data.details,
      data.location,
      Date(data.date)
    );
  },
};
