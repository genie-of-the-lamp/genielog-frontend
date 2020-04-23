import React, { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import PostCardLink from '../components/post/PostCardLink';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { readPostAsync } from '../modules/post';

const MainPage = () => {
    const { data, loading, error } = useSelector((state: RootState) => state.post);
        const dispatch = useDispatch();
    
        useEffect(() => {
            dispatch(readPostAsync.request(1));
        }, [dispatch]);
        
    return(
        <Layout>
            {loading && `...loading`}
            {data && 
                <PostCardLink
                    title={ data.title }
                    description={ data.body }
                    username="username"
                    datetime="0000-00-00"
                    uri="/post"
                />
            }
            {data && 
                <PostCardLink
                    title={ data.title }
                    description={ data.body }
                    username="username"
                    datetime="0000-00-00"
                    uri="/post"
                />
            }
            {data && 
                <PostCardLink
                    title={ data.title }
                    description={ data.body }
                    username="username"
                    datetime="0000-00-00"
                    uri="/post"
                />
            }
        </Layout>
    );
}

export default MainPage;