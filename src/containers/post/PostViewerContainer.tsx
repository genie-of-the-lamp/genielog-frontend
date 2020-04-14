import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../modules";
import PostViewer from "../../components/post/PostViewer";
import { readPostAsync } from '../../modules/post';

function PostViewerContainer() {
    const { data, loading, error } = useSelector((state: RootState) => state.post);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(readPostAsync.request(1));
    }, [dispatch]);

    return (<div>
        {loading && <p>...loading...</p>}
        {error && <p>error !</p>}
        {data && 
            <PostViewer {...data}/>
        }
    </div>);
}

export default PostViewerContainer;