import {getWeekDay, humanDuration, WeekDayEnum} from "./dateTimeHelper";

describe('dateTimeHelpers' , () => {
    describe('#getWeekDay()' , () => {
            test.each`
            date | expected
               ${new Date('2022-01-21T18:27:54.040Z')} | ${WeekDayEnum.Friday}
               ${new Date('2022-01-22T18:27:54.040Z')} | ${WeekDayEnum.Saturday}
               ${new Date('2022-01-23T18:27:54.040Z')} | ${WeekDayEnum.Sunday}
               ${new Date('2022-01-24T18:27:54.040Z')} | ${WeekDayEnum.Monday}
               ${new Date('2022-01-25T18:27:54.040Z')} | ${WeekDayEnum.Tuesday}
               ${new Date('2022-01-26T18:27:54.040Z')} | ${WeekDayEnum.Wednesday}
               ${new Date('2022-01-27T18:27:54.040Z')} | ${WeekDayEnum.Thursday}
               `('should return $expected for the given date' , ({date , expected}) => {
                expect(getWeekDay(date)).toBe(expected);
            });
        })

    describe('#humanDuration' , () => {
        it('should return the duration human readable' , () => {
            expect(humanDuration('03:13:00')).toBe('3hrs. 13min');
        })
    })

})