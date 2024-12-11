// TODO: Create an interface for the Candidate objects 
//returned by the API

export interface GitHubUser {
    name: string;
    login: string;
    location: string;
    company: string;
    email: string;
    id: number;
    avatar_url: string;
    html_url: string;
    // Add other properties as needed based on the GitHub User API response
  }

  