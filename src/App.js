import React, { useEffect, useState, useRef } from 'react';
import Repo from './components/Repo';

export default function Portfolio() {
  const [repos, setRepos] = useState([]);

  const apiQueryString = "sort=updated&direction=desc&per_page=10";
  
  useEffect(() => {
      fetch(`https://api.github.com/users/sonetteira/repos?${apiQueryString}`)
        .then(res => res.json())
        .then(setRepos)
        .catch(err => console.error(err));
  }, [apiQueryString]);
  
  return <div className="container">
          {repos.length > 0 ? (
            repos.map((repo) => (
              <div key={repo.id} >
                <Repo repo={repo} />
              </div>
            ))
          ) : (
            <div className="loader"></div>
          )}
  </div>;
}

