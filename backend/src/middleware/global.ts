import { NextFunction, Request, Response } from 'express'

export const asyncHandler = (
  fn: (req: Request, res: Response, next: NextFunction) => Promise<any>
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next)
  }
}

export const validateRequest = (schema: any) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body)
    if (error) {
      res.status(400).json({ error: error.message })
      return
    }
    next()
  }
}

export function globalErrorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  // Default error values
  const statusCode = err?.statusCode || 500
  const message = err?.message || 'Something went wrong'

  // Log errors in development and production
  console.error(`${req?.method} ${req?.path} - ${err?.message}`, {
    stack: err?.stack,
    statusCode,
  })

  // Prepare response based on error type
  const response: any = {
    success: false,
    message,
  }

  // Add validation errors if present
  if (err?.errors) {
    response.errors = err?.errors
  }

  // Add stack trace in development
  if (process.env.NODE_ENV === 'development') {
    response.stack = err?.stack
  }

  res.status(statusCode).json(response)
}
