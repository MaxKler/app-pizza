import pizza from './project/image/views/main/svg/pizza.svg'
import pizza1 from './project/image/views/main/svg/pizza1.svg'
import pizza2 from './project/image/views/main/svg/pizza2.svg'
import pizza3 from './project/image/views/main/svg/pizza3.svg'
import pizza4 from './project/image/views/main/svg/pizza4.svg'

export const DATA = [
    {
        id: 1,
        title: 'авторська піца'
    },
    {
        id: 2,
        title: 'класична піца '
    },
    {
        id: 3,
        title: ' гарячі закуски до пива'
    },
    {
        id: 4,
        title: ' бургери'
    },
    {
        id: 5,
        title: 'роли'
    },
    {
        id: 6,
        title: ' сети'
    },
    {
        id: 7,
        title: 'сніданки'
    },
    {
        id: 8,
        title: 'салати'
    },
    {
        id: 9,
        title: ' паста'
    },
    {
        id: 10,
        title: 'холодні закуски'
    },
    {
        id: 11,
        title: 'перші страви'
    },
    {
        id: 12,
        title: 'основні страви'
    },
    {
        id: 13,
        title: 'десерти'
    },
    {
        id: 14,
        title: ' морозиво'
    },
    {
        id: 15,
        title: 'напої'
    },
    {
        id: 16,
        title: 'соуси'
    }
]

export const foodBlock = 
      {   
          types: [
            {
                id: 34,
                title:  'Авторська піца'
            },
          ],
          
          pizzas: [
            {
                id: 0,
                image: pizza,
                status_type: 'heart',
                name: 'Цезаре',
                sizeType: [
                   {
                       id: 0,
                       size: 30
                   },
                   {
                       id: 1,
                       size: 40
                    }
                ],
                price: '220',
                weight: '810',      
            },
            {
                id: 1,
                image: pizza1,
                name: 'З куркою',
                icon_status: 'discount',
                discount: 150,
                sizeType: [
                   {
                       id: 0,
                       size: 30
                   },
                   {
                       id: 1,
                       size: 40
                    }
                ],
                price: '120',
                weight: '400',      
            },
            {
                id: 2,
                image: pizza2,
                status_type: 'perchik',
                name: 'Кебаб',
                icon_status: 'newItem',
                sizeType: [
                   {
                       id: 0,
                       size: 30
                   },
                   {
                       id: 1,
                       size: 40
                    }
                ],
                price: '140',
                weight: '440',      
            },
            {
                id: 3,
                image: pizza3,
                status_type: 'brokkoli',
                name: 'Чотири сири',
                sizeType: [
                   {
                       id: 0,
                       size: 30
                   },
                   {
                       id: 1,
                       size: 40
                    }
                ],
                price: '220',
                weight: '810',      
            },
            {
                id: 4,
                image: pizza4,
                name: 'Мисливська',
                sizeType: [
                   {
                       id: 0,
                       size: 30
                   },
                   {
                       id: 1,
                       size: 40
                    }
                ],
                price: '280',
                weight: '810',      
            },
            {
                id: 5,
                image: pizza,
                name: 'Цезаре',
                sizeType: [
                   {
                       id: 0,
                       size: 30
                   },
                   {
                       id: 1,
                       size: 40
                    }
                ],
                price: '220',
                weight: '810',      
            },
            {
                id: 6,
                image: pizza1,
                name: 'З куркою',
                sizeType: [
                   {
                       id: 0,
                       size: 30
                   },
                   {
                       id: 1,
                       size: 40
                    }
                ],
                price: '120',
                weight: '400',      
            },
            {
                id: 7,
                image: pizza2,
                name: 'Кебаб',
                sizeType: [
                   {
                       id: 0,
                       size: 30
                   },
                   {
                       id: 1,
                       size: 40
                    }
                ],
                price: '140',
                weight: '440',      
            },
            {
                id: 8,
                image: pizza3,
                name: 'Чотири сири',
                sizeType: [
                   {
                       id: 0,
                       size: 30
                   },
                   {
                       id: 1,
                       size: 40
                    }
                ],
                price: '220',
                weight: '810',      
            },
            {
                id: 9,
                image: pizza4,
                name: 'Мисливська',
                sizeType: [
                   {
                       id: 0,
                       size: 30
                   },
                   {
                       id: 1,
                       size: 40
                    }
                ],
                price: '280',
                weight: '810',      
            }
          ]
      }    
