type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>): User {
  const defaultUser: User = {
    name: "",
    surname: "",
    email: "",
    password: "",
  };
  const newData = { ...defaultUser, ...initialValues };
  return newData;
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
