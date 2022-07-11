import React from 'react';
//import ReactDOM from 'react-dom/client';
import './itemPage.scss';

function ItemPage() {
    return(
        <>
        <div className='item_page'>
            <div className='wrapper__item'>
                <h1 className='item__name'>PlayStation 2</h1>
                <img className='item__img' src = '/img/ps2.jpeg' alt='playstation2'/>
                <p>
                Состояние хорошее. Комплект шнур питания. Тюльпаны. Карта 8mb. 1 геймпад.
                </p>

            </div>

            <div className='wrapper__item__info'>
            <div className='wrapper__location'>
                <h3>Москва</h3>
                <b>2 500 р.</b>
            </div>

            <div className='wrapper__rent'>
                <button className='btn__add'>Добавить в избранное</button>
                <button className='btn__rent'>Арендовать</button>
            </div>

            <span>
                <h4>Владелец</h4>
                <button>Написать сообщение</button>
                <img></img>    
            </span> 
            </div>


        </div>


        </>


    )
}
    export default ItemPage;