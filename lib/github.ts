import dotenv from 'dotenv';

dotenv.config();

/**
 * Utility function to fetch content from GitHub repository.
 * @param path - Path to the file or directory inside the repository.
 * @returns Content of the file or directory.
 */
export async function fetchFromGitHub(
  path: string
): Promise<string> {
  const repoOwner = process.env.REPO_OWNER;
  const repoName = process.env.REPO_NAME;
  const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${path}`;

  const response = await fetch(apiUrl, {
    headers: {
      Authorization: `Bearer ${process.env.TOKEN_GITHUB}`, // Ensure your token is in the .env file
      Accept: 'application/vnd.github.v3.raw', // Fetch raw content
    },
  });

  if (!response.ok) {
    console.error(
      `Failed to fetch ${path}:`,
      response.status,
      response.statusText
    );
    throw new Error(`Failed to fetch ${path}`);
  }

  return await response.text(); // Return the raw file content
}
