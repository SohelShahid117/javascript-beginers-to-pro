//131. Converting JavaScript Objects to JSON Using JSON.stringify()

//JSON.stringify()--->convert obj to JSON
const user = {
  name: "sohel",
  age: 35,
  isStd: true,
  hobbies: ["gardening", "traveling", "coding"],
  address: {
    city: "ctg",
    zipCode: 789,
  },
};

const convertToJSONData = JSON.stringify(user);
const convertToJSONDataLimited = JSON.stringify(user, ["name", "age"]);
console.log("converting object to JSON data : ", convertToJSONData);
console.log("specific JSON data store to DB : ", convertToJSONDataLimited);

//132. Parsing JSON Strings Back into Objects with JSON.parse()

//JSON.parse()--------->convert JSON data to Obj

const convertJSONtoObj = JSON.parse(convertToJSONData);
console.log("JSON to object data is : ", convertJSONtoObj);
