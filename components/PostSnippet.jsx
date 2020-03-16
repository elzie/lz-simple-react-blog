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
                extra={<Link to={`/post/${props.id}`}>Read Full Article</Link>}
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