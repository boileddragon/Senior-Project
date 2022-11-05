import { db } from "../firebaseConfig";
import { Event } from "../models/event";
import { Timestamp, where } from "firebase/firestore";

import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  addDoc,
  query,
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


  // add a general byDate function?
  static async today() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    const today_timestamp = Timestamp.fromDate(new Date());
    const tomorrow_timestamp = Timestamp.fromDate(tomorrow);

    console.log(today_timestamp.toDate().toLocaleString());
    console.log(tomorrow_timestamp.toDate().toLocaleString());

    const q = query(
      collection(db, EventRepo.collection),
      where("date", ">", today_timestamp),
      where("date", "<", tomorrow_timestamp)
    );
    const docs = await getDocs(q.withConverter(eventConverter));
    let res = [];
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
    return await addDoc(
      collection(db, EventRepo.collection).withConverter(eventConverter),
      event
    );
  }
}

const eventConverter = {
  toFirestore: (event) => {
    console.log(event);
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
    console.log(data.date.toDate());
    return new Event(
      data.title,
      data.clubName,
      data.details,
      data.location,
      data.date.toDate().toLocaleString()
    );
  },
};
