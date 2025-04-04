import * as dao from "./dao.js";
export default function EnrollmentRoutes(app) {
    app.get("/api/enrollments", (req, res) => {
        const enrollments = dao.getAllEnrollments();
        res.send(enrollments);
    });
    app.delete("/api/enrollments/:enrollmentId", (req, res) => {
        const {enrollmentId} = req.params;
        dao.removeEnrollment(enrollmentId);
        res.sendStatus(204);
    });
    app.post("/api/enrollments/create", (req, res) => {
        const enrollment = req.body;
        const newEnrollment = dao.createEnrollment(enrollment);
        res.json(newEnrollment);
    });
}