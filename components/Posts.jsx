import React, { useState, useEffect } from 'react';
import { PageHeader } from 'antd';
import PostSnippet from './PostSnippet';
// import api from '../mock_api';
import _ from 'lodash';
import db from '../firebase';

function Posts(props) {
    // Retrieve posts from firestore db
    const [posts, setPosts] = useState([]);

    useEffect(() => {

        let userId = props?.user.uid ? props.user.uid : props.uid;

        let postsRef = db.collection('blog-users').doc(userId).collection('blog-posts');

        // postsRef
        //     .get()
        //     .then(posts => {
        //         posts.forEach(post => {
        //             let data = post.data();
        //             let { id } = post;
        //             // Ex. ^ get { id, name, etc } from 'post'

        //             // console.log('thePost: ', id, data);

        //             // Modify and add the id
        //             let payload = {
        //                 id,
        //                 ...data
        //                 // ... Spread operator, spreads how many any keys into the object
        //             }
        //             // console.log('payload: ', payload);

        //             // Set data into our collection, with concatination(add something to the collection)
        //             setPosts((posts) => [...posts, payload]);
        //             // "whatever was in 'posts', leave it there - but add 'payload' as a new one."
        //         });
        //     });
        // querySnapshot(posts) is basically 'all of our Data'. Similar to .map
        postsRef.onSnapshot(async posts => {
            // Realtime updates from DB
            let postsData = await posts.docs.map(post => {
                let data = post.data();
                let { id } = post;

                let payload = {
                    id,
                    ...data
                }
                return payload;
            });
            console.log(postsData);
            setPosts(postsData);
        });

    }, []);

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
                    // console.log('Posts: ', posts);
                }
                {
                    // Option 1
                    // _.map(api, (article) => {
                    //     // { console.log(article) }
                    //     return (
                    //         <PostSnippet title={article.title} content={article.content} />
                    //     )
                    // })

                    //Option 2 - implicit return
                    // _.map(api, (article, idx) => (
                    //     <PostSnippet
                    //         key={idx}
                    //         id={idx}
                    //         title={article.title}
                    //         content={article.content} />
                    // ))
                    _.map(posts, (article, idx) => (
                        <PostSnippet
                            key={idx}
                            id={article.id}
                            title={_.capitalize(article.title)}
                            content={
                                article.content.substring(0, 1000)
                            }
                            user={props.user}
                            uid={props.uid} />
                    )).reverse()
                }
            </div>
        </div>
    )
}

export default Posts;