import React, { useEffect, useState } from 'react';
import { PageHeader, Input, Button } from 'antd';
const { TextArea } = Input;
import { navigate } from '@reach/router';

import db from '../firebase';

const UpdatePost = (props) => {

    // Grab input information event stuff
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        let postRef = db
            .collection('blog-posts')
            .doc(props.id);

        postRef
            .get()
            .then(doc => {
                let { title, content } = doc.data();
                //console.log(data);
                setTitle(title);
                setContent(content);
            });

        // let post = api[props.id]
        // console.log('Post:', post);
        // setTitle(post.title);
        // setContent(post.content);
    }, []);

    const onTitleChange = (event) => {
        // console.log(event.target.value);
        setTitle(event.target.value);
    }

    const onContentChange = (event) => {
        // console.log(event.target.value);
        setContent(event.target.value);
    }

    const onUpdatePost = () => {
        // console.log('Create Post:', title, content);

        // edit the post with the id
        let postRef = db.collection('blog-posts').doc(props.id);

        // let payload = {
        //     post_title: title, 
        //     post_content: content
        // }
        // same as (if Key and Value are the same)
        let payload = {
            title,
            content
        }
        // console.log(payload);
        // console.log(content);

        // UPDATE the blog-post
        postRef.update(payload).then(function () {
            console.log('Document updated!');
        });

        // Send user back to Posts page
        navigate(`/posts`);
    }

    return (
        <div className="create_post_container">
            <div className="page_header_container">
                <PageHeader
                    className="site-page-header"
                    title="Create Post"
                />
            </div>
            <div className="post_inputs_container">
                <div className="post_input_container">
                    <div className="post_input_title">
                        <h2>
                            Post Title
                        </h2>
                    </div>

                    <div className="post_input">
                        <Input placeholder="Post Title" value={title} onChange={onTitleChange} />
                    </div>
                </div>

                <div className="post_input_container">
                    <div className="post_input_title">
                        <h2>
                            Post Content
                        </h2>
                    </div>

                    <div className="post_input">
                        <TextArea rows={6} value={content} onChange={onContentChange} />
                    </div>
                </div>
                <div className="post_input_button">
                    <Button type="primary" size="large" onClick={onUpdatePost}>Update Post</Button>
                </div>
            </div>
        </div>
    )
}

export default UpdatePost;