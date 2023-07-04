import React,{useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import { fetchPost } from "../redux/actions/postActionCreator";
import { selectedPost } from "../redux/actions/selectedPostActionCreator";
import {useNavigate} from 'react-router-dom';

const HomePage = () => {
    // To find initial state of object
    const loading = useSelector(state => state.posts.loading);
    const data = useSelector(state => state.posts.data);
    const error = useSelector(state => state.posts.error);
                    // or
    // let {loading, data, error} = useSelector(state => state.posts);
    // console.log(loading, data, error); 

    // To update the current state of object
    const dispatch = useDispatch();

    // To use a navigation
    const navigate = useNavigate();

    function handleClick(post){
        dispatch(selectedPost(post));
        navigate(`/item/${post.id}`)
    }

    // To call the API only once when page loades
    useEffect(() => {
        dispatch(fetchPost())
        console.log('useEffect called')
    },[dispatch]);

    return(
        <div className="cards-container">
            {
                loading &&
                <div className="loader-container">
                    <div className="load-icon"></div>
                </div>
            }
            {
                error &&
                <div className="error">
                    <p>{error}</p>
                </div>
            }
            {
                data.length>0 &&
                data.map(post => (
                    <div key={post.id} className="card" onClick={() => handleClick(post)}>
                        <img src={`https://picsum.photos/200?random=${post.id}`} alt={post.title}/>
                        <p><b>User Id :</b> {post.id}</p>
                        <p><b>Title :</b> <span>{post.title.length>20 ? post.title.substring(0,20)+'...' : post.title}</span></p>
                        <p><b>Body :</b> <span>{post.body.length>60 ? <span>{post.body.substring(0,60)}...<span style={{textDecoration:"underLine"}}>Read more</span></span> : post.body}</span></p>
                    </div>
                ))
            }
        </div>
    )

}

export default HomePage;