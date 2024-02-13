export interface Errors {
  [error: string]: {
    status: number
    message: string
    errorCode?: string
  }
}

export const errors: Errors = {
  USER_NOT_FOUND: {
    status: 404,
    message: 'Usuario no encontrado'
  },
  PRODUCT_NOT_FOUND: {
    status: 404,
    message: 'Producto no encontrado'
  },
  INVALID_CREDENTIALS: {
    status: 401,
    message: 'Credenciales inválidas'
  },
  PRODUCT_EXIST: {
    status: 409,
    message: 'El producto ya existe'
  }
}

export const errorsDB: Errors = {
  23505: {
    status: 409,
    message: 'El usuario ya existe'
  }
}
