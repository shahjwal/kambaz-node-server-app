import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

export function findModulesForCourse(courseId) {
  const { enrollments , users } = Database;
  const filteredEnrolled = enrollments.filter((e) => e.course == courseId);

  const enrolledUsers = filteredEnrolled.map((e) => {
    const user = users.find((u) => u._id == e.user);
    return { ...user, enrollmentId: e._id };
  }); 
  console.log("enrolledUsers", enrolledUsers);
  return enrolledUsers;
}