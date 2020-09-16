import { Container } from 'reactstrap'
import './styles.scss'

const BasePage = (props) => {
    const { className, title, containerClass } = props
    return (
        <div className={`base-page ${className}`}>
            <Container className={containerClass}>
                {title && <div className="page-header"> <h1 className="page-header-title">{title}</h1> </div>}
                {props.children}
            </Container>
        </div>
    )
}

// this function allows us to make a default for className
BasePage.defaultProps = {
    className: '',
    containerClass: ''
}

export default BasePage                                                                                           