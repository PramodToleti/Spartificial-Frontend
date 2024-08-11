const users = [
  {
    user_id: 1,
    username: "john_doe",
    name: "John Doe",
    email: "john.doe@example.com",
    last_active: "today",
  },
  {
    user_id: 2,
    username: "jane_smith",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    last_active: "yesterday",
  },
  {
    user_id: 3,
    username: "bob_jones",
    name: "Bob Jones",
    email: "bob.jones@example.com",
    last_active: "2 days ago",
  },
  {
    user_id: 4,
    username: "alice_williams",
    name: "Alice Williams",
    email: "alice.williams@example.com",
    last_active: "today",
  },
  {
    user_id: 5,
    username: "michael_brown",
    name: "Michael Brown",
    email: "michael.brown@example.com",
    last_active: "3 days ago",
  },
  {
    user_id: 6,
    username: "linda_johnson",
    name: "Linda Johnson",
    email: "linda.johnson@example.com",
    last_active: "today",
  },
  {
    user_id: 7,
    username: "william_moore",
    name: "William Moore",
    email: "william.moore@example.com",
    last_active: "4 days ago",
  },
  {
    user_id: 8,
    username: "emily_taylor",
    name: "Emily Taylor",
    email: "emily.taylor@example.com",
    last_active: "yesterday",
  },
  {
    user_id: 9,
    username: "daniel_anderson",
    name: "Daniel Anderson",
    email: "daniel.anderson@example.com",
    last_active: "2 days ago",
  },
  {
    user_id: 10,
    username: "susan_thomas",
    name: "Susan Thomas",
    email: "susan.thomas@example.com",
    last_active: "today",
  },
  {
    user_id: 11,
    username: "james_jackson",
    name: "James Jackson",
    email: "james.jackson@example.com",
    last_active: "today",
  },
  {
    user_id: 12,
    username: "patricia_white",
    name: "Patricia White",
    email: "patricia.white@example.com",
    last_active: "5 days ago",
  },
  {
    user_id: 13,
    username: "robert_harris",
    name: "Robert Harris",
    email: "robert.harris@example.com",
    last_active: "today",
  },
  {
    user_id: 14,
    username: "barbara_martin",
    name: "Barbara Martin",
    email: "barbara.martin@example.com",
    last_active: "yesterday",
  },
  {
    user_id: 15,
    username: "charles_clark",
    name: "Charles Clark",
    email: "charles.clark@example.com",
    last_active: "3 days ago",
  },
  {
    user_id: 16,
    username: "jennifer_rodriguez",
    name: "Jennifer Rodriguez",
    email: "jennifer.rodriguez@example.com",
    last_active: "today",
  },
  {
    user_id: 17,
    username: "mary_lewis",
    name: "Mary Lewis",
    email: "mary.lewis@example.com",
    last_active: "2 days ago",
  },
  {
    user_id: 18,
    username: "richard_lee",
    name: "Richard Lee",
    email: "richard.lee@example.com",
    last_active: "yesterday",
  },
  {
    user_id: 19,
    username: "joseph_walker",
    name: "Joseph Walker",
    email: "joseph.walker@example.com",
    last_active: "today",
  },
  {
    user_id: 20,
    username: "sarah_hall",
    name: "Sarah Hall",
    email: "sarah.hall@example.com",
    last_active: "4 days ago",
  },
  {
    user_id: 21,
    username: "david_allen",
    name: "David Allen",
    email: "david.allen@example.com",
    last_active: "today",
  },
];

export const calculateTotalUsers = () => {
  return users.length;
};

export const calculateActiveUsers = () => {
  return users.filter((user) => user.last_active === "today").length;
};

export default users;
