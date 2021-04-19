import React, { Component } from 'react'


const ProductosCañas = [
    {
        id: 1,
        titulo: 'Cañas Tacuara 1.40',
        description: 'Cañas tacuara de un metro con cuarenta centimetros para macetas',
        price: 10,
        pictureUrl: 'https://www.google.com.ar/search?q=ca%C3%B1a+tacuara&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi5zf_SoonwAhVxr5UCHRb1Dh0Q_AUoAXoECAEQAw&biw=1600&bih=789#imgrc=SPmF2UpIl0QRLM'

    },
    {
        id: 2,
        titulo: 'Cañas Tacuara 0.60',
        description: 'Cañas tacuara de sesenta centimetros para macetas',
        price: 5,
        pictureUrl: 'https://www.google.com.ar/search?q=ca%C3%B1a+tacuara&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi5zf_SoonwAhVxr5UCHRb1Dh0Q_AUoAXoECAEQAw&biw=1600&bih=789#imgrc=SPmF2UpIl0QRLM'
        
    },
    {
        id: 3,
        titulo: 'Cañas Tacuara 2.20',
        description: 'Cañas tacuara de dos metros con veinte centimetros para decoracion',
        price: 50,
        pictureUrl: 'https://www.google.com.ar/search?q=ca%C3%B1a+tacuara&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi5zf_SoonwAhVxr5UCHRb1Dh0Q_AUoAXoECAEQAw&biw=1600&bih=789#imgrc=SPmF2UpIl0QRLM'
        
    }
]

class Item extends Component{
constructor() {
    
    super();
    this.state = {
        Productos_Cañas: [],
    };
}   

componentDidMount() {
    setTimeout(() => {
            this.setState({
                Productos_Cañas: ProductosCañas,
            })
    }, 2000)
}

 render () {
        return <div>
            <ul>
                {this.state.Productos_Cañas.map((a) => {
                    return <li>{a.titulo} - {a.description} - {a.price} - {a.pictureUrl} </li>;
                })}
            </ul>
        </div> 
    }
}

export default Item;
