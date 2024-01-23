var dateDiffInDays = function (date1, date2) {
  //   write your code here
	 const utcDate1 = Date.UTC(...date1.split('-'));
    const utcDate2 = Date.UTC(...date2.split('-'));

    // Calculate the difference in milliseconds between the two dates
    const timeDifference = utcDate2 - utcDate1;

    // Convert the difference to days
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    return daysDifference;
}


// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
