class Project {
    constructor(title, dueDate, why,  weekOfYear, dateOfWeek, weeksToGoInTheYear, goalsOfWeek, weekDay, dailyTasksOfGoals) {
        this.title = title;
        this.dueDate = dueDate;
        this.why = why;
        this.weekOfYear = weekOfYear;
        this.dateOfWeek = dateOfWeek;
        this.weeksToGoInTheYear = weeksToGoInTheYear;
        this.goalsOfWeek = goalsOfWeek;
        this.weekDay = weekDay;
        this.dailyTasksOfGoals = dailyTasksOfGoals;
    }

    get project() {
        return `${this.title}
        Due: ${this.dueDate}
        The Why: ${this.why}
        Current Week of Year: ${this.weekOfYear} - ${this.dateOfWeek} (${this.weeksToGoInTheYear} of weeks to go)
        Goals of Week: ${this.goalsOfWeek}
        ${this.weekDay}:
        ${this.dailyTasksOfGoals}`;
    }
}