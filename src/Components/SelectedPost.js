import React from "react";
import { useSelector } from "react-redux";

const SelectedPost = () => {
    const selectedPost = useSelector(state => state.selectedPost)
    // console.log(selectedPost);

    return (
        <div className="detail-page">
            {
                selectedPost &&
                <div key={selectedPost.id} className="card-detail">
                    <img src={`https://picsum.photos/200?random=${selectedPost.id}`} alt={selectedPost.title}/>
                    <p><b>User Id :</b> {selectedPost.userId}</p>
                    <p><b>Title :</b> <span>{selectedPost.title}</span></p>
                    <p><b>Body :</b> <span>{selectedPost.body}</span></p>
                </div>
            }
        </div>
    )
}

export default SelectedPost;