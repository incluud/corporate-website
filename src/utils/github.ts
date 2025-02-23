const GITHUB_API_URL = 'https://api.github.com'

export type GitHubRepo = {
  name: string
  description: string
  html_url: string
  stargazers_count: number
  forks_count: number
  topics: string[]
}

// Server-side fetch with token (used at build time)
export async function getRepository(owner: string, repo: string): Promise<GitHubRepo> {
  const token = import.meta.env.GITHUB_TOKEN
  const headers: HeadersInit = {
    Accept: 'application/vnd.github.v3+json',
  }

  // Only add token if it exists
  if (token) {
    headers.Authorization = `token ${token}`
  } else {
    console.warn('No GitHub token found in environment variables')
  }

  const response = await fetch(`${GITHUB_API_URL}/repos/${owner}/${repo}`, { headers })

  if (!response.ok) {
    console.error('Response status:', response.status)
    console.error('Response headers:', Object.fromEntries(response.headers.entries()))
    throw new Error(`GitHub API error: ${response.statusText}`)
  }

  return response.json()
}
