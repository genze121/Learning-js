// De - structuring of objects.

const course = {
  courseName: "JavaScript",
  courseFee: 999,
  courseInstructor: "Hitesh"
};

console.log(course);
console.log(course.courseFee);

const { courseInstructor: instructor } = course; // this is how we destructure the object.
console.log(instructor);
