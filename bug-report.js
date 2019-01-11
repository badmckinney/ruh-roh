'use-strict';
const app = require('./report-module.js');
const data = require('./email_log.json');
const tool = app.bugReportModule();

tool.getBugReport(data);