import { phoneNumbers } from "./storage";

export default class PhoneNumbers {
  static generate(req, res) {
    if (phoneNumbers.length < 10000) {
      const number = "310" + Math.floor(Math.random() * 10000000 + 1);
      const phoneNo = parseInt(number);

      phoneNumbers.push(phoneNo);
      return res.status(201).json({
        status: "Successful",
        number: phoneNo
      });
    } else {
      return res.status(417).json({
        status: "Unsuccessful",
        message: "Storage is full, cannot generate numbers"
      });
    }
  }
}
