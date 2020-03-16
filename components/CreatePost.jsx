import React, { useState } from 'react';
import { PageHeader, Input, Button } from 'antd';
const { TextArea } = Input;
import db from '../firebase';

const CreatePost = (props) => {

    //Grab input information event stuff
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const onTitleChange = (event) => {
        //console.log(event.target.value);
        setTitle(event.target.value);
    }

    const onContentChange = (event) => {
        //console.log(event.target.value);
        setContent(event.target.value);
    }

    const onCreatePost = () => {
        // console.log('Create Post:', title, content);
        // Create firebase storage
        let postRef = db.collection('blog-posts');

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

        // Save to DB and show blog-post ID(doc.id)
        postRef.add(payload).then(function (doc) {
            console.log('Document successfully written!', doc.id);
        });
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
                    <Button type="primary" size="large" onClick={onCreatePost}>Create Post</Button>
                </div>
            </div>
        </div>
    )
}

export default CreatePost;