import { Button } from 'reactstrap'
import './slate-editor.scss'

const ControllMenu = (props) => {
    
    return (
        <div className="controll-menu">
            <h1 className="title">Write Your Story</h1>
            <div className="status-box">
                { props.isSaving ? 'Saving...' : 'Saved' }
            </div>
            <Button disabled={props.isSaving} color="success" onClick={props.save}>Save</Button>
        </div>
    )
}

export default ControllMenu