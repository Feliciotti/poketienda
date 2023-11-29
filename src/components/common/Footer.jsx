import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
  return (
    <footer className='d-flex align-items-center p-3 justify-content-center flex-column'>
        <span className='fs-5 footer-text'>
            Made by <a className='footer-link' href="https://github.com/Feliciotti" target='_blank'>Feliciotti</a> - 2023
        </span>
        <div className='d-flex gap-4'>
          <span className='fs-4 footer-text'>
              <a className='footer-link' href="https://www.linkedin.com/in/feliciotti/" target='_blank'><FontAwesomeIcon className='fontawesome' icon={faLinkedin} /></a>
          </span>
          <span className='fs-4 footer-text shadow-ms'>
              <a className='footer-link' href="https://github.com/Feliciotti" target='_blank'> <FontAwesomeIcon className='fontawesome' icon={faGithub} /> </a>
          </span>
        </div>
    </footer>
  )
}