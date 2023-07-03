export default function Footer(){
const fullYear = new Date().getFullYear()

const githubLink = "https://github.com/Samuel-H-Dev"

    return(

        <footer>
            <p>&copy; {fullYear}</p>
            <p><a href={githubLink} target="_blank" rel="noreferrer">Github</a></p>
        </footer>
    )
}