import React from 'react';
import { PageHeader } from 'antd';
import Post from './Post';
import api from '../mock_api';
import _ from 'lodash';

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
                {
                    // Option 1
                    // _.map(api, (article) => {
                    //     // { console.log(article) }
                    //     return (
                    //         <Post title={article.title} content={article.content} />
                    //     )
                    // })

                    //Option 2 - implicit return
                    _.map(api, (article) => (
                        <Post title={article.title} content={article.content} />
                    ))
                }
            </div>
        </div>
    )
}

export default Posts;