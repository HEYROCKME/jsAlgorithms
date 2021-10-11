/*Leap year checker */

const isLeapYear = (year) => {

    if (year % 100 === 0 ) {
       return year % 100 === 0 && year % 400 === 0 ? true : false
   } else if (year % 4 === 0 ) {return true
   } else return false
   
   
   }
   
   
   console.log(isLeapYear(2020)); //true
   console.log(isLeapYear(2018)); //false
   console.log(isLeapYear(1700));  //false
   console.log(isLeapYear(1600)); //true
   
   
   
   const anotherLeapYear = (year) => {
       const leapYear = Number(year)
       return leapYear % 100 === 0 ? leapYear % 400 === 0 : leapYear % 4 === 0
   }
   
   console.log(anotherLeapYear(2020))
   console.log(anotherLeapYear(2018))
   console.log(anotherLeapYear(1700))
   console.log(anotherLeapYear(1600))