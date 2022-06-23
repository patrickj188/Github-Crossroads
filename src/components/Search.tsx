import { useState, useEffect } from "react";
import { Octokit } from "octokit";



const Search = () => {
    const [commitsData, setCommitsData] = useState({})
    const [repo, setRepo] = useState('DarkSoulsBosses')

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


    return (
        <div>
            Something will go here
        </div>
    )
}

export default Search;


