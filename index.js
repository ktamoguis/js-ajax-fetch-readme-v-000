//const app = "I don't do much.";

const token = "4e2b07d04363a4ec4530e98a8ec43ebd21a1d07f";

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
