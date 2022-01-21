async function email(address) {
    try {
      // Do something asynchronous that may throw...
      await sendEmail({ to: address, from: 'noreply@domain.com`, subject: Hello' })
    } catch(err) {
      if (err instanceof SomeCustomError) {
        elegantlyHandleError(err)
      } else {
        throw err
      } 
    }
  }