import React from 'react';
import { Card } from 'antd';
import { Link } from '@reach/router';


const PostSnippet = (props) => {



    return (
        <div className="post_snippet_container">
            <Card
                style={{ marginTop: 16 }}
                type="inner"
                title={props.title}
                extra={
                    <div className="post_snippet_links">
                        <Link to={`/post/${props.id}`} style={{ marginRight: '15px' }}>Read Full Article</Link>
                        {props.user &&
                            <Link to={`/update_post/${props.id}`}>Edit</Link>
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