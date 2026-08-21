import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className="page-shell github-shell">
      <section className="github-profile">
        <div className="github-avatar-wrap"><img src={data.avatar_url} alt={`${data.login} profile`} /><span>available</span></div>
        <div className="github-copy"><p className="eyebrow"><span className="pulse-dot" /> Live from GitHub</p><h1>{data.name || data.login}</h1><p className="github-handle">@{data.login}</p><p className="page-lede">A live profile card loaded by the route loader. This is data fetching without putting the request inside the component.</p><a className="primary-action" href={data.html_url} target="_blank" rel="noreferrer">View GitHub profile <span aria-hidden="true">-&gt;</span></a></div>
        <div className="github-metrics"><div><strong>{data.followers}</strong><span>followers</span></div><div><strong>{data.public_repos}</strong><span>repositories</span></div><div><strong>{data.following}</strong><span>following</span></div></div>
      </section>
    </div>
  )
}

export default Github