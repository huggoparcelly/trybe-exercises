const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};


describe('Test to check repository', () => {
  const url = 'https://api.github.com/orgs/tryber/repos'
  it('test if todo list contain in repo general', async () => {
    expect.assertions(2);
    const reposName = await getRepos(url);
    expect(reposName).toContain('sd-01-week4-5-project-todo-list');
    expect(reposName).toContain('sd-01-week4-5-project-meme-generator');
  });
})