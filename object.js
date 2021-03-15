var users = [
    {
        name: "Michael",
        age: 37
    },
    {
        name: "John",
        age: 30
    },
    {
        name: "David",
        age: 27
    }
];

console.log(users[1].age);      // Print the age of John
console.log(users[0].name);     // Print the name f first object
for( var id= 0; id<users.length;id++)       //print the name and age of all users
{
    console.log(users[id].name + "-" + users[id].age);
}
