"use client"
import GitHubButton from 'react-github-btn'

type FooterProps = {
    github: string
}
const Footer = ({github} : FooterProps) => (
    <div className="text-center w-full mt-16">
        <GitHubButton href={github + "/react-tailwind-portfolio"}
                      data-color-scheme="no-preference: light; light: light; dark: light;" data-icon="octicon-star"
                      data-size="large" data-show-count="true"
                      aria-label="Star ntkme/github-buttons on GitHub">Star</GitHubButton>
        &nbsp;&nbsp;
        <GitHubButton href={github + "/react-tailwind-portfolio/fork"}
                      data-color-scheme="no-preference: light; light: light; dark: light;"
                      data-icon="octicon-repo-forked" data-size="large" data-show-count="true"
                      aria-label="Fork ntkme/github-buttons on GitHub">Fork</GitHubButton>
    </div>
)

export default Footer
