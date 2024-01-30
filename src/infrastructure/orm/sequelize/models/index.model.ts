import { User } from './user.model'
import { Cart } from './cart.model'
import { CartItem } from './cart-item.model'
import { Product } from './product.model'

// Ralción de usuario
// * Un usuario puede tener un carrito de compra
User.hasOne(Cart)

// Relación Carrito
// * Un carrito de compra puede tener un usuario
Cart.belongsTo(User)
// * Un carrito puede tener muchos elementos
Cart.hasMany(CartItem)

// Relación Elemento del Carrito
// * Un elemento solo puede pertenecer a un carrito
CartItem.belongsTo(Cart)
CartItem.belongsToMany(Product, { through: 'CartItem_Product' })

// Relación Producto
Product.belongsToMany(Cart, { through: 'CartItem_Product' })

export const UserModel = User
export const CartModel = Cart
export const CartItemModel = CartItem
export const ProductModel = Product
