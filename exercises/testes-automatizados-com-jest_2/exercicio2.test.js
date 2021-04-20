const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};
  
const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      };

      return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
};

describe('Test getUserName function', () => {
  test('test when find an user', () => {
    expect.assertions(1);
    return getUserName(4).then((user) => {
      expect(user).toEqual('Mark');
    });
  });
  test('test when user not exist', () => {
    expect.assertions(1);
    const id = 1
    return getUserName(id).catch((error) => {
      expect(error).toEqual({error: 'User with ' + id + ' not found.'})
    })
  })
});
