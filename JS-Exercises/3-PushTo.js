function myDB(db_arr, usrname, usremail, usrage) {
    db_arr.push(usrname, usremail, usrage);
}; // JavaScript function that helps to push to a DataBase

const db1 = []; // Mocking a DataBase
const db2 = []; // Multiple DataBase

myDB(db1, "Ikechukwu", "devikecele@gmail.com", 16); // This will push to the first DataBase
myDB(db2, "Joe", "joeboy@gmail.com", 21); // This will push to the second DataBase

console.log(db1, db2); // This will console.log both DataBase