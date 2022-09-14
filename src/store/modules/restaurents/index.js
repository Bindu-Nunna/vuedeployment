import menuGetters from './getters';

const restaurentModule = {
    namespaced:true,
    state() {
      return {
        restaurents:[
            {
                restuarentId: 1,
                menuItems: [
                    {
                    name: 'Paneer chilli',
                    price: 130
                },
                {
                    name: 'Paneer Butter Masala',
                    price: 250
                },
                {
                    name: 'Mushroom masala',
                    price: 260
                },
                {
                    name: 'Mushroom biryani',
                    price: 280
                },
                {
                    name: 'Paneer biryani',
                    price: 270
                }
            ]
            }
        ],
      };
    },
    getters: menuGetters,
}

export default restaurentModule;