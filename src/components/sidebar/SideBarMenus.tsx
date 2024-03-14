import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/AppState';
import { useDispatch } from 'react-redux';
import { UserProfileSetType } from '../../store/user/Reducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRegistered, faUser } from '@fortawesome/free-solid-svg-icons';

const SideBarMenus = () => {
    const user = useSelector((state: AppState) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: UserProfileSetType,
            payload: {
                id: 1,
                userName: "testUser"
            }
        });
    }, [dispatch])

    return (
        <React.Fragment>
            <ul>
                <FontAwesomeIcon icon={faUser} />
                <span className='menu-name'>{user?.userName}</span>
            </ul>
            <ul>
                <FontAwesomeIcon icon={faRegistered} />
                <span className='menu-name'>register</span>
            </ul>
        </React.Fragment>
    );

};

export default SideBarMenus;