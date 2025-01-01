const GITHUB_API_URL = 'https://api.github.com'

export type GitHubRepo = {
  name: string
  description: string
  html_url: string
  stargazers_count: number
  forks_count: number
  topics: string[]
}

export async function getRepository(owner: string, repo: string): Promise<GitHubRepo> {
  const response = await fetch(`${GITHUB_API_URL}/repos/${owner}/${repo}`, {
    headers: {
      Accept: 'application/vnd.github.v3+json',
      Authorization: `token ${import.meta.env.GITHUB_TOKEN}`,
    },
  })

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.statusText}`)
  }

  return response.json()
}
