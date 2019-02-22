const users = [
  {
    id: 1,
    email: 'a@a.com',
    password: 'test123'
  }
];

export const login = (email, password) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const exists = users.filter(user => user.email === email && user.password === password);
      if(exists.length > 0) {
        res({
          data: {
            token: '123'
          }
        });
      } else {
        rej({
          data: {
              message: 'Wrong email or password'
            }
        });
      }
    }, 1500);
  });
}