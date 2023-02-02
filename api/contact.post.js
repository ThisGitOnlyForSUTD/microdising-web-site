export default defineEventHandler(async (event, require) =>{
  try {
    return 'what'
  } 
  catch {
    sendError(event, createError({
      statusCode: 400,
      statusMessage: error
    }))
  }
})