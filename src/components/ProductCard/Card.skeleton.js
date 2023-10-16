
import React from 'react'
import Skeleton,{SkeletonTheme} from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function Cardskeleton({count}) {
  return (
    <SkeletonTheme baseColor="#eee" highlightColor="#f5F5F5" >
      {Array(count)
        .fill(0)
        .map((item, index) => {
          return (
            <article className="card" key={index}>
              <div className="card__img">
                <Skeleton />
              </div>
              <div className="card__skeleton___body">
                <h4 className="card__skeleton__title">
                  <Skeleton />
                </h4>
                <span className="card__skeleton__price">
                  <Skeleton />
                </span>
                <div>
                  <span className="rate__skeleton_stras">
                    <Skeleton />
                  </span>
                </div>
              </div>
            </article>
          );
        })}
    </SkeletonTheme>
  );
}

export default Cardskeleton;