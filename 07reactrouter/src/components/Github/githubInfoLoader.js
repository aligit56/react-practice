export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/aligit56')

  if (!response.ok) {
    throw new Response('GitHub profile could not be loaded.', { status: response.status })
  }

  return response.json()
}
