import Database from "../Database/index.js";
export function getAllAssignments() {
    return Database.assignments;
}
export function getAssignmentsForCourse(courseId) {
    return Database.assignments.filter((a)=>a.course===courseId);
}
export function createAssignment(assignment) {
    const newAssignment = {...assignment, _id: Date.now().toString()};
    Database.assignments = [...Database.assignments, newAssignment];
    return newAssignment;
}
export function removeAssignment(assignmentId) {
    const {assignments} = Database;
    Database.assignments = assignments.filter((a) => a._id !== assignmentId);
}
export function updateAssignment(assignmentId, assignmentUpdates) {
    const { assignments } = Database;
    const assignment = assignments.find((a) => a._id === assignmentId);
    Object.assign(assignment, assignmentUpdates);
    return assignment;
}