export class Event {
    /**
     * Event
     * @param {string} title Event title
     * @param {string} clubName Name of club that is hosting the event
     * @param {string} details Any info about the event
     * @param {string} location Location of the event
     * @param {Date} date Date and time of event
     */
    constructor(title, clubName, details, location, date) {
        this.title = title,
        this.clubName = clubName,
        this.details = details,
        this.location = location,
        this.date = date
    }
}