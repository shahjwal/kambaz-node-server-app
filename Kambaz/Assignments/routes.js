import * as dao from "./dao.js";
export default function AssignmentRoutes(app) {
    app.put("/api/assignments/:assignmentId", (req, res) => {
        const {assignmentId} = req.params;
        const assignmentUpdates = req.body;
        dao.updateAssignment(assignmentId, assignmentUpdates);
        res.sendStatus(204);
    });
    app.get("/api/courses/:courseId/assignments", (req, res) => {
        const {courseId} =req.params;
        const assignments = dao.getAssignmentsForCourse(courseId);
        res.send(assignments);
    });
    app.delete("/api/assignments/:assignmentId", (req, res) => {
        const {assignmentId} = req.params;
        dao.removeAssignment(assignmentId);
        res.sendStatus(204);
    });
    app.post("/api/assignments/create", (req, res) => {
        const assignment = req.body;
        const newAssignment = dao.createAssignment(assignment);
        res.json(newAssignment);
    });
    app.get("/api/assignments", (req, res) => {
        const assignments = dao.getAllAssignments();
        res.send(assignments);
    });
}