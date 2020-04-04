import React from 'react'
import HiddenCheckBox from './HiddenCheckBox';
import Styles from './CheckBox.module.css';
import PropTypes from 'prop-types'

const CheckBox = ({ className, checked, ...props }) => (
    <div className={Styles.container}>
        <HiddenCheckBox checked={checked} {...props} />
        <div className={Styles.checkbox}>
            <svg viewBox="-5 0 20 20" className={`${Styles.icon} ${checked ? Styles.visible : ''}`}>
                <polyline points="20 6 9 17 4 12" />
            </svg>
        </div>
    </div>
);

CheckBox.propTypes = {
    checked: PropTypes.bool,
};

export default CheckBox