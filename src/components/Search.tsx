import { useState, useEffect } from "react";
import { Octokit } from "octokit";
import { CommitList } from "./CommitList";

interface SearchProps {
    repo: string
}

const Search = ({ repo }: SearchProps) => {
    const [commitsData, setCommitsData] = useState<any[]>([])

    // Set up useEffect call to rerender data when the repo destination changes on the api call. 

    useEffect(() => {

        // using octokit for githubs API 
        const octokit = new Octokit({
            auth: process.env.REACT_APP_API_KEY
        })

        const search = async () => {
            await octokit.request('GET /repos/{owner}/{repo}/commits', {
                owner: 'patrickj188',
                repo: repo
            }).then((response) => {
                console.log(response.data)
                setCommitsData(response.data);
            })
        }

        search()

    }, [repo])

    // Mapping over the response data and sending them as props to the CommitList component 
    let renderedCommits = commitsData.map((x) => {
        return <CommitList key={x.sha} message={x.commit.message} date={x.commit.author.date} />
    })

    return (
        <div>
            {renderedCommits}
        </div>
    )
}

export default Search;


