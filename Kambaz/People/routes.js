import * as dao from "./dao.js";

export default function PeopleRoutes(app) {
    app.get("/api/enrollments/people/:courseid", async (req, res) => {
      const {courseid} = req.params;
        const status = dao.findModulesForCourse(courseid);
        res.send(status);
      });
    
    }

