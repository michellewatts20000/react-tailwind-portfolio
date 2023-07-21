import React from 'react';

const Card = ({ img, imgAlt, eyebrow, title, pricing, url }) => {
  return (
    <div>
      {/* <img className="rounded" src={img} alt={imgAlt} /> */}
      <div className="mt-2">
        <div>
          <div className="text-xs text-slate-600 uppercase font-bold tracking-wider">
            {eyebrow}
          </div>
          <div className="font-bold text-slate-700 leading-snug">
            <a href={url} className="hover:underline">
              {title}
            </a>
          </div>
          <div className="mt-2 text-sm text-slate-600">{pricing}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
