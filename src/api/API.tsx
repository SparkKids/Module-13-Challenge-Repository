import { GitHubUser } from '../interfaces/Candidate.interface'; 
const searchGithub = async () => {
  try {
    const start = Math.floor(Math.random() * 100000000) + 1;
     console.log(import.meta.env);
    const response = await fetch(
      `https://api.github.com/users?since=${start}`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
      }
    );
    console.log('Response:', response);
    const users = await response.json();
    if (!response.ok) {
      throw new Error('invalid API response, check the network tab');
    }
    console.log('After if (!response.ok)');
    console.log('Response:', response);
    alert(response);
    console.log(users.length);
    console.log('Users:', users);

    // Iterate over each record and log it
    users.forEach((record: GitHubUser, index: number) => {
      console.log(`Record ${index + 1} name: `, record.name);
      console.log(`Record ${index + 1} login: `, record.login);
      console.log(`Record ${index + 1} location: `, record.location);
      console.log(`Record ${index + 1} avatar_url: `, record.avatar_url);
      console.log(`Record ${index + 1} email: `, record.email);
      console.log(`Record ${index + 1} html_url: `, record.html_url);
      console.log(`Record ${index + 1} company: `, record.company);
    });
    return users;
  } catch (err) {
    // console.log('an error occurred', err);
    return [];
  }
};

const searchGithubUser = async (username: string) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });
    const users = await response.json();
    console.log(users.length);
    if (!response.ok) {
      throw new Error('invalid API response, check the network tab');
    }
    return users;
  } catch (err) {
    // console.log('an error occurred', err);
    return {};
  }
};

export { searchGithub, searchGithubUser };
