import { phoneNumbers, storageLimit } from "./storage";
import { validateLimit } from "./validators";

export default class PhoneNumbers {
  static generate(req, res) {
    const validation = validateLimit(req.body.limit);
    if (validation !== "passed") {
      return res.status(422).json({
        status: "Unsuccessful",
        message: validation
      });
    } else {
      const limit = parseInt(req.body.limit);
      const isAvailable = !!(limit + phoneNumbers.length <= storageLimit);

      if (phoneNumbers.length < storageLimit && isAvailable) {
        const numbers = [];

        while (numbers.length < limit) {
          const number = "310" + Math.floor(Math.random() * 10000000 + 10);
          const phoneNo = parseInt(number);

          if (!numbers.includes(phoneNo) && !phoneNumbers.includes(phoneNo)) {
            numbers.push(phoneNo);
            phoneNumbers.push(phoneNo);
          } else if (phoneNumbers.length >= storageLimit - 1) {
            return res.status(417).json({
              status: "Unsuccessful",
              message: "You have reached the maximum amount of unique numbers"
            });
          }
        }
        return res.status(201).json({
          status: "Successful",
          numbers
        });
      } else {
        return res.status(417).json({
          status: "Unsuccessful",
          message: "Storage is full, cannot generate numbers"
        });
      }
    }
  }

  static getAll(req, res) {
    if (phoneNumbers.length >= 1) {
      let count = 0;
      phoneNumbers.forEach(() => {
        ++count;
      });

      return res.status(200).json({
        status: "Successful",
        numbers: phoneNumbers,
        total: count
      });
    } else {
      return res.status(200).json({
        status: "Successful",
        message: "No numbers available"
      });
    }
  }

  static sortAll(req, res) {
    if (phoneNumbers.length >= 1) {
      let maxNumber;
      let minNumber;
      if (req.params.order.includes("asc")) {
        phoneNumbers.sort((x, y) => {
          return x - y;
        });

        maxNumber = phoneNumbers[phoneNumbers.length - 1];
        minNumber = phoneNumbers[0];
        return res.status(200).json({
          status: "Successful",
          numbers: phoneNumbers,
          minNumber,
          maxNumber
        });
      } else if (req.params.order.includes("desc")) {
        phoneNumbers.sort((x, y) => {
          return y - x;
        });

        maxNumber = phoneNumbers[0];
        minNumber = phoneNumbers[phoneNumbers.length - 1];
        return res.status(200).json({
          status: "Successful",
          numbers: phoneNumbers,
          minNumber,
          maxNumber
        });
      } else {
        return res.status(406).json({
          status: "Unsuccessful",
          message: "Must enter order of ascending or descending"
        });
      }
    } else {
      return res.status(200).json({
        status: "Successful",
        message: "No numbers available"
      });
    }
  }

  static clearAll(req, res) {
    if (phoneNumbers.length >= 1) {
      while (phoneNumbers.length > 0) {
        phoneNumbers.pop();
      }
      return res.status(200).json({
        status: "Successful",
        message: "All numbers have been cleared"
      });
    } else {
      return res.status(404).json({
        status: "Unsuccessful",
        message: "No numbers available to clear"
      });
    }
  }
}
