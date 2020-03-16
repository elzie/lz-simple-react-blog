import React, { useState, useEffect } from 'react';
import { PageHeader, Card } from 'antd';
import api from '../mock_api';

const Post = (props) => {

    console.log(props);
    //State management
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    //useEffect runs before component get rendered
    useEffect(() => {
        let post = api[props.id]
        console.log('Post:', post);
        setTitle(post.title);
        setContent(post.content);
    });


    return (
        <div className="post_container">
            <div className="page_header_container">
                <PageHeader
                    className="site-page-header"
                    title={title}
                />
            </div>
            <div className="post_content_container">
                <Card style={{ marginTop: '20px' }}>
                    {
                        //Dynamicly add <p>-tag for each line-break
                        content.split('\n').map((paragraph, idx) => {
                            return <p key={idx}>{paragraph}</p>;
                        })
                    }
                </Card>
            </div>
        </div>
    )
}

export default Post;