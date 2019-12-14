import React from "react";
import "./style.css";

export default function Post({ data: post }) {
  return (
    <>
      {post.map(p => (
        <div key={p.id} className="Post">
          <div className="containerTitlePost">
            <img src={p.author.avatar} />
            <div className="containetOwnerData">
              <strong>
                <p>{p.author.name}</p>
              </strong>
              <small>{p.date}</small>
            </div>
          </div>
          <div className="Postcontent">
            <p>{p.content}</p>
          </div>

          <br />
          <hr />
          <div className="Comment">
            {p.comments.map(c => (
              <div key={c.id} className="Comments">
                <img src={c.author.avatar} />
                <div className="Containercommets">
                  <p>
                    <strong>{c.author.name}</strong> &nbsp;
                    {c.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
