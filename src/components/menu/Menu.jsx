import '/src/components/menu/menu.sass'

export const Menu = () => {

    const foodsImages = [
        {
            img:"/images/foods/cafe1.jpg",
            name:"Machiatto especial",
            description:"Cafe con leche sabor caramelo machiatto.",
            price: "$45"
        },
        {
            img:"/images/foods/cafe2.jpg",
            name:"Latte caliente",
            description:"Cafe caliente con leche sabor latte.",
            price: "$35"
        },
        {
            img:"/images/foods/cafe3.jpg",
            name:"",
            description:"",
            price: 50
        },
        {
            img:"/images/foods/cafe4.jpg",
            name:"",
            description:"",
            price: 50
        },
        {
            img:"/images/foods/cafe5.jpg",
            name:"",
            description:"",
            price: 50
        },
        {
            img:"/images/foods/cafe6.jpg",
            name:"",
            description:"",
            price: 50
        },
        {
            img:"/images/foods/cafe7.jpg",
            name:"",
            description:"",
            price: 50
        },
        {
            img:"/images/foods/combo1.jpg",
            name:"",
            description:"",
            price: 50
        },
        {
            img:"/images/foods/combo2.jpg",
            name:"",
            description:"",
            price: 50
        },
        {
            img:"/images/foods/cupcake.jpg",
            name:"",
            description:"",
            price: 50
        },
        {
            img:"/images/foods/hotcakes.jpg",
            name:"",
            description:"",
            price: 50
        },
        {
            img:"/images/foods/wafles.jpg",
            name:"",
            description:"",
            price: 50
        },
        {
            img:"/images/foods/ckFresa.jpg",
            name:"",
            description:"",
            price: 50
        },
        {
            img:"/images/foods/ckChocolate.jpg",
            name:"",
            description:"",
            price: 50
        }
    ]

    return(
        <div className='menuContain'>
            <h2>Menu</h2>
            <div className='menuInner'>
                {foodsImages.map((item) => {
                    return(
                        <div className='cardContain'>
                            <img src={item.img} alt="" />
                            <div className="cardText">
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                                <p>{item.price}</p>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}