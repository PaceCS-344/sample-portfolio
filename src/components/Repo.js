
export default function Repo({repo}) {
  
  return (
    <div className="card my-2" >
      <div className="card-body">
        <h3 className="overflow-hidden">{repo.name}</h3>
        <p>{repo.description}</p>
        <p><strong>Language: </strong>{repo.language}</p>
        <p><a href={repo.svn_url} target="_blank">See More</a></p>
      </div>
    </div>
  );
}