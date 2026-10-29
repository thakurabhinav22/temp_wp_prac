# Git and GitHub Practical

## Aim
To use Git and GitHub for repository creation, version control, branching, merging, and project collaboration.

## 1. Install Git

Install Git on your system and verify the installation.

```bash
git --version
```

## 2. Configure Git

Set your username and email address.

```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

## 3. Create a Local Repository

Create a project folder and initialize Git.

```bash
mkdir myproject
cd myproject
git init
```

Create a sample file.

```bash
echo "# My Project" > README.md
```

## 4. Version Control

Check file changes, stage files, and commit them.

```bash
git status
git add .
git commit -m "Initial commit"
```

## 5. Create a GitHub Repository

1. Open [https://github.com](https://github.com).
2. Log in to your GitHub account.
3. Click **New repository**.
4. Enter a repository name and create the repository.
5. Connect your local repository to GitHub.

```bash
git remote add origin https://github.com/USERNAME/REPOSITORY.git
git branch -M main
git push -u origin main
```

Replace `USERNAME` and `REPOSITORY` with your GitHub username and repository name.

## 6. Branching

Create a new branch to work on a feature without changing the main branch.

```bash
git branch feature
git switch feature
```

Make changes to a file and commit them.

```bash
git add .
git commit -m "Added new feature"
```

## 7. Merging

Merge the feature branch into the main branch.

```bash
git switch main
git merge feature
git push origin main
```

## 8. Project Collaboration

1. Share the GitHub repository with collaborators.
2. Collaborators clone the repository.

```bash
git clone https://github.com/USERNAME/REPOSITORY.git
```

3. Create a separate branch for new changes.
4. Commit and push changes to GitHub.
5. Create a Pull Request to propose merging changes into the main branch.
6. Review the changes and merge the Pull Request.

## 9. Useful Git Commands

| Command | Purpose |
|---|---|
| `git init` | Initialize a repository |
| `git clone URL` | Copy a remote repository |
| `git status` | Check repository status |
| `git add .` | Stage changes |
| `git commit -m "message"` | Save changes in version history |
| `git log` | View commit history |
| `git branch` | List branches |
| `git switch branch-name` | Switch branches |
| `git merge branch-name` | Merge another branch |
| `git pull` | Download and integrate remote changes |
| `git push` | Upload local commits to GitHub |

## Result

Successfully learned to create Git and GitHub repositories, track project changes using version control, create and merge branches, and collaborate with other developers using GitHub.
