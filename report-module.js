'use-strict';

const email_log = require('./email_log.json');

const bugReportModule = function () {
  const getBugReport = (dataLog) => {
    console.log(dataLog.emails.reduce((customers, currentCustomer) => {
      let email = currentCustomer.email;

      if (customers.hasOwnProperty(email)) {
        customers[email] += 1;
      } else {
        customers[email] = 1;
      }

      return customers
    }, {}));


  }

  return {
    getBugReport
  };

};

module.exports = {
  bugReportModule
};