import { useRef } from 'react'
import ProductImage from './ProductImage/ProductImage'
import ProductName from './ProductName/ProductName'
import ProductPrice from './ProductPrice/ProductPrice'
import './card.css'

/*
    * 스프레드 문법
    let thumbnailImg = 'asset/img/1/thumbnailImg.jpg'
    undefined
    {thumbnailImg }
    {thumbnailImg: 'asset/img/1/thumbnailImg.jpg'}
    {...thumbnailImg}
    {0: 'a', 1: 's', 2: 's', 3: 'e', 4: 't', 5: '/', 6: 'i', 7: 'm', 8: 'g', 9: '/', 10: '1', 11: '/', 12: 't', 13: 'h', 14: 'u', 15: 'm', 16: 'b', 17: 'n', 18: 'a', 19: 'i', 20: 'l', 21: 'I', 22: 'm', 23: 'g', 24: '.', 25: 'j', 26: 'p', 27: 'g'}
    {...{thumbnailImg}}
    {thumbnailImg: 'asset/img/1/thumbnailImg.jpg'}
    productName={productName} 과 결과적으로 똑같음
*/

export default function Card({id, productName, price, thumbnailImg}) {
    // https://test.api.weniv.co.kr/asset/img/5/thumbnailImg.jpg

    const likeBtn = useRef();

    function handleLikeBtn(e) {
      // console.log(e);
      // console.log(e.currentTarget);
        e.currentTarget.classList.toggle("on");
    }

    return (
        <li className="product-item">
            <div className="product-img">
                <ProductImage {...{ thumbnailImg }} />
            </div>
            <ProductName {...{ productName }} />
            <button
                ref={likeBtn}
                onClick={handleLikeBtn}
                className="like-btn"
            ></button>
            <ProductPrice {...{ price }} />
        </li>
    );
};