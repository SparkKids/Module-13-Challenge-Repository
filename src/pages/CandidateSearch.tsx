import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';

const CandidateSearch = () => {
  const data = searchGithub();
  console.log("data: " + data);
  return (<h1>CandidateSearch</h1>
  )
};

export default CandidateSearch;
