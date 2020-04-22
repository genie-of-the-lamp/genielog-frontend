import React from 'react';
import WriteButtonGroup from "../../components/write/WriteButtonGroup";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../modules';
import { useHistory } from 'react-router';

const WriteButtonGroupContainer = () => {
    const history = useHistory();
    const { title, body } = useSelector((state: RootState) => state.write);
    const dispatch = useDispatch();

    const onBack = () => {
        history.goBack();
    };

    const onPost = () => {
        console.log(title);
        console.log(body);
    };

    return(
        <WriteButtonGroup 
            onBack={onBack}
            onPost={onPost}
        />
    );
}

export default WriteButtonGroupContainer;