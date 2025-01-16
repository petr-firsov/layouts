import PropTypes from "prop-types"

export default function IconSwitch({icon, onSwitch}) {
    if (icon == 'view_module') {
        return (
            <img className="view-icon" src="/ViewModule.svg" onClick={onSwitch} />
        )
    } else {
        return (
            <img className="view-icon" src="/ViewList.svg" onClick={onSwitch} />        
        )
    }
}

IconSwitch.propTypes = {
    icon: PropTypes.string,
    onSwitch: PropTypes.func,
}