const students = new Map<number, string>();

students.set(191,"Taha");
students.set(209,"Abdullah");
students.set(365,"Uzair");
students.set(455,"Ashad");
students.set(533,"Ahmed");

students.forEach((name,id) =>
{
    console.log(`Student ID: ${id},Student Name: ${name}`);
    
}
);