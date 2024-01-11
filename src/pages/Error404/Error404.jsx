import NotFound from '../../components/NotFound/NotFound'
import './Error404.scss'

function Error404() {
    return (
        <div className="error404">
            <NotFound></NotFound>
            <p className="error404__description">
                Oups! La page que vous demandez n'existe pas.
            </p>
        </div>
    )
}

export default Error404
