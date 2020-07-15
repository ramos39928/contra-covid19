export default {
  getMessage(error) {
    console.info(error);
    console.info(error.message);
    console.info(error.response);
    console.info(error.response.data);
    if (!error.response) {
      if (!error.message || error.message.trim() === '') {
        return 'Não foi possível completar a ação. Tente novamente mais tarde.';
      }
      return error.message;
    }
    const { data } = error.response || {};
    return data.error || error.response;
  },
};
