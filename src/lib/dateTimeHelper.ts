export enum WeekDayEnum {
    Monday = "Monday",
    Tuesday =  "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday",
    Sunday = "Sunday"
}

export  const getWeekDay = (date : Date) : WeekDayEnum => {
    const day = date.getDay();
    switch (day) {
        case 0 :
            return  WeekDayEnum.Sunday;
            break;
        case 1  :
            return WeekDayEnum.Monday;
            break;

        case 2 :
            return  WeekDayEnum.Tuesday;
            break;

        case 3 :
            return  WeekDayEnum.Wednesday;
            break;

        case 4 :
            return WeekDayEnum.Thursday;
            break;

        case 5 :
            return WeekDayEnum.Friday;
            break;

        case 6 :
            return WeekDayEnum.Saturday
            break;

    }
};

export const humanDuration = (duration : string) : string => {
    //03:13:45
    const [h , m] = duration.split(':');
    return `${Number(h)}hrs. ${m}min`
}