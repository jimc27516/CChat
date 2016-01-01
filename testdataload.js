
print("loading testdataload.js");
db = db.getSiblingDB('CChat');
print ("dropping CChat database");
db.dropDatabase();
print ("loading new CChat database");
db = db.getSiblingDB('CChat');
db.users.insert({ "username" : "Jim", "email" : "jim@smallcampbell.com" });
db.users.insert({ "username" : "Lucas", "email" : "lucascmpbll@gmail.com" });
db.users.insert({ "username" : "Betsy", "email" : "Betsy@smallcampbell.com" });
db.users.insert({ "username" : "Lilly", "email" : "l_campbell@dublinschool.org" });
print ("all done");
