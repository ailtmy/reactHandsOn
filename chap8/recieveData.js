async function requestGithubUser(githubLogin) {
    try {
        const respons = await fetch(
        `https://api.github.com/users/${githubLogin}`
        )
        const userData = await respons.json()
        console.log(userData)
    } catch(error) {
        console.error(error)
    }
}



