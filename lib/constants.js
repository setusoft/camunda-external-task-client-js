/**
 * Error messages
 */
const MISSING_PATH = 'Couldn\'t instantiate Workers, missing configuration parameter \'path\'';
const ALREADY_REGISTERED = 'Couldn\'t register worker, since it\'s already registered for this topic';
const MISSING_HANDLER = 'Couldn\'t register worker, missing handler function';
const MISSING_TASK = 'Couldn\'t complete task, task id is missing';
const WRONG_INTERCEPTOR = 'Interceptors should be a function or an array of functions';
const MISSING_ERROR_CODE = 'Couldn\'t throw BPMN Error, no error code was provided.';
const MISSING_NEW_DURATION = 'Couldn\'t extend lock time, no new duration was provided.';

module.exports = {
  MISSING_PATH,
  ALREADY_REGISTERED,
  MISSING_HANDLER,
  MISSING_TASK,
  WRONG_INTERCEPTOR,
  MISSING_ERROR_CODE,
  MISSING_NEW_DURATION
};