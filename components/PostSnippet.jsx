import React from 'react';
import { Card } from 'antd';
import { Link } from '@reach/router';
import db from '../firebase';

const PostSnippet = (props) => {

    const onDeletePost = () => {
        let postRef = db
            .collection('blog-users')
            .doc(props.user.uid)
            .collection('blog-posts')
            .doc(props.id);

        postRef.delete();
        // .then(function () {
        //     console.log('Post deleted!')

        // }).catch(function (error) {
        //     console.log('Error removing post...');
        //     console.log('Error: ', error);
        // });
    }

    return (
        <div className="post_snippet_container">
            <Card
                style={{ marginTop: 16 }}
                type="inner"
                title={props.title}
                extra={
                    <div className="post_snippet_links">
                        <Link to={`/blogs/${props.uid}/post/${props.id}`} style={{ marginRight: '15px', float: 'left' }}>Read Full Article</Link>
                        {props.user &&
                            <div className="post_edit_links" style={{ float: 'right' }}>
                                <Link to={`/update_post/${props.id}`} style={{ marginRight: '15px' }}>Edit</Link>

                                <a onClick={onDeletePost}>Delete</a>
                            </div>
                            // Only visible to logged in users
                        }
                    </div>
                }
            >
                <div className="post_snippet_content">
                    {
                        props.content.split('\n').map((paragraph, idx) => {
                            return <p key={idx}>{paragraph}</p>;
                        })
                    }
                </div>
            </Card>
        </div>
    )
}

export default PostSnippet;