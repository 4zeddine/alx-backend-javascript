import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

/**
 * Module for binding routes to the appropriate handler
 * @param {Express} app The Express application.
 */
const mapRoutes = (app) => {
  app.get('/', AppController.getHomepage);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default mapRoutes;
module.exports = mapRoutes;
