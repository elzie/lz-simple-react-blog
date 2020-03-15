import React from 'react';
import { PageHeader } from 'antd';
import Post from './Post';

function Posts(props) {
    return (
        <div className="posts_container">
            <div className="page_header_container">
                <PageHeader
                    className="site-page-header"
                    title="Posts"
                />
            </div>
            <div className="articles_container">
                <Post />
            </div>
        </div>
    )
}

export default Posts;